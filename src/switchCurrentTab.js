const switchTab = (newTab, oldTab) => {
    document.getElementById(oldTab).classList.remove("current");
    document.getElementById(newTab).classList.add("current");
}

export default switchTab