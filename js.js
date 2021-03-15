function printEq(num){
  document.getElementById("eq").innerText= num;
}
function getEq(){
  return document.getElementById("eq").innerText;
}
function printRst(num){
  if (document.getElementById("rst").innerText =="overload") {
  document.getElementById("rst").innerText= "0";

  }
var asba = document.getElementById("rst").innerText;
document.getElementById("rst").innerText= virgule(reverseNumber(asba+num));
if (document.getElementById("rst").innerText.length >10) {
document.getElementById("rst").innerText= "overload";
document.getElementById("eq").innerText= "";

}



}
function getRst(){
  return document.getElementById("rst").innerText;
}
function reverse(ch) {
    var newString = "";
    for (var i = ch.length - 1; i >= 0; i--) {
        newString += ch[i];
    }
    return newString;
}
function virgule(num){
  reverseNumber(num);
var ch1 = num.toString();
var ch2 ="";
var j=0;
for (var i = ch1.length-1; i >-1; i--) {
  ch2 += ch1[i];
  j++;
  if (j==3) {
    ch2 += " ";
    j=0;
  }
}
return reverse(ch2);
}
function reverseNumber( ch){
  var ch1 = "";
  for (var i = 0; i < ch.length; i++) {
    if (ch[i]!=" "){
      ch1 += ch[i];
    }
  }
  return parseInt(ch1);
}
function r( ch){
  var ch1 = "";
  for (var i = 0; i < ch.length; i++) {
    if (ch[i]!=" "){
      ch1 += ch[i];
    }
  }
  return ch1;
}
var opp = document.getElementsByClassName("opp");
for (var i = 0; i < opp.length; i++) {
opp[i].addEventListener('click',function(){

if (this.id=="clear") {
  document.getElementById("rst").innerText = "";
  document.getElementById("eq").innerText = "";
}
if (this.id=="delete") {
  document.getElementById("rst").innerText= document.getElementById("rst").innerText.substring(0,  document.getElementById("rst").innerText.length - 1);



}
if (this.id=="+"||this.id=="-"||this.id=="*"||this.id=="/") {
var ch = document.getElementById("eq").innerText;
console.log(ch.substring(0,ch.length - 1));
if (ch[ch.length-1]=="=") {
  document.getElementById("eq").innerText= ch.substring(0,ch.length - 1);
  document.getElementById("eq").innerText =  r(document.getElementById("rst").innerText) + this.id;
  document.getElementById("rst").innerText= "";

}
else {
  document.getElementById("eq").innerText +=  r(document.getElementById("rst").innerText) + this.id;
  document.getElementById("rst").innerText = "";
}


}
if (this.id=="=") {
  document.getElementById("eq").innerText += document.getElementById("rst").innerText;
   document.getElementById("rst").innerText = rst(  document.getElementById("eq").innerText);
   document.getElementById("eq").innerText+= "=";



}
});}
var num = document.getElementsByClassName("num");
for (var i = 0; i < num.length; i++) {
num[i].addEventListener('click',function(){
  var ch =  document.getElementById("eq").innerText;
  if (ch[ch.length-1]=="=") {
 document.getElementById("rst").innerText=this.id;
 document.getElementById("eq").innerText="";

}
else {
  printRst(this.id)

}
console.log("done");
});}









function rst(ch){
var opp= [];
var num= [];
var x = "";
  for (var i = 0; i < ch.length; i++) {
    if (ch[i]=="+"||ch[i]=="-"||ch[i]=="*"||ch[i]=="/") {
      opp.push(ch[i]);

    }
    else {
          if (ch[i+1]=="+"||ch[i+1]=="-"||ch[i+1]=="*"||ch[i+1]=="/")  {
            x += ch[i];

            num.push(x);
              x="";
              }
    else {
          x += ch[i];
        }
    }

  }
  num.push(x);
  var y = parseInt(num[0]);
  for (var i = 0; i < opp.length; i++) {
    if (opp[i]=="+") {
      y += parseInt(num[i+1]);
    }
    else if (opp[i]=="-") {
      y -= parseInt(num[i+1]);

    }
    else if (opp[i]=="/") {
      y /= parseInt(num[i+1]);

    }
    else if (opp[i]=="*") {
      y *= parseInt(num[i+1]);

    }
  }

console.log(num);
console.log(opp);
return y ;
}
console.log(rst("8+2/5*9-8"));
