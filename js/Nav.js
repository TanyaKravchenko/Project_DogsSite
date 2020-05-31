import {Data} from './Data.js';

export default class Nav {
	constructor() {
		let element = document.createElement('nav');
		element.className = 'nav';
	
		let navListHtml = '';

		Data.forEach(function(element, index) {
			navListHtml += '<li class="nav-item"><a class="nav-link" href="/?page=' + element.id + '">' + element.menu + '</a></li>';
		});

		

		element.innerHTML = `
		<div class="container">
			<div class="nav-wrapper">
				<div class="left logo">
					<img class="nav-logo" src="/images/logo-header.png" alt="logo-header">
				</div>
				<div id = "breadcrumbNav" class="right navbar">
					<ul class="navbar-nav" >
						${navListHtml}
					</ul>
				</div>
				<div class="lang">
				<li class="rus"><a class="nav-link" href="#">RUS/</a></li>
				<li class="eng"><a class="nav-link" href="#">ENG</a></li>
				</div>
			</div>	
		</div>
		`;

		return element;
	}
}