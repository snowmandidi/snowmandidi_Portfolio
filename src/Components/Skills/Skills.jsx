import "./Skills.css"

import { SiJavascript, SiLua, SiHtml5, SiCss3, SiNodedotjs, SiReact, SiGit} from 'react-icons/si';

const skills = {
    Programming: [{name: "Javascript", icon: <SiJavascript/>}, {name: "Lua", icon: <SiLua/>}],
    Web: [{name: "HTML", icon: <SiHtml5/>}, {name: "CSS", icon: <SiCss3/>},  {name: "NodeJS", icon: <SiNodedotjs/>}, {name: "React", icon:  <SiReact/>}],
    Other: [{name: "Git", icon: <SiGit/>}]
}

function Skills() {

    return (
        <section id="skills" className="skills-section">
            <h2>Skills</h2>

            <div className="skills-grid">
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