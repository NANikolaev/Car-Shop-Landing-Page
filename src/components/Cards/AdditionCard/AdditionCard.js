import "./AdditionCard.css"


let AdditionCard = ({ image, title }) => {
    return (
        <article className="addition">
            <img className="addition-img" src={`/images/${image}`} />     
            <div className="addition-dsc">
                <h2 className="addition-title"> {title}</h2>
                <p className="addition-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pellentesque ut velit eget blandit.
                    Morbi vehicula ullamcorper enim quis lacinia. Duis commodo, dui rhoncus placerat mollis, elit nunc porta elit,
                    sit amet convallis elit urna blandit sapien. Sed pretium id nunc nec tristique.
                    Quisque viverra est nisl, quis sagittis nulla lobortis at
                </p>
            </div>           
        </article>
    )
}

export default AdditionCard;