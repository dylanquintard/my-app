import { useState } from "react";
import '../style/carrousel.scss';
import arrowright from '../images/arrowright.png';
import arrowleft from '../images/arrowleft.png';

const Carrousel = ({ pictures }) => {
    const [index, setIndex] = useState(0);

    const imgCount = pictures.length;

    const arrows = () => {
        return (
            imgCount > 1 ? (
                <div className="arrows">
                    <button className="arrowleft" onClick={() => setIndex((index - 1 + imgCount) % imgCount)}>
                        <img src={arrowleft} alt="arrowleft"></img>
                    </button>
                    <button className="arrowright" onClick={() => setIndex((index + 1) % imgCount)}>
                        <img src={arrowright} alt="arrowright"></img>
                    </button>
                </div>
            ) : null
        );
    };

    return (
        <div className="Carrousel">
            <img src={pictures[index]} alt="Carrousel"></img>
            {arrows()}
        </div>
    )
}

export default Carrousel;