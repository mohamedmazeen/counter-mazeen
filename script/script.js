/**
*
* script.js 
* @author - Mazeen
* @date - 28/7/2023 
**/
function counter() {
    var characters = document.getElementById("input").value;
    characters = characters.length;
    document.getElementById("result").innerHTML = characters;
}