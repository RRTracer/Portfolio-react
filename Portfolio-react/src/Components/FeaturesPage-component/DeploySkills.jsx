import Card from "./Card";
const DeploySkills = () => {
  const content = (
    <div className="flex flex-row">
      <div className="w-2/3">
        <p>
          🚀 Deployment Methods Explained <br /> 🔹 Standard Web Server
          (Apache/Nginx): Upload your built project (index.html, CSS, JS) to a
          traditional &emsp;&emsp;server. Configure your web server (e.g.,
          Nginx) to serve the static files efficiently. <br />
          🔹 Netlify Deployment: Push your code to GitHub, connect your
          repository to Netlify, and let it handle &emsp;&emsp; builds &
          deployments automatically. Supports custom domains, serverless
          functions, and instant rollbacks. <br /> 🔹 Docker Deployment:
          Containerize your app with a Dockerfile, build an image, and deploy it
          anywhere (cloud, VPS, Kubernetes). Ensures consistent environments and
          easy scaling. 🛠️ Example: docker build -t my-app . && docker run -p
          80:3000 my-app
        </p>
      </div>
      <div className="w-1/3">
        <img
          className="w-full h-30 rounded-lg"
          src="../../../public/Img/dashboard-netlify.png"
          alt=""
        />
      </div>
    </div>
  );
  const title = (
    <div className="flex flex-row gap-3">
      <h1>My stack deployment</h1>
      <img
        className="w-10 h-10 rounded-lg"
        src="../../../public/Img/netlify.png"
        alt=""
      />
      <img
        className="w-10 h-10 rounded-lg"
        src="../../../public/Img/docker.png"
        alt=""
      />
      <img
        className="w-10 h-10 rounded-lg"
        src="../../../public/Img/ovh.jpg"
        alt=""
      />
      <img
        className="w-10 h-10 rounded-lg"
        src="../../../public/Img/apache.png"
        alt=""
      />
    </div>
  );
  return (
    <div>
      <Card nameImg="my-react-portfolio.png" content={content} title={title} />
    </div>
  );
};

export default DeploySkills;
