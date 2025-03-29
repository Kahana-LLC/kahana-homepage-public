import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const {
      firstName,
      lastName,
      email,
      companyName,
      jobTitle,
      country,
      referralSource,
      recaptchaResponse,
    } = req.body;

    // Validate required fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !companyName ||
      !jobTitle ||
      !country ||
      !referralSource ||
      !recaptchaResponse
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Verify reCAPTCHA
    try {
      const recaptchaVerification = await axios.post(
        "https://www.google.com/recaptcha/api/siteverify",
        null,
        {
          params: {
            secret: "6LdvKwMrAAAAAOorbVrHXXSo_mPXNLOuhqO2pe08",
            response: recaptchaResponse,
          },
        }
      );

      if (!recaptchaVerification.data.success) {
        const errorCodes = recaptchaVerification.data["error-codes"] || [];
        let errorMessage = "reCAPTCHA verification failed";

        if (errorCodes.includes("missing-input-secret")) {
          errorMessage = "The reCAPTCHA secret key is missing";
        } else if (errorCodes.includes("invalid-input-secret")) {
          errorMessage = "The reCAPTCHA secret key is invalid";
        } else if (errorCodes.includes("missing-input-response")) {
          errorMessage = "The reCAPTCHA response is missing";
        } else if (errorCodes.includes("invalid-input-response")) {
          errorMessage = "The reCAPTCHA response is invalid";
        } else if (errorCodes.includes("timeout-or-duplicate")) {
          errorMessage = "The reCAPTCHA response has expired";
        }

        return res.status(400).json({ message: errorMessage });
      }
    } catch (recaptchaError) {
      console.error("reCAPTCHA verification error:", recaptchaError);
      return res.status(500).json({ message: "Error verifying reCAPTCHA" });
    }

    // HubSpot API endpoint
    const hubspotEndpoint = "https://api.hubapi.com/crm/v3/objects/contacts";

    // Create contact in HubSpot
    const response = await axios.post(
      hubspotEndpoint,
      {
        properties: {
          firstname: firstName,
          lastname: lastName,
          email: email,
          company: companyName,
          jobtitle: jobTitle,
          country: country,
          lead_source: referralSource,
          lifecycle_stage: "lead",
          hs_lead_status: "NEW",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
        },
      }
    );

    // Log the response for debugging
    console.log("HubSpot response:", response.data);

    return res.status(200).json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error("Form submission error:", error.response?.data || error);
    return res.status(500).json({
      message: error.response?.data?.message || "Error submitting form",
    });
  }
}
