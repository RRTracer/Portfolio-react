import { downloadCV } from "../API/FilesApiCaller.jsx"; // Importe la fonction de téléchargement

const DlButton = () => {
  return (
    <button
      onClick={downloadCV} // Appel de la fonction de téléchargement au clic
      className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
    >
      Download CV
    </button>
  );
};

export default DlButton;
