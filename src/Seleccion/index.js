import React from 'react';
import axios from 'axios';
class Seleccion extends React.Component {
   
    state = {
        dia:"Martes",
        hora:"...",
        actividad:"...",
        tipoDeSesion:"...",
        moderador:"...",
        ponente:"...",
        fechasEventos: [],
        coincidencias: []    
      }


  

    handleChange = (event) => {
      this.setState(
        {
          ...this.state,
          [event.target.name]: event.target.value
        });
      
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const coincidencias = this.state.fechasEventos.filter(programa => {
          return programa.Dia === this.state.dia
        });

        this.setState({
          ...this.state,
          coincidencias: coincidencias
        })
    }


    componentDidMount(){
       axios.get("http://localhost:3000/datos.json").then((response)=>{
          this.setState({
            ...this.state,
            fechasEventos: response.data
          })
       })
    }
  
    render() {
      console.log(this.state)
      return (
        <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Día:
            <select name="dia" value={this.state.dia} onChange={this.handleChange}>
              <option selected value="Martes">Martes</option>
              <option value="Miercoles">Miércoles</option>
            </select>
          </label>
          <label>
            Hora:
            <select name="hora" value={this.state.hora} onChange={this.handleChange}>
            <option selected value="elegir">...</option>
              <option value="ocho">8:00 - 9:00</option>
              <option value="nueve">9:00 - 10:00 </option>
              <option value="diez">10:00 - 11:00 </option>
              <option value="once">11:00 - 12:00 </option>
              <option value="doce">12:00 - 13:00 </option>
              <option value="una">13:00 - 14:00 </option>
              <option value="dos">14:00 - 15:00 </option>
              <option value="tres">15:00 - 16:00 </option>
              <option value="cuatro">16:00 - 17:00 </option>
              <option value="cinco">17:00 - 18:00 </option>
              <option value="seis">18:00 - 19:00 </option>
            </select>
          </label>
          <label>
            Actividad:
            <select name="actividad" value={this.state.actividad} onChange={this.handleChange}>
            <option selected value="elegir">...</option>
              <option value="actividad_uno">Registro de los participantes</option>
              <option value="actividad_dos">Bienvenida e Inauguración</option>
              <option value="actividad_tres">La industria del Juego: los grandes desafíos</option>
              <option value="actividad_cuatro">Juego Online y regulación: los grandes desafíos</option>
              <option value="actividad_cinco">México: del Juego Online</option>
              <option value="actividad_seis">La Industria del Juego y su contribución al crecimiento económico del país</option>
              <option value="actividad_siete">La Industria del juego ante los ciberdelitos</option>
              <option value="actividad_ocho">Gestión de Riesgos: Diseño de estrategias apropiadas para la protección de las salas de juego</option>
              <option value="actividad_nueve">Turismo y Juego: El binomio perfecto</option>
              <option value="actividad_diez">Fabricantes 1</option>
              <option value="actividad_once">Fabricantes 2</option>
              <option value="actividad_doce">Por una mejor regulación del Juego en México</option>
              <option value="actividad_trece">Un análisis de la Nueva Ley de Juegos y Sorteos</option>
              <option value="actividad_catorce">Preguntas y Respuestas</option>
              <option value="actividad_quince">Receso</option>
              <option value="actividad_dieciseis">Bienvenida e Inauguración</option>
              <option value="actividad_diecisiete">Clausura de los trabajos de la primera jornada</option>
              <option value="actividad_dieciocho">Conclusiones y Clausura de la Convención</option>
              
            </select>
          </label>
          <label>
            Tipo de Sesión:
            <select name="sesion" value={this.state.sesion} onChange={this.handleChange}>
            <option selected value="elegir">...</option>
              <option value="registro">Registro</option>
              <option value="inauguracion">Inauguración</option>
              <option value="conferencia">Conferencia Magistral</option>
              <option value="preguntas">Preguntas y Respuestas</option>
              <option value="mesa">Mesa Redonda</option>
              <option value="ponencia">Ponencia</option>
              <option value="receso">Receso</option>
              <option value="clausura">Clausura</option>
            </select>
          </label>
          <label>
            Moderador:
            <select name="sesion" value={this.state.sesion} onChange={this.handleChange}>
            <option selected value="elegir">...</option>
              <option value="gustavo">Gustavo Ysmail</option>
              <option value="cristina">Cristina Romero</option>
              <option value="carlos"> Carlos Carrión</option>
              <option value="jaime">Jaime de la Garza</option>
              <option value="oscar"> Oscar Paredes</option>
            </select>
          </label>
          <label>
            Ponente:
            <select name="sesion" value={this.state.sesion} onChange={this.handleChange}>
            <option selected value="elegir">...</option>
              <option value="ellen">Michael Ellen</option>
              <option value="pollock"> Michael Pollock</option>
              <option value="biller"> Royi Biller</option>
              <option value="joseph"> George Joseph</option>
              <option value="soll"> Michael Soll</option>
            </select>
          </label>
          <input type="submit" value="Submit" />
        </form>

        <section>
          Las fechas de eventos son:

          {
            this.state.coincidencias ?this.state.coincidencias.map(programa => {
              console.log(programa)
              return(                  
                    <p>Actividad: {programa.Actividad}</p>
              )
              
            })
            
            : "No hay eventos"
          }

        </section>

        </div>


      );
    }
  }
  export default Seleccion;