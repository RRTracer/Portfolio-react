import emailjs from '@emailjs/browser';

const SendMail = (fullName, email, phoneNumber, companyName, jobTitle, dateOfBirth, message) => {
  emailjs.init("45KsSy1hrLSPzET9e");

  let param = {
    fullName: fullName,
    email: email,
    phoneNumber: phoneNumber,
    companyName: companyName,
    jobTitle: jobTitle,
    dateOfBirth: dateOfBirth,
    message: message,
  };
  const servicesId = "service_1x5hyeh";
  const templatesId = "template_hg5v4xc";

  emailjs
    .send(servicesId, templatesId, param)
    .then((res) => {
      alert(
        "Thanks for your message, I'm trying to answer as fast as possible!"
      );
    })
    .catch((err) => {
      console.error("Error sending email:", err);
      alert("There was an error sending your message. Please try again later.");
    });
};

export default SendMail;