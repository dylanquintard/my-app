import Banner from "../composants/banner";
import banner1 from '../images/banner1.png';
import Card from "../composants/cards";
import { useEffect } from "react";
import styled from "styled-components";

const StyledBanner = styled.div`margin-bottom: 100px;`;

const Home = () => {

    useEffect(() => {
        document.title='Kasa - Accueil'
    })

    return (
        <main>
        <div className="Home">
            <div>
            <StyledBanner>
            <Banner image={banner1} text={'Chez vous, partout et ailleurs'} />
            </StyledBanner>
            <Card />
            </div>
        </div>
        </main>
    )
}

export default Home;