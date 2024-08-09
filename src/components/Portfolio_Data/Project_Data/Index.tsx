import Zephyderm from "../../../assets/Zephyderm Design.jpg";
import NavalConquest from "../../../assets/Naval Conquest.png";
import Pokemon from "../../../assets/Pokemon-Pokedex.jpg";
import Tsibug from "../../../assets/E-tsibug.jpg";
import Kali from "../../../assets/Kali.png"
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
        id: 3,
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
            name: 'https://github.com/HydroTolerance/kali-the-darkness-arrive',
            description: 'Github Repo'
        }
    },
    {
        id: 4,
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
        id: 5,
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
            description: 'Live Demo'
        }
    },
    
]

export const graphics:Graphics[] =  [
    {   id: 1,
        title: 'E-Tsibug',
        image: [Calendar],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 2,
        title: 'E-Tsibug',
        image: [DaisyCotton],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 3,
        title: 'E-Tsibug',
        image: [AdamsonCotton],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 4,
        title: 'E-Tsibug',
        image: [AdamsonCottonBalls],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 5,
        title: 'E-Tsibug',
        image: [Sanitex],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 6,
        title: 'E-Tsibug',
        image: [DaisyPoster],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 7,
        title: 'E-Tsibug',
        image: [AdamsonPoster],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 8,
        title: 'E-Tsibug',
        image: [BatisteStrawberry],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 9,
        title: 'E-Tsibug',
        image: [BatisteOriginal],
        value: 'Appoitment and Client Monitoring',
        type: 'Graphics',
    },
    {
        id: 10,
        title: 'E-Tsibug',
        image: [Samus],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 11,
        title: 'E-Tsibug',
        image: [Tifa],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 12,
        title: 'E-Tsibug',
        image: [Barret],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 13,
        title: 'E-Tsibug',
        image: [Aegiz],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 14,
        title: 'E-Tsibug',
        image: [Cloud],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 15,
        title: 'E-Tsibug',
        image: [Alexandria],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 16,
        title: 'E-Tsibug',
        image: [Kamikaze],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 17,
        title: 'E-Tsibug',
        image: [Fortune],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 18,
        title: 'E-Tsibug',
        image: [Filia],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 19,
        title: 'E-Tsibug',
        image: [Genjorou],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 20,
        title: 'E-Tsibug',
        image: [Yor],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 21,
        title: 'E-Tsibug',
        image: [Lily],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },

    {
        id: 22,
        title: 'E-Tsibug',
        image: [Third],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 23,
        title: 'E-Tsibug',
        image: [Kamikaze2x2],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },
    {
        id: 24,
        title: 'E-Tsibug',
        image: [Golem],
        value: 'Appoitment and Client Monitoring',
        type: 'Illustration',
    },

]
