// write js code here corresponding to matches.html


var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
 
var favArr = JSON.parse(localStorage.getItem("favourites")) || [];
dispalyMatches(matchArr)

  var filter = document.querySelector("#filterVenue")
  filter.addEventListener("change",handleFilter)

  function handleFilter()
   {   
    var selected = document.querySelector("#filterVenue").value;
       if(selected == "none")
        {
            dispalyMatches(matchArr)
        }
        else{
     var filteredList = matchArr.filter(function(elem){
         return elem.venue == selected;
     })
     dispalyMatches(filteredList)
    }
   }



function dispalyMatches(matchArr)
 {
      document.querySelector("tbody").innerHTML="";
     matchArr.forEach(function(elem){

        var tr = document.createElement("tr");
        
        var td1 = document.createElement("td");
        td1.innerText = elem.matchNum;
        

        var td2 = document.createElement("td");
        td2.innerText = elem.teamA;

        var td3 = document.createElement("td");
        td3.innerText = elem.teamB;

        var td4 = document.createElement("td");
        td4.innerText = elem.date;


        var td5 = document.createElement("td");
        td5.innerText = elem.venue;

        var td6 = document.createElement("td");
        td6.innerText = "Favourite";
        td6.style.color="green";
        td6.style.cursor="pointer"
        td6.addEventListener("click",function(){
            favFun(elem)
        })
         
            
         
     
        tr.append(td1,td2,td3,td4,td5,td6)
       // console.log(tr);
        document.querySelector("tbody").append(tr)
     })

   function favFun(elem)
   {
     favArr.push(elem);
     //console.log(favArr)
     localStorage.setItem("favourites",JSON.stringify(favArr));
   }
   //console.log(elem)



 }