import { useState, useEffect } from 'react';

const Logements = ({ id }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchedData = require('../logements.json');
        setData(fetchedData);
    }, []);

    const logement = data.find((item) => item.id === id);

    return (
        <div className="Locations">
            {logement.title}
        </div>
    )
}

export default Logements;