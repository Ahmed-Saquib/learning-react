import "./Header.css"

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img className="photo" src={require("../react-logo.png")}/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}