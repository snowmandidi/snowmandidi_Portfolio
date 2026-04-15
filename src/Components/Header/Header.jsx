import "./Header.css"

function Header() {

    return( 
        <header className="top-bar"> 
            {/* Create shortcuts to sections of the site */}
            <nav> 
                <a href="#">Home</a>
                {/*<a href="#">Experience</a>*/}
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header