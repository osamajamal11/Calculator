const result = document.getElementById("result");

function numDisplay(input){

result.setAttribute("value" , result.getAttribute("value")+input);

}

function opDisplay(input){
    var op = ["." , "+" , "-" , "*" , "/" , "%"]
    var last = result.getAttribute("value").length-1;
    if(op.includes(result.getAttribute("value")[last]) && result.getAttribute("value")[last] === input ){
        return;
    }
    else if(op.includes(result.getAttribute("value")[last]) && result.getAttribute("value")[last] !== input ){
        result.setAttribute("value" , result.getAttribute("value").slice(0,last)+input);
    }
    else{
    result.setAttribute("value" , result.getAttribute("value")+input);
    }
}

function clearResult(){

    result.setAttribute("value" , "");

}

function calculate(){
    try{
    result.setAttribute("value" , eval(result.getAttribute("value")));
    }
    catch(error){
    result.setAttribute("value" , "ERROR");
    }
}

function sign(){
    result.setAttribute("value" , eval(result.getAttribute("value")*-1));

}