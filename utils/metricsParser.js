export const parseIndustryMetrics = (csvData) => {
  try {
    const lines = csvData.split("\n");
    const headers = lines[0].split(",").map((header) => header.trim());
    const metrics = {};

    // Skip header row and process each line
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(",").map((value) => value.trim());
      const metricName = values[0];

      // Create an object for each industry
      for (let j = 1; j < headers.length; j++) {
        const industry = headers[j];
        if (!metrics[industry]) {
          metrics[industry] = {};
        }
        metrics[industry][metricName] = values[j] || "";
      }
    }

    return metrics;
  } catch (error) {
    console.error("Error parsing metrics:", error);
    return {};
  }
};

export const getIndustryData = (metrics, industry) => {
  try {
    if (!metrics || !metrics[industry]) {
      console.error(`No data found for industry: ${industry}`);
      return {
        costPerUnit: "0",
        operatingExpenses: "0",
        revenueGrowth: "0",
        customerSatisfaction: "0",
        employeeProductivity: "0",
        defectRate: "0",
        compliance: "0",
        operatingMargin: "0",
        grossMargin: "0",
        rdSpending: "0",
      };
    }

    return {
      costPerUnit: metrics[industry]["Cost per Unit/Procedure"] || "0",
      operatingExpenses: metrics[industry]["Operating Expenses"] || "0",
      revenueGrowth: metrics[industry]["Revenue Growth Rate"] || "0",
      customerSatisfaction:
        metrics[industry]["Customer/Patient Satisfaction"] || "0",
      employeeProductivity: metrics[industry]["Employee Productivity"] || "0",
      defectRate: metrics[industry]["Defect/Error Rate"] || "0",
      compliance: metrics[industry]["Compliance/Quality"] || "0",
      operatingMargin: metrics[industry]["Operating Margin"] || "0",
      grossMargin: metrics[industry]["Gross Margin"] || "0",
      rdSpending: metrics[industry]["R&D Spending"] || "0",
    };
  } catch (error) {
    console.error("Error getting industry data:", error);
    return {
      costPerUnit: "0",
      operatingExpenses: "0",
      revenueGrowth: "0",
      customerSatisfaction: "0",
      employeeProductivity: "0",
      defectRate: "0",
      compliance: "0",
      operatingMargin: "0",
      grossMargin: "0",
      rdSpending: "0",
    };
  }
};
