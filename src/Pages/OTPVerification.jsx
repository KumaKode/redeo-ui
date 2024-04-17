import { useState, useContext, useRef } from "react";
import { AuthContext } from "../Context/AuthContext";
const OTPVerification = () => {
  const { verifyOTP, errorMessage, userEmail } = useContext(AuthContext);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const inputRefs = useRef([]);

  const handleChange = async (e, index) => {
    const { value } = e.target;
    if (value.length > 1) return;

    const newOTP = [...otp];
    newOTP[index] = value;
    setOtp(newOTP);

    if (value !== "") {
      const nextIndex = index < 5 ? index + 1 : index;
      inputRefs.current[nextIndex].focus();
      
    }
    const enteredOTP = [...newOTP.slice(0, index), value].join("");
    if (enteredOTP.length === 6) {
      await verifyOTP(enteredOTP);
      setOtp(new Array(6).fill(""));
      inputRefs.current[0].focus();
    }
  };

  const handleBackSpace = (e, index) => {
    if (e.key === "Backspace" && !e.target.value && index > 0) {
      inputRefs.current[index - 1].focus();
      inputRefs.current[index - 1].value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div className="container p-5">
      <div className="row  d-flex justify-content-center align-item-center">
        <div className=" col-sm-12 col-md-12 col-lg-6 mt-5">
          <div className="bg-white p-5 rounded-3 shadow-sm border  w-sm-100 w-md-100 w-lg-100">
            <div className=" w-sm-100 w-md-100 s-lg-50">
              <p className="text-center text-success fs-1">
                <i className="fa-solid fa-envelope-circle-check"></i>
              </p>
              <p className="text-center text-center h5 ">
                Please check your email
              </p>
              <p className="text-muted text-center  mx-sm-2 mx-md-auto mx-lg-auto">
                {`We have sent a verification code to your email addressl ${
                  userEmail &&
                  userEmail.slice(0, 3) + "*****@gmail.com"
                } . Please check your inbox  for an email from us containing the OTP`}
              </p>
              <form onSubmit={handleSubmit}>
                <div className="inputs pt-4 pb-2 d-flex gap-3 flex-row justify-content-center align-items-center">
                  {otp.map((digit, index) => (
                    <input
                      key={index}
                      className="otp-letter-input"
                      type="text"
                      pattern="[0-9]"
                      maxLength={1}
                      minLength={1}
                      value={digit}
                      onChange={(e) => handleChange(e, index)}
                      onKeyUp={(e) => handleBackSpace(e, index)}
                      ref={(ref) => (inputRefs.current[index] = ref)}
                    />
                  ))}
                </div>
                <p className="text-muted text-center">
                  {"Didn't get the code? "}
                  <a href="#" className="text-success">
                    Click to resend.
                  </a>
                </p>

                {
                  errorMessage && (
                    <p className="text-danger text-center">{errorMessage}</p>
                  )
                }
{/* 
                <div className="row pt-5">
                  <div className="col-12">
                    <button className="btn btn-success w-100">Verify</button>
                  </div>
                </div> */}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerification;
