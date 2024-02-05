document.getElementById("btn").addEventListener("click",advice);
function advice()
{ 
    document.getElementById('advice').innerHTML="";
    fetch('https://api.adviceslip.com/advice')
    .then(response=>response.json())
    .then(data=>{
    console.log(data);
    var i = 0;
    var txt = JSON.stringify(data.slip.advice);
    var speed = 50;
    function typeWriter() {
        if (i < txt.length) {
            document.getElementById('advice').innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();
    document.getElementById('n').innerHTML="#"+data.slip.id;})
}