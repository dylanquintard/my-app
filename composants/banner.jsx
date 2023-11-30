import '../style/banner.scss';

const Banner = ({ image, text }) => {
  return (
    <div className="Banner">
      <img src={image} alt="Banner" />
      <h1 className='text-on-image'>{text}</h1>
    </div>
  );
};

export default Banner;