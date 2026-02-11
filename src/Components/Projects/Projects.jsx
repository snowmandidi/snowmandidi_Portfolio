import "./Projects.css"
import { FaGithub } from "react-icons/fa";

{/* All the Projects I want to display */}
const projects = [
    {
        name: "Snow Core Bot",
        description: "A custom bot developed for the Snow Core Group (14k+ members) using NodeJS and the discord.js library. It allows staff members to retrieve, update and manage progression data through integration with Google Sheets, supporting and streamlining administrative workflows.",
        githubURL: null,
    },
    {
        name: "Test Project",
        description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        githubURL: "https://www.webpagetest.org/blank.html",
    }
]

function Projects() {

    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>

            <div className="projects-grid">
                {/* For each entry in the projects array make a new div */}
                {projects.map((project, index) => ( 
                    <div key={index} className="project-card">
                        <h4>{project.name}</h4>
                        <p className="project-description">{project.description}</p>
                        {project.githubURL ? (
                            <a className="githubURL" href={project.githubURL} target='_blank' rel="noopener noreferrer"><FaGithub/>Github</a>
                        ) :
                            <p className="githubURL"><FaGithub/> This projects repository is private</p>
                        }
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects