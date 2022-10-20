
// Arrays for token sets
let primary = [];
let neutral = [];
let fonts = [];
let typography = [];
let radius = [];
let elevation = [];
let spacing = [];
let lightTheme = [];
let darkTheme = [];

function constructCSSVars() {
    //get the token data
    fetch('../data/tokens.json')
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
    let lightData = data['light-theme'];
    let darkData = data['dark-theme'];

    //create ref primary css vars
    for (let key in globalData['color-scale']['primary']) {
        primary.push(
            `--global-color-scale-primary-${key}: ${globalData['color-scale']['primary'][key].value};`
        );
    }

    //create ref neutral css vars
    for (let key in globalData['color-scale']['neutral']) {

        if (key !== 'emphasis-dark-scale') {
            neutral.push(
                `--global-color-scale-neutral-${key}: ${globalData['color-scale']['neutral'][key].value};`
            );
        } else {
            neutral.push(
                `--global-color-scale-neutral-${key}-low: ${globalData['color-scale']['neutral'][key]['low'].value};`,
                `--global-color-scale-neutral-${key}-high: ${globalData['color-scale']['neutral'][key]['high'].value};`
            );
        }
        
    }

    //create ref fonts css vars
    for (let key in globalData['font']) {

        if (key !== 'font-scale') {
            fonts.push(
                `--global-font-${key}: ${globalData['font'][key].value}, sans-serif;`
            );
        } else {
            fonts.push(
                `--global-font-${key}-0: ${globalData['font'][key]['0'].value}px;`,
                `--global-font-${key}-1: ${globalData['font'][key]['1'].value}px;`,
                `--global-font-${key}-2: ${globalData['font'][key]['2'].value}px;`,
                `--global-font-${key}-3: ${globalData['font'][key]['3'].value}px;`
            );
            
        }
        
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

    //create ref spacing css vars
    for (let key in globalData['spacing-scale']) {

        spacing.push(
            `--global-spacing-scale-${key}: ${globalData['spacing-scale'][key].value}px;`
        );
        
    }

    //create ref radius css vars
    for (let key in globalData['radius-scale']) {

        radius.push(
            `--global-radius-scale-${key}: ${globalData['radius-scale'][key].value}px;`
        );
        
    }

    //create ref elevation css vars
    for (let key in globalData['elevation-scale']) {

        let x = globalData['elevation-scale'][key].value['x'];
        let y = globalData['elevation-scale'][key].value['y'];
        let blur = globalData['elevation-scale'][key].value['blur'];
        let spread = globalData['elevation-scale'][key].value['spread'];
        let color = setCSSVarName(globalData['elevation-scale'][key].value['color']);

        elevation.push(
            `--global-elevation-scale-${key}: ${x}px ${y}px ${blur}px ${spread}px var(--global-${color});`
        );
        
    }

    //create light-theme css vars
    for (let key in lightData['color']) {

        lightTheme.push(
            `--light-theme-color-${key}: var(--global-${setCSSVarName(lightData['color'][key].value)});`
        );
        
    }

    //create dark-theme css vars
    for (let key in darkData['color']) {

        darkTheme.push(
            `--dark-theme-color-${key}: var(--global-${setCSSVarName(darkData['color'][key].value)});`
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
            ${fonts.join(' ')}
            ${typography.join(' ')}
            /* Scales */
            ${radius.join(' ')}
            ${elevation.join(' ')}
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