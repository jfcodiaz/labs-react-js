import { extendObservable } from 'mobx';

class PrincipalData {
	constructor(){
		extendObservable(this, {
			numero : 10
		});
	}
	aumentarNumero(){
		this.numero = this.numero + 1;
	}
	disminuirNumero(){
		this.numero = this.numero - 1;
	}
}

var objPrincipalData = new PrincipalData(); 
export default objPrincipalData;