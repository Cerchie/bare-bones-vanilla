function changeColor() {
    document.getElementById('div-hello').classList.toggle("class2")
}

document.getElementById('button').addEventListener('click', changeColor);

// resource: https://stackoverflow.com/questions/47310463/change-class-of-a-element-when-clicking-on-a-button