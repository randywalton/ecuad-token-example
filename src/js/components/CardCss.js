// Create our shared stylesheet:
const Sheet = new CSSStyleSheet();
Sheet.replaceSync('p {color: var(--global-color-scale-primary-primary30)');

// Apply the stylesheet to a document:
//document.adoptedStyleSheets = [sheet];


export { Sheet }