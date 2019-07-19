function getDivs() {
    var divs=document.getElementsByTagName("div");
    console.log( "DIVS:"+ divs);

    for (let i = 0; i < 5; i++) {
        console.log( divs[i]);
        divs[i].addEventListener('click',function () { 
            console.log("You press div #"+(i+1));
        
        });
    }
}
function showEmployee() {
    var name="mohamad";
    var age=33;
    var position="dev";

    console.log("Employee " + name + " with age is "+ age + 
            " is a" + position);
}
function randomName() {
        var names=["hon","mof","hob","hehe"];
        console.log(`This is a random name: ${names[
                Math.floor(
                    Math.random()*(names.length-1)
                    )+1
                ]}`);
        
}
function retName(name) {
    return name;
}
function loop() {
    const artists=['test1','test2','test3','test4','test5','test6','test7',];
    /* for (let index = 0; index < artists.length; index++) {
        console.log(artists[index]);
     } */
        artists.forEach(element => {
            console.log(element);
        });      
}
function loop2() { 
    var purchase=[
        {quantity:2,amount:100},
        {quantity:3,amount:200},
        {quantity:5,amount:300},
        {quantity:2,amount:400},
    ];
    var total=0
    /* for (let index = 0; index < purchase.length; index++) {
         total += (purchase[index].quantity)*(purchase[index].amount);
    } */
    purchase.forEach(element => {
        total+=element.quantity*element.amount;
    });
    console.log("TOTAL:"+total);
    

}
function mappush() {
     var array=[2,3,4,5,6];
     var marray=[];
     for (let i = 0; i < array.length; i++) {
         marray.push(array[i]*10);  
     } 
     console.log("NOT es6: "+marray);

     const es6array=[2,3,4,5,6];
     //map allways return array, it is like foreach but in foreach we are not returning sth 
     const es6marray=es6array.map(function (item) { 
        return item*10
      });

      console.log("ES 6 :"+es6marray);
      
     
     
}
function mappush2(){
    const users=[
        {name:'moh',age:30},
        {name:'hob',age:35},
        {name:'hoomat',age:31},
        {name:'mohamad',age:40}
    ];

    const usernames=users.map(item=>{
        return item.name
    });
    console.log("userName:"+ usernames);
    

}
function filtering() {
    const products=[
        {name:'sony',type:"TV",number:3,active:true},
        {name:'samsung',type:"video",number:5,active:false},
        {name:'lg',type:"video",number:7,active:true},
        {name:'apple',type:"TV",number:2,active:false}
    ];
/**
 * filters act like if statement and creaate loob on array and return an aray
 * look howe we check the active status
 */
    const Tvprods=products.filter(item=>{
        return item.type==="TV" && item.number<4 && item.active;
    });
    console.log("TV products:"+ JSON.stringify(Tvprods));
    

}
function profilter() {
    const channels=[
        {name:"HBO",Premium:true},
        {name:"MTV",Premium:true},
        {name:"GEO",Premium:false},
        {name:"IRIB",Premium:false}
    ];

    const user={
        name:"mohamad",
        Premium:true,
//in oerchannels we want to check if use is premium and return premium channels
        perChannels:function () {
            const _this=this;
            return channels.filter(item=>{
                return item.Premium && _this.Premium
            });
          },
        nonPremiumChannels:function () { 
            return channels.filter(item=>{
                return !item.Premium
            });
         }
    };

    console.log(user.perChannels());
    console.log(user.nonPremiumChannels());
    
}   
function finding() {
    const products=[
        {name:'sony',type:"TV",number:3,active:true},
        {name:'samsung',type:"video",number:5,active:false},
        {name:'lg',type:"video",number:7,active:true},
        {name:'apple',type:"TV",number:2,active:false},
        {name:'samsung',type:"TV",number:2,active:false}
    ];
/**
 * filters and find diff: in filter if it finds the contiion match will continue to the
 * end of array to find more bun in FIND it will return the first condiotion match
 */
    const Tvprods=products.find(item=>{
        return item.name==="samsung";
    });
    console.log("samsung:"+JSON.stringify(Tvprods));
    

}
function learnEvery() {
    
    const students=[
        {name:"mohamad",score:"4"},
        {name:"ali",score:"5"},
        {name:"hassan",score:"6"},
        {name:"nima",score:"7"}
    ];
    //we want to check if all the student has passed the course (score gte 6)
    let res=students.every(function (item) {
            return item.score >=6;
      });
    // check if at least one of them passed
    let res2=students.some(function (item) {
            return item.score >=6;
      });
    
    console.log("RESULT all passed:"+res);
    console.log("RESULT some passed:"+res2);
      

}
function learnReduce(){
    const prev=200;
    const purchase=[
        {quantity:2,amount:100},
        {quantity:3,amount:200},
        {quantity:5,amount:300},
        {quantity:2,amount:400},
    ];
    // sum would have the prev value at first
    let total=purchase.reduce(function (sum,item) {
            return  sum + item.amount;
    },prev);
    let totalarray=purchase.reduce(function (start,item) {
         start.push(item.quantity);
         return start;
},[]);
    console.log("total :"+total); 
    console.log("total array :"+totalarray); 
}
function proReduce() {
    const prods=[
        {type:"laptop",price:200,os:"mac"},
        {type:"desktop",price:300,os:"windows"},
        {type:"laptop",price:210,os:"windows"},
        {type:"desktop",price:250,os:"mac"},
        {type:"laptop",price:280,os:"windows"},
        {type:"desktop",price:500,os:"windows"}
    ];
    //count of each os
    var res=prods.reduce(function (start,item) { 
        // if(item.os==='mac'){
        //     return {mac:start.mac+1,windows:start.windows};
        // }else{
        //     return {mac:start.mac,windows:start.windows+1}
        // }
        return item.os==='mac'
                            ? {mac:start.mac+1,windows:start.windows}
                            : {mac:start.mac,windows:start.windows+1}           
     },{mac:0,windows:0});

     console.log("OS count:",res);
     
}
function forOf() {
    const names=["mohamad","hoomat","amir"];
    for (const name of names) {
        console.log(name);   
    }
}
function fatArrowfunction() {
    const cars={
        brands:['bmw','Audi','pride'],
        category:" is a sport car",
        message:function () {
            /**if we use arrow functions instead of FUNCTION this would poit to correct this
             * and we do not need to do commented codes any more....
             */
            return this.brands.map(item=>{
                console.log(`${item} ${this.category}`);
                
            });
            // _this=this;
            // return this.brands.map(item=>{
            //     console.log(`${item} ${_this.category}`);
                
            // });
          }
    };
    cars.message();
}
function fatArrowfunction2() {
    const names=['mohamad','hoomat','amir','vahid'];

    //ES 5
    /* var randomName=function (items) {
        return items[Math.floor(Math.random()*names.length)];
      }
    var randomNumber=function (min,max) {
        return Math.floor(Math.random()*max)+min;
      } */
    
    //ES 6
    let randomName=items=>items[Math.floor(Math.random()*names.length)];
    let randomNumber=(min,max)=>Math.floor(Math.random()*max)+min;

    console.log(`${randomName(names)} is ${randomNumber(2,10)}`);
    
}
function mixArrays(arg1,...args) {
    const array1=['BMW','MENZ'];
    const array2=['Audi','Pride'];

    const newArraay=[...array1,...array2,...arg1,...args];
    console.log(newArraay);
    
}
function classes() {
    class Cars{
        constructor(){
            this.condition="new",
            this.wheels=4,
            this.avail=()=>console.log('avail');
        }
        other(){ // we do not have access to this method in Ford class 
            console.log('other funcs');
        }
    }
    class Ford extends Cars{
        constructor(){
            super();// instead of copying all constructor items from car
        }

    }
    const Fordobj=new Ford();
    Fordobj.color='red';
    console.log(Fordobj);
    
}
function workingWithObj() {
      const user={
          name:"mof",
          last:"far",
          age:33
      };
      const cars=[
          'camaro',
          'jack',
          'pride'
      ];
      //const {name}=user;// instead of var name=user.name
      //const {last}=user;
      //const {age}=user; 
      // or bellow !
      const{name,last,age}=user;
      console.log(name + last + age);

      //in this way we do not have to know the index
      //const[camaro,jack,pride]=cars;
      const[camaro,...rest]=cars;
      //console.log(camaro);
      console.log(rest);
}
function proObjects(){
        const user=[
            {name:"mohamad",last:"far",age:33},
            {name:"ali",last:"bagh",age:30},
            {name:"hoomat",last:"aaar",age:38},
            {name:"hamed",last:"ghad",age:73},
        ];
        const [{last}]=user;
        console.log(last);
        
}
function promises() {
    let prom=new Promise((resolved,reject)=>{
        setTimeout(()=>{
            reject();
        },5000);
    });
    prom.then(()=>{// we can have az many then az we want... they would run simultaniusly when resolved
        console.log("done!");   
    }).then(()=>{
        console.log("done!");   
    }).catch(()=>{
        console.log("rejected!");
    });
}
function fetchfunc() {
    
    const fetch = require("node-fetch");
    url='https://jsonplaceholder.typicode.com/posts/1';
    fetch(url)
        .then(response=>response.json())// this line should be here till the correct data to be fetch
        .then(data=>console.log(data))
        .catch(error=>console.log("damn!" , error)
        );
}
function workingstring() {
    var str= "working with strings";
    console.log(str.indexOf("ing"));
    console.log(str.startsWith("orking",1));//1 is the index we can pass to check if there is working in 1 
    console.log(str.endsWith("gs"));//1 is the index we can pass to check if there is working in 1 
    console.log(str.includes("with"));
    
}
function workingNumbers() {
    console.log(Number.isSafeInteger(200));
    console.log(Number.isInteger(0.1));
    console.log(Math.trunc(1.9));// res is 1 even for 1.2 res is 1
    console.log(Math.floor(1.9));// res is 1 even for 1.2 res is 1
    console.log(Math.round(1.5));// round numbers <0.5 round down, >=0.5 round up
    console.log(Math.random());// number between 0 t 1
}

//import * as app from './app.js';
function learnModules() {
    const sth=require('./app.js').something;
    
    console.log(sth);
    
  }
 //  getDivs();
//   showEmployee();
//   randomName();
//   console.log(`name: ${retName('mohamaad')}`);
//   loop();
//   loop2();
//   mappush();
//   mappush2();
//   filtering();
//   profilter();
//   finding();
//   learnEvery();
//learnReduce();
//proReduce();
//forOf();
//fatArrowfunction();
//fatArrowfunction2();
//mixArrays(['JAC','MAC'],'Nissan','TOYOTA');
//classes();
//workingWithObj();
//proObjects();
//promises();
//fetchfunc();
//workingstring();
//workingNumbers();
learnModules();