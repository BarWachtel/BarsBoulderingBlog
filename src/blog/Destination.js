const Destination = ({destination}) => {
    const {title, image_url, description, id} = destination;
    return <ul key={id}>
        <div>
            <h2>{title}</h2>
            <img src={image_url} width={500} height={400}/>
            <p>{description}</p>
        </div>
    </ul>
}

export default Destination
