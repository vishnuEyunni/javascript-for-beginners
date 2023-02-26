# Custom Elements

There are two types of custom elements:

- Autonomous Custom Elements
- Customized built-in elements

## Autonomous Custom Elements

These aren't inherited from standard HTMl elements. You use these on a page by literally writing them out as HTML elements.

## Customized built-in elements

There are inherited from basic HTML elements. To create one of these, you have to specify which HTML element they extend.They are used by writing out the basic element but specifying the name of the custom element in the `is` attribute.

For example `<p is="word-count">` or `document.createElement("p",{is: "word-count"})`.