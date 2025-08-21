let num = document.querySelectorAll('.number');
let operator=document.querySelectorAll('.operat');
let display1= document.querySelector('.display1');
let display2= document.querySelector('.display2');
let colorUi= document.querySelector('.ui');
let key= 1;
document.addEventListener("keydown",keyboard);

function del2(){   
let Del2= document.querySelector('.delete');
Del2.addEventListener("click",()=>{
  console.log('dlete');
  let x=user.length;
  for(let i=x-1,j=0;j<1;j++){
    user.pop(i);
    a= a/10;
    a= Math.floor(a);
    usstring =user.join("");
    display2.innerText=user.join(" ");
    break;
  }
})     
}
display2.addEventListener("click",del2)

let arr=[0,1,2,3,4,5,6,7,8,9];
let operation=['+','-','x','/','*','AC'];
let user=[];
let usstring="";
let unum=[];//////user number
let u=[];//calculation
let a=0;
let oparr=[];

for(n of num){
n.addEventListener("click",numpress);
}

function numpress(num){
for(let i=0;i<=arr.length;i++){   
    if(this.innerHTML == arr[i]){  
       user.push(arr[i]); 
       break;           
    }
    };
    if (key==0){
        user.push(num);
        key=1;
    }
    display2.innerText=user.join(" ");
    usstring =user.join("");
    a= parseFloat(usstring);          
}
///////////////////////////
for(oper of operator){
oper.addEventListener("click",operpress);
}

function operpress(arith){
    unum.push(usstring.split(" "));
    display1.innerHTML=unum.join(" ");
    u.push(a);
    for(let i=u.length;i>=1;i--){
      if(u[i]==''){
      u.splice(i,1);

      }
    }
      if(u[0]==undefined){
        u.splice(0,1);
      }       
      if(this.innerText!= 'AC'){          
      for(let i=0;i<operation.length;i++){
      if(this.innerHTML == operation[i]){  
          unum.push(operation[i]);
          oparr.push(operation[i]);
          break;            
    };   
    };
  if (key==0){
      unum.push(arith);
      oparr.push(arith);
    }
  }
    else{
         user=[];
         unum=[]; 
         u=[];
         usstring='';
         a=0;
          }
    display1.innerHTML=unum.join(" ");
    user=[];
    usstring='';
    a='';
    display2.innerText=user;
}
/////////////////////////////addition
function addi(u){
    let sum=0;
    let x=oparr.length;
for(let i=0;x>=1;i++){ 
  if(oparr[0]=='+'){
    console.log("add shuru");   
    sum= u[0]+u[1];
    u.splice(0,2,sum);
    x--; 
    oparr.shift();
}
else if(oparr.length==0){
  break;
}
else {
   sum= multOper(u);
}  
}
return sum;
};
/////////////////////////////////subtract
function sub(u){
  let sub=0;
    let x=oparr.length;
for(let i=0;x>=1;i++){ 
  if(oparr[0]=='-'){
    console.log("subtract shuru");   
    sub= u[0]-u[1];
    u.splice(0,2,sub);
    x--;
    oparr.shift();
   }
 else if(oparr.length==0){
  break;
 }  
else{
   sub= multOper(u);
}
  }
return sub;
};
////////////////////////////////multiply
function mul(u){
    let mult=1;
    let x=oparr.length;
for(let i=0;x>=1;i++){ 

  for(let j=0;x>=1&&j<oparr.length;j++){
  if(oparr[j]=='x'||oparr[j]=='*'){
    console.log("mult shuru"); 
    let y=j+1;  
    mult= u[j]*u[y];
    u.splice(j,2,mult);
    x--;
    oparr.splice(j,1);  
   }
  }
  if(oparr.length==0){
  break;
 }  
else{
   mult= multOper(u);
}
}
return mult;
}
/////////////////////////////////////divide
function div(u){
let div=1;
 let x=oparr.length;
for(let i=0;x>=1;i++){ 
for(let j=0;x>=1&&j<oparr.length;j++){
  if(oparr[j]=='/'){
    console.log("div shuru"); 
    let y=j+1;  
    div= u[j]/u[y];
    u.splice(j,2,div);
    x--;
    oparr.splice(j,1);  
   }
  }
  if(oparr.length==0){
  break;
 }  
  else{
   div= multOper(u);
} 
}
return div;
}
///////////////////////calculate
const calculate={
divide(u){
let x= div(u);
display2.innerHTML=x; 
return x;
  },
  multiply(u){
    let x= mul(u);
display2.innerHTML=x; 
return x;
  },
  subtract(u){
    let x= sub(u);
console.log(x);
display2.innerHTML=x; 
return x;
  },
  add(u,oparr){
    let x= addi(u,oparr);
display2.innerHTML=x; 
return x;
 }
}
///////////////////////  multiple operation //////////////////
function multOper(u){
 for(let i=0;i<oparr.length;i++){
    let arith= oparr[i];    
for(let i=0;i<oparr.length;i++){
  arith=oparr[i];
if(arith=='/'){
  arith='/';
  break;
}
};
for(let i=0;i<oparr.length;i++){
if(arith!='/'){
  arith=oparr[i];
  if(arith=='x'||arith=='*'){
  arith='x';
  break;
}
}
}
  if(arith!='/'&&arith!='x'){
    arith=oparr[i];
  }
  if(arith=='/'){
    return div(u);
  }
  else if(arith=='x'||arith=='*'){
    return mul(u);
  }
  else if(arith=='+'){
    return addi(u);
  }
  else {
    return sub(u);
  }
}}
//////////////////////////////////  CALCULATE   ////////////////////////////////////
let eq= document.querySelector('.equalr');
eq.addEventListener("click",equate);

function checkoptn(oparr){
  for(let i=0;i<oparr.length;i++){
    let arith= oparr[i];
    let m='x';
    let M= '*';
    let d ='/';
    let a='+';

for(let i=0;i<oparr.length;i++){
  arith=oparr[i];
if(arith=='/'){
  arith='/';
  break;
}
};
for(let i=0;i<oparr.length;i++){
if(arith!='/'){
  arith=oparr[i];
  if(arith=='x'||arith=='*'){
  arith='x';
  break;
}
}
};
    for(let i=0;i<oparr.length;i++){
      if(arith == d ){
        console.log("divide");
         let z= calculate.divide(u);
        return z;
      }
      else if(arith == m||arith==M){
        console.log("multi");
         let z= calculate.multiply(u);
        return z;
      }
      else if(arith == a){
        console.log("add");       
        let z= calculate.add(u,oparr);
        return z;

      }
      else {
        console.log("subtr");
       let  z=calculate.subtract(u);    
      return z;
      }  }
  } }

function equate(){
    u.push(a);
    console.log(u);
    unum.push(usstring.split(" "));
    a="";
  
    let l=  checkoptn(oparr);////////////which operation
   if(unum==''){
    display1.innerText=0;
   }
   else{
    display1.innerTextL=unum.join("");
   }
    u=[];
    user=[];
    unum=[];
    a='';
     usstring='';
     display2.innerHTML=unum;
     u.push(l);
     oparr=[];
     if(l==undefined){
     display1.innerText=0;  
     }
     else{
     display1.innerText=l;          
} 
unum.push(l);
}
for(btns of num){
btns.addEventListener("click",btnpress);
}
function btnpress(){
    setTimeout(() => {
    this.classList.add("btnPress");    
    }, 100);
    
     setTimeout(() => {
    this.classList.remove("btnPress");    
    }, 200);    
}

function keyboard(event){
   if(event.key=="Enter"){
       equate();
   }
    else if(/^[0-9|\+|\-|\*|\/]$/.test(event.key)){
       
      if(event.key=='+'){
                 key=0;
              operpress(event.key);                      
      }
       else if(event.key=='-'){
                 key=0;
              operpress(event.key);                      
      }
      else if(event.key=='*'){
                 key=0;
              operpress(event.key);                      
      }
       else if(event.key=='/'){
                 key=0;
              operpress(event.key);                      
      }  
else {
  key=0;
   numpress(event.key) ;
      }      
    }
    else{
        event.preventDefault();        
    }
}
let click=1;
colorUi.addEventListener("click",()=>{
  
  change= document.querySelector("#whole");
  changeD= document.querySelector(".display");

  if(click%2!=0){
    change.style.backgroundColor="grey";
    changeD.style.backgroundColor="black";
  }
  else{
    change.style.backgroundColor="black"; 
       changeD.style.backgroundColor="grey"; 
  }
  click++;

})
