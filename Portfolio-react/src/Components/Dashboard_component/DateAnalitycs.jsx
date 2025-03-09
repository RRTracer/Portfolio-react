import PropTypes from "prop-types";
const DateAnalitycs = ({ date }) => {
  return (
    <>
      <div>
        <h1>Test</h1>
        <p>{date}</p>
      </div>
    </>
  );
};

DateAnalitycs.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DateAnalitycs;
