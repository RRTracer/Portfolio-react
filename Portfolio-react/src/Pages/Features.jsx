import Navbar from "../Components/Navbar";
import { useState, useEffect } from "react";
import { GetPrintableDate } from "../utils/UtilsFunction.jsx";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Card from "../Components/FeaturesPage-component/Card.jsx";
import ReactHookCard from "../Components/FeaturesPage-component/ReactHookCard.jsx";
import DeploySkills from "../Components/FeaturesPage-component/DeploySkills.jsx";
import CVdl from "../Components/FeaturesPage-component/CVdl.jsx";
const Features = () => {
  const [date, setDate] = useState("01/01/1970");

  // for axios card content
  const codeString = `import axios from "axios";
const fetchData = async () => {
  try {
    const response = await axios.get("https://api.example.com/data");
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};`;
  const ConentAxios = (
    <SyntaxHighlighter language="javascript" style={atomDark}>
      {codeString}
    </SyntaxHighlighter>
  );
  //  end axios card content
  const contentQuote = (
    <div>
      <p className="italic text-lg">
        {"Code is like humor. If you have to explain it, it's bad."}
      </p>
      <p className="text-right italic font-semibold text-xl">— Cory House</p>
    </div>
  );

  useEffect(() => {
    const recive_date = GetPrintableDate();
    setDate(recive_date);
  }, []);
  return (
    <div>
      <div>
        <Navbar date={date} />
      </div>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        <div className="">
          <Card
            nameImg="Axios.png"
            content={ConentAxios}
            title="Axios API Requests"
          />
        </div>
        <div className="col-span-2 ">
          <ReactHookCard />
        </div>
        <div className="col-span-2 row-start-2">
          <DeploySkills />
        </div>
        <div className="col-span-2 col-start-2 row-start-3">12</div>
        <div className="col-start-3 row-start-2 ">
          <Card
            nameImg={"litterature.png"}
            content={contentQuote}
            title={"🧠 Quote of the Day"}
          />
        </div>
        <div className="col-start-1 row-start-3">
          <CVdl />
        </div>
      </div>
    </div>
  );
};

export default Features;
