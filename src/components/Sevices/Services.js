import "./Services.css"

let Services = () => {
    return (
        <section className="service">
            <h2 className="service-title">Trust Our Top Specialists</h2>
            <div className="services">
                <div className="services-list">
                    <h4 className="service-sub-title">Services Offered</h4>
                     <ul className="services-options">
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Engine Diagnostick & Repair</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Brake Systems</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Routine & Preventative Maintenance</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Tune-Ups</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Vehicle Inspection</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Headlight Aiming</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Oil & Filter Changes</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Battery Service</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Alternator Replacement</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Exhaust</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Springs</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Shock & Struts</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Steering & Suspension</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Air Conditioning</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Alignment Services</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Transmission Repair</li>
                        <li className="services-option"><i class="fa-solid fa-circle circle"></i>Fluid Check</li>
                     </ul>
                </div>
                <img className="services-mechanic display" src="/images/istockphoto-673729410-612x612.jpg"/>
            </div>
        </section>
    )
}

export default Services