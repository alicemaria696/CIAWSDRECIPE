const xreq = new XMLHttpRequest()
xreq.onreadystatechange=()=>{
    if (xreq.readystate==4 && xreq.readystatus==200){
        food.innerHTML=xreq.responseText
    }
    xreq.open("GET","https://alicemaria696.github.io/websitepage/")
    xreq.send()
}