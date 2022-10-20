// Create our shared stylesheet:
const Sheet = new CSSStyleSheet();
Sheet.replaceSync(
    `
        p, h2 {
            margin:0px;
            padding:0px
        }

        h2 {
            margin-bottom: var(--global-spacing-scale-small);
        }

        h2.light, p.light{
            color: var(--light-theme-color-on-primary);
        }

        h2.dark, p.dark{
            color: var(--dark-theme-color-on-primary);
        }

       
    `
);

// Apply the stylesheet to a document:
//document.adoptedStyleSheets = [sheet];


export { Sheet }