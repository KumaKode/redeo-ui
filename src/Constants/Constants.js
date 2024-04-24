const LINKEDIN_CALLBACK_URL = encodeURIComponent(import.meta.env.VITE_LINKEDIN_CALLBACK_URL);
const CONSTANTS = {
  linkedinOAuthURL: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
    import.meta.env.VITE_LINKEDIN_CLIENT_ID
  }&redirect_uri=${
    LINKEDIN_CALLBACK_URL
  }&scope=profile%20email%20openid`,
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID
};

export default CONSTANTS;
