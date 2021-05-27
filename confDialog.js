class confDialog extends HTMLElement {
    constructor(){
        super();
    }

    connectedCallback() {
        var welcomeMessage = this.attributes.welcomeMessage.value
        this.innerHTML = `
        <div id="container">
            <p>${welcomeMessage}</p>
            <button type="button" class="button" id="yes" onclick="clickedYes()">Yes</button>
            <button type="button" class="button" id="cancel" onclick="clickedCancel()">Cancel</button>
        </div>
        `;
      }
}

customElements.define('dialog-component', confDialog);

function clickedYes(){
    clicked = 'You clicked yes!'
    document.getElementById("output").innerHTML = clicked;
    document.getElementById('dialogbox').style.display = "none";


}

function clickedCancel(){
    clicked = 'You didnt click yes :('
    document.getElementById('dialogbox').style.display = "none";
    document.getElementById("output").innerHTML = clicked;

}

var clicked = null