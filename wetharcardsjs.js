city=[];
fetch("https://restcountries.com/v3/all")
.then(function(data){
    return data.json();
})
.then(function(jasondata){
    var wholediv=document.createElement("div");
    wholediv.setAttribute("class","container");
    for(var i=0 ; i<250 ; i++)
    {
        var mydiv = document.createElement("div");
        mydiv.setAttribute("class","divcontainer");
        /*console.log(jasondata[i].name.official);
        console.log(jasondata[i].capital);*/

        var imgdiv = document.createElement("div");
        imgdiv.setAttribute("class","imgdiv");
        var countryflag = document.createElement("img");
        /*console.log(jasondata[i].flags[1]);*/
        countryflag.src=jasondata[i].flags[1];
        imgdiv.appendChild(countryflag);
        mydiv.appendChild(imgdiv);

        var cont = document.createElement("div");
        cont.innerHTML="<b>Country :</b><br>"+jasondata[i].name.official+"<br>";
        cont.innerHTML+="<b>Capital :</b><br>"+jasondata[i].capital+"<br>";

        mydiv.appendChild(cont);

        var butdiv = document.createElement("div");
        var mybutton = document.createElement("button");
        mybutton.setAttribute("id",jasondata[i].capital);
        /*mybutton.setAttribute("onclick","displayweather('"+jasondata[i].capital+"')");*/
        mybutton.setAttribute("onclick","displayweather(this)");
        mybutton.innerHTML = "Weather";
        butdiv.appendChild(mybutton);
        mydiv.appendChild(butdiv);
        
        wholediv.appendChild(mydiv);

    }
    document.body.appendChild(wholediv);


})
.catch(function(err){
    console.log(err);
})
function displayweather(param){
    console.log("executing");
    console.log(param);
    console.log(param.id);
    fetch("http://api.openweathermap.org/data/2.5/weather?q="+param.id+"&appid=4c57ba119b7b59e6a53a607db3743960")
    .then(function(data1){
        return data1.json();
    })
    .then(function(resultdata){
        var temp= resultdata.main.temp;
        console.log(temp);
        alert("The temperature is :"+temp);
    })
    .catch(function(err){
        console.log(err);
    })
}





