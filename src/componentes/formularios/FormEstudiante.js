import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../../Services/conexionaxios';

class FormEstudiante extends Component {



    state={
        matricula: "",
        nombre: "",
        apellidos: "",
        email: "",
        editing: false,
        _id:""
    }


    async componentDidMount(){
       const resp = await Axios.get("estudiante/listarone/"+this.props.match.params.id);
        if(this.props.match.params.id){

            this.setState({

                matricula: resp.data.matricula,
                nombre: resp.data.nombre,
                apelledios: resp.data.apellidos,
                email: resp.data.email,
                editing: true, 
                _id: this.props.match.params.id
            })
            
        }
    }



    onSubmit= async (e)=>{

        e.preventDefaul();
        const newEstudiante={
            matricula: this.state.matricula,
            nombre: this.state.nombre,
            apellidos: this.state.apellidos,
            email: this.state.email
            
        }


        if(this.state.editing){
            await Axios.put('estudiante/actualizar/'+this.state._id,newEstudiante);
            window.location.href= '/';
        }else {
            
        await  Axios.post('estudiante/agregar',newEstudiante);
        this.setState({
            matricula: "",
            nombre: "",
            apelledios: "",
            email: ""
        });
        
    }

        }






    onInputChange=e=> {
        this.setState({
            [e.target.name]: e.target.value
        });
    }




    render() {
        return (
            <div>
                <div className="card mt-4">
                    <div className="card-header">
                        Estudiantes
  </div>
                    <div className="card-body">
                        <form>
                            <div className
                            Name="form-group">

                                <input type="text" 
                                className="form-control"
                                 name="matricula"
                                 value={this.state.matricula}
                                 onChange={this.onInputChange}
                                  placeholder="Introducir matricula" />

                            </div>
                            <div className="form-group">

                                <input type="text" 
                                className="form-control"
                                 name="nombre"
                                 value={this.state.nombre}
                                 onChange={this.onInputChange}
                                 placeholder="Introducir nombre" />

                            </div>
                            <div className="form-group">

                                <input type="text" 
                                className="form-control"
                                 name="apellidos" 
                                 value={this.state.apellidos}s
                                 onChange={this.onInputChange}
                                 placeholder="Introducir apellidos" />

                            </div>

                            <div className="form-group">
                              
                              <input type="email"
                               className="form-control" 
                               name="email" 
                               value={this.state.email}
                               onChange={this.onInputChange}
                               placeholder="Introducir email" />
                                 
</div>

                            <button type="submit" 
                            className="btn btn-primary"
                            onClick={this.onSubmit}
                            >Guardar</button>

                            <Link className="btn btn-primary mt-2" to="/" role="button">Regresar</Link>

                        </form>
                    </div>
                </div>

            </div>
        )
    }
}

export default FormEstudiante;