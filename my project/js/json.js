let myArr=[];



let myBtn = document.getElementById("btn");
let myForm=document.getElementById("form");



 myForm.addEventListener("submit", () => {
  let name = document.getElementById("name");
  let tmpName = name.value;
  let jsName = JSON.stringify(tmpName);
  window.localStorage.setItem("name", jsName);
  name.value = " "
 
  let lastName = document.getElementById("lastname");
  let tmpLast = lastname.value;
  let lTName = JSON.stringify(tmpLast);
  window.localStorage.setItem("last name", lTName);
  lastName.value = " "

  let email=document.getElementById("email");
  let tmpEmail=email.value;
  let mail=JSON.stringify(tmpEmail);
  window.localStorage.setItem("Email",mail)

  let msg=document.getElementById("msg")
  let tmpMsg=msg.value;
  let usermsg=JSON.stringify(tmpMsg);
  window.localStorage.setItem("msg",usermsg);



  let newObject = {
    name: tmpName,
    lastName:tmpLast,
    email:tmpEmail,
    msg:tmpMsg,
  };

  myArr.push(newObject);


}  );



