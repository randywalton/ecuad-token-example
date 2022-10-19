import { Sheet } from "./CardCss.js";

class Card extends HTMLElement {

	constructor() {

		// Always call super first in constructor
		super();
		let template = document.getElementById('custom-card-template');
		let templateContent = template.content;

		const shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(templateContent.cloneNode(true));

        shadowRoot.adoptedStyleSheets = [Sheet];

		//get elements needed for control
	

	}

	connectedCallback() {
		//console.log('connected', this.dataset.index);

		

	}

	disconnectedCallback() {
		console.log('disconnected', this);
	}




	

}

export { Card }