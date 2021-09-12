function validate(){
    var name = document.getElementById("name").value;
    var subject = document.getElementById("subject").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    var age = document.getElementById("age").value;
    var error_message = document.getElementById("error_message");
    
    error_message.style.padding = "10px";
    
    var text;
    if(name.length < 5){
      text = "Please Enter valid Name";
      error_message.innerHTML = text;
      return false;
    }
    if(subject.length < 10){
      text = "Please write longer subject";
      error_message.innerHTML = text;
      return false;
    }
    if(age < 0){
      text = "Please enter valid age";
      error_message.innerHTML = text;
      return false;
    }
    if(isNaN(phone) || phone.length != 10){
      text = "Please Enter valid Phone Number";
      error_message.innerHTML = text;
      return false;
    }
    if(email.indexOf("@") == -1 || email.length < 6){
      text = "Please Enter valid Email";
      error_message.innerHTML = text;
      return false;
    }
    if(message.length <= 140){
      text = "Please Enter More Than 140 Characters in msg";
      error_message.innerHTML = text;
      return false;
    }
    alert("Form Submitted Successfully!");
    console.log('name: ',name)
    console.log('email: ',email)
    console.log('subject: ',subject)
    console.log('phone: ',phone)
    console.log('message: ',message)
    return true;
    
  }