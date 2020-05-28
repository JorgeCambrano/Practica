import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from '../Services/conexionaxios';

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            estudiantes: []
        }

        this.getEstudiantes = this.getEstudiantes.bind(this);
    }

    componentDidMount() {

        this.getEstudiantes();
    }



    getEstudiantes = async () => {

        await Axios.get('estudiante/listar')
            .then(res => {

                this.setState({ estudiantes: res.data });
                console.log(res.data)
            }).catch((error) => {
                console.log(error);

            });
    }


    deleteEstudiante = async (id) => {
        await Axios.delete('estudiante/eliminar/' + id);
        this.getEstudiantes();
    }


    render() {
        return (
            <div>
                <Link className="btn btn-primary mt-2" to="/estudiante" role="button">Link</Link>

                <table class="table">
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col">matricula</th>
                            <th scope="col">nombre</th>
                            <th scope="col">apellidos</th>
                            <th scope="col">email</th>
                            <th scope="col">editar</th>
                            <th scope="col">eliminar</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            this.state.estudiantes.map(estudiante =>
                                <tr key={estudiante._id}>
                                    <th>{estudiante.matricula}</th>
                                    <th>{estudiante.nombre}</th>
                                    <th>{estudiante.apellidos}</th>
                                    <th>{estudiante.email}</th>
                                    <th>
                                        <Link className="btn btn-primary"
                                            to={"/editar/" + estudiante._id}
                                            role="button">editar</Link>
                                    </th>
                                    <th>{<button type="button"
                                        className="btn btn-danger"
                                        onClick={() => this.deleteEstudiante(estudiante._id)}
                                    >Eliminar</button>}</th>

                                </tr>

                            )
                        }


                    </tbody>
                </table>

            </div>
        )
    }
}

export default Home;