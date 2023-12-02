import Banner from "../composants/banner";
import Collapse from "../composants/collapse";
import banner2 from '../images/banner2.png';
import { useEffect } from "react";

const About = () => {

    useEffect(() => {
        document.title='Kasa - A propos'
    })

    return (
        <main>
        <div className="About">
            <div>
            <Banner image={banner2} text={null} 
             />
            </div>
            <div>
                <Collapse title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes." />
            </div>
            <div>
                <Collapse title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            </div>
            <div>
                <Collapse title="Service" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
            </div>
            <div>
                <Collapse title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </div>
        </main>
    )
}

export default About;