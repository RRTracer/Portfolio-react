import {useState} from "react";
import SendMail from "../utils/SendMail.jsx";
const ContactMe = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    SendMail(fullName, email, phoneNumber, companyName, jobTitle, dateOfBirth, message);
  }
  return (
    <>
      <div className="flex mt-10  flex-col items-center justify-center  ">
        <div className="w-full max-w-5xl bg-neutral-50 dark:bg-neutral-800 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold dark:text-neutral-500 text-neutral-700 mb-4">Contact Form</h2>

          <form onSubmit={handleSubmit} className="flex flex-wrap">
            <input
              type="text"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="email"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
              placeholder="Phone Number"
              onChange={(e) =>  setPhoneNumber(e.target.value)}
            />
            <input
              type="text"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
              placeholder="Company Name"
              onChange={(e) => setCompanyName(e.target.value)}
            />
            <input
              type="text"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] mr-[2%]"
              placeholder="Job Title"
              onChange={(e) => setJobTitle(e.target.value)}
            />
            <input
              type="date"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-4 focus:bg-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150 w-full md:w-[48%] ml-[2%]"
              placeholder="Date of Birth"
              onChange={(e) => setDateOfBirth(e.target.value)}
            />
            <textarea
              name="message"
              className="bg-gray-700 text-gray-200 border-0 rounded-md p-2 mb-auto md:mb-auto md:w-full md:h-auto md:min-h-[100px] md:max-h-[100px] md:flex-grow md:flex-shrink md:flex-auto focus:bg-gray-md:focus:outline-none:focus:ring-blue-md:focus:border-transparent transition ease-in-out duration-fastest"
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>

            <button
              type="submit"
              className="bg-gradient-to-r  from-neutral-500 to-neutral-700 text-white font-bold py-2 px-4 rounded-md mt-4 hover:from-neutral-300 hover:to-neutral-500 transition ease-in-out duration-150"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

    </>
  );
};

export default ContactMe;