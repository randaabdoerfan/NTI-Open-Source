window.addEventListener("load", function () {
    let copied=null;
    let text = document.getElementById("copied_text");
    btn = document.getElementById("btn");
    document.addEventListener("click",function(e){
         if (e.target.tagName === 'SPAN') {
            
        
        e.target.innerText = "copied ✅"
        copied = e.target.parentElement.nextElementSibling.innerText;
        navigator.clipboard.writeText(copied)
        console.log(copied);
        setTimeout(function(){e.target.innerText ="copy";},1500)
    }
    })
    text.addEventListener("click",function(){
        text.innerText = copied;
    })
    text.addEventListener("click", function () {

    if (text.innerText.trim() !== "") {

        btn.disabled = false;
        btn.style.backgroundColor = "blue";
        btn.style.color = "white";
        btn.style.cursor = "pointer";
    }

    else {

        btn.disabled = true;
        btn.classList.remove("active");
    }

});
   




})