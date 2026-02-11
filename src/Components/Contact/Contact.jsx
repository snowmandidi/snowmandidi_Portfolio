{/* Import the icons and the css file */}
import "./Contact.css"
import { FaDiscord, FaGithub } from 'react-icons/fa'; 
import { HiOutlineMail } from "react-icons/hi";

{/* All the contacts I want to link */}
const profiles = [ 
    {name: "GitHub", link: "https://github.com/snowmandidi", icon: <FaGithub />},
    {name: "Discord", link: "https://discord.com/users/1023596205168676944", icon: <FaDiscord />},
    {name: "E-mail", link: "mailto:snowmandidi@hotmail.com", icon: <HiOutlineMail/>, description: "Send an E-mail"}
]

function Contact() {

    return(
        <section id="contact" className="contact-section">
            <h2>Contact me</h2>
            <p>Here are some of the platforms that I am using, feel free to reach out to me anytime.</p>
            {/* Create a grid for the profiles */}
            {/* For each profile entry create a link and a div inside for the text */}
            <div className="contacts-grid"> 
                {profiles.map((profile, index) => (  
                    <a key={index} className="profile-card" href={profile.link} target='_blank' rel="noopener noreferrer">
                        {profile.icon}
                        <div className="profile-card-text">
                            <strong>{profile.name}</strong>
                            <span>{profile.description? profile.description : "View Profile"}</span>
                        </div>
                    </a>
                )
                )}
            </div>
        </section>
    );
}

export default Contact