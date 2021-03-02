const Destination = ({destination}) => {
    const {title, imgUrl, description, id} = destination;
    return <ul key={id}>
        <div>
            <h2>{title}</h2>
            <img src={imgUrl} width={500} height={400}/>
            <p>{description}</p>
        </div>
    </ul>
}

export default Destination
