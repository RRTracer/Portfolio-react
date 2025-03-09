import { useEffect, useState } from "react";
import { GetAllCve } from "../../API/CveCaller";

const AllCve = () => {
  const [cve, setCve] = useState([]);
  useEffect(() => {
    const fetchCve = async () => {
      const response = await GetAllCve();
      setCve(response);
    };
    fetchCve();
  }, []);
  return (
    <div className="p-4 m-auto shadow-lg rounded-lg max-w-3xl mx-auto">
      <div className="flex justify-center items-centers">
        <h1 className=" text-xl font-bold text-black dark:text-white mb-4">
          All new CVE
        </h1>
      </div>

      <div className="space-y-2">
        {cve.length === 0 ? (
          <p className="text-gray-600 dark:text-gray-300">No data available.</p>
        ) : (
          cve.map((cve, index) => (
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
              <p className="text-gray-600 dark:text-gray-200">{cve.severity}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllCve;
