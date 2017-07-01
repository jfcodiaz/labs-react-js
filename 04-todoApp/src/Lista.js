import React, { Component } from 'react';
import objListaData from './ListaData';
import  { observer } from 'mobx-react';

class Lista extends Component {
	enviarTarea(evento) {
		if(evento.which === 13) {
			objListaData.agregarTarea(evento.target.value);
			evento.target.value = "";
		}
	}
	render() {
		let listaDiv = [];
		const agergarDiv = objListaData.tareas.forEach(
			(value, index) => {
				listaDiv.push(
					<li key={index}
					 className="list-group-item"
					 onClick={()=>{
						objListaData.eliminarTarea(index)
					}}>
						{value}
					</li>); 
			}
		);
		return (
			<div className="container">
				<h2>Lista</h2>
				<div className="form-group col-xs-12 col-sm-4">
					<input 
						onKeyPress={this.enviarTarea.bind(this)} 
						placeholder="Nueva Tarea"
						className="form-control"/>
				</div>
				<div className="row">
					<div className="col-xs-12">
						<ul className="list-group">
							{listaDiv}
						</ul>
					</div>
				</div>
			</div>
		);
	}

}

export default observer(Lista);