import './Header2.css'
import imploS from '../../../Images/logS.jpeg'

export const HeaderLo =()=>{
    return(
        <>
            <div className="log">
                <img src={imploS} alt="" className="ImaL"></img>
                <h1 className="titlee">Iniciar Sesion</h1>
                <p className="mot">Inicia sesion aquí totalmente gratis 
                para una excelente experencia</p>
            </div>
        </>
    );
}