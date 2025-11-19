import './Cabecera.css';

export function Cabecera(props){
    
    return(
    <>
    <header className="Cabecera">
    <p>HEADER {props.usuario}</p>
    </header>
    </>
    );
}