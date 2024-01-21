let inputBox = document.querySelector('#inputBox');
let list = document.querySelector('#list');

inputBox.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addItem(inputBox.value)
        inputBox.value == "";
    }
})

let addItem = (inputText)=>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputText} <i></i>`;
    
    listItem.addEventListener("click",function(){
        this.classList.toggle('done');
    })
    
    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })


    list.appendChild(listItem);
}

