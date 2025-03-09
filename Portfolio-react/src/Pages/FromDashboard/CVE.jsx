import Top5CveToday from "../../Components/Dashboard_component/Top5CveToday";
import Navbar from "./../../Components/Navbar";
const CVE = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Top5CveToday preview={false} />
      </div>
    </div>
  );
};

export default CVE;
