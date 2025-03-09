import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CveTop5 } from "../../API/CveCaller";
import PropTypes from "prop-types";

const Top5CveToday = ({ preview }) => {
  const [top5, setTop5] = useState([]);
  const isPreview = preview;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchTop5CveToday = async () => {
      const response = await CveTop5();
      setTop5(response);
    };
    fetchTop5CveToday();
  }, []);
  return (
    <div className="p-4 m-auto shadow-lg rounded-lg max-w-3xl mx-auto">
      <div className="flex justify-center items-centers">
        <h1
          onClick={() => navigate("/cve-pages")}
          className="hover:text-blue-500 hover:underline text-xl font-bold text-black dark:text-white mb-4"
        >
          5 Most Recent CVE
        </h1>
      </div>
      {!isPreview ? (
        <div className="space-y-2">
          {top5.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">
              No data available.
            </p>
          ) : (
            top5.map((cve, index) => (
              <div key={index} className="border-b pb-3 last:border-none">
                <a
                  href={cve.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {cve.name}
                </a>
                <p className="text-gray-600 dark:text-gray-200">
                  {cve.description}
                </p>
              </div>
            ))
          )}
        </div>
      ) : (
        <div className="space-y-2">
          {top5.length === 0 ? (
            <p className="text-gray-600 dark:text-gray-300">
              No data available.
            </p>
          ) : (
            top5.map((cve, index) => (
              <div key={index} className="border-b pb-3 last:border-none">
                <a
                  href={cve.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-semibold hover:underline"
                >
                  {cve.name}
                </a>
                <p className="text-gray-600 dark:text-gray-200">
                  {cve.topics} | severity: {cve.severity}
                </p>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

Top5CveToday.propTypes = {
  preview: PropTypes.bool,
};
export default Top5CveToday;
