import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import Collapse from "../composants/collapse";
import '../style/Locations.scss';
import Tags from "../composants/tags";
import RatingBar from "../composants/rating";
import Carrousel from "../composants/carrousel";


const Locations = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [locationData, setLocationData] = useState({});
    const [isLoading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);
  
    useEffect(() => {
      setLoading(true);
  
      fetch('/logements.json')
        .then((response) => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then((jsonData) => {
          const location = jsonData.data.find((item) => item.id === id);
  
          if (location) {
            setLocationData(location);
          } else {
            // Utilisez la fonction de navigation pour rediriger l'utilisateur
            setNotFound(true);
          }
        })
        .catch((error) => {
          console.error('Error loading data:', error);
        })
        .finally(() => {
          setLoading(false);
        });
    }, [id]);
  
    if (notFound) {
      navigate("/error");
      return null;
    }

    return (
        <div className="Locations">
            {isLoading ? (
                <p>Chargement des données</p>
            ) : (
                <>  
                    <div className="Carrousel">
                        <Carrousel pictures={locationData.pictures} />
                    </div>
                    <div className="headerLocation">
                        <div className="LocationTitle">{locationData.title}</div>
                        <div className="LocationHost">
                            <h3>{locationData.host.name}</h3>
                            <img src={locationData.host.picture} />
                        </div>
                    </div>
                    <div className="LocationLocation">{locationData.location}</div>
                    <div className="filterLocation">
                        <Tags tags={locationData.tags} />
                        <RatingBar locationData={locationData} />
                    </div>
                    <div className="collapseLocations">
                        <Collapse title="Description" content={locationData.description}></Collapse>
                        <Collapse title="Equipements" content={locationData.equipments.map((equipment, index) => (
                        <div key={index}>{equipment}</div>
                        ))}></Collapse>
                    </div>
                </>
      )}
        </div>
    );
}

export default Locations;