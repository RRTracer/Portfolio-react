import PropTypes from 'prop-types'
import {useNavigate} from "react-router-dom";
const WorkOn = ({content, title, altText, linkImage, pathToNav}) => {
    const navigate = useNavigate();
    return (
        <>
            <div
                className="w-2/8 h-auto flex flex-col dark:bg-neutral-800 dark:text-white justify-center gap-2 bg-neutral-50 rounded-lg  p-2 mt-10 shadow-2xl"
            >
                <div className="flex gap-2">
                    <img className="bg-neutral-500 w-32 h-32 shrink-0 rounded-lg" alt={altText} src={linkImage} />
                    <div className="flex flex-col">
                        <span className="font-bold dark:text-neutral-500 text-neutral-700 italic">{title}</span>
                        <p className="line-clamp-3">
                            {content}
                        </p>
                    </div>
                </div>
                <button
                    onClick={() => navigate(pathToNav)}
                    className="hover:bg-neutral-400 bg-neutral-700 font-bold text-white rounded p-2"
                >
                    See more
                </button>
            </div>

        </>
    );
}
export default WorkOn;
WorkOn.propTypes = {
    content: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    altText: PropTypes.string,
    linkImage: PropTypes.string,
    pathToNav: PropTypes.string
}