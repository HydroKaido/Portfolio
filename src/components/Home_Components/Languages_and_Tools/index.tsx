import Javascript from '../../../assets/Stack/javascript.png';
import Html from '../../../assets/Stack/html.png';
import Css from '../../../assets/Stack/css.png';
import Php from '../../../assets/Stack/php.png';
import Tailwind from '../../../assets/Stack/tailwind.png';
import Bootstrap from '../../../assets/Stack/bootstrap.png';
import React from '../../../assets/Stack/react.png';
import Laravel from '../../../assets/Stack/laravel.png';
import Mysql from '../../../assets/Stack/mysql.png';
import Composer from '../../../assets/Stack/composer.png';
import Photoshop from '../../../assets/Stack/photoshop.png';
import Figma from '../../../assets/Stack/figma.png';
import Github from '../../../assets/Stack/github.png';
import Ionic from '../../../assets/Stack/ionic.png';
import Unity from '../../../assets/Stack/unity.png';
import Vscode from '../../../assets/Stack/vscode.png';
import Node from '../../../assets/Stack/node.png';
import Express from '../../../assets/Stack/express.png';
import MongoDB from '../../../assets/Stack/mongodb.png';
import ScrollReveal from 'scrollreveal';
import { useEffect } from "react";

function LanguagesTools() {
  useEffect(() => {
    ScrollReveal().reveal('.headline', 
    { 
      delay: 200,
      interval: 200,
      duration: 1000,
     })
    }, []);
  return (
    <div className="flex  justify-center items-center mb-10 mt-10 headline">
    <div className="w-[750px] xl:w-[800px] mx-5">
    <div className="mb-3 font-bold text-white/90 font-mono text-xl tracking-wide ms-2">
          LANGUAGES AND TOOLS
        </div>
      <div className='card rounded-2xl bg-white/5 p-7 transition duration-300 hover:bg-white/10 focus-visible:ring-rose-500/70 mb-5'>

        <div className="gap-10 md:grid-cols-8 grid max-md:grid-cols-6  max-sm:gap-10 max-sm:gap-y-4 max-sm:grid-cols-4">
          <div><img src={Html} alt="" /></div>
          <div><img src={Css} alt="" className=""/></div>
          <div><img src={Javascript} alt="" className=""/></div>
          <div><img src={React} alt="" className=""/></div>
          <div><img src={Bootstrap} alt="" className=""/></div>
          <div><img src={Tailwind} alt="" className=""/></div>
          <div><img src={Php} alt="" className=""/></div>
          <div><img src={Mysql} alt="" className=""/></div>
          <div><img src={Laravel} alt="" className=""/></div>
          <div><img src={Composer} alt="" className=""/></div>
          <div><img src={Unity} alt="" className=""/></div>
          <div><img src={Vscode} alt="" className=""/></div>
          <div><img src={Github} alt="" className=""/></div>
          <div><img src={Ionic} alt="" className=""/></div>
          <div><img src={Photoshop} alt="" className=""/></div>
          <div><img src={Figma} alt="" className=""/></div>
          <div><img src={Node} alt="" className=""/></div>
          <div><img src={Express} alt="" className=""/></div>
          <div><img src={MongoDB} alt="" className=""/></div>
        </div>
      </div>
      
    </div>
  </div>
  )
}

export default LanguagesTools