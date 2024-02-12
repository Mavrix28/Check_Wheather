let text = ["Hodal","Palwal","Kosi Kalan","Vrindavan","Gurugram"];
let counter = 0;
let elem = document.getElementsByName("city")
let inst = setInterval(change, 3000);

function change() {
elem[0].placeholder= text[counter];
counter++;
if (counter >= text.length) {
counter = 0;
// clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
}
}
