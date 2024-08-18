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
function createBoards16(){
    var container = document.querySelector(".board")
    container.innerHTML = "";
    // var size = parseInt(10000 / (32*32)) + "px";
    

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
function createBoards32(){
    var container = document.querySelector(".board")
    container.innerHTML = "";
    // var size = parseInt(10000 / (32*32)) + "px";
    

    for(var j = 0; j < 32; j++){
        var line = document.createElement("div");
        line.classList.add("line");
        for(var i = 0; i < 32; i++){
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


// createBoards();


