  function checkForm(form)
  {
    if(form.username.value == "") {
	  document.getElementById("i1").innerHTML="Name cannot be blank";
      form.username.focus();
      return false;
    }
	else
	document.getElementById("i1").innerHTML="";
	
    re = /^\w+$/;
    if(!re.test(form.username.value)) {
      document.getElementById("i1").innerHTML="Error: Username must contain only letters, numbers and underscores!";
      form.username.focus();
      return false;
    }
	else
	document.getElementById("i1").innerHTML="";
	
    if(form.pwd1.value == "") 
	{
	document.getElementById("i2").innerHTML="Error: Password cannot be blank";
        form.pwd1.focus();
        return false;
      }
	  else document.getElementById("i2").innerHTML="";
	
	
      if(form.pwd1.value.length < 6) {
        document.getElementById("i2").innerHTML="Error: Password must contain at least six characters!";
        form.pwd1.focus();
        return false;
      }
	  else document.getElementById("i2").innerHTML="";
	  
      if(form.pwd1.value == form.username.value) {
        document.getElementById("i2").innerHTML="Error: Password must be different from Username!";
        form.pwd1.focus();
        return false;
      }
	  else document.getElementById("i2").innerHTML="";
	  
      re = /[0-9]/;
      if(!re.test(form.pwd1.value)) {
        document.getElementById("i2").innerHTML="Error: password must contain at least one number (0-9)!";
        form.pwd1.focus();
        return false;
      }
	  else document.getElementById("i2").innerHTML="";
	  
      re = /[a-z]/;
      if(!re.test(form.pwd1.value)) {
     document.getElementById("i2").innerHTML="Error: password must contain at least one lowercase letter (a-z)!";
        form.pwd1.focus();
        return false;
      }
	  else document.getElementById("i2").innerHTML="";
	  
      re = /[A-Z]/;
      if(!re.test(form.pwd1.value)) {
      document.getElementById("i2").innerHTML="Error: password must contain at least one uppercase letter (A-Z)!";
        form.pwd1.focus();
        return false;
      }
     if(form.pwd1.value != form.pwd2.value) {
      document.getElementById("i3").innerHTML="Error: Password do not match";
      form.pwd1.focus();
      return false;
    }
	else document.getElementById("i3").innerHTML="";
	
	if(form.email.value == "") {
	  document.getElementById("i4").innerHTML="Email cannot be blank";
      form.email.focus();
      return false;
    }
	else
	document.getElementById("i4").innerHTML="";

	re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if(!re.test(form.email.value)) {
      document.getElementById("i4").innerHTML="Error: Enter a valid Email id.";
        form.email.focus();
        return false;
      }
	  else document.getElementById("i4").innerHTML="";
	  
	  if(form.mobile.value == "") {
	  document.getElementById("i5").innerHTML="Mobile cannot be blank";
      form.mobile.focus();
      return false;
    }
	else
	document.getElementById("i5").innerHTML="";

	re = /^\d{10}$/;
      if(!re.test(form.mobile.value)) {
      document.getElementById("i5").innerHTML="Error: Enter a valid Mobile number";
        form.mobile.focus();
        return false;
      }
	  else document.getElementById("i5").innerHTML="";
  }

