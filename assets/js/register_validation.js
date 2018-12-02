 // JavaScript Document
 $(document).ready(function () {
            
 function validate(){
                    var nameError=checkName();
					var fnameError=checkFName();
                    var numberError=checkPhonenumber();
					var ageError=checkAge();
					var emailError=checkEmail();
					var radioError=checkRadio();
					var checkboxError=checkCheckbox();
			if(nameError&&fnameError&&numberError&&ageError&&emailError&& radioError&&checkboxError){
					   document.myForm.submit();
					}
					else{
					return false;
					}
					
                 }
				 
function checkName(){
                    var Name=document.myForm.name.value;
                    if((Name=="") || !isNaN(Name)){
                      document.getElementById("name_error").innerHTML="No name provided";
                      return false;
                   }
                    else{
                      document.getElementById("name_error").innerHTML="";
                      return true;
                   }
                 } 
				 
function checkFName(){
                    var Name=document.myForm.fname.value;
                    if((Name=="") || !isNaN(Name)){
                      document.getElementById("fname_error").innerHTML="No name provided";
                      return false;
                   }
                    else{
                      document.getElementById("fname_error").innerHTML="";
                      return true;
                   }
                 } 
				 
function checkPhonenumber(){
                    var number=document.myForm.phone.value;
                    if((number=="") ||(number.length != 11) || isNaN(number)){
                      document.getElementById("number_error").innerHTML="No vaild number provided";
                      return false;
                   }
                    else{
                      document.getElementById("number_error").innerHTML="";
                      return true;
                   }
                 } 
				 
function checkAge(){
                  var Age=document.myForm.age.value;
                      if((Age=="") || isNaN(Age)|| (Age<14) ){
                      document.getElementById("age_error").innerHTML="No age provided";
                      return false;
                   }
                    else{
                      document.getElementById("age_error").innerHTML="";
                      return true;
                   }
                 }
				 
function checkEmail(){
                    var email=document.myForm.Email.value;
                    if(email==""){
                      document.getElementById("email_error").innerHTML="No email address";
                      return false;
                   }
                    else{
                      document.getElementById("email_error").innerHTML="";
					  var valid=validemail();
					  if(valid==true){
                      return true;}
                   }
                 } 
function checkRadio(){
				 var Gender="";
				 var len = document.myForm.Gender.length;
				 var i;
				 for (i = 0; i < len; i++) {
                     if ( document.myForm.Gender[i].checked ) {
                         Gender = document.myForm.Gender[i].value;
                          break;
                        }
                    }
				 if (Gender==""){
				   document.getElementById("radio_error").innerHTML="no gender selected";
				   return false;
				 }
				 else{
				   document.getElementById("radio_error").innerHTML="";
				   return true;
				 }
				}
function checkCheckbox(){
				var Classes="";
                var clen = document.myForm.Classes.length;
                var i;
                for (i = 0; i < clen; i++) {
                     if ( document.myForm.Classes[i].checked ) {
                      Classes = document.myForm.Classes[i].value;
                      break;
                       } }
	           if (Classes==""){
                   document.getElementById("checkbox_error").innerHTML="classes not checked";
                   return false;
                 }	
				 else{
				   document.getElementById("checkbox_error").innerHTML="";
				   return true;	 
				}
				}
				
function validemail(){
				var emailID=document.myForm.Email.value;
				atpos= emailID.indexOf("@");
				dotpos= emailID.lastIndexOf(".");
				if(atpos<1 || (dotpos-atpos<2))
				{
				document.getElementById("email_error").innerHTML="Enter correct email address";
				return false;
				}
				return true;
			}			

			});	 