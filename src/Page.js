import Destinations from "./Destinations";

const LandingPage = () => {
    return <div>
        <h1>Welcome to Bar's Bouldering Blog!</h1>
        <p>Checkout some of these great bouldering destinations</p>
        <Destinations destinations={[
            {
                title: 'Grampians',
                imgUrl: 'https://www.theage.com.au/long-reads/our-patch/grampians/img/HR-pinnacle_thomasparkes.jpg',
                description: 'Short drive from Melbourne, with amazing sights!',
                id: 1
            },
            {
                title: 'Nowra',
                imgUrl: 'https://moredaysoff.files.wordpress.com/2017/01/james-on-cover-boy_e.jpg',
                description: 'A bit out of the way but a great climbing spot',
                id: 2
            },
        ]}/>
    </div>
}

export default LandingPage
