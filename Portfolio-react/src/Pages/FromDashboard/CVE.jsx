import Navbar from "./../../Components/Navbar";
import AllCve from "./../../Components/Dashboard_component/AllCve";
const CVE = () => {
  return (
    <div>
      <div className="fixed top-0 w-full z-50 ">
        <Navbar />
      </div>
      <div className="pt-25">
        <AllCve preview={false} />
      </div>
    </div>
  );
};

export default CVE;
