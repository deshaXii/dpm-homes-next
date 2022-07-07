import React, { useState } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

const LoginContent = ({ from }) => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const user = {
    email,
    password,
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return
    }
    if (!password) {
      toast.error("Please enter your password", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return
    }
    dispatch(login(user)).then((res) => {
      if (res.payload.success) {
        router.push("/");
        toast.success(res.payload.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      } else {
        toast.error(res.payload.response.data.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    });
  };

  return (
    <div
      className={`login-area ${
        from === "page" ? "login-page-content" : "login-popup-content"
      }`}
    >
      <form onSubmit={(e) => handleLoginSubmit(e)}>
        <div className="form-group">
          <div className="input-icon">
            <MdEmail />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
          />
        </div>
        <div className="form-group with-show-password-icon">
          <div className="input-icon">
            <MdLock />
          </div>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
          <div className="show-password-icon">
            {showPassword ? (
              <AiFillEyeInvisible onClick={() => setShowPassword(false)} />
            ) : (
              <AiFillEye onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>
        <div className="form-submit-button">
          <button type="submit" className="btn">
            Sign In
          </button>
        </div>
        <div className="login-form-options">
          <div className="form-option">
            <Link href="/forget-password">Forget Password</Link>
          </div>
          <div className="form-option">
            <Link href="/register">Create Account</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginContent;
