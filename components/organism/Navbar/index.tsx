import { useEffect, useState } from 'react';

export default function Navbar() {

    const [colorChange, setColorchange] = useState(false);
    const [slide, setSlide] = useState(false)
    const changeNavbarColor = () => {
        if (window.scrollY >= 60) {
            setColorchange(true);
        } else {
            setColorchange(false);
        }
    };
    
    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);
    }, [])

  return (
    <div className="container">
        <nav className={
                    colorChange
                        ? 'nav-white'
                        : ''
                }>
            <a className="navbar-brand" href="#">
                <h3 className="fw-bold">Ramdhan.</h3>
            </a>

            <ul className={slide ? 'slide' : ''}>
                <li><a className="nav-link" aria-current="page" href="#hero">Home</a></li>
                <li><a className="nav-link" href="#about">About</a></li>
                <li><a className="nav-link" href="#skill">Skills</a></li>
                <li><a className="nav-link" href="#portofolio">Portofolio</a></li>
            </ul>

            <div className="menu-toggle">
                <input type="checkbox" onClick={() => setSlide(!slide)} />
                <span></span>
                <span></span>
                <span></span>
            </div>
        </nav>
    </div>
  )
}
