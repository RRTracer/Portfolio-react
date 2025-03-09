import { useEffect, useState } from "react";
import { GetPrintableDate } from "../utils/UtilsFunction.jsx";
import Navbar from "../Components/Navbar.jsx";
import Top5CveToday from "../Components/Dashboard_component/Top5CveToday.jsx";
// import DateAnalitycs from "../Components/Dashboard_component/DateAnalitycs.jsx";
const Dashboard = () => {
  const [date, setDate] = useState("01/01/1970");

  useEffect(() => {
    const recive_date = GetPrintableDate();
    setDate(recive_date);
  }, []);
  return (
    <div>
      <Navbar date={date} />
      <div className="mt-15 grid grid-cols-4 grid-rows-3 gap-4">
        <div className="mt-auto">
          <div className="w-4/6 shadow-xl">
            <Top5CveToday preview={true} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
