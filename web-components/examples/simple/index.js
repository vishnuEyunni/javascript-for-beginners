class WordCount extends HTMLElement {
  constructor() {
    super()
    const wcParent = this.parentNode;

    function countWords(node) {
      const text = node.innerText || node.textContent;
      return text
        .trim()
        .split(/\s+/g)
        .filter((a) => a.trim().length > 0).length;
    }

    // const count = `Words: ${countWords(wcParent)}`;
    const count = `Words: 12`;

    const shadow = this.attachShadow({ mode: "open" });
    const text = document.createElement("span");
    text.textContent = count;
    shadow.appendChild(text);

    // setInterval(() => {
    //   const count = `Words: ${countWords(wcParent)}`;
    //   text.textContent = count;
    // }, 200)
  }
}

class TextCount extends HTMLElement {
  constructor() {
    super();

    const parent = this.parentNode;
    console.log(this.children)
    if (this.innerText.length > 0) {

      const shadow = this.attachShadow({ mode: 'open' })
      const el = document.createElement('span');
      el.textContent = 'this is sparta!';
      el.setAttribute('style', 'color: red')
      shadow.appendChild(el)
    }
  }
}

customElements.define('text-count', TextCount);
customElements.define('word-count', WordCount);