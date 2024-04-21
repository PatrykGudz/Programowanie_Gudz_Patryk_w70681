//zad 2
alert("Hello word"); 
//zad 3
//let a=10;
//let b=20;
//let c=23.2;
// a
//alert(a+b+c);
// b
//console.log(a+b+c);
//c
//let wynik = a+b+c;
//document.getElementById("zad3").innerHTML="Wynik dodawania to: "+wynik;
// zad 4
//for(let i=0; i<101; i+=2){
//    console.log(i);}
//zad 5
let a,b,c,p,pole;
a=parseFloat(prompt("Podaj długość boku a"));
b=parseFloat(prompt("Podaj długość boku b"));
c=parseFloat(prompt("Podaj długość boku c"));
//czy to trójkąt?
if(a+b>c && a+c>b && b+c>a){
    console.log("Można utworzyć trójkąt")
    document.getElementById("zad3").innerHTML="Można utworzyć trójkąt";
}
else{
    console.log("Nie można utworzyć trójkątu")
    document.getElementById("zad3").innerHTML="Nie można utworzyć trójkątu";
}
console.log(a);
p=(a+b+c)/2;
console.log(p);
console.log(p*(p-a)*(p-b)*(p-c))
pole=Math.sqrt(p*(p-a)*(p-b)*(p-c));
console.log(pole);
//document.getElementById("zad3").innerHTML="Powierzchnia trójkąta to: "+pole;
