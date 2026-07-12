window.addEventListener("load", function () {

    let move = document.getElementById("move");
    let back = document.getElementById("back");
    let copy = null;
    let selected = null;
    
    
    callme();

    function callme() {
        let elments = document.querySelectorAll('li');
        for (let i = 0; i < elments.length; i++) {

            elments[i].addEventListener("click", function () {
                selected = elments[i];
                copy = elments[i].cloneNode(true);

                elments[i].style.background = "blue";
                elments[i].style.color = "white";

            });
        }

    }

    move.addEventListener("click", function () {

        if (copy && selected) {
            document.querySelector(".right ul").appendChild(copy);
            copy.style.background = "lightgray";
            copy.style.color = "black";
            selected.remove();
            callme();   
        }

    });

    
    
    back.addEventListener("click", function () {

        if (copy) {
            document.querySelector(".left ul").appendChild(copy);
            copy.style.background = "lightgray";
            copy.style.color = "black";
            selected.remove(); 
            callme();  
        }
        

    });

});