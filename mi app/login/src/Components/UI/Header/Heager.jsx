import './Header.css'
import imgl from '../../../Images/logS.jpeg'

export const Headerl=()=>{
    return(
        <>
            <div className="head">
                <img src={imgl} alt="" className="lo"></img>
                <nav className="but">
                    <div className="seco">
                        <a className="buth" value="Iniciar_sesion">Iniciar sesion</a>
                        <a className="buth" value="Registrarse">Registrarse</a>
                    </div>
                </nav>                    
            </div>
            <div className="campo">

            </div>
        </>
    );
}