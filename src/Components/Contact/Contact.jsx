import { FaDiscord, FaGithub } from 'react-icons/fa';
import "./Contact.css"

const profiles = [
    {name: "GitHub", link: "https://github.com/snowmandidi", icon: <FaGithub />},
    {name: "Discord", link: "https://discord.com/users/1023596205168676944", icon: <FaDiscord />},
]

function Contact() {

    return(
        <section id="contact" className="contact-section">
            <h2>Contact me</h2>
            <p>Here are some of the platforms that I am using, feel free to reach out to me anytime.</p>
            <div className="contacts-grid">
                {profiles.map(profile => (
                    <a className="profile-card" href={profile.link} target='_blank' rel="rel=noopener noreferrer">
                        {profile.icon}
                        <div className="profile-card-text">
                            <strong>{profile.name}</strong>
                            <span>View Profile</span>
                        </div>
                    </a>
                )
                )}
            </div>
        </section>
    );
}

export default Contact