const template = document.createElement('template');

template.innerHTML = `
  <style>
    h3 {color: green;}
  </style>
  <h3 data-title>
    <slot></slot>
  </h3>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define('todo-item', TodoItem)