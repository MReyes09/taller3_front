import React, { Component } from 'react';
import Cookies from 'universal-cookie';
import '../css/general.css';


const cookies = new Cookies();

class Menu extends Component {
    cerrarSesion=()=>{
        cookies.remove('usuario', {path: "/"});
        cookies.remove('contraseña', {path: "/"});
        window.location.href='./';
    }

    componentDidMount() {
        if(!cookies.get('usuario')){
            window.location.href="./";
        }
    }

    render() {
        console.log('usuario: '+cookies.get('usuario'));
        return (
            <div className="containerPrincipal">
                <div className="containerSecundario">
                Menu Principal
                <br />
                <button className="btn btn-primary" onClick={()=>this.cerrarSesion()}>Cerrar Sesión</button>
                </div>
            </div>
        );
    }
}

export default Menu;