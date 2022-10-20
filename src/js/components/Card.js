import { Sheet } from "./CardCss.js";

class Card extends HTMLElement {

	static get observedAttributes() { 
		return ['data-theme']; //track the theme e.g. light / dark
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
		//set styles on load
		this.updateStyle();

		//listen it the theme is updated with the form input
		window.addEventListener('cardUpdated', (e) => {
			this.setAttribute('data-theme', e.detail.update);
		});
		

		

	}

	disconnectedCallback() {
		//console.log('disconnected', this);
	}


	attributeChangedCallback(name, oldValue, newValue) {
		//console.log('element attributes changed.');
		this.updateStyle();
	}

	updateStyle() {
		
		if (this.dataset.theme === 'light') {
			//remove dark if present
			this.headline.classList.remove('dark');
			this.copy.classList.remove('dark');
			this.classList.remove('light-bg');

			//add light class styles
			this.headline.classList.add(this.dataset.theme);
			this.copy.classList.add(this.dataset.theme);
			this.classList.add('dark-bg');

		} else {
			//remove light if present
			this.headline.classList.remove('light');
			this.copy.classList.remove('light');
			this.classList.remove('dark-bg');

			//add dark class styles
			this.headline.classList.add(this.dataset.theme);
			this.copy.classList.add(this.dataset.theme);
			this.classList.add('light-bg');
		}

		//elevation & radius added, not connected to theme change
		this.classList.add('emphasis-'+this.dataset.elevation);
		this.classList.add('radius-'+this.dataset.radius);
	}


	

}

export { Card }