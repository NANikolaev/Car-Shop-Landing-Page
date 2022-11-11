import "./Services.css"

let Services = () => {
    return (
        <section className="service">
            <h2 className="service-title">Trust Our Top Specialists</h2>
            <div className="services">
                <div className="services-list">
                    <h4 className="service-sub-title">Services Offered</h4>
                     <ul className="services-options">
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Engine Diagnostick & Repair</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Brake Systems</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Routine & Preventative Maintenance</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Tune-Ups</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Vehicle Inspection</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Headlight Aiming</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Oil & Filter Changes</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Battery Service</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Alternator Replacement</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Exhaust</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Springs</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Shock & Struts</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Steering & Suspension</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Air Conditioning</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Alignment Services</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Transmission Repair</li>
                        <li className="services-option"><i class="fa-solid fa-check-double check"></i>Fluid Check</li>
                     </ul>
                </div>
                <img className="services-mechanic display" src="/images/istockphoto-673729410-612x612.jpg"/>
            </div>
        </section>
    )
}

export default Services