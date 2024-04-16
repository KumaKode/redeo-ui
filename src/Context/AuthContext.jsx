import { useState, createContext } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(Cookies.get("jwtToken"));
  const [loggeInUser, setLoggedInUser] = useState({});
  const [isOTPVerified, setIsOTPVerified] = useState(false);
  const navigate = useNavigate();

  const getLoggedInUser = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}/users/profile`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwtToken")}`,
          },
        }
      );
      if (response.data.success) {
        setLoggedInUser(response.data.data);
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginWithEmailAndPassword = async (email, password) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/signin`,
        {
          email,
          password,
        }
      );
      if (response.data.success) {
        Cookies.set("jwtToken", response.data.data, { path: "/" });
        setToken(response.data.data);
        await getLoggedInUser();
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const signupWithEmailAndPassword = async (email, password, fullname) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/signup`,
        {
          email,
          password,
          name: fullname,
        }
      );
      if (response.data.success) {
        if (response.data.data.emailVerified) {
          setToken(response.data.data);
          Cookies.set("jwtToken", response.data.data, { path: "/" });
          await getLoggedInUser();
          navigate("/");
        } else {
          console.log(loggeInUser);
          setToken(response.data.data);
          Cookies.set("jwtToken", response.data.data, { path: "/" });
          await getLoggedInUser();
          navigate("/verify-email");
        }
      } else {
        console.log(response.data.message);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const loginWithGoogle = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      const token = tokenResponse.access_token;
      if (token) {
        await fetchGoogleProfile(token);
      }
    },
    // hosted_domain:"https://sampleredeo-production.up.railway.app",
    // redirect_uri:"https://sampleredeo-production.up.railway.app"
  });

  const loginWithLinkedin = async (code) => {
    if (localStorage.getItem("code") == null) {
      try {
        localStorage.setItem("code", code);
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/users/signin/linkedin`,
          {
            code,
          }
        );
        if (response.data.success) {
          setToken(response.data.data);
          Cookies.set("jwtToken", response.data.data, { path: "/" });
          localStorage.removeItem("code");
          await getLoggedInUser();
          navigate("/");
        } else {
          console.log(response.data.message);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const fetchGoogleProfile = async (token) => {
    try {
      const google_response = await axios.get(
        "https://www.googleapis.com/oauth2/v3/userinfo",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (google_response.status === 200) {
        const response = await axios.post(
          `${import.meta.env.VITE_API_URL}/users/signin/google`,
          {
            ...google_response.data,
            socialLogin: "Google",
          }
        );
        if (response.data.success) {
          setToken(response.data.data);
          Cookies.set("jwtToken", response.data.data, { path: "/" });
          await getLoggedInUser();
          navigate("/");
        } else {
          console.log(response.data.message);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const verifyOTP = async (otp) => {
    console.log(loggeInUser);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/users/verify/mail`,
        {
          id: loggeInUser.id,
          otp: otp,
        },
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("jwtToken")}`,
          },
        }
      );
      if (response.data.success) {
        setIsOTPVerified(true);
        await getLoggedInUser();
        navigate("/");
      } else {
        console.log("Invalid Token");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      Cookies.remove("jwtToken");
      localStorage.removeItem("code");
      setToken("");
      setLoggedInUser({});
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const value = {
    loginWithEmailAndPassword,
    signupWithEmailAndPassword,
    loginWithGoogle,
    loginWithLinkedin,
    loggeInUser,
    token,
    verifyOTP,
    isOTPVerified,
    logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
