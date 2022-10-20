import { Card } from "./components/Card.js";
import { constructCSSVars } from "./utils/build-styles.js";

document.addEventListener('DOMContentLoaded', (e) => {


    // Define the new web component
    if ('customElements' in window) {
        customElements.define('custom-card', Card);
    }

    constructCSSVars();

});