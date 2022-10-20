// Create our shared stylesheet:
const Sheet = new CSSStyleSheet();
Sheet.replaceSync(
    `
        p, h2 {
            margin:0px;
            padding:0px;
            line-height: 1.3;
        }

        h2 {
            font-family: var(--global-typeface-headline-family);
            font-size: var(--global-typeface-headline-size);
            font-weight: 300;
            margin-bottom: var(--global-spacing-scale-small);
        }

        p {
            font-family: var(--global-typeface-copy-family);
            font-weight: 400;
            font-size: var(--global-typeface-copy-size);
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