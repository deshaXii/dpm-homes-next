import React, { useState, useEffect } from "react";
import { MdEmail, MdLock } from "react-icons/md";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { register } from "../store/slices/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Select from "react-select";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const account_status_options = [
  { value: "owner", label: "Owner" },
  { value: "marketer", label: "Marketer" },
  { value: "developer", label: "Developer" },
  { value: "marketing_companies", label: "Marketing Companies" },
];

const selectStyle = {
  control: (base, { isFocused }) => ({
    ...base,
    border: "1px solid var(--mainColor)",
    boxShadow: "none",
    color: "red",
    "&:hover": {
      border: "1px solid var(--mainColor)",
    },
  }),
  option: (styles, { isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "var(--mainColor)" : null,
      color: "#000",
    };
  },
};

const RegisterContent = ({ from }) => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [account_type, setAccountType] = useState("personal");
  const [account_status, setAccount_status] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const user = {
    name,
    email,
    phone,
    account_status,
    type: account_type,
    password,
  };
  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ user, lang: "ar" })).then((res) => {
      if (res.payload.success) {
        toast.success(res.payload.message, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
        router.push("/");
      } else {
        for (let error in res.payload.messages) {
          if (typeof res.payload.messages[error] === "object") {
            toast.error(res.payload.messages[error].toString(), {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
            });
          }
        }
      }
    });
  };

  return (
    <div
      className={`login-area register ${
        from === "page" ? "login-page-content" : "login-popup-content"
      }`}
    >
      <form onSubmit={(e) => handleRegisterSubmit(e)}>
        <div className="form-group">
          <div className="input-icon">
            <FaUser />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            autoComplete="false"
          />
        </div>
        <div className="form-group">
          <div className="input-icon">
            <MdEmail />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            autoComplete="false"
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
            autoComplete="false"
          />
          <div className="show-password-icon">
            {showPassword ? (
              <AiFillEyeInvisible onClick={() => setShowPassword(false)} />
            ) : (
              <AiFillEye onClick={() => setShowPassword(true)} />
            )}
          </div>
        </div>
        <div className="form-group">
          <div className="input-icon">
            <FaPhoneAlt />
          </div>
          <PhoneInput
            country={"eg"}
            placeholder="Enter Phone Number"
            onlyCountries={["eg", "ae", "sa", "kw", "bh", "om", "qa", "jo"]}
            value={phone}
            onChange={(value) => setPhone(value)}
          />
        </div>
        <div className="form-group">
          <Select
            styles={selectStyle}
            name="area_size"
            id="account_status"
            onChange={(value) => setAccount_status(value.value)}
            placeholder="Select your account type"
            options={account_status_options}
            instanceId="account_status"
          />
        </div>
        <div className="form-group custom-radios">
          <div className="custom-radio-box">
            <input
              type="radio"
              name="account_type"
              onChange={(e) =>
                setAccountType(e.target.checked ? "personal" : "company")
              }
              checked={account_type === "personal"}
            />
            <div className="crb-item">
              <div className="crb-img-box">
                <img src="/img/personal.png" alt="personal" />
              </div>
              <span>Personal</span>
            </div>
          </div>
          <div className="custom-radio-box">
            <input
              type="radio"
              name="account_type"
              onChange={(e) =>
                setAccountType(e.target.checked ? "company" : "personal")
              }
              checked={account_type === "company"}
            />
            <div className="crb-item">
              <div className="crb-img-box">
                <img src="/img/company.png" alt="company" />
              </div>
              <span>Company</span>
            </div>
          </div>
        </div>
        <div className="form-submit-button">
          <button type="submit" className="btn">
            Create Account
          </button>
        </div>
        <div className="login-form-options">
          <div className="form-option">
            <span>Already have a account ?</span>
          </div>
          <div className="form-option">
            <Link href="/login">Login</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterContent;
