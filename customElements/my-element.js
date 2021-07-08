const template = document.createElement('div')
template.innerHTML =`
  <style>
    p{
      color:blue
    }
    .texto{
      color:red
    }
  </style>
  <p class="texto">Hola mundo</p>
  <p>Texto ejemplo<p>
  `;

class myElement extends HTMLElement{
  constructor() {
    super();
    this.p = document.createElement('p');
  }
  connectedCallback() {
    this.p.textContent = "hola"
    this.appendChild(this.p)
    console.log(template)
    this.append(template)
  }
}


customElements.define('my-element', myElement)
