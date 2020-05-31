import {Data} from './Data.js';


export default class Main {
	constructor() {
		let element = document.createElement('main');
		element.classList.add('main');

		let page = 0;

		if (window.location.search != '') {
			let search = window.location.search;

			search.split('?')[1].split('&').forEach(function(param, index) {
				param = param.split('=');
				if (param[0] == 'page') page = param[1];
			});
		}

		document.title = Data[page].title;
		
		
		element.innerHTML = `
		<div class="container" style="overflow: hidden">
	
			${Data[page].header}
			${Data[page].content}
		</div>
		`;

		return element;
	}
}