class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  static get ObserverAtributes() {
    return 'title', 'parrafo', 'img';
  }
  attributeChangedCallback(atribute, oldVal, newVal) {
    if (atribute === 'title') {
      this.title = newVal;
    }
    if (atribute === 'parrafo') {
      this.parrafo = newVal;
    }
    if (atribute === 'parrafo') {
      this.img = newVal;
    }
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
    <section>
     <h2>${this.title}</h2>
     <div>
      <p>${this.parrafo}</p>
      <img src=${this.img}/>
     </div>
    </section>
    ${this.getStyles()}
    `;
    return template;
  }

  getStyles() {
    return `
    <style>
      h2{
        color:blue
      }
    </style>
    `;
  }

  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}

customElements.define('my-element', myElement);
