import axios from "axios";
import type { NextPage } from "next";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import jsCookie from "js-cookie";
import EnteringBox from "../components/entering/EnteringBox";
import { IUser, IUserInfoRootState } from "../lib/types/user";
import { userInfoActions } from "../store/user-slice";
import { getError } from "../utilities/error";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Login: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerificationStep, setIsVerificationStep] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const userInfo = useSelector((state: IUserInfoRootState) => {
    return state.userInfo.userInformation;
  });

  useEffect(() => {
    if (userInfo) {
      router.push("/");
    }
  }, [userInfo, router]);

  async function sendVerificationCode(phone: string) {
    try {
      // Send request to backend to send SMS
      const { data } = await axios.post("/api/users/send-verification", { phoneNumber: phone });
      console.log(data.message);
      
      // Move to verification step
      setPhoneNumber(phone);
      setIsVerificationStep(true);
    } catch (err: any) {
      setErrorMessage(getError(err));
      console.log(getError(err));
    }
  }

  async function verifyCodeHandler(code: string) {
    try {
      // Verify the code with the backend
      const { data } = await axios.post("/api/users/verify-code", {
        phoneNumber,
        verificationCode: code
      });
      
      // If successful, log in the user
      dispatch(userInfoActions.userLogin(data));
      jsCookie.set("userInfo", JSON.stringify(data));
      router.push("/");
    } catch (err: any) {
      setErrorMessage(getError(err));
      console.log(getError(err));
    }
  }

  async function LoginHandler(user: IUser) {
    if (!isVerificationStep) {
      // First step: send verification code
      if (user.phoneNumber) {
        await sendVerificationCode(user.phoneNumber);
      }
    } else {
      // Second step: verify code
      if (user.verificationCode) {
        await verifyCodeHandler(user.verificationCode);
      }
    }
  }

  return (
    <EnteringBox
      title="login"
      submitHandler={LoginHandler}
      errorMessage={errorMessage}
      isVerificationStep={isVerificationStep}
      phoneNumber={phoneNumber}
    />
  );
};

export default Login;