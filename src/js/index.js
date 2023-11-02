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
    const body = document.getElementsByTagName('body')[0];

    themeSelect.addEventListener('change' , (e) => {

        if(e.target.value === 'dark') {
            siteHeader.classList.remove('light');
            siteHeader.classList.add('dark');

            body.classList.remove('light-bg');
            body.classList.add('dark-bg');

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

            const cardUpdated = new CustomEvent('cardUpdated', {
                bubbles: true,
                detail: { update: 'light' }
            });
            dispatchEvent(cardUpdated);
        }

    });



    const options = {
        element: ':root',
        pretty: true
    }


    function testCSSVars() {
        //get the token data
        fetch('../data/tokens-v1.json')
            .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
            .then(data => {
                //send the data to be sorted
                console.log(data);
                console.log(data.global);
                console.log(data.global.refscale.primary);
                console.log(Object.keys(data.global.refscale.primary.primary10).map(v => ({[v]: {...data[v]}})));
                console.log(jsonToCssVariables(data.global.refscale.primary, options));
            });
    }
    testCSSVars();

   

    function jsonToCssVariables(json, options) {
        options = options || {}
      
        const offset = options.offset === undefined ? 0 : options.offset
      
        let count = 0
        let output = `${options.element ? options.element : ':host'} {${options.pretty ? '\n' : ''}`
      
        for (let key in json) {
          if (count >= offset) {
            let value = json[key].value
      
            if (!isNaN(value) && value !== 0) {
              value += options.unit === undefined ? 'px' : options.unit
            }
      
            output += `${options.pretty ? '\t' : ''}--${key}: ${value};${options.pretty ? '\n' : ''}`
          }
      
          count++
        }
      
        output += '}'
      
        return output
      }


});