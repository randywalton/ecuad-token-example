import { Sheet } from "./CardCss.js";

class Card extends HTMLElement {

	static get observedAttributes() { 
		return ['data-theme']; 
	}

	constructor() {

		// Always call super first in constructor
		super();
		let template = document.getElementById('custom-card-template');
		let templateContent = template.content;

		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(templateContent.cloneNode(true));

        shadowRoot.adoptedStyleSheets = [Sheet];

		//get elements needed for control
		this.headline = this.shadowRoot.querySelector('.headline');
		this.copy = this.shadowRoot.querySelector('.copy');

	}

	connectedCallback() {
		//console.log('connected', this.dataset.theme);

		this.updateStyle();

		window.addEventListener('cardUpdated', (e) => {
			//console.log(e.detail.update);
			this.setAttribute('data-theme', e.detail.update);
		});
		

		

	}

	disconnectedCallback() {
		console.log('disconnected', this);
	}


	attributeChangedCallback(name, oldValue, newValue) {
		console.log('Custom square element attributes changed.');
		this.updateStyle();
	}

	updateStyle() {
		console.log(this.dataset.theme);
		if (this.dataset.theme === 'light') {
			this.headline.classList.remove('dark');
			this.copy.classList.remove('dark');
			this.classList.remove('light-bg');

			this.headline.classList.add(this.dataset.theme);
			this.copy.classList.add(this.dataset.theme);
			this.classList.add('dark-bg');

		} else {
			this.headline.classList.remove('light');
			this.copy.classList.remove('light');
			this.classList.remove('dark-bg');

			this.headline.classList.add(this.dataset.theme);
			this.copy.classList.add(this.dataset.theme);
			this.classList.add('light-bg');
		}

		this.classList.add('emphasis-'+this.dataset.elevation);
		this.classList.add('radius-'+this.dataset.radius);
	}


	

}

export { Card }