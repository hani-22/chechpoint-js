// Equality of three values
function Equal(a, b, c) {
    return (a == b && b == c);
}
/*
console.log(Equal(1,2,3));
console.log(Equal("test", "test", "test"))
*/

// Convert	Minutes	to	seconds
function minuteConvert(min) {
    return (min * 60)
}
/*
console.log(minuteConvert(2))	 ///	60s
console.log(minuteConvert(3))	 ///180s
*/
// Return	the	Area	of	a	rectangle
function hightAndWidth(hight, width) {
    return (hight * width)

}
/*
console.log(hightAndWidth(2,2))	 ///	4
console.log(hightAndWidth(10,5))	 //	50
console.log(hightAndWidth(6,3))	 //	18
*/
// The	next	number

function nextInt(n) {
    return (n + 1)
}
/*
console.log(nextInt(1))	 ///	2
console.log	(nextInt	(9))	 ///10
*/
//Football	Points
function footballPts(wins, draws, defeats) {
    return (wins * 3, draws * 1, defeats)
}
/*console.log(footballPts(1,2,1))	 ///	5pts
console.log(footballPts(0,0,4))	 ///	 0pts


let students = ["hani","chakib","nawel"];
console.log(students.length)
for (let i = 0; i++) {

    //cosole.log["position" + i + ":"
}
*/



function formSubmit(e) {
    e.preventDefault();
    console.log("hhh" + btnSend)
    // selectionner nom 
    let nom = document.querySelector("#nom").value;
    // selectionner prénom 
    let prenom = document.querySelector("#prenom").value;
    console.log("!!!" + nom)
    document.querySelector("#result").innerHTML = `Hello ${nom} ${prenom}` 
}
let btnSend = document.getElementById("send")
btnSend.addEventListener("click",e => formSubmit(e));
