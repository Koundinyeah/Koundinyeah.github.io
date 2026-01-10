function dispMessage(){
//   a=10
//   b=20
//   c=a+b
// alert(c)
// alert("Hello")


// const user={
// 	name:"John",
// 	email:"john@gmail.com",
// 	password:1234
// };
//console.log(user);
// console.log(user.name);


const arr=["Maths","Science"];
console.log(arr);
console.log(arr[0])
arr.push("English")
console.log(arr)

//alert(document.getElementById("txtEmail").value)
// lblmessage.innerHTML=document.getElementById("txtEmail").value
// lblpass.innerHTML=document.getElementById("txtPass").value
//lblmessage.innerHTML=document.getElementById("txtEmail").value + "-" + document.getElementById("txtPass").value
// let email=document.getElementById("txtEmail").value
// let pass=document.getElementById("txtPass").value
// let user=document.getElementById("txtUser").value   
// if(email === "john@gmail.com" && pass === "1234"){ //=== check value and type, == check type not value
//   lblmessage.innerHTML="WELCOME"
//   lblmessage.style.color="Green"
// }
// else{
//     lblmessage.innerHTML="ACCESS DENIED!!"
// }
//let can be overrided
//const cannot be overrided but can be modified
} 
let users=[];
function addUser(){
 let name=document.getElementById("txtUser").value
 let email=document.getElementById("txtEmail").value
 let pass=document.getElementById("txtPass").value
 let user={name: name,email: email,pass: pass};
 users.push(user);
 showLoginForm();
 console.log(users);
}
function showLoginForm(){
  let str=`
  
   <h3>Login Form</h3>
    <p><label id="lblmessage"></label></p>
    <!-- <p><label id="lblpass"></label></p> -->
   <p><input type="text" id="txtEmail" placeholder="Email Address"></p>
   <p><input type="password" id="txtPass" placeholder="Password"></p>
   <p><button class="login-btn" onclick="dispMessage()">Log in</button></p>
   <hr>
   <p><button class="create-btn" onclick="showRegisterForm()">Create Account</button></p>`

  root.innerHTML=str
}
function showRegisterForm(){
  let str=`
  <h3>Registration Form</h3>
  <p><label id="lblmessage"></label></p>
   <p><input type="text" id="txtEmail" placeholder="Email Address"></p>
   <p><input type="text" id="txtUser" placeholder="Username"></p>
   <p><input type="password" id="txtPass" placeholder="Password"></p>
   <p><button class="login-btn" onclick="addUser()">Submit</button></p>
   <hr>
   <p>Already a user?<button class="login-btn" onclick="showLoginForm()">Login</button></p>
  `
  root.innerHTML=str
}