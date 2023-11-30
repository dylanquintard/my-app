import '../style/cards.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  const [jsonData, setJsonData] = useState([]);
  const [isDataLoading, setDataLoading] = useState(false);

  useEffect(() => {
    setDataLoading(true);

    fetch('/logements.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setJsonData(jsonData.data);
        setDataLoading(false);
      })
      .catch((error) => {
        console.error('Erreur lors du chargement des données :', error);
        setDataLoading(false);
      });
  }, []);

  const cards = jsonData.map(item => (
    <div className="Card" key={item.id}>
        <Link to={`/Locations/${item.id}`}>
        <img className="Card-image" src={item.cover} alt={item.title} />
        <h2 className='text-on-card'>{item.title}</h2>
        </Link>
    </div>
  ));

  return (
    <div className='Cards'>
      {isDataLoading ? null : cards}
    </div>  
  );
};

export default Card;