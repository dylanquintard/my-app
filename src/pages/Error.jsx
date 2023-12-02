import '../style/error.scss'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Error = () => {
    
    useEffect(() => {
        document.title='Error 404'
    })

    return (
        <main>
            <div>
                <h1>404</h1>
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <div className='linkError'>
                <Link to='/'>Retourner sur la page d'accueil</Link>
                </div>
            </div>
        </main>
    );
  };
  
  export default Error;