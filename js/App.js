import Nav from './Nav.js';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

class App {
	constructor() {
		document.addEventListener('DOMContentLoaded', function() {

			let element = document.createElement('div');
			element.classList.add('site');

			document.body.insertBefore(element, document.body.childNodes[0]);

			element.append(new Nav);
			element.append(new Header);			
			element.append(new Main);
			element.append(new Footer);

		});
	}
}

new App();