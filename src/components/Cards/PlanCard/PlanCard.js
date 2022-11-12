import "./PlanCard.css"

let PlanCard=({title,price,benefits})=>{
    return(
        <article className="plan">
           <h2 className="plan-title">{title}</h2>
           <h3 className="plan-price">${price}</h3>
           <div className="devider"></div>
            <ul className="benefits">
              {benefits.map((x,i)=><li className="benefit" key={i}><i class="fa-solid fa-check-double free"></i> {x}</li>)}
            </ul>
            <button className="select">SELECT</button>
        </article>
    )
}

export default PlanCard