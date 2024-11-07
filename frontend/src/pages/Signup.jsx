import Bottomwarning from "../components/Bottomwarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import Inputbox from "../components/Inputbox";
import Subheading from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [email, setemail] = useState("");

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-90 text-center p-2 h-max px-4">
          <Heading label="Sign up" />
          <Subheading label={"Enter your infromation to create an account"} />
          <Inputbox
            onChange={(e) => {
              setusername(e.target.value);
              console.log(username);
            }}
            placeholder="Enter your username"
            label={"Username"}
          />
          <Inputbox
            onChange={(e) => {
              setpassword(e.target.value);
              console.log(password);
            }}
            placeholder="Enter your password"
            label={"Password"}
          />
          <Inputbox
            onChange={(e) => {
              setemail(e.target.value);
              console.log(email);
            }}
            placeholder="Enter your email"
            label={"Email"}
          />
          <div className="pt-6">
            <Button
              onClick={async () => {
                const response = await axios.post(
                  "http://localhost:3000/api/v1/user/signup",
                  {
                    username,
                    password,
                    email,
                  }
                );
                localStorage.setItem("token", response.data.token);
                navigate("/dashboard");
              }}
              label={"Sign up"}
            />
          </div>
          <Bottomwarning
            label={"Already have an account?"}
            buttonText={"Sign in"}
            to={"/signin"}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
