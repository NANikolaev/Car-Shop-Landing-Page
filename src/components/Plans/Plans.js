import "./Plans.css";
import PlanCard from "../Cards/PlanCard/PlanCard";

let plans=[
    {
        title:"1 Month",
        price:'120',
        benefits:['Free Vehicle Inspection','Free Oil & Filter Change']
    },
    {
        title:'6 Months',
        price:'740',
        benefits:['Free Vehicle Inspection','Free Oil & Filter Change','Battery Change Discount','20% Discount Of Meintenace price']
    },
    {
        title:"12 Months",
        price:'1400',
        benefits:['Free Vehicle Inspection','Free Oil & Filter Change','Battery Change Discount','20% Discount Of Meintenace price','24/7 Road Assistance','15% Discount When Taking Out Insurance',"Free Self Service Carwash"]
    }
]


let Plans=()=>{
    return(
        <section className="plans">
            <img className="plans-img display" src="/images/marketplace Banner.png"/>
            <h2 className="plans-title">Select a plan and apply online in 5 minutes, with just your driver's license and credit card.</h2>
             <div className="plans-container">
                {plans.map((x,i)=><PlanCard key={i} {...x}/>)}
             </div>
        </section>
    )
}

export default Plans