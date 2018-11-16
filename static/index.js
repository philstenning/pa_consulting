const firstP = document.getElementsByTagName('p')[0];
firstP.innerHTML="hello from javaScript";

document.getElementsByTagName('button')[0].
    addEventListener("click", ()=> getDataFromServer());

console.log('code is working if you see this ');

setInterval(update,1000);

function update() {
    // you could use this to update the ui.
    let d = new Date();
    document.getElementById("time").innerHTML = d.toLocaleTimeString();
}


function getDataFromServer(){
    
    fetch('http://localhost:5000/api/person')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        firstP.innerHTML ="Data fetched from server: " + JSON.stringify(myJson)
    });
    
}