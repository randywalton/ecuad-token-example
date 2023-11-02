import { Card } from "./components/Card.js";
import { constructCSSVars } from "./utils/build-styles.js";

document.addEventListener('DOMContentLoaded', (e) => {

    // Define the new web component(s)
    if ('customElements' in window) {
        customElements.define('custom-card', Card);
    }

    constructCSSVars();

    //cache DOM elements
    const themeSelect = document.getElementById('theme-select');
    const siteHeader = document.getElementById('site-header');
    const cardContainer = document.getElementById('card_container');
    const body = document.getElementsByTagName('body')[0];

    themeSelect.addEventListener('change' , (e) => {

        if(e.target.value === 'dark') {
            siteHeader.classList.remove('light');
            siteHeader.classList.add('dark');

            body.classList.remove('light');
            body.classList.add('dark');

            const cardUpdated = new CustomEvent('cardUpdated', {
                bubbles: true,
                detail: { update: 'dark' }
            });
            dispatchEvent(cardUpdated);

        } else { //light
            siteHeader.classList.remove('dark');
            siteHeader.classList.add('light');

            body.classList.remove('dark');
            body.classList.add('light');

            const cardUpdated = new CustomEvent('cardUpdated', {
                bubbles: true,
                detail: { update: 'light' }
            });
            dispatchEvent(cardUpdated);
        }

    });


     const cmsPath = 'https://randywalton.ca/ecuad/cms/api/content/items/exampleArticles';
    const publicKey = 'API-9c67173d397298b9451f535609fb708214598b83';

    function getStorySubmission() {
        // fetch('https://randywalton.ca/temp/testing-headless/api/content/item/get/test?token=API-c4f4deeb91424bff8ad440855223d87e1db9a0fd')
        //     .then(collections => collections.json())
        //     .then(collections => console.log(collections));


            

        fetch(cmsPath, {
            method: 'GET',
            headers: {
                "api-key": publicKey
            }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
                buildCards(response);
                if (response.error) {
                    console.log('problem!', response.error);
                }

            });
    }
    getStorySubmission();


    function buildCards(cards) {

        // <custom-card class="card" data-theme="light" data-elevation="flat" data-radius="none">
        //     <span slot="headline">Headline</span>
        //     <span slot="copy">Copy</span>
        // </custom-card>

        console.log(cards, " build");

        cards.forEach(card => {

            console.log(card.title, " single");
            
            const cardElm = document.createElement('custom-card');
            cardElm.classList.add('card');

            const headlineElm = document.createElement('span');
            headlineElm.slot = "headline";
            headlineElm.textContent = card.title;

            const copyElm = document.createElement('span');
            copyElm.slot = "copy";
            copyElm.textContent = card.copy;

            cardElm.append(headlineElm, copyElm);
            
            cardContainer.append(cardElm);

        });
    }


});