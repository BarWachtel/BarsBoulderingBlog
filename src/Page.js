import Destinations from "./blog/Destinations";
import {useState, useEffect} from "react";
import axios from 'axios';

const LandingPage = () => {
    const [destinations, setDestinations] = useState(null);

    const apiURL = "https://bar-backend-interview.herokuapp.com/";

    const fetchData = async () => {
        const response = await axios.get(apiURL)
        console.log(response);

        setDestinations(response.data.landmarks)
    }

    useEffect(async () => {
        await fetchData();
    }, [])

    return <div>
        <h1>Welcome to Bar's Bouldering Blog!</h1>
        <p>Checkout some of these great bouldering destinations</p>
        {destinations === null && <h3>Loading...</h3>}

        {destinations !== null && <Destinations destinations={destinations}/>}
    </div>
}

export default LandingPage
