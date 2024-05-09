import Zephyderm from "../../../assets/Zephyderm Design.jpg";
import PokeDex from "../../../assets/Pokemon-Pokedex.jpg"
import Kali from "../../../assets/Kali.png"
import NavalConquest from "../../../assets/Naval Conquest.png"
import Etsibog from "../../../assets/Untitled design.jpg"

export const projects = [
    {
      title: "Zephyderm: Appointment System and Client Monitoring",
      songName: (
        <>
        <ul className="text-sm list-disc list-inside">
            <li className="mb-3">
                Zephyderm is a capstone project created by a team of four, with me as the lead programmer. I utilized <span className="font-bold text-white/90">HTML, CSS, Bootstrap 5, PHP, MySQL, and JQuery.</span>
            </li>
            <li className="mb-3">
                Developed an appointment system for clients to <span className="font-bold text-white/90">book easily</span> it has and <span className="font-bold text-white/90">access their records for tracking</span>.
            </li>
            <li>
                This system is having a <span className="font-bold text-white/90">lot of module</span> like dashboard module, appointment module, client record module, reschedule module, website settings module, and more..
            </li>
        </ul>
        </>

        
      ),
      image: Zephyderm,
      link: (
          <div className="flex mt-5">
            <div className="me-3">
              <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1 ">
                Live Demo
              </a>
            </div>
            <div>
              <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                Github
              </a>
            </div>
          </div>
      )
    },
    {
      title: "Naval Conquest",
      songName: (
        <ul className="text-sm list-disc list-inside">
            <li className="mb-3">
            This is a group project for game development created using the 
                      <span className="text-white/90 font-bold"> Unity</span> game engine, with <span className="text-white/90 font-bold"> C#</span> as the scripting language.
            </li>
            <li className="mb-3">
              This project was created by a team of 2, who developed this game within 1 week.
            </li>
            <li>
                
              This game application <span className="text-white/90 font-bold">requires players to log in before playing.</span> It's a multiplayer game, so <span className="text-white/90 font-bold">both parties need separate devices.</span> The winner is the one with the highest score within the time limit or reaching a score of 10 first.
            </li>
        </ul>
      ),
      image: NavalConquest,
      link: (
          <div className="flex mt-5">
            <div className="me-3">
              <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1 ">
                Live Demo
              </a>
            </div>
            <div>
              <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                Github
              </a>
            </div>
          </div>
      )
    },
    {
      title: "Kali: The Darkness Arrive",
      songName: (
        <ul className="text-sm list-disc list-inside">
            <li className="mb-3">
              This is a group project for game development created using the 
              <span className="text-white/90 font-bold"> Unity</span> game engine, with <span className="text-white/90 font-bold"> C#</span> as the scripting language.
            </li>
            <li className="mb-3">
              This game application is similar to Gun Mayhem, but the characters here only use swords, sticks, and other melee weapons.
            </li>
            <li>
              This is a <span className="text-white/90 font-bold">player vs. player</span> so only shared device enable to play this game
            </li>
        </ul>
      ),
      image: Kali,
      link: (
          <div className="flex mt-5">
            <div className="me-3">
              <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1 ">
                Live Demo
              </a>
            </div>
            <div>
              <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                Github
              </a>
            </div>
          </div>
      )
    },
    {
      title: "Pokemon Pokedex",
      songName: (
        <ul className="text-sm list-disc list-inside">
            <li className="mb-3">
              This is a personal project created using <span className="text-white/90 font-bold">React, Tailwind for styling, and the PokéAPI</span>.
            </li>
            <li className="mb-3">
            This was built from scratch as an attempt to learn frameworks. This project helped me learn a lot, such as using <span className="text-white/90 font-bold">Axios, useEffect, useState, and more.</span>
            </li>
            <li>
              This is recommended for those struggling to learn a frontend framework to understand how it works.
            </li>
        </ul>
      ),
      image: PokeDex,
      link: (
          <div className="flex mt-5">
            <div className="me-3">
              <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1 ">
                Live Demo
              </a>
            </div>
            <div>
              <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                Github
              </a>
            </div>
          </div>
      )
    },
    {
      title: "E-Tsibu: A mobile application for sharing recipe and tutorial for cooking",
      songName: (
        <ul className="text-sm list-disc list-inside">
            <li className="mb-3">
              This mobile application created using <span className="text-white/90 font-bold">Angular and Ionic</span>.
            </li>
            <li className="mb-3">
              This mobile application is a cooking recipe who wants to share their recipe in the application.
            </li>
            <li>
              Features include search by ingredient, category or user; save favorite recipes; create your own recipe; and more.
            </li>
        </ul>
      ),
      image: Etsibog,
      link: (
          <div className="flex mt-5">
            <div className="me-3">
              <a href="https://zephyderm.infinityfreeapp.com/" target="_blank" className="bg-blue-500 rounded text-white px-3 py-1 ">
                Live Demo
              </a>
            </div>
            <div>
              <a href="" className="bg-gray-300 rounded text-gray-700/90 px-3 py-1">
                Github
              </a>
            </div>
          </div>
      )
    },
  ]