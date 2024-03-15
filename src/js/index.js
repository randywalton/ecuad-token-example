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
    const submiBtn = document.getElementById('submit_btn');
    const message = document.getElementById('message');
    const title = document.getElementById('title');
    const alert = document.getElementById('alert');
    const body = document.getElementsByTagName('body')[0];

    submiBtn.addEventListener('click' , (e) => {
        e.preventDefault();
        alert.innerHTML = "";
        if (title.value !== '' && message.value !== '') {
            postArtcile(title.value, message.value);
            alert.style.display = "block";
            alert.classList.remove('error');
            alert.classList.add('sucess');
            alert.innerHTML = "Message submitted!";
        } else {
            alert.style.display = "block";
            alert.classList.remove('sucess');
            alert.classList.add('error');
            alert.innerHTML = "Fill in both title and message!";
        }
        //console.log(title.value, message.value);
        //postArtcile(title.value, message.value);
    });

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

    const cmsPathPost = 'https://randywalton.ca/ecuad/cms/api/content/item/exampleArticles';
    const cmsPathGet = 'https://randywalton.ca/ecuad/cms/api/content/items/exampleArticles';
    const publicKey = 'API-9c67173d397298b9451f535609fb708214598b83';

    function getStorySubmission() {
       

        fetch(cmsPathGet, {
            method: 'GET',
            headers: {
                "api-key": publicKey
            }
            })
            .then(response => response.json())
            .then(response => {
                //console.log(response);
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

        //console.log(cards, " build");

        cards.forEach(card => {

            //console.log(card.title, " single");
            
            const cardElm = document.createElement('custom-card');
            cardElm.classList.add('card');

            const headlineElm = document.createElement('span');
            headlineElm.slot = "headline";
            headlineElm.innerHTML = card.title;

            const copyElm = document.createElement('span');
            copyElm.slot = "copy";
            copyElm.innerHTML = card.copy;

            cardElm.append(headlineElm, copyElm);
            
            cardContainer.append(cardElm);

        });
    }



    function postArtcile(title, copy) {

        let sanitizeCopy = sanitizeHTML(copy);
        let sanitizeTitle = sanitizeHTML(title);

        fetch(cmsPathPost, {
            method: 'POST',
            headers: {
                "api-key": publicKey,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                data: {
                    "title": `${sanitizeTitle}`,
                    "copy": `${sanitizeCopy}`,
                    "_state": 1 //do not publish!
                }
            })
        })
            .then(response => response.json())
            .then(response => {
                //console.log(response);

                // if (!response.error) {
                //     //hide form and show thank you, continue to clouds
                //     this.showThankYou();
                //     //turn off spinner
                //     this.submitBtn.querySelector('.spinner').style.display = 'none';

                // } else {
                //     this.error('Error, can not submit your story, please try again.');
                //     //turn off spinner
                //     this.submitBtn.querySelector('.spinner').style.display = 'none';
                //     //activate the submit button again
                //     this.submitBtn.classList.remove('disable');
                // }

            })
            .catch(error => {
                console.log('problem!', error);
            });

            
    }

    function sanitizeHTML(str) {
        return str.replace(/[^\w. ]/gi, function (c) {
            return '&#' + c.charCodeAt(0) + ';';
        });
    }



});