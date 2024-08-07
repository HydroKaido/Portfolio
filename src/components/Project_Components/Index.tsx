import Zephyderm from "../../assets/Zephyderm Design.jpg";
import NavalConquest from "../../assets/Naval Conquest.png";
import Pokemon from "../../assets/Pokemon-Pokedex.jpg";
import Tsibug from "../../assets/E-tsibug.jpg";
import Kali from "../../assets/Kali.png"

interface ProjectLink {
    name: string,
    description: string,
}
interface Project {
    title: string,
    image: string[],
    value: string,
    categories: string,
    stack: JSX.Element,
    link: ProjectLink
}

export const projects: Project[] =[
    {
        title: 'Zephyderm',
        image: [Zephyderm, Kali],
        categories: 'Capstone/Thesis',
        value: 'Appoitment and Client Monitoring',
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
        title: 'Naval Conquest',
        image: [NavalConquest],
        categories: 'Multiplayer Games',
        value: 'Ping-Pong Games',
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
        title: 'Kali: The Darkness Arrive',
        image: [Kali],
        categories: 'Player vs. Player Game',
        value: 'Appoitment and Client Monitoring',
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
        title: 'Pokemon API',
        image: [Pokemon],
        categories: 'Hobbies',
        value: 'Appoitment and Client Monitoring',
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
        title: 'E-Tsibug',
        image: [Tsibug],
        categories: 'Mobile Application',
        value: 'Appoitment and Client Monitoring',
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
    }
]