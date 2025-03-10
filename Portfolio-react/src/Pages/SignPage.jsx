import { useState } from "react";
import Navbar from "../Components/Navbar.jsx";
import { SignUpCall, SignInCall } from "../API/AuthCaller.jsx";
import { useNavigate } from "react-router-dom";
import SignBtn from "../Components/SignBtn.jsx";

const SignPage = () => {
  const [isRegistered, setIsRegistered] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [enterprise, setEnterprise] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isRegistered) {
      if (password !== passwordConfirm) {
        throw new Error("Passwords don't match");
      } else {
        try {
          const response = await SignUpCall(
            email,
            password,
            username,
            enterprise
          );
          if (response.status === 200) {
            console.log("Successfully registered in");
            localStorage.setItem("authToken", response.authToken);
            navigate("/");
          }
        } catch (error) {
          console.log(error);
        }
      }
    } else if (isRegistered) {
      try {
        const response = await SignInCall(username, password);
        if (response.status === 200) {
          console.log("Successfully logged in");
          localStorage.setItem("authToken", response.authToken);
          navigate("/");
        }
      } catch (error) {
        console.error(error);
      }
    }
  };
  const handleSwapIsRegister = (e) => {
    e.preventDefault();
    setIsRegistered(!isRegistered);
  };
  return (
    <div className="flex flex-col items-center">
      <Navbar title={"RRTracer Portofolio"} isLogin={true} />
      <div className=" w-fit items-center mt-10 p-4 rounded-lg bg-gradient-to-tr from-blue-300 via-blue-200 to-blue-600 space-y-3 dark:text-white dark:bg-gradient-to-tr dark:from-slate-500 dark:via-slate-800 dark:to-neutral-900">
        <div className="text-3xl font-bold flex justify-center">
          {isRegistered ? <h1>Sign In Form</h1> : <h1>Sign Up Form</h1>}
        </div>
        <div>
          {isRegistered ? (
            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="flex flex-col">
                <label htmlFor="username"> User name</label>
                <input
                  className="border border-white/60 rounded-lg p-1 hover:border-none hover:ring-1 hover:outline-none hover:ring-offset-transparent hover:ring-sky-300 hover:ring-offset-2  focus:border-none focus:ring-1 focus:outline-none focus:ring-offset-transparent focus:ring-sky-300 focus:ring-offset-2"
                  type="text"
                  id="username"
                  placeholder="your username here ..."
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="password">Password</label>
                <input
                  className="border border-white/60 rounded-lg p-1 hover:border-none hover:ring-1 hover:outline-none hover:ring-offset-transparent hover:ring-sky-300 hover:ring-offset-2  focus:border-none focus:ring-1 focus:outline-none focus:ring-offset-transparent focus:ring-sky-300 focus:ring-offset-2"
                  type="password"
                  id="password"
                  placeholder="your password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-center">
                <button className="w-3/6 bg-gradient-to-r  from-neutral-500 to-neutral-700 text-white font-bold py-2 px-4 rounded-md  hover:from-neutral-300 hover:to-neutral-500 transition ease-in-out duration-150">
                  Submit
                </button>
              </div>
            </form>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 mt-4">
              <div className="flex flex-row space-x-2">
                <div className="flex flex-col">
                  <label htmlFor="username"> User name</label>
                  <input
                    className="border border-white/60 rounded-lg p-1 hover:border-none hover:ring-1 hover:outline-none hover:ring-offset-transparent hover:ring-sky-300 hover:ring-offset-2  focus:border-none focus:ring-1 focus:outline-none focus:ring-offset-transparent focus:ring-sky-300 focus:ring-offset-2"
                    type="text"
                    id="username"
                    placeholder="your username here ..."
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input
                    className="border border-white/60 rounded-lg p-1 hover:border-none hover:ring-1 hover:outline-none hover:ring-offset-transparent hover:ring-sky-300 hover:ring-offset-2  focus:border-none focus:ring-1 focus:outline-none focus:ring-offset-transparent focus:ring-sky-300 focus:ring-offset-2"
                    type="email"
                    id="email"
                    placeholder="your email here ..."
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-row space-x-2">
                <div className="flex flex-col">
                  <label htmlFor="password">Password</label>
                  <input
                    className="border border-white/60 rounded-lg p-1 hover:border-none hover:ring-1 hover:outline-none hover:ring-offset-transparent hover:ring-sky-300 hover:ring-offset-2  focus:border-none focus:ring-1 focus:outline-none focus:ring-offset-transparent focus:ring-sky-300 focus:ring-offset-2"
                    type="password"
                    id="password"
                    placeholder="your password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="Confpassword">Confirm Password</label>
                  <input
                    className="border border-white/60 rounded-lg p-1 hover:border-none hover:ring-1 hover:outline-none hover:ring-offset-transparent hover:ring-sky-300 hover:ring-offset-2  focus:border-none focus:ring-1 focus:outline-none focus:ring-offset-transparent focus:ring-sky-300 focus:ring-offset-2"
                    type="password"
                    id="Confpassword"
                    placeholder="your password"
                    onChange={(e) => setPasswordConfirm(e.target.value)}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="enterprise">enterprise</label>
                <input
                  className="border border-white/60 rounded-lg p-1 hover:border-none hover:ring-1 hover:outline-none hover:ring-offset-transparent hover:ring-sky-300 hover:ring-offset-2  focus:border-none focus:ring-1 focus:outline-none focus:ring-offset-transparent focus:ring-sky-300 focus:ring-offset-2"
                  type="text"
                  id="enterprise"
                  placeholder="Your company name"
                  onChange={(e) => setEnterprise(e.target.value)}
                />
              </div>
              <div className="flex justify-center items-center">
                <button className="w-3/6 bg-gradient-to-r  from-neutral-500 to-neutral-700 text-white font-bold py-2 px-4 rounded-md  hover:from-neutral-300 hover:to-neutral-500 transition ease-in-out duration-150">
                  Submit
                </button>
              </div>
            </form>
          )}
          <div className="flex justify-center items-center ">
            <p className="mt-6">
              {isRegistered && "You don't have an account ? "}{" "}
              {!isRegistered && "You already have an account ? "}
              <a
                onClick={handleSwapIsRegister}
                className="text-blue-700  hover:underline"
                href=""
              >
                {isRegistered ? "Sign Up here" : "Sign In here"}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignPage;
