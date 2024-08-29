import Zephyderm from "../../../assets/Zephyderm Design.jpg";
import NavalConquest from "../../../assets/Naval Conquest.png";
import Pokemon from "../../../assets/Pokemon-Pokedex.jpg";
import Tsibug from "../../../assets/E-tsibug.jpg";
import Kali from "../../../assets/Kali.png"
import PerPic from "../../../assets/PerPic.jpg"
import Calendar from "../../../assets/Graphics/Picture Calendar.jpg"
import DaisyCotton from "../../../assets/Graphics/Daisy CottonBall.jpg"
import AdamsonCotton from "../../../assets/Graphics/Adamson Cotton Rolls (50 Grams).jpg"
import AdamsonCottonBalls from "../../../assets/Graphics/Adamson Cotton (Cotton Balls Big).jpg"
import Sanitex from "../../../assets/Graphics/Sanitex.jpg"
import DaisyPoster from "../../../assets/Graphics/Daisy Cotton Balls.jpg"
import AdamsonPoster from "../../../assets/Graphics/Adamson Cotton Rolls 1.jpg"
import BatisteStrawberry from "../../../assets/Graphics/Bastiste_Strawberry.jpg"
import BatisteOriginal from "../../../assets/Graphics/Bastiste_Original.jpg"
import Samus from "../../../assets/Illustration/Samus.jpg";
import Alexandria from "../../../assets/Illustration/Alexandria.jpg";
import Fortune from "../../../assets/Illustration/Ms.Fortune.jpg";
import Tifa from "../../../assets/Illustration/Tifa.jpg";
import Cloud from "../../../assets/Illustration/Cloud.jpg";
import Barret from "../../../assets/Illustration/Barret Wallace.png";
import Kamikaze from "../../../assets/Illustration/Kamikaze (Colored).png";
import Filia from "../../../assets/Illustration/Filia.jpg";
import Lily from "../../../assets/Illustration/Lily.png";
import Genjorou from "../../../assets/Illustration/Genjurou_Kibagami.png";
import Third from "../../../assets/Illustration/Third Eye (1).png";
import Kamikaze2x2 from "../../../assets/Illustration/Kamikazee 1x1.png"
import Yor from "../../../assets/Illustration/Yor.jpg"
import Aegiz from "../../../assets/Illustration/A.jpg"
import Golem from "../../../assets/Illustration/Golem.jpg"




interface ProjectLink {
    name: any,
    description: any,
}
interface Project {
    id: any;
    title: string,
    image: string[],
    value: string,
    type: string,
    categories: string,
    stack: any,
    link: ProjectLink
}

interface Graphics {
    id: any;
    title: string,
    image: string[],
    value: string,
    type: string,
}

export const projects: Project[] = [
    {   id: 1,
        title: 'Zephyderm',
        image: [Zephyderm, Kali],
        categories: 'Capstone/Thesis',
        value: 'Appoitment and Client Monitoring',
        type: 'Web',
        stack:
        <>
        <ul className="text-gray-300/60 mt-3">
            <li className="mb-3">
                Frontend: HTML, CSS, Javascript, Bootstrap, JQuery
            </li>
            <li>
                Backend: PHP, MySQL
            </li>
        </ul>
        </>
        ,
        link: {
            name: 'https://zephyderm.infinityfreeapp.com/',
            description: 'Live Demo'
        }
    },
    {
        id: 2,
        title: 'PerPic',
        image: [PerPic],
        categories: 'Hobbies',
        value: 'Social Media Platform',
        type: 'Web',
        stack:
        <>
        <ul className="text-gray-300/60 mt-3">
        <li className="mb-3">
                Frontend: React, Tailwind, TypeScript 
            </li>
            <li>
                Backend: Express, Node, MongoDB
            </li>
        </ul>
        </>
        ,
        link: {
            name: 'https://pokemon-pokedex-lime.vercel.app/',
            description: 'Github Repo'
        }
    },
    {
        id: 3,
        title: 'Pokemon API',
        image: [Pokemon],
        categories: 'Hobbies',
        value: 'Appoitment and Client Monitoring',
        type: 'Web',
        stack:
        <>
        <ul className="text-gray-300/60 mt-3">
            <li className="mb-3">
                Frontend: HTML, CSS, Javascript, Tailwind, React JS
            </li>
        </ul>
        </>
        ,
        link: {
            name: 'https://pokemon-pokedex-lime.vercel.app/',
            description: 'Live Demo'
        }
    },
    {
        id: 4,
        title: 'Naval Conquest',
        image: [NavalConquest],
        categories: 'Multiplayer Games',
        value: 'Ping-Pong Games',
        type: 'Web',
        stack:
        <>
        <ul className="text-gray-300/60 mt-3">
            <li className="mb-3">
                Game Engine: Unity
            </li>
            <li className="mb-3">
                Scripting and Tools: C#, Photoshop, Firebase, Photon 2
            </li>
        </ul>
        </>
        ,
        link: {
            name: 'https://github.com/HydroTolerance/Naval_Conquest',
            description: 'Github Repo'
        }
    },
    {
        id: 5,
        title: 'Kali: The Darkness Arrive',
        image: [Kali],
        categories: 'Player vs. Player Game',
        value: 'Appoitment and Client Monitoring',
        type: 'Web',
        stack:
        <>
        <ul className="text-gray-300/60 mt-3">
            <li className="mb-3">
                Game Engine: Unity
            </li>
            <li className="mb-3">
                Scripting and Tools: C#, Photoshop
            </li>
        </ul>
        </>
        ,
        link: {
            name: 'https://blazingwolfstudio32.itch.io/kali-the-darkness-arrive',
            description: 'Download Game'
        }
    },

    
    {
        id: 6,
        title: 'E-Tsibug',
        image: [Tsibug],
        categories: 'Mobile Application',
        value: 'Appoitment and Client Monitoring',
        type: 'Web',
        stack:
        <>
        <ul className="text-gray-300/60 mt-3">
            <li className="mb-3">
                Frontend: HTML, CSS, Javascript, Angular JS
            </li>
        </ul>
        </>
        ,
        link: {
            name: 'https://github.com/HydroTolerance/E-Tsibug',
            description: 'Github Repo'
        }
    },
    
]

export const graphics:Graphics[] =  [
    {   id: 1,
        title: 'Jovash Product Calendar',
        image: [Calendar],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 2,
        title: 'Daisy Cotton Balls',
        image: [DaisyCotton],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 3,
        title: 'Adamson Cotton',
        image: [AdamsonCotton],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 4,
        title: 'Adamson Cotton Balls',
        image: [AdamsonCottonBalls],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 5,
        title: 'Sanitex',
        image: [Sanitex],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 6,
        title: 'Poster Cotton Balls',
        image: [DaisyPoster],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 7,
        title: 'Adamson Rolls Poster',
        image: [AdamsonPoster],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 8,
        title: 'Batiste Cherry',
        image: [BatisteStrawberry],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 9,
        title: 'Batiste Original',
        image: [BatisteOriginal],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 10,
        title: 'Samus (Fanart)',
        image: [Samus],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 11,
        title: 'Tifa Lockhear (Fanart)',
        image: [Tifa],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 12,
        title: 'Barret Wallace (Fanart)',
        image: [Barret],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 13,
        title: 'Agniz (Fanart)',
        image: [Aegiz],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 14,
        title: 'Cloud (Fanart)',
        image: [Cloud],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 15,
        title: 'Alexandria (Concept)',
        image: [Alexandria],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 16,
        title: 'Kamikazee (Concept)',
        image: [Kamikaze],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 17,
        title: 'Ms.Fortune (Fanart)',
        image: [Fortune],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 18,
        title: 'Filia (Fanart)',
        image: [Filia],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 19,
        title: 'Genjorou (Fanart)',
        image: [Genjorou],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 20,
        title: 'Yor (Fanart)',
        image: [Yor],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 21,
        title: 'Lily (Concept)',
        image: [Lily],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },

    {
        id: 22,
        title: 'Third Sticker',
        image: [Third],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 23,
        title: 'Kamikazee Sticker',
        image: [Kamikaze2x2],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 24,
        title: 'Ancient Golem (3D)',
        image: [Golem],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },

]
