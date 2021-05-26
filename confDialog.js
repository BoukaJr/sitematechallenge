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
            <div id='yes' style="display:none;">
                You clicked yes!
            </div>
            <button type="button" onclick="clickedCancel()">Cancel</button>
        </div>
        <div id="cancelMessage" style="display:none;"><div>
        `;
      }
}

customElements.define('dialog-component', confDialog);

function clickedYes(){
    document.getElementById('yes').style.display = "block";
}
function clickedCancel(){
    document.getElementById('container').style.display = "none";
    document.getElementById('cancelMessage').style.display = "block";
}