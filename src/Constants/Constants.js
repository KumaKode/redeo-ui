const LINKEDIN_CALLBACK_URL = encodeURIComponent(import.meta.env.VITE_LINKEDIN_CALLBACK_URL);
const CONSTANTS = {
  linkedinOAuthURL: `https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=${
    import.meta.env.VITE_LINKEDIN_CLIENT_ID
  }&redirect_uri=${
    LINKEDIN_CALLBACK_URL
  }&scope=profile%20email%20openid`,
  clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID,
  SETTING_TABS:["General Information", "Education and Training", "Work Experience", "Social Links", "Professional Skills"],
  SETTING_TABS_ICOS:["fa-duotone fa-user", "fa-duotone fa-graduation-cap","fa-solid fa-briefcase", "fa-duotone fa-share-nodes", "fa-duotone fa-lightbulb-on"],

};

export default CONSTANTS;
