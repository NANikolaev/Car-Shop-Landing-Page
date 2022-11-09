import "./Overview.css";
import OverviewCard from "../Cards/OverviewCard/OverviewCard"; 

let cardsContent=[
    {
        title:'Engine Repair',
        iconClass:"fa-solid fa-screwdriver-wrench",
    },
    {
        title:"Oil Change",
        iconClass:"fa-solid fa-oil-can"
    },
    {
        title:"Battery Service",
        iconClass:"fa-solid fa-car-battery"
    },
    {
        title:"Road Assistance",
        iconClass:"fa-solid fa-car-burst"
    }
]


let Overview=()=>{
    return(
        <section className="overview">
           {cardsContent.map((x,i)=><OverviewCard key={i} {...x}/>)}
        </section>
    )
}

export default Overview