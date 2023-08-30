import React, { Component } from 'react';
import '../css/general.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import Cookies from 'universal-cookie';

const baseUrl = "http://0.0.0.0:8000/registro";
const cookies = new Cookies();

class Registro extends Component {
  state = {
    form: {
      usuario: '',
      contrasenia: ''
    }
  }

  handleChange = async e => {
    await this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  }

  registrarse = async () => {
    await axios.post(baseUrl, { username: this.state.form.usuario, password: this.state.form.contrasenia })
      .then(response => {
        if (response.data != null) {
          var respuesta = response.data; // Cambio de response[0] a response.data
          cookies.set('usuario', respuesta.usuario, { path: "/" });
          cookies.set('contraseña', respuesta.contrasenia, { path: "/" });

          alert(`Registrado ${respuesta.usuario}`);
          window.location.href = "./";
        } else {
          alert('No se ha podido registrar');
        }
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount() {
    if (cookies.get('usuario')) {
      window.location.href = "./usuarios";
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
            <button className="btn btn-primary" onClick={() => this.registrarse()}>Guardar</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Registro;