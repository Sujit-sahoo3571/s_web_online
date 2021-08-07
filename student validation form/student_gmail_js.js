// // function valid_check(){
// // let  fname = document.getElementById("fname").value[0] ;
// // let  lname = document.getElementById("lname").value[0] ;

// // let x = fname;
// // let y = lname;

// // const pattern = /[a-z]|[A-Z]/;
// // if( !(pattern.test(x) && pattern.test(y)) ){
// //     alert(" First Name or Last Name is wrong ");
// // }

// // }

// var myform = document.forms.myform;
// var first = myform.fname;
// var lname = myform.lname  ;
// var email = myform.email  ;
// var company = myform.Company  ;
// var state = myform.state  ;
// var dept = myform.Department  ; 
// var country = myform.Country  ; 


// function ermsg (){

//     msg.innerHTML = " must fill the name and other values ! ";
//     msg.style.color = "red";
//     msg.style.textAlign ="center";
// }

// // anonymous function of form not submit 
// myform.onsubmit = function(){
//     var msg = document.getElementById("msg");
//     if(first.value.trim() == "" || lname.value.trim()==""  || email.value.trim()==""
//     || company.value.trim()=="" || state.value.trim()==""|| dept.value.trim()=="" ||
//     country.value.trim()== "" ){
//       ermsg();
//         return false ; 
//     }
//     else{
//         msg.innerHTML = " ";
//         return true ; 

//     }
// };

// // onfocus name value 
// first.onfocus = function(){
//     first.style.border = " 4px solid pink " ; 
// };
// // on blur name 
// first.onblur = function(){
//     first.style.border = "" ;};

// variables


var myform = document.forms.myform;
var first = myform.fname;
var lname = myform.lname  ;
var email = myform.email  ;  // 
var company = myform.Company  ;
var state = myform.state  ;
var dept = myform.Department  ; 
var country = myform.Country  ; 

// error messages

function errmsg (storevalue, id , msg){
  
 newmsg =  document.getElementById(id);
 if(storevalue.value.trim() == ""){
   
    newmsg.innerHTML = msg + " : should not be blank ";
    newmsg.style.color = "red";
    return false; 
     
 }
 newmsg.innerHTML="";
 return true;

}

//list of values in array

var arr = [first,lname,email,company,dept,country,state];
var arr1 = ["f","l","e","c","d","t","s"];
var arr2 = ["firstname","lastname","email","company","dept","country","state"];


// form submit 

// myform.onsubmit = function (){
//     var x =0;
//     for(x ; x<arr.length; x++ ){
//     //     if(! errmsg(arr[x],arr1[x],arr2[x])){
//     //     return false;
//     //    }
//     errmsg(arr[x],arr1[x],arr2[x]);
//     }
// };

function valid_check(){
    var x =0; 
    var isvalid = true; 
    for(x ; x<arr.length ; x++ ){
       errmsg(arr[x],arr1[x],arr2[x]);
       isvalid = isvalid &&  errmsg(arr[x],arr1[x],arr2[x]);
    }
return isvalid ;
}