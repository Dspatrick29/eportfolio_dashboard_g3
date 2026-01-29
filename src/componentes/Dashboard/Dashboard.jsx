import { useContext } from 'react';
import './Dashboard.css'
import TokenContext from '../../contextos/TokenContext';
import UserContext from '../../contextos/UserContext';


export function Dashboard(props){
    

    // Voy a recuperar el valor desde Dashboard

    const token = useContext(TokenContext);
    const usuario = useContext(UserContext);

    return(
    <>
    <main className="Main">
    <p >MAIN {props.token}</p>
    <p>Recupero el valor del string: "{token}"</p>
    <p>Recupero el valor del usuario: "{usuario}"</p>
    </main>
    </>
    );
}