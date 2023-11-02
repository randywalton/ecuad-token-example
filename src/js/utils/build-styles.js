
// Arrays for token sets
let primary = [];
let neutral = [];
let fontSizes = [];
let typography = [];
let spacing = [];
let lightTheme = [];
let darkTheme = [];

function constructCSSVars() {
    //get the token data
    fetch('../data/tokens-v1.json')
        .then(res => res.json()) // the .json() method parses the JSON response into a JS object literal
        .then(data => {
            //send the data to be sorted
            sortData(data);
        });
}
constructCSSVars();


function sortData(data) {
    //define globals vs themes
    let globalData = data.global;
    let lightData = data.light;
    let darkData = data.dark;
   

    //create ref primary css vars
    for (let key in globalData['color']['primary']) {
        primary.push(
            `--global-color-primary-${key}: ${globalData['color']['primary'][key].value};`
        );
    }

    //create ref neutral css vars
    for (let key in globalData['color']['neutral']) {

        neutral.push(`--global-color-neutral-${key}: ${globalData['color']['neutral'][key].value};`);
    }

    //create ref fonts css vars
    for (let key in globalData['fontSize']) {

        fontSizes.push(
            `--global-fontSize-${key}: ${globalData['fontSize'][key].value}px;`
        );   
    }

    for (let key in globalData['fontFamilies']) {

        fontSizes.push(
            `--global-fontFamilies-${key}: ${globalData['fontFamilies'][key].value};`
        );   
    }

    //create typography css vars
    for (let key in globalData['typeface']) {

        if (key === 'headline') {

            typography.push(
                `--global-typeface-${key}-family: var(--global-${setCSSVarName(globalData['typeface'][key].value['fontFamily'])});`,
                `--global-typeface-${key}-size: var(--global-${setCSSVarName(globalData['typeface'][key].value['fontSize'])});`
            );
        } else if (key === 'copy') {
            typography.push(
                `--global-typeface-${key}-family: var(--global-${setCSSVarName(globalData['typeface'][key].value['fontFamily'])});`,
                `--global-typeface-${key}-size: var(--global-${setCSSVarName(globalData['typeface'][key].value['fontSize'])});`
            );
            
        }
        
    }

    // //create ref spacing css vars
    for (let key in globalData['spacing']) {

        spacing.push(
            `--global-spacing-${key}: ${globalData['spacing'][key].value}px;`
        );
        
    }

    // //create ref radius css vars
    // for (let key in globalData['radius-scale']) {

    //     radius.push(
    //         `--global-radius-scale-${key}: ${globalData['radius-scale'][key].value}px;`
    //     );
        
    // }

    // //create ref elevation css vars
    // for (let key in globalData['elevation-scale']) {

    //     let x = globalData['elevation-scale'][key].value['x'];
    //     let y = globalData['elevation-scale'][key].value['y'];
    //     let blur = globalData['elevation-scale'][key].value['blur'];
    //     let spread = globalData['elevation-scale'][key].value['spread'];
    //     let color = setCSSVarName(globalData['elevation-scale'][key].value['color']);

    //     elevation.push(
    //         `--global-elevation-scale-${key}: ${x}px ${y}px ${blur}px ${spread}px var(--global-${color});`
    //     );
        
    // }



    //create light-theme css vars
    for (let key in lightData) {

        lightTheme.push(
            `--light-theme-${key}: var(--global-${setCSSVarName(lightData[key].value)});`
        );
        
    }

    //create dark-theme css vars
    for (let key in darkData) {

        darkTheme.push(
            `--dark-theme-${key}: var(--global-${setCSSVarName(darkData[key].value)});`
        );
        
    }

    createStyleSheet();

}

//this is to alter tokens referencing other tokens, create a proper name
function setCSSVarName(data) {
    const chars = {'{':'','}':'','.':'-'};
    let name = data;
    return name.replace(/[{}.]/g, m => chars[m]);
}

function createStyleSheet() {
    
    // Create our shared stylesheet:
    const globalStyles = new CSSStyleSheet();

    globalStyles.replaceSync(
        `
        :root {
            /* Color */
            ${primary.join(' ')}
            ${neutral.join(' ')}
            /* Type */
            ${fontSizes.join(' ')}
            ${typography.join(' ')}
            /* Scales */
            ${spacing.join(' ')}
            /* Themes */
            ${lightTheme.join(' ')}
            ${darkTheme.join(' ')}
        }

        `
    );

    // Apply the stylesheet to a document:
    document.adoptedStyleSheets = [globalStyles];
}

export { constructCSSVars }