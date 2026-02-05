{/* Import the icons and the css file */}
import "./Skills.css"
import { SiJavascript, SiLua, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiGit, SiMetasploit, SiUnrealengine, SiBlueprint, SiUnity} from 'react-icons/si'; 
import { FaDragon } from "react-icons/fa";

{/* All the skills I want to display */}
const skills = { 
    Programming: [{name: "Javascript", icon: <SiJavascript/>}, {name: "Lua", icon: <SiLua/>}],
    Web: [{name: "HTML", icon: <SiHtml5/>}, {name: "CSS", icon: <SiCss3/>},  {name: "NodeJS", icon: <SiNodedotjs/>}, {name: "React", icon:  <SiReact/>}],
    Cybersecurity: [{name: "Metasploit", icon: <SiMetasploit/>}, {name: "Hydra", icon: <FaDragon/>}],
    "Game Development": [{name: "Unreal Engine", icon: <SiUnrealengine/>}, {name: "Unity", icon: <SiUnity/>}],
    Other: [{name: "Git", icon: <SiGit/>}, {name: "UE5 Blueprints", icon: <SiBlueprint/>}]
}

function Skills() {

    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>

            <div className="skills-grid">
                {/* For each entry in the skill map make a new div */}
                {/* For each type of skill in the skill categories create a list item */} 
                {Object.entries(skills).map(([category, skillCategory]) => ( 
                    <div className="skill-category">
                        <h4>{category}</h4>
                        <ul>
                            {skillCategory.map(skill => ( 
                                <li>
                                    {skill.icon} {skill.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills