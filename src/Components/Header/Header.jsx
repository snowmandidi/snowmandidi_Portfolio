import "./Header.css"

function Header() {

    return(
        <header className="top-bar">
            <nav>
                <a href="#">Home</a>
                <a href="#">Experience</a>
                <a href="#skills">Skills</a>
                <a href="#">Projects</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
}

export default Header