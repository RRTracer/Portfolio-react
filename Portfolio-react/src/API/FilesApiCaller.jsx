import axios from "axios";

export const downloadCV = async () => {
  try {
    const response = await axios.get(
      "http://127.0.0.1:8000/api/file/download-cv/",
      {
        responseType: "blob",
      }
    );

    if (response.status === 200) {
      const link = document.createElement("a");
      link.href = URL.createObjectURL(response.data);
      link.download = "cv.pdf";
      link.click();
    } else {
      console.error("Failed to fetch the file.");
    }
  } catch (error) {
    console.error("Error downloading the CV:", error);
  }
};
