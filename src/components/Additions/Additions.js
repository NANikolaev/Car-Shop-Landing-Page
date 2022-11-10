import "./Additions.css";
import AdditionCard from "../Cards/AdditionCard/AdditionCard";

let additions=[
    {
        title:"Insurance Plans",
        image:"istockphoto-1299259284-170667a.jpg"
    },
    {
        title:"Car Wash And Waxing",
        image:"Car-detailing-software.-Auto-cleaning-and-polish.-compressor-1024x683.jpg"
    }
]



let Additions=()=>{
    return (
        <section className="additions">
          {additions.map((x,i)=><AdditionCard key={i} {...x}/>)}
        </section>
    )
}

export default Additions