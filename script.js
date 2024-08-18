function test(){
    window.addEventListener('mouseover', (e) => {
        const {
          clientX: x,
          clientY: y
        } = e
        const elementMouseIsOver = document.elementFromPoint(x, y);
        // console.log(elementMouseIsOver)
        elementMouseIsOver.style.opacity = "1";
      })
}
function createBoards(lineL){
    var container = document.querySelector(".board")
    for(var j = 0; j < 16; j++){
        var line = document.createElement("div");
        line.classList.add("line");
        for(var i = 0; i < 16; i++){
            var box = document.createElement("span");
            box.id = (j*100) + i;
            box.textContent = "a "
            box.addEventListener("mouseover", test)
            line.appendChild(box);
        }
        container.appendChild(line);
    }
    document.querySelector(".bigboard").appendChild(container);
}


createBoards(2);


