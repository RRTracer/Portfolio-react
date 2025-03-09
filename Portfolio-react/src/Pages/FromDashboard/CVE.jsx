import Navbar from "./../../Components/Navbar";
import AllCve from "./../../Components/Dashboard_component/AllCve";
import Top5CveToday from "./../../Components/Dashboard_component/Top5CveToday";
const CVE = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-50 ">
        <Navbar />
      </div>
      <div className="pt-25 grid grid-cols-3 grid-rows-1 gap-4">
        <div>
          <Top5CveToday preview={true} />
        </div>
        <div className="col-span-2">
          <AllCve preview={false} />
        </div>
      </div>
    </div>
  );
};

export default CVE;
