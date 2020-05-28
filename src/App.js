import React, {Component} from 'react';
import "./App.css";
import Header from "./componentes/inicio/header";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/Home';

import Estudiante from './componentes/formularios/FormEstudiante';
class App extends Component {
    render(){
        return(<Router>
            <div className="container-fluid">
            <Header/>

            <Route path='/' exact component={Home}/>
            <Route path='/Estudiante' exact component={Estudiante}/>}
            <Route path='/editar/:id' exact component={Estudiante}/>

            </div>
        </Router>
        )
    }
}
export default App;