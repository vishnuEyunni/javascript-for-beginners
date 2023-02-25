const template = document.createElement('template');

template.innerHTML = `
  <style>
    .description {
      color: red;
      font-size: 12px;
    }
  </style>
  <div>
    <label>
      <input type="checkbox" />
      <slot></slot>
      <span class="description">
        <slot name="description"></slot>
      </span>
    </label>
  </div>
`;

class TodoItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define('todo-item', TodoItem)