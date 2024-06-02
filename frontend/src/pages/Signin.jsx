import BottomWarning from "../components/BottomWarning";
import Button from "../components/Button";
import Heading from "../components/Heading";
import InputBox from "../components/InputBox";
import Subheading from "../components/SubHeading";

function Signin() {
  return (
    <>
      <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
          <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
            <Heading label={"Sign in"} />
            <Subheading
              label={"Enter your information to create new account "}
            />
            <InputBox
              placeholder={"Enter your firstname"}
              label={"First Name"}
            />
            <InputBox placeholder={"Enter your lastname"} label={"Last Name"} />
            <InputBox placeholder={"Enter your email"} label={"Email"} />
            <InputBox placeholder={"Enter your password"} label={"Password"} />
            <div>
              <Button label={"Sign in"} />
            </div>
            <BottomWarning
              label={"Want create a new account? "}
              buttontext={" Signup"}
              to={"/signup"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Signin;
