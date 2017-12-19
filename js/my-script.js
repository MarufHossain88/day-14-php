$('#checkBox').click(function () {
    if(this.checked){
        $('#Pass').attr('type','text');
    }
    else {
        $('#Pass').attr('type','password');
    }
});







function checkFirstName() {
    var firstNameLength=$('#F1').val().length;
    if(firstNameLength >=6 && firstNameLength <= 15){
        $('#FNE').text(' ');
        return true;
    }
    else {
        $('#FNE').text('First name should be 6 to 15 character');
        return false;
    }
}

$('#F1').click(function () {
    checkFirstName();
});

$('#F1').blur(function () {
    checkFirstName();
});

$('#F1').keyup(function () {
   checkFirstName();
});



function checkLastName() {
    var lastNameLength=$('#L1').val().length;
    if(lastNameLength >=6 && lastNameLength <= 15){
        $('#LNE').text(' ');
        return true;
    }
    else {
        $('#LNE').text('Last name should be 6 to 15 character');
        return false;
    }
}

$('#L1').click(function () {
    checkLastName();
});

$('#L1').blur(function () {
    checkLastName();
});

$('#L1').keyup(function () {
    checkLastName();
});


function checkGender() {
    var genderValue =$('input[type="radio"]:checked').val();
    if (genderValue)
    {
        $('#GE').text(' ');
        return true;
    }
    else {
        $('#GE').text('Please select a gender');
        return false;
    }
}


$('input[type="radio"]').blur(function () {
    checkGender();
});











function checkEmailAddress() {
    var pattern=new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,3}$/i);
    if (pattern.test($('#Email').val())){
        $('#EE').text(' ');
        return true;
    }
    else {
        $('#EE').text('Email Address is invalid.');
        return false;
    }
}



// $('#Email').click(function () {
//     checkEmailAddress();
// });

$('#Email').blur(function () {
    checkEmailAddress();
});

$('#Email').keyup(function () {
    checkEmailAddress();
});




function checkPassword() {
    var passwordLength=$('#Pass').val().length;
    if(passwordLength >=6 && passwordLength <= 15){
        $('#PassE').text(' ');
        return true;
    }
    else {
        $('#PassE').text('Last name should be 6 to 15 character');
        return false;
    }
}


 // $('#Pass').click(function () {
 //     checkPassword();
 // });

$('#Pass').blur(function () {
        checkPassword();
});

$('#Pass').keyup(function () {
        checkPassword();
});



function checkconpass() {
    var passwordValue=$('#Pass').val();
    var conpasswordValue=$('#ConPass').val();
    if (passwordValue==conpasswordValue){
        $('#ConPassE').text(' ');
        return true;
    }
    else {
        $('#ConPassE').text('Password and confirm password does not match. ');
        return false;
    }
}


$('#ConPass').blur(function () {
    checkconpass();
});

$('#ConPass').keyup(function () {
    checkconpass();
});



function checkDistrictName() {
    var districtName=$('#DN').val();
    if(districtName == ' '){
        $('#DNE').text('Please select a valid district name.');
        return false;
    }
    else {
        $('#DNE').text(' ');
        return true;
    }
}


$('#DN').change(function () {
    checkDistrictName();
});


$('#Form1').submit(function () {
    if(checkFirstName()==true && checkLastName()==true && checkEmailAddress()==true &&
        checkPassword()==true && checkconpass()==true && checkDistrictName()==true && checkGender()==true)
    {
    return true;
    }
    else {
        return false;
    }

});
























































































// $('#1').click(function () {
//     var ima1SrcValue =$(this).attr('src');
//     $('#mainImage').attr('src',ima1SrcValue);
// });
//
//
// $('#2').click(function () {
//     var ima2SrcValue =$(this).attr('src');
//     $('#mainImage').attr('src',ima2SrcValue);
// });
//
// $('#3').click(function () {
//     var ima3SrcValue =$(this).attr('src');
//     $('#mainImage').attr('src',ima3SrcValue);
// });
//
//
// $('#4').click(function () {
//     var ima4SrcValue =$(this).attr('src');
//     $('#mainImage').attr('src',ima4SrcValue);
// });
//
//
// $('#5').click(function () {
//     var ima5SrcValue =$(this).attr('src');
//     $('#mainImage').attr('src',ima5SrcValue);
// });
//
//
//
//
//
//
//
//
// // function create () {
// //     var newHeadingElement= document.createElement('h1');
// //     var newParagraphElement = document.createElement('p');
// //
// //     newHeadingElement.innerHTML='This is a heading.';
// //     newParagraphElement.innerHTML='This is a paragraph.';
// //
// //     document.getElementById('div').appendChild(newHeadingElement);
// //     document.getElementById('div').appendChild(newParagraphElement);
// // };
// //
// //
// // document.getElementById('btn').onclick=function () {
// //     create();
// // };
//
// // $('#firstName').keyup(function () {
// //     var firstNameValue= $('#firstName').val();
// //     $('#Name1').val(firstNameValue);
// // });
// //
// // $('#lastName').keyup(function () {
// //     var lastNameValue= $('#lastName').val();
// //     $('#Name2').val(lastNameValue);
// // });
// //
// //
// // $('#lastName').blur(function () {
// //     var firstNameValue= $('#firstName').val();
// //     var lastNameValue= $('#lastName').val();
// //     var fullName= firstNameValue+' '+lastNameValue;
// //     $('#Name3').val(fullName);
// // });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
