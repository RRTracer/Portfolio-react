import { Toaster } from "./ui/sonner";
import { CircleX } from "lucide-react";
import { PropTypes } from "prop-types";
const SignBtn = () => {
  const handleClick = ({ msg }) => {
    Toaster("Event has been created", {
      description: msg,
      action: {
        label: <CircleX color="#ff0000" strokeWidth={1.25} />,
        onClick: () => console.log("close notification"),
      },
    });
  };
  return (
    <>
      <button
        className="w-3/6 bg-gradient-to-r  from-neutral-500 to-neutral-700 text-white font-bold py-2 px-4 rounded-md  hover:from-neutral-300 hover:to-neutral-500 transition ease-in-out duration-150"
      >
        Submit
      </button>
    </>
  );
};

SignBtn.PropTypes = {
  msg: PropTypes.string,
};
export default SignBtn;
