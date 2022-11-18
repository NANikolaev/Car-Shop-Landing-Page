import "./Contacts.css";

let Contacts=()=>{
    return(
        <section id="contacts" className="contacts">
            <div className="locations">
                <h4 className="location-title">Current Locations</h4>
                <ul className="location-list">
                    <li><p>Atlanta</p></li>
                    <li><p>Houston</p></li>
                    <li><p>Philadelphia</p></li>
                    <li><p>Miami-Ft. Lauderdale</p></li>
                    <li><p>San Francisco</p></li>
                    <li><p>Northern New Jersey</p></li>
                </ul>
            </div>
            <div className="media">
                <h4 className="media-title">Contact Us</h4>
                <ul className="contact-list">
                    <li className="contact-item"><i className="fa-solid fa-phone"></i> 8883-654-23895</li>
                    <li className="contact-item"><i className="fa-solid fa-envelope"></i> Rely-Auto@gmeil.com</li>
                </ul>
                <ul className="media-list">
                    <li className="media-item"><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                    <li className="media-item"><a href=""><i className="fa-brands fa-twitter"></i></a></li>
                    <li className="media-item"><a href=""><i className="fa-brands fa-linkedin"></i></a></li>
                    <li className="media-item"><a href=""><i className="fa-brands fa-square-instagram"></i></a></li>
                </ul>
            </div>
        </section>
    )
}

export default Contacts