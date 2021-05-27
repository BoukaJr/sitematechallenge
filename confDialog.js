class confDialog extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        var welcomeMessage = this.attributes.welcomeMessage.value
        this.innerHTML = `
        <div id="container" style="display:block;">
            <p>${welcomeMessage}</p>
            <button type="button" onclick="clickedYes()">Yes</button>
            <button type="button" onclick="clickedCancel()">Cancel</button>
        </div>
        `;
      }
}

customElements.define('dialog-component', confDialog);

function clickedYes(){
    clicked = true
    document.getElementById("output").innerHTML = clicked;

}

function clickedCancel(){
    clicked = false
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById("output").innerHTML = clicked;

}

var clicked = null