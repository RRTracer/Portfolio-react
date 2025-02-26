import {Laugh} from "lucide-react";

const FooterComp = () => {
  return (
    <div className="dark:text-white flex flex-row items-center justify-between p-10  shadow-2xl w-full h-2 absolute ">
      <a href="#"><img className="w-[5rem] h-auto" src="Img/logo.png" alt=""/></a>
      <a href="#"><h1 className="text-xl font-bold"> Thanks to have read my React&apos;s portfolio !</h1></a>
      <ul className="flex flex-col italic dark:list-image-[url(Img/map-pin2.svg)] list-image-[url(Img/map-pin-lightmode2.svg)] p-2 gap-2">
        <li><a href="https://github.com/RRTracer">My Github</a></li>
        <li><a className="flex flex-row" href="https://framagit.org/rrtracer">My Framagit ( empty&nbsp;&nbsp;<div className="dark:text-yellow-300"><Laugh /></div>&nbsp;&nbsp;)</a></li>
      </ul>
    </div>
  )
}
export default FooterComp;