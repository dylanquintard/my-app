import redstar from '../images/redstar.png';
import greystar from '../images/greystar.png';

const RatingBar = ({ locationData }) => {
  const maxRating = 5;

  // Générer le tableau d'étoiles en fonction du score
  const generateStars = () => {
    return Array.from({ length: maxRating }, (_, index) => ( // Ici on créer un tableau de la longeur de maxRating puis on leurs donne une index, ensuite on génère :
      <img
        key={index + 1}
        className={'rating'} 
        src={index < locationData.rating ? redstar : greystar} //  Si l'index de l'imaxe est inférieur au score, l'étoile est rouge, sinon elle est grise.
        alt={`Stars`}
      />
    ));
  };

  return (
    <div className="ratingBar">
      {generateStars()}
    </div>
  );
};

export default RatingBar;