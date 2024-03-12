let a="Hello World";

console.log(a);

const products=["Milk","Butter","Egg"];

let preferences=new Array("Sport",34,20.70,true);
preferences[3]="Musics";

console.log(preferences[0]);
console.log(preferences[1]+preferences[2]);
console.log(preferences[3]);

preferences.push(true);

console.log(preferences.length);
console.log(preferences[4]);

let total=30;
if(total>20){
    console.log("Total is more than 20");
    total=total+30;
}

console.log("New total = "+total);