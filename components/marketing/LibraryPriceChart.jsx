import { formatCount } from '../../data/libraryInNumbers';

const WIDTH = 640;
const HEIGHT = 240;
const PAD = { top: 16, right: 18, bottom: 36, left: 40 };
const MAX_PRICE = 500;

function compactPrice(value) {
  const digits = Math.abs(value - Math.round(value)) < 0.001 ? 0 : 2;
  return `$${Number(value).toLocaleString('en-US', {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  })}`;
}

function estimateCurve(points) {
  const span = MAX_PRICE;
  const bandwidth = Math.max(span / 7, 8);
  const steps = 48;
  return Array.from({ length: steps }, (_, index) => {
    const price = (span * index) / (steps - 1);
    let weight = 0;
    let sum = 0;
    points.forEach((point) => {
      const distance = (point.price - price) / bandwidth;
      const sample = Math.exp(-0.5 * distance * distance);
      weight += sample;
      sum += sample * point.purchases;
    });
    return { price, purchases: weight ? sum / weight : 0 };
  });
}

function linePath(items, xFor, yFor) {
  return items
    .map((item, index) => {
      const command = index === 0 ? 'M' : 'L';
      return `${command}${xFor(item.price).toFixed(1)} ${yFor(item.purchases).toFixed(1)}`;
    })
    .join(' ');
}

export default function LibraryPriceChart({ points }) {
  const innerW = WIDTH - PAD.left - PAD.right;
  const innerH = HEIGHT - PAD.top - PAD.bottom;
  const maxPurchases = Math.max(...points.map((point) => point.purchases), 1);
  const yMax = Math.ceil(maxPurchases / 10) * 10;
  const xFor = (price) => PAD.left + (price / MAX_PRICE) * innerW;
  const yFor = (value) => PAD.top + innerH - (value / yMax) * innerH;
  const curve = estimateCurve(points);
  const curveLine = linePath(curve, xFor, yFor);
  const purchaseLine = linePath(points, xFor, yFor);
  const baseline = yFor(0);
  const area = `${curveLine} L${xFor(curve[curve.length - 1].price).toFixed(1)} ${baseline.toFixed(1)} L${xFor(curve[0].price).toFixed(1)} ${baseline.toFixed(1)} Z`;
  const yTicks = [0, yMax / 2, yMax];
  const xTicks = [0, 100, 200, 300, 400, 500];

  return (
    <div className="overflow-x-auto">
      <svg
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        className="h-60 w-full min-w-[520px]"
        role="img"
        aria-label="Purchases at each price from $0 to $500, with a smoothed estimate behind the line"
      >
        <text
          x="14"
          y={PAD.top + innerH / 2}
          fill="#8A6622"
          fontSize="11"
          textAnchor="middle"
          transform={`rotate(-90 14 ${PAD.top + innerH / 2})`}
        >
          Purchases
        </text>
        {yTicks.map((tick) => (
          <g key={tick}>
            <line
              x1={PAD.left}
              x2={WIDTH - PAD.right}
              y1={yFor(tick)}
              y2={yFor(tick)}
              stroke="#E4D9C4"
            />
            <text
              x={PAD.left - 8}
              y={yFor(tick) + 4}
              textAnchor="end"
              fill="#8A6622"
              fontSize="11"
            >
              {formatCount(tick)}
            </text>
          </g>
        ))}
        <path d={area} fill="#8A6622" fillOpacity="0.14" />
        <path d={curveLine} fill="none" stroke="#8A6622" strokeOpacity="0.45" strokeWidth="2.5" />
        <path d={purchaseLine} fill="none" stroke="#8A6622" strokeWidth="2" />
        {points.map((point) => (
          <circle key={point.price} cx={xFor(point.price)} cy={yFor(point.purchases)} r="3.5" fill="#3B2F1A">
            <title>{`${compactPrice(point.price)}: ${formatCount(point.purchases)} purchases`}</title>
          </circle>
        ))}
        {xTicks.map((tick) => (
          <text
            key={tick}
            x={xFor(tick)}
            y={HEIGHT - 12}
            textAnchor={tick === MAX_PRICE ? 'end' : tick === 0 ? 'start' : 'middle'}
            fill="#5C4520"
            fontSize="11"
          >
            {compactPrice(tick)}
          </text>
        ))}
      </svg>
    </div>
  );
}
