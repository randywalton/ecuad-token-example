
// Arrays for token sets
let purple = [];
let yellow = [];
let neutral = [];
let fontSizes = [];
let typography = [];
let spacing = [];
let lightTheme = [];
let darkTheme = [];

function constructCSSVars() {
    //get the token data
    fetch('./data/tokens.json')
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
    for (let key in globalData['color']['purple']) {
        purple.push(
            `--global-color-purple-${key}: ${globalData['color']['purple'][key].value};`
        );
    }

    for (let key in globalData['color']['yellow']) {
        purple.push(
            `--global-color-yellow-${key}: ${globalData['color']['yellow'][key].value};`
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
            ${purple.join(' ')}
            ${yellow.join(' ')}
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