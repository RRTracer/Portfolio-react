import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const WorkOn = ({
  content,
  title,
  altText,
  linkImage,
  pathToNav,
  className,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={clsx(
        "w-full max-w-sm h-auto flex flex-col dark:bg-neutral-800 dark:text-white justify-center gap-4 bg-neutral-50 rounded-lg p-4 shadow-2xl",
        className
      )}
    >
      <div className="flex gap-4">
        <img
          className="bg-neutral-500 w-32 h-32 shrink-0 rounded-lg"
          alt={altText}
          src={linkImage}
        />
        <div className="flex flex-col justify-center">
          <span className="font-bold dark:text-neutral-400 text-neutral-700 italic">
            {title}
          </span>
          <p className="line-clamp-3 text-sm">{content}</p>
        </div>
      </div>
      {pathToNav && (
        <button
          onClick={() => navigate(pathToNav)}
          className="hover:bg-neutral-400 bg-neutral-700 font-bold text-white rounded p-2 transition-all"
        >
          See more
        </button>
      )}
    </div>
  );
};

WorkOn.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  altText: PropTypes.string,
  linkImage: PropTypes.string,
  pathToNav: PropTypes.string,
  className: PropTypes.string, // Permet d'ajouter des classes personnalisées
};

export default WorkOn;
