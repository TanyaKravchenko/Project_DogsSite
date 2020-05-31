export default class Footer {
	constructor() {
		let element = document.createElement('footer');
		element.classList.add('footer');

		element.innerHTML = `
		<div class="container">
			<div class="footer-left">
				<div class="footer-wrappper">
				<img class = "square" src="/images/square.png" alt="square">
				</div>
				<div class="footer-header">
					<h2>КОНТАКТЫ</h2>
					<p>Владелец питомника:</p>
					<p>Светлова Анастасия</p>
				</div>
			</div>
			<div class="footer-right">
				<div class="location-wrapper">												
					<div class="text-location">	
						<p class="icon-location">Беларусь, г.Минск</p>
						<p class="phone-icon">+375 (29) 685 87 58 (Telegram, Viber)</p>
						<p class="email-icon">mops-lotos@yandex.by</p>
					</div>
				</div>	
				<div class="icons">					
					<a class="nav-link" href="#"><img src="/images/vk-icon.png" alt="vk-icon" /></a>
					<a class="nav-link" href="#"><img src="/images/f-icon.png" alt="f-icon" /></a>
					<a class="nav-link" href="#"><img src="/images/instagram-icon.png" alt="instagram-icon" /></a>
				</div>
			</div>			
		</div>

		<img class="footer-img" style="width: 100%" src="/images/map.png" alt="footer-img" />
		`;

		return element;
	}
}