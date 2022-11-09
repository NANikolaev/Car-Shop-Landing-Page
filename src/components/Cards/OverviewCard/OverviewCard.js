import "./OverviewCard.css"

let OverviewCard = ({title,iconClass}) => {
    return (
        <article className="overview-card">
            <i className={iconClass}></i>
            <h4 className="overview-title">{title}</h4>
            <p className="overview-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ut velit eget blandit.</p>
        </article>
    )
}

export default OverviewCard