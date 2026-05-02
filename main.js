
// 100.21.toFixed();// تقريب بس بطلع سترينغ
// Math.round(100.12);// تقريب
// Math.trunc(123.2323);// بتكب
// Math.floor(123.2323);// بتكب
// Math.ceil(123.2323);// بترفع
// "  131  ".trim();// بتقصقص الفراغات
// "".indexOf("");
// "".slice("");
// "".repeat;
// "".split
// "".substring();
// "".substr();
// "".includes(""); //true
// "".startsWith("");
// [].unshift();// array add first
// [].shift; // array delete first
// [].push; // array add last
// [].pop; // array delete last
// "".splice(Start, delete count, "new items" )
// "".concat(oldArray, anotherOldArray, "new quetu")
// "".join()
// let IgnoreNumbers = "elz123ero";
// let st = "";
// alert()
// confirm()
// prompt()
// setTimeout(method, timeout, argument);
// clearTimeout(timer name)
// setInterval(method, timeout, argument);
// clearInterval(timer name)
// location.replace("new url") //clear history
// location.assign("new url") // donr clear history
/* set(unique) vs array
    set: .delete();
    array: .splice() .shift() .pop();
    
    set: .has();
    array: .some(function(e){return e === }
    
    set: .add();
    array: .unshift() .push();
*/
/* map vs object(string only)
    map: .size();
    object: ما بعرف;
 
    map: map.has(key);
    object: obj.key === undefined;
*/


let btn = document.querySelector(".btn");
/** @type {HTMLElement} */
let side = document.querySelector(".sidebar");
btn.addEventListener("click", function(){document.body.classList.toggle("collapse")})


let up = document.querySelector(".up") ;
up.addEventListener("click", function(){window.scrollTo({top : 0 , left : 0, behavior : "smooth"})});
window.onscroll = function(){
if (this.scrollY <= 400) {
    up.style.display = "none";
} else {
    up.style.display = "block";
}
}

let theme = document.querySelector("#checkbox");
theme.addEventListener('change', (event) => {
    event.target.checked ? window.localStorage.setItem("color", "light") : window.localStorage.setItem("color", "night");
})
if(window.localStorage.getItem("color") == "light"){
    document.querySelector("#checkbox").checked = true ;
} else{
    document.querySelector("#checkbox").checked = false;
}

function createMail( id){
    let mail = document.createElement("div");
    mail.id = "mail_" + id;
    mail.classList.add("mail");
    let span = document.createElement("span");
    span.textContent = localStorage.getItem('mail_' + id);
    mail.appendChild(span);
    let trash = document.createElement("button");
    trash.style.position = "relative";
    let img = document.createElement("img");
    img.setAttribute("src", "https://icons8.com/icon/9zsHFzY89mt4/trash");
    img.style.position = "absolute";
    img.style.maxHeight = "100%" ;
    img.style.right = 0;
    img.style.top = 0;
    trash.appendChild(img);
    trash.addEventListener('click', function(e){
    window.localStorage.removeItem(e.currentTarget.parentElement.id);
    document.querySelector(".sidebar").removeChild(mail);
    })
    mail.appendChild(trash);
    document.querySelector(".sidebar").appendChild(mail);
}

let form = document.querySelector(".submiterDad");

form.addEventListener('submit', function (event) {
    event.preventDefault();
    let val = document.querySelector(".submiter").value;
    count = localStorage.getItem('userCount') || 1;
     if (/\w+@\w+\.\w+/.test(val)) {
         window.localStorage.setItem("mail_" + count , val);
         createMail(count);
         window.localStorage.setItem("userCount", +count + 1)
        }
})

for (let i = 1; i < window.localStorage.getItem("userCount");i++) {
    if(window.localStorage.getItem("mail_" + i) !== null){
        createMail(i);
    }
}

const locations = {
    10: 'first',
    20: 'sec',
    30: 'therd'
}
warning = 9;
const newarray = Object.keys(locations);
console.log(locations);
console.log(newarray);
let newarraynum = newarray.map((e) => +e)
console.log(newarraynum.every( (e)=> e > warning, warning));
key = Object.keys(locations);
val = Object.values(locations);

kulh = key.map((e, i) => [e, val[i]]).flat();
console.log(kulh)

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Math.max(...n2) * [...n1, ...n2].length);
console.log(Math.max(...n2) *  [n1,n2].flat().length);

