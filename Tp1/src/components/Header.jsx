import './Header.css'
import Image from './e888cd8d2708d8f0388198fd551a1a00.jpg';

function Header() {
    return (
    <header classname="header">
            <div classname="header-logo">
                <img src={Image} alt="site logo" />
            </div>
            <h1>MySocial</h1>
        </header>
    )
}
