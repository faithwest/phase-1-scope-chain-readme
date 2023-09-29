const pen = "bic";
 function myPen (){
    const tube = "ink";
      console.log("pen:", pen);
      console.log("tube:", tube);
      console.log("cap:", cap);
 }
 function myTip(){
    const cap = "metal";
      console.log("cap:", cap);
      console.log("tube:", tube);
      console.log("pen:", pen);
 }

 myPen();


 //Explain that the environment in which a function is created gets added to its
 /*using the example above mypen is is declared within the envionment in which the outerVar exist which is the outer scope*/ 

 /*Jvascript allows functions to access variables and functions declared in their outer scopes.also functions declared retains a reference to its outer scope once created*/

 /*ececution phase:refers to a stage where values are assigned to variables and functions are invoked */

 /*Explain how the JavaScript engine makes a first pass over your code before
  executing it:
 functions declaration and variables are registered in memory;analyzing its structure, and references, and performing error checks. This preparation ensures that the code can be executed efficiently and correctly during the execution phase. */