var myDate;
setInterval(function(){
    myDate = new Date();
    document.getElementById("p1").innerHTML=myDate.toLocaleString()
},1000)

