function printName(func,num){
    for(let i = 1; i <= num ; i++){
        func();
    }
}
printName(20);

let myname = function(){
    console.log("Manveer");
};
printName(myname,20);