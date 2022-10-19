// Create our shared stylesheet:
const Sheet = new CSSStyleSheet();
Sheet.replaceSync('p {color: var(--test-component-color)}');

// Apply the stylesheet to a document:
//document.adoptedStyleSheets = [sheet];


export { Sheet }