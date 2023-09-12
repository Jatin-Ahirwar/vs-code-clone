function chaluband(){
    document.querySelectorAll("form").forEach(function(data){
        data.style.display = "none"
    })
}

chaluband()

document.querySelector("#fileicon").addEventListener("click",function(){
    chaluband()
    document.querySelector("#fileform").style.display = "initial"
})
document.querySelector("#foldericon").addEventListener("click",function(){
    chaluband()
    document.querySelector("#folderform").style.display = "initial"
})

window.addEventListener("keydown",function(elem){
    if(elem.KeyCode === 27){
        chaluband()
        document.querySelectorAll("form .input").forEach(function(elem){
            elem.value = ""
        })
    }
})


function onoff(){
    document.querySelectorAll("form").forEach(function(data){
        data.style.display = "none"
    })
}

onoff()

document.querySelector("#fileicon").addEventListener("click",function(){
    onoff()
    document.querySelector("#fileform").style.display = "initial"

})

document.querySelector("#foldericon").addEventListener("click",function(){
    onoff()
    document.querySelector("#folderform").style.display = "initial"
})

window.addEventListener("click",function(){
    if(elem.KeyCode === 27){
        onoff()
        document.querySelectorAll("form .input").forEach(function(elem){
            elem.value = ""
        })
    }
})