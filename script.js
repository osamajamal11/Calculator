const result = document.getElementById("result");

function numDisplay(input){

result.setAttribute("value" , result.getAttribute("value")+input);

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