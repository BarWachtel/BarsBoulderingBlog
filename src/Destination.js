const Destination = ({destination}) => {
    const {title, imgUrl, description, id} = destination;
    return <ul key={id}>
        <div>
            <h2>{title}</h2>
            <img src={imgUrl}/>
            <h2>{description}</h2>
        </div>
    </ul>
}

export default Destination
