{/* Import the icons and the css file */}
import "./Skills.css"
import { SiJavascript, SiLua, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiGit, SiUnrealengine, SiBlueprint, SiUnity, SiRobloxstudio, SiKalilinux} from 'react-icons/si'; 

{/* All the skills I want to display */}
const skills = { 
    Programming: [{name: "Javascript", icon: <SiJavascript/>}, {name: "Lua", icon: <SiLua/>}],
    Web: [{name: "HTML", icon: <SiHtml5/>}, {name: "CSS", icon: <SiCss3/>},  {name: "NodeJS", icon: <SiNodedotjs/>}, {name: "React", icon:  <SiReact/>}],
    Cybersecurity: [{name: "Kali Linux", icon: <SiKalilinux/>}],
    "Game Development": [{name: "Unreal Engine 5", icon: <SiUnrealengine/>}, {name: "Unity", icon: <SiUnity/>}, {name: "Roblox Studio", icon: <SiRobloxstudio/>}],
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
                    <div key={category} className="skill-category">
                        <h4>{category}</h4>
                        <ul>
                            {skillCategory.map((skill, index) => ( 
                                <li key={index}>
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