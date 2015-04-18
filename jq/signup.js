
window.onload = function () {

  associaDOMevents();  
  //localStorage

  // init();

  //guarda dades a mesura que anem escrivint
  // $('.stored').keyup(function () {
  //   localStorage[$(this).attr('name')] = $(this).val();
  // });

  //Boto de reset del formulari
  // $('.button-cancelar').click(function() {
  //  if (confirm("Estàs segur que vols cancelar?\nAixò borrarà els camps") == true) {
  //   localStorage.clear();
  //   document.getElementById("formulari").reset();
  // } else {}
  // });

  // $('#formulari').submit(function() {
  //  if (formValidat==false) {
  //   alert("Esta buit!!!")
  // } else {}
  // });
};

function associaDOMevents() {
//Associar events de la Vista
//variables
document.getElementById("nom").addEventListener("blur", valNom, true);
document.getElementById("cognom").addEventListener("blur", valCognom, true);
document.getElementById("email").addEventListener("blur", valMail, true);
document.getElementById("telf").addEventListener("blur", valTelf, true);
document.getElementById("banc").addEventListener("blur", valBanc, true);
document.getElementById("contrasenya").addEventListener("blur", valPass, true);
document.getElementById("contrasenya2").addEventListener("blur", valPass2, true);

}



function valNom(){
  var elemVal = document.getElementById("nom");
  var regex = /^[A-Za-z]{2,20}$/;
  var valor =  elemVal.value;

  var errPara = document.createElement("p");
  var errText = document.createTextNode("Mínim 2 caràcters i màxim 20 caràcters");
  errPara.appendChild(errText);

  if(!regex.test(valor)){
    elemVal.classList.add('noValid');
    var divErr = document.getElementById("errNom");
    if (divErr.firstChild) {
      divErr.removeChild(divErr.lastChild);
    }
    divErr.appendChild(errPara);
    if (elemVal.classList.contains('valid') ) {
      elemVal.classList.remove('valid');
    };

  } else{
    elemVal.classList.add('valid');

    var divErr = document.getElementById("errNom");
    divErr.removeChild(divErr.lastChild);

    if (elemVal.classList.contains('noValid') ) {
      elemVal.classList.remove('noValid');
    };
  }
}

   //Comprova si el COGNOM es correcte
   function valCognom(){
    var elemVal = document.getElementById("cognom");
    var regex = /^[A-Z a-z]{3,20}$/;
    var valor =  elemVal.value;

    var errPara = document.createElement("p");
    var errText = document.createTextNode("Mínim 3 caràcters i màxim 30 caràcters");
    errPara.appendChild(errText);

    if(!regex.test(valor)){
      elemVal.classList.add('noValid');

      var divErr = document.getElementById("errCognom");
      if (divErr.firstChild) {
        divErr.removeChild(divErr.lastChild);
      }
      divErr.appendChild(errPara);
      if (elemVal.classList.contains('valid') ) {
        elemVal.classList.remove('valid');
      };

    } else{
      elemVal.classList.add('valid');

      var divErr = document.getElementById("errCognom");
      divErr.removeChild(divErr.lastChild);

      if (elemVal.classList.contains('noValid') ) {
        elemVal.classList.remove('noValid');
      };
    }
  }

    //Comprova si l'EMAIL es valid
    function valMail(){
      var elemVal = document.getElementById("email");
      var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      var valor =  elemVal.value;

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Introdueix un correu vàlid 'exemple@exemple.com'");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        elemVal.classList.add('noValid');

        var divErr = document.getElementById("errMail");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };

      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errMail");
        divErr.removeChild(divErr.lastChild);

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
      }
    }

    function valTelf(){
      var elemVal = document.getElementById("telf");
      var regex = /(\+376[0-9]{6})$/i;
      var valor =  elemVal.value;

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Introdueix un telèfon de 6 números.");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        elemVal.classList.add('noValid');

        var divErr = document.getElementById("errTelf");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };

      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errTelf");
        divErr.removeChild(divErr.lastChild);

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
      }
    }

    function valBanc(){
      var elemVal = document.getElementById("banc");
      var regex = /AD[0-9]{2}000(1|3)[0-9]{16}/i;
      var regAndBank = /AD[0-9]{2}0001[0-9]{16}/i;
      var regCredit = /AD[0-9]{2}0003[0-9]{16}/i;
      
      var bankPara = document.createElement("p");
      var andBank = document.createTextNode("AndBank");
      var credit = document.createTextNode("Crèdit Andorrà");
      var valor =  elemVal.value;

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Introdueix un IBAN vàlid (ADCC BBBB SSSS ZZZZ ZZZZ ZZZZ).");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        elemVal.classList.add('noValid');
        var divErr = document.getElementById("errBanc");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };
      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errBanc");
        divErr.removeChild(divErr.lastChild);

        if(regAndBank.test(valor)){
          bankPara.appendChild(andBank);
          divErr.appendChild(bankPara);
        }
        if(regCredit.test(valor)){
          bankPara.appendChild(credit);
          divErr.appendChild(bankPara);
        }

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
      }
    }


    function valPass(){
      var elemVal = document.getElementById("contrasenya");
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})[^ ]{6,}$/;
      var valor =  elemVal.value;

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Ha de contenir un mínim de 2 digits, una majúscula i una minúscula i 6 caràcters de llarg");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        elemVal.classList.add('noValid');
        var divErr = document.getElementById("errPass");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };

      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errPass");
        divErr.removeChild(divErr.lastChild);

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
      }
    }

    function valPass2(){
      var elemVal = document.getElementById("contrasenya2");
      var contra = document.getElementById("contrasenya").value;
      var valor =  elemVal.value;

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Les contrasenyes han de coincidir");
      errPara.appendChild(errText);

      if(valor != contra){
        elemVal.classList.add('noValid');
        var divErr = document.getElementById("errPass2");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };

      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errPass2");
        divErr.removeChild(divErr.lastChild);

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
      }
    }

// function init() {
//   if (localStorage["nom"]) {
//      document.getElementById("nom").value = (localStorage["nom"]);
//   }
//   if (localStorage["cognom"]) {
//     $('#cognom').val(localStorage["cognom"]);
//   }
//   if (localStorage["telf"]) {
//     $('#telf').val(localStorage["telf"]);
//   }
//   if (localStorage["adress"]) {
//     $('#adress').val(localStorage["adress"]);
//   }
//   if (localStorage["poblacio"]) {
//     $('#poblacio').val(localStorage["poblacio"]);
//   }
//   if (localStorage["cp"]) {
//     $('#cp').val(localStorage["cp"]);
//   }
//   if (localStorage["pais"]) {
//     $('#pais').val(localStorage["pais"]);
//   }
//   if (localStorage["datepicker"]) {
//     $('#datepicker').val(localStorage["datepicker"]);
//   }
//   if (localStorage["email"]) {
//     $('#email').val(localStorage["email"]);
//   }
//   if (localStorage["banc"]) {
//     $('#banc').val(localStorage["banc"]);
//   }
// }
