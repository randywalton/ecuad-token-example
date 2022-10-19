import { Card } from "./components/Card.js";

document.addEventListener('DOMContentLoaded', (e) => {
    // Create our shared stylesheet:
    const globalStyles = new CSSStyleSheet();
    globalStyles.replaceSync(
        `
        :root {
            --test-color: yellow;
            --test-component-color: blue;
        }
        
        
        `
    );

    // Apply the stylesheet to a document:
    document.adoptedStyleSheets = [globalStyles];


    // Define the new web component
    if ('customElements' in window) {
        customElements.define('custom-card', Card);

    }

});