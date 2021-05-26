class confDialog extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        var welcomeMessage = this.attributes.welcomeMessage.value
        this.innerHTML = `
          <style>

          </style>
          <button type="button">Click Me</button>
          <p>${welcomeMessage}</p>
        `;
      }
}

customElements.define('dialog-component', confDialog);