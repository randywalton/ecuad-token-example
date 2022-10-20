import { Card } from "./components/Card.js";
import { constructCSSVars } from "./utils/build-styles.js";

document.addEventListener('DOMContentLoaded', (e) => {


    // Define the new web component
    if ('customElements' in window) {
        customElements.define('custom-card', Card);
    }

    constructCSSVars();


    //cache DOM elements
    const themeSelect = document.getElementById('theme-select');
    const siteHeader = document.getElementById('site-header');
    const body = document.getElementsByTagName('body')[0];
    const cards = document.getElementsByTagName('custom-card');

    themeSelect.addEventListener('change' , (e) => {
        //console.log(cards);

        if(e.target.value === 'dark') {
            siteHeader.classList.remove('light');
            siteHeader.classList.add('dark');

            body.classList.remove('light-bg');
            body.classList.add('dark-bg');

            // for (let i = 0; i < cards.length; i++) {
            //     const card = cards[i];
            //     card.dataset.theme = 'dark';
            // }
            const cardUpdated = new CustomEvent('cardUpdated', {
                bubbles: true,
                detail: { update: 'dark' }
            });
            dispatchEvent(cardUpdated);

        } else { //light
            siteHeader.classList.remove('dark');
            siteHeader.classList.add('light');

            body.classList.remove('dark-bg');
            body.classList.add('light-bg');

            // for (let i = 0; i < cards.length; i++) {
            //     const card = cards[i];
            //     card.dataset.theme = 'light';
            // }

            const cardUpdated = new CustomEvent('cardUpdated', {
                bubbles: true,
                detail: { update: 'light' }
            });
            dispatchEvent(cardUpdated);
        }

    });


    

});