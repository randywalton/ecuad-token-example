# Design Token Example

## This repo shows an example of Design Tokens and their connection between UX and Development

### Overview

This is an example for students showing how a program like Figma can set up Design Tokens a developer can then use as they build an app / website. This also illustrates how Design Tokens work, e.g. like a 'bridge', between the UI layout and the coded layout. The example is based on an in-class walkthrough in which basic global tokens were built for a simple card along with some semantic level tokens, e.g. a light and dark theme. 

Using the Figma build file (with the Figma Tokens Plugin) you can update the tokens and push to this repo, updating the design of the card(s). Vice versa, you can update the tokens.json file directly (e.g. the developer) and then pull the changes into Figma, updating that files tokens and design.

This example also utilizes a Headless cms system (Cockpit CMS) to explore how API's work and illustrate the difference between Headless and Traditional CMS's

### File Details

Tokens are being created at runtime through JS, it's not meant for a live website setup, its focus on creating a simple example that can be updated through, Figma or VS code using a Token structure.

Themes folder, these three html page are intended to simulate how the Headless CMS works with content, e.g. you can have many different 'heads' all using the same CMS.