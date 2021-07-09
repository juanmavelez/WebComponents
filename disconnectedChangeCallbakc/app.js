class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log('hola desde el constructor - Memoria');
  }
  connectedCallback() {
    console.log('Hola desde el DOM');
  }
  disconnectedCallback() {
    console.log('Me voy del DOM');
  }
}
customElements.define('my-element', MyCustomElement);

document.querySelector('my-element').remove();
