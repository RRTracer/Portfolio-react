import DlButton from "../DlButton";
import Card from "./Card";

const CVdl = () => {
  const content = (
    <div className="flex flex-row gap-4">
      <p>
        Hello, this is my personnal CVs. I have made this one to give you my
        personnal tech skills without personnal data. If you want more You can
        contact me on the home page contact form.
      </p>
      <DlButton />
    </div>
  );
  return (
    <div>
      <Card nameImg="cv.png" title="My technical CV" content={content} />
    </div>
  );
};

export default CVdl;
