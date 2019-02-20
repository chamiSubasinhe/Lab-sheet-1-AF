//question 1
var x=function printMessage(){
    console.log("Hello world");
}
function y(x) {
    x();

}
y(x);

function y(abc) {
    abc();
}

//question 2
var obj={
    "msg":"hello world",
    "fun":(msg)=>{
        console.log(msg)
    }
}

function runner(object) {
    object.fun(object.msg);
}

runner(obj);

//Question 2
var vehicleName="car"

function printVehicleName() {
    console.log(this.vehicleName)
}

var vehicle={color:"Red",
    id:"CA33B",
    getVehicleName:printVehicleName()

}
printVehicleName()

//question 4
function calcTax(tax) {
    function taxAmount(amount) {
        return amount + tax;

    }

    return taxAmount;
}

var amount=calcTax(10);
console.log(amount(5));

//Question 5
function githubAPI(callback) {
     $.getJSON("https://api.github.com/users", callback);

}

function userex(data) {
    data.forEach(element=>{
        if(element.id==1){
            console.log(element.url);
        }
    });

}
githubAPI(userex);