import Banner from "../composants/banner";
import banner1 from '../images/banner1.png';
import Card from "../composants/cards";
import { useEffect } from "react";

const Home = () => {

    useEffect(() => {
        document.title='Home'
    })

    return (
        <main>
        <div className="Home">
            <div>
            <Banner image={banner1} text={'Chez vous, partout et ailleurs'} />
            <Card />
            </div>
        </div>
        </main>
    )
}

export default Home;