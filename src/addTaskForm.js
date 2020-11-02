const generateForm = (inputs, types) => {
    var temp

    const infoCon = document.getElementById("infoContainer");

    const formField = document.createElement("FIELDSET");
    formField.id = "inputForm"
    infoCon.appendChild(formField);

    for(var i in inputs){
        temp = inputs[i].toLowerCase()

        const inLabel = document.createElement("LABEL");
        inLabel.setAttribute("for", temp);
        inLabel.className = "form"
        inLabel.textContent = temp.charAt(0).toUpperCase() + temp.slice(1)
        const inInput = document.createElement("INPUT");
        inInput.setAttribute("type", types[i]);
        inInput.setAttribute("name", temp);
        inInput.className = "form"
        inInput.setId = temp;

        formField.appendChild(inLabel);
        formField.appendChild(inInput);
    }

    const submitBtn = document.createElement("BUTTON");
    submitBtn.className = "form"
    submitBtn.id = "submitBtn"
    submitBtn.textContent = "Create new task"
    formField.appendChild(submitBtn);
}

export default generateForm