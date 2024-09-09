import Image from "next/image";

const HitItem = ({ hit }) => {
  // Define default URLs
  const defaultImageUrl =
    "https://firebasestorage.googleapis.com/v0/b/kahana-dev-workspace/o/Tyw7pzhkRgXnWduNWjqn%2FAGeyYjbR9fXsqrXYx4tsjfv4tvW2%2FbackgroundUrl?alt=media&token=9d6d3811-7157-48de-890b-03eb6982a77e";

  const defaultProfilePic =
    "https://firebasestorage.googleapis.com/v0/b/kahana-dev-user/o/qQY3PuV7wOdXn8X86XqgeGbL0nx1%2FprofilePic?alt=media&token=53a64b5a-e1f1-4346-899a-7d32a1f5b07c";

  // Image URL
  const imageUrl = hit.url || defaultImageUrl;

  // Construct the URL for the hit
  const hitUrl = `https://app.kahana.co/hub/${hit.objectID}`;

  return (
    <a
      href={hitUrl}
      target="_self"
      rel="noopener noreferrer"
      className="hit-item-link"
    >
      <div className="items">
        <div className="image-container">
          <Image
            src={imageUrl}
            alt={hit.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="items-info">
          <div className="items-info-content">
            <div className="profile-container">
              <Image
                className="profile-pic"
                src={hit.metadata.profilePicLink || defaultProfilePic}
                alt="Profile Picture"
                width={40}
                height={40}
                objectFit="cover"
              />
            </div>
            <div className="text-container">
              <div className="items-info--title">
                <h2 className="hit-title">{hit.name}</h2>
              </div>
              <div className="items-info--description">
                <p title={hit.description}>{hit.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default HitItem;
