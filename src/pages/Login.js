import React, { Component } from 'react';
import '../css/general.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl="http://0.0.0.0:8000/login";
const baseUrl2="http://0.0.0.0:8000/login";
const cookies = new Cookies();

class Login extends Component {
    state={
        form:{
            usuario: '',
            contrasenia: ''
        }
    }

    handleChange=async e=>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
    }


    registro=async()=>{
        window.location.href="./registro";
    }

    
    iniciarSesion=async()=>{
        await axios.get(baseUrl, {})
        .then(response => {
          //console.log(response.data)
          console.log(response.data);
        })
        .catch(error => {
          console.log(error)
          alert("Error")
        })
      }
    

    iniciarSesion2 = async () => {
        try {
            const response = await axios.post(baseUrl2, {
            username: this.state.form.usuario,
            password: this.state.form.contrasenia
            });
        
            if (response.data.message === 'Inicio de sesión exitoso') {
        
            cookies.set('usuario', this.state.form.usuario, { path: '/' });
            cookies.set('contraseña', this.state.form.contrasenia, { path: '/' });
        
            alert(`Bienvenido ${this.state.form.usuario}`);
            window.location.href = './menu';
            } else {
            alert('El usuario o la contraseña no son correctos');
            }
        }catch (error) {
            console.log(error);
        }
    };
      

    componentDidMount() {
        if(cookies.get('usuario')){
            window.location.href="./menu";
        }
    }
    

    render() {
        return (
    <div className="containerPrincipal">
        <div className="containerSecundario">
          <div className="form-group">
            <label>Usuario: </label>
            <br />
            <input
              type="text"
              className="form-control"
              name="usuario"
              onChange={this.handleChange}
            />
            <br />
            <label>Contraseña: </label>
            <br />
            <input
              type="password"
              className="form-control"
              name="contrasenia"
              onChange={this.handleChange}
            />
            <br />
            <button className="btn btn-primary" onClick={()=> this.iniciarSesion2()}>Iniciar Sesión</button>
          </div>
            
          <button className="btn btn-primary" onClick={()=> this.iniciarSesion()}>Comprobar Conexion</button>
        </div>
      </div>
        );
    }
}

export default Login;