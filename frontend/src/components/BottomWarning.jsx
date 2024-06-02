import { Link } from "react-router-dom";

function ButtomWarning(props) {
  return (
    <>
      <div className="py-2 text-sm flex justify-center">
        {props.label}
        <Link className="pointer underline pl-1 cursor-pointer" to={props.to}>
          {props.buttontext}
        </Link>
      </div>
    </>
  );
}

export default ButtomWarning;
