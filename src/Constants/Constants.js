const LINKEDIN_CALLBACK_URL = encodeURIComponent("https://sampleredeo-production.up.railway.app");
const CONSTANTS = {
  linkedinOAuthURL: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
    import.meta.env.VITE_LINKEDIN_CLIENT_ID
  }&redirect_uri=${
    LINKEDIN_CALLBACK_URL
  }&scope=profile%20email%20openid`,
};

export default CONSTANTS;
