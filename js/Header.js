import {Data} from './Data.js';
import Main from './Main.js';

export default class Header {
	constructor() {
		
		let element = document.createElement('header');
		element.classList.add('header');

		let breadcrumbNav = "<a href='/?page=0'>Главная страница</a>";
		let address = document.location.href;
		let arrAddress = address.split('/');
		let page = Data;
		console.log(Data)
		
		for (let i=2; i<(arrAddress.length-1); i++) {
			breadcrumbNav += ' &#47;'

			breadcrumbNav += Data[i].menu;
			 
		}	
			let i = arrAddress.length-1;
			let endPos =(arrAddress[i].length)
			let name = arrAddress[i].substring(1,endPos);

		//не получается(((


		element.innerHTML = `
		<div class="container"> 

			<div class ="wrapper-breadcrumb">
			    <ul class ="breadcrumb">
					${breadcrumbNav}
				</ul>
			</div>

		</div>
		`;

		return element;

	}
}