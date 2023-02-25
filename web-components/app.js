const template = document.createElement("template")

template.innerHTML = `
  <style>
    h3 {color: green;}
    label {
      color: red;
      display: block;
    }

    .desc {
      font-size: .65rem;
      font-weight: lighter;
      color: #777;
    }
    </style>

  <label>
    <input type="checkbox" />
    <slot></slot>
    <span class="desc">
      <slot name="desc">
      </slot>
    </span>
  </label>
`

class TodoItem extends HTMLElement {
  constructor() {
    super()
    const shadow = this.attachShadow({
      mode: 'open'
    })
    shadow.append(template.content.cloneNode(true));
  }

  static get observedAttributes() {
    return ["checkeds"]
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(name, oldValue, newValue)
  }
}

customElements.define("todo-item", TodoItem)