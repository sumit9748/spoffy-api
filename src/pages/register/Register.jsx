import "./register.css";
import { useState, React } from "react";
import { Link, useHistory } from "react-router-dom";
import { publicRequest } from "../../requestMethod";
import FormInput from "./FormInput";

export const Register = () => {
  const history = useHistory();

  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeholder: "Birthday",
      label: "Birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      await publicRequest.post("/auth/register", values);
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  return (
    <div className="container">
      <div className="wrapper">
        <span className="title">Create a acoount</span>
        <form className="form" onSubmit={handleClick}>
          <div className="inputs">
            {inputs.map((input) => (
              <FormInput
                key={input.id}
                {...input}
                value={values[input.name]}
                onChange={onChange}
              />
            ))}
          </div>

          <span className="agreement">
            By creating a account,I consent to the processing of my Personal
            data in accordance with the<b>PRIVACY POLICY</b>
          </span>
          <button type="submit" className="button">
            {" "}
            Create
          </button>
          <Link to="/login">
            <span>Sign In</span>
          </Link>
        </form>
      </div>
    </div>
  );
};
