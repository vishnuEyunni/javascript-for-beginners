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
    this.checkbox = shadow.querySelector('input')
  }

  static get observedAttributes() {
    return ["checked"]
  }

  attributeChangedCallback(name, old, newValue) {
    if (name == "checked") {
      this.updatedChecked(newValue)
    }
  }

  connectedCallback() {
    console.log("connected");
  }

  disconnectedCallback() {
    console.log("disconnected");
  }

  updatedChecked(value) {
    this.checkbox.checked = value != null && value !== "false"
  }
}

customElements.define('todo-item', TodoItem)