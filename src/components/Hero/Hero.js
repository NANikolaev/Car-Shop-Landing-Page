import "./Hero.css";

let Hero = () => {
    return (
        <section className="hero">
            <img className="hero-img" src="/images/how-to-improve-car-ride-comfort-607ea75bc7434.jpg" />
            <div className="navbar">
                <h3 className="logo">Rely Auto ++</h3>
                <ul className="navbar-nav">
                    <li><a href="#something">Service</a></li>
                    <li><a href="#something">Contacts</a></li>
                    <li><a href="#something">Team</a></li>
                </ul>
            </div>
            <div className="title">
                <h1>Best Way To Take Care Of Your Car </h1>
                <p className="title-subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis semper luctus lorem, vel lobortis tellus vestibulum at. Quisque quis cursus diam, sit amet mollis quam.</p>
                <button className="btn-apply">APPLY NOW</button>
            </div>
        </section>
    )
}
export default Hero