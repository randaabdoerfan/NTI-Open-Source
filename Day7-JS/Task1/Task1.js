window.addEventListener("load",function(){
    _name = document.getElementsByName("_name")[0];
    _age = document.getElementsByName("_age")[0];
    _city = document.getElementsByName("_city")[0];
    btn = document.getElementById("btn");
    tbl = document.querySelector("table");
    let selectedRow = null;

    let count =1;
    btn.addEventListener("click",function(){
        if(_name.value ==""||_age.value ==""||_city.value ==""){
            alert("Please enter your data ...")
    
        }
        else{
             if (selectedRow != null) {

                selectedRow.children[1].innerText = _name.value;
                selectedRow.children[2].innerText = _age.value;
                selectedRow.children[3].innerText = _city.value;

                selectedRow = null;

                btn.value = "Add";
            }
            else{
             tbl.innerHTML+="<tr style='margin:10px'><td>"
        +count+"</td><td>"
        +_name.value+"</td><td>"
        +_age.value+"</td><td>"
        +_city.value+"</td>"
        +"<td><button id='edit' style='color:white;background:rgb(50, 77, 119); padding:7px;margin:3px;border-radius:5px;cursor:pointer'>Edit</button></td>"
        +"<td><button id='delete'  style='color:white;background:rgb(161, 21, 21);padding:7px;margin:3px;border-radius:5px;cursor:pointer'>Delete</button></td></tr>"
        count++;
            }
            _name.value = "";
            _age.value = "";
            _city.value = "";
        }
            
        
       
    })
    document.addEventListener("click",function(e){
        if(e.target.id === "edit"){
            btn.value = "Save";
            selectedRow = e.target.parentElement.parentElement;
            _name.value = selectedRow.children[1].innerText;
            _age.value = selectedRow.children[2].innerText;
            _city.value = selectedRow.children[3].innerText;

            

        }
         if(e.target.id === "delete"){
            e.target.parentElement.parentElement.remove();

        }
    })


})