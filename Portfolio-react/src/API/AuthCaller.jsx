import PropTypes from "prop-types";
import axios from "axios";

const apiUrl = "http://127.0.0.1:8000/api/auth/"

const GetIsRegister =  async (authToken) => {
  if (!authToken) {
    console.error("no authToken found or gift");
    return {status: 401, message: "no token found"};
  }
  try{
    const response = await axios.get(`${apiUrl}testToken/`, {
      headers: {
        authToken: authToken,
      }
    })
    if (response.status === 200) {
      return {status: 200, message: "the token as been verified successfully"};
    }
  }catch(error){
    if (error.response.status === 400) {
      console.error("bad request")
      console.error(error)
    } else if (error.response.status ===406){
      console.error("this tokken is invalid")
    } else if (error.response.status === 404) {
      console.error("serveur can't be reacht")
      console.error(error)
    }else {
      console.error(error)
    }
  }
}

const SignUpCall = async (email, username, password, enterprise) => {
  try{
    const response = await axios.post(`${apiUrl}signup/`, {
      email: email,
      password: password,
      enterprise: enterprise,
      username: username,
    })
    if (response.status === 200) {
      return { status: 200, message: "Successfully registered", authToken:response.data.authToken };
    }
  }catch (error) {
    if (error.response.status === 400) {
      console.error("invalid request")
      console.error(error);
    }else if (error.response.status === 404){
      console.error("Serveur can't be reacht")
      console.error(error)
    }else if (error.response.status === 409) {
      console.error("user name is already taken")
      console.error(error)
    } else if (error.response.status === 411) {
      console.error("email already taken")
    }else {
      console.error("unknown error")
      console.error(error)
    }
  }
}

const SignInCall = async (username, password) => {
  try{
    const response = await axios.post(`${apiUrl}signin/`, {
      username: username,
      password: password,
    })
    if (response.status === 200) {
      return { status: 200, message: "Successfully registered", authToken:response.data.authToken };
    }
  }catch (error){
    if (error.response.status === 400){
      console.error("invalid request")
      console.error(error);
    } else if (error.response.status === 404){
      console.error("Serveur can't be reacht")
      console.error(error)
    } else {
      console.error(error)
    }
  }
}

GetIsRegister.propTypes = {
  authToken: PropTypes.number.isRequired,
};

SignUpCall.propTypes = {
  email: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  enterprise: PropTypes.bool.isRequired,
}

SignInCall.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export {GetIsRegister, SignUpCall, SignInCall};