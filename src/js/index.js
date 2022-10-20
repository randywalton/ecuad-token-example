import { Card } from "./components/Card.js";

document.addEventListener('DOMContentLoaded', (e) => {

let myData;
    fetch('../data/tokens.json')
  .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
  .then(data => getData(data));

let primary = [];

  function getData(data) {

    myData = data.global;
    //console.log(myData);

    for( let key in myData['color-scale']['primary'] ) {
        //console.log( key, myData['color-scale']['primary'][key].value );

        primary.push(
            `--global-color-scale-primary-${key}: ${myData['color-scale']['primary'][key].value};`
        );
        
    }
   //console.log(primary);
   createStyles();
    
  }

//   var p = {
//     0: "value1",
//     "b": "value2",
//     key: "value3"
// };



function createStyles() {
    // Create our shared stylesheet:
    const globalStyles = new CSSStyleSheet();
    globalStyles.replaceSync(
        `
        :root {
            ${primary.join(' ')}
        }
        
        
        `
    );

    // Apply the stylesheet to a document:
    document.adoptedStyleSheets = [globalStyles];
}





    function buildColor() {
     
       
        primary.forEach(color => {

            return color
        });
        
    }
    
    
    

    // Define the new web component
    if ('customElements' in window) {
        customElements.define('custom-card', Card);

    }

});