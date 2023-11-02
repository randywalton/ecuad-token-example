// Create our component stylesheet:
const Sheet = new CSSStyleSheet();
Sheet.replaceSync(
    `

    :host {

        display: block;
        width: 100%;
        padding: var(--global-spacing-scale-large);

        margin: 1rem 0;
    }
        p, h2 {
            margin:0px;
            padding:0px;
            line-height: 1.3;
        }

        h2 {
            font-family: var(--global-typeface-headline-family);
            font-size: var(--global-typeface-headline-size);
            font-weight: 300;
            margin-bottom: 0.4rem;
        }

        p {
            font-family: var(--global-typeface-copy-family);
            font-weight: 400;
            font-size: var(--global-typeface-copy-size);
        }

        // h2.light, p.light{
        //     color: var(--light-theme-card-text-color);
        // }

        // h2.dark, p.dark{
        //     color: var(--dark-theme-card-text-color);
        // }

       
    `
);

export { Sheet }