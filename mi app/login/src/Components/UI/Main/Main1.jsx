import './Main1.css'
import imtre from '../../../Images/lo3.jpeg'

export const Main=()=>{
    return(
        <>
            <div className="mai">
                <div className="tex">
                    <h1 className="title">Bienvenidos a FullMarket </h1>
                    <p className="para">Registrate e inicia sesion si no estas 
                    resgistrado; para vivir una maravillosa experiencia</p>
                </div>
                <img src={imtre} alt="" className="imaf"></img>
            </div>
            <div className="campo1"></div>
        </>
    );
}