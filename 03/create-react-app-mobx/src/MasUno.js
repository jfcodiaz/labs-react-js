import React, {Component} from 'react';
import objPrincipalData from './PrincipalData';

class MasUno extends Component{
	render(){
		return (
			<button onClick={function(){objPrincipalData.aumentarNumero()}}> Aumentar</button>
			);
	}
}

export default MasUno;