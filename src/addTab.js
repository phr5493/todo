const addTab = (title) => {

    const proCon = document.getElementById("projectContainer");

    const newBtn = document.createElement("BUTTON");
    newBtn.className = "project"
    newBtn.id = title
    newBtn.textContent = title
    proCon.appendChild(newBtn);
}

export default addTab