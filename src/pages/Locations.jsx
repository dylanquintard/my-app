import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import Collapse from "../composants/collapse";
import '../style/Locations.scss';
import Tags from "../composants/tags";
import RatingBar from "../composants/rating";
import Carrousel from "../composants/carrousel";
import Error from "./Error";


const Locations = () => {

    const { id } = useParams();
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
  
          if (location && location.title) {
            document.title=location.title
            setLocationData(location);
            
          } else {
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
      return (
        <Error />
      )
    }

    const firstname = locationData.host ? locationData.host.name.split(' ')[0] : '';
    const lastname = locationData.host ? locationData.host.name.split(' ')[1] : '';

    return (
        <div className="Locations">
            {isLoading ? (
                <p>Chargement des données</p>
            ) : (
                <>  
                    <div className="Carrousel">
                        <Carrousel pictures={locationData.pictures} />
                    </div>
                    <div className="containerLocation">
                    <div className="headerLocation">
                        <div className="LocationTitle">{locationData.title}</div>
                        <div className="LocationLocation">{locationData.location}</div>
                        <Tags tags={locationData.tags} />
                    </div>
                    <div className="filterLocation">
                        <div className="LocationHost">
                            <div className="hostname">
                              <span className="firstname">{firstname}</span>
                              <span className="lastname">{lastname}</span>
                            </div>
                            <img src={locationData.host.picture} alt="hostPicture" />
                        </div>
                        <div className="ratingBar">
                        <RatingBar locationData={locationData} />
                        </div>
                    </div>
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