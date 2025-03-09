import PropTypes from "prop-types";
const Card = ({ nameImg, content, title }) => {
  const link = `../../../public/Img/${nameImg}`;
  return (
    <>
      <article className=" bg-slate-300 shadow-xl dark:bg-gray-700 p-4 space-y-2 rounded-md hover:translate-y-2 hover:translate-x-2 duration-300">
        <div className="flex gap-6">
          <img className="w-15 h-15 rounded-lg" src={link} alt="" />
          <div className="flex justify-center items-center">
            <h1 className="text-xl font-bold text-gray-700 dark:text-slate-300">
              {title}
            </h1>
          </div>
        </div>
        <p className="text-sm w-full text-gray-700 dark:text-slate-300">
          {content}
        </p>
      </article>
    </>
  );
};

Card.propTypes = {
  nameImg: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
export default Card;
