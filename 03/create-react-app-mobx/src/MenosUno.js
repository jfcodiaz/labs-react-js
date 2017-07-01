import React, {Component} from 'react';
import objPrincipalData from './PrincipalData';

class MenosUno extends Component{
	render(){
		return (
			<button onClick={function(){objPrincipalData.disminuirNumero()}}>Disminuir</button>
			);
	}
}

export default MenosUno;