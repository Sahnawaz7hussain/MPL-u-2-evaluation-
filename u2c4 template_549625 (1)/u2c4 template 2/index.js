// write js code here corresponding to index.html
// You should add submit event on the form

document.querySelector("#masaiForm").addEventListener("submit",formFun);
var matchArr = JSON.parse(localStorage.getItem("schedule")) || [];
// var matchArr = [];
function formFun()
 { 
     document.querySelector("#masaiForm").innerHTMl=""
     event.preventDefault();
     var matchNum = document.querySelector("#matchNum").value;
    // console.log(matchNum)
     var teamA = document.querySelector("#teamA").value;

     var teamB = document.querySelector("#teamB").value;

     var date = document.querySelector("#date").value;

     var venue = document.querySelector("#venue").value;
    // console.log(matchNum,teamA,teamB,date,venue)
    var matchObj = {
        matchNum:matchNum,
        teamA:teamA,
        teamB:teamB,
        date:date,
        venue:venue
    }
    matchArr.push(matchObj)
//console.log(matchArr)
  localStorage.setItem("schedule",JSON.stringify(matchArr))
  window.location.reload()
  alert("Scheduled successfully")
 }
