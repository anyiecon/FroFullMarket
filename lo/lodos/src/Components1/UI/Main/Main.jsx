import './Main.css'

export const Main=()=>{
    return(
        <>
            <div className="inputs">
                <div className="insec">
                    <input className="inp" placeholder="E-MAIL"></input>
                    <br/>
                    <input className="inp1"   placeholder="PASSAWORD"></input><br/>
                    <div className="button">
                        <a value="Iniciar_sesion">Iniciar sesion</a><br/>
                    </div>    
                    <div className="butos">
                        <a className="" >¿Olvidaste tu contraseña?</a><br/>
                    </div>
                    <div className="decor">
                         <p>________________o________________</p><br/>
                    </div>
                    <div className="buto2">
                        <a value="Crear_cuenta_nueva">Crear cuenta nueva</a>
                    </div> 
                </div>
            </div>
        </>
    );
}