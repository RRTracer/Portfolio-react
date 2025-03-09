import axios from "axios";

const DownloadCV = () => {
  const handleDownload = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/media/cv.pdf", {
        responseType: "blob", // Important pour gérer les fichiers binaires
      });

      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", "My_CV.pdf");
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error("Error downloading the CV:", error);
    }
  };

  return (
    <button onClick={handleDownload} className="px-4 py-2 bg-green-600 text-white rounded-lg">
      📄 Download CV
    </button>
  );
};

export default DownloadCV;
