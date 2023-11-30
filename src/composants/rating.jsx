import redstar from '../images/redstar.png';
import greystar from '../images/greystar.png';

const RatingBar = ({ locationData }) => {
  const maxRating = 5;

  // Générer le tableau d'étoiles en fonction du score
  const generateStars = () => {
    return Array.from({ length: maxRating }, (_, index) => (
      <img
        key={index + 1}
        className={index < locationData.rating ? 'red-star' : 'grey-star'}
        src={index < locationData.rating ? redstar : greystar}
        alt={`Star ${index + 1}`}
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