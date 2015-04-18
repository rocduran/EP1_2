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

//Inici funcions

function associaDOMevents() {
//Associar events de la Vista
//variables
document.getElementById("nom").addEventListener("blur", valNom, true);
document.getElementById("cognom").addEventListener("blur", valCognom, true);
document.getElementById("email").addEventListener("blur", valEmail, true);
document.getElementById("telf").addEventListener("blur", valTelf, true);
document.getElementById("banc").addEventListener("blur", valBanc, true);
document.getElementById("contrasenya").addEventListener("blur", valPass, true);
document.getElementById("contrasenya2").addEventListener("blur", valPass2, true);

document.getElementById("nom").addEventListener("keyUp", lsNom);
document.getElementById("cognom").addEventListener("keyUp", lsCognom, true);
document.getElementById("telf").addEventListener("keyUp", lsTelf, true);
document.getElementById("adress").addEventListener("keyUp", lsAdress, true);
document.getElementById("poblacio").addEventListener("keyUp", lsPoblacio, true);
document.getElementById("cp").addEventListener("keyUp", lsCp, true);
document.getElementById("pais").addEventListener("keyUp", lsPais, true);
document.getElementById("datepicker").addEventListener("keyUp", lsDatePicker, true);
document.getElementById("email").addEventListener("keyUp", lsEmail, true);
document.getElementById("banc").addEventListener("keyUp", lsBanc, true);

}

//Definició de funcions de validació

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
    if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }
    divErr.appendChild(errPara);
    if (elemVal.classList.contains('valid') ) {
      elemVal.classList.remove('valid');
    };

  } else{
    elemVal.classList.add('valid');

    var divErr = document.getElementById("errNom");
    if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }

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
      if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }
      divErr.appendChild(errPara);
      if (elemVal.classList.contains('valid') ) {
        elemVal.classList.remove('valid');
      };

    } else{
      elemVal.classList.add('valid');

      var divErr = document.getElementById("errCognom");
      if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }

      if (elemVal.classList.contains('noValid') ) {
        elemVal.classList.remove('noValid');
      };
    }
  }

    //Comprova si l'EMAIL es valid
    function valEmail(){
      var elemVal = document.getElementById("email");
      var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      var valor =  elemVal.value;

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Introdueix un correu vàlid 'exemple@exemple.com'");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        elemVal.classList.add('noValid');

        var divErr = document.getElementById("errMail");
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };

      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errMail");
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }

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
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };

      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errTelf");
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }

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
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };
      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errBanc");
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }

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
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };

      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errPass");
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }

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
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };

      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errPass2");
        if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
      }
    }

    //Funcions de guardar al localStorage

    function lsNom () {
      var elemLS = document.getElementById("nom");
      localStorage[nom] =  elemLS.value;
    }
//No furula ni el de nom ni el de cognom (2 maneres)
    function lsCognom () {
      var elemLS = document.getElementById("cognom").value;
      localStorage.setItem('cognom', elemLS);
    }

    
    function lsTelf () {
      var elemLS = document.getElementById("telf").value;
      localStorage.setItem('telf', elemLS);
    }


    function lsAdress () {
      var elemLS = document.getElementById("adress").value;
      localStorage.setItem('adress', elemLS);
    }

    function lsPoblacio () {
      var elemLS = document.getElementById("poblacio").value;
      localStorage.setItem('poblacio', elemLS);
    }

    function lsCp () {
      var elemLS = document.getElementById("cp").value;
      localStorage.setItem('cp', elemLS);
    }
    function lsPais () {
      var elemLS = document.getElementById("pais").value;
      localStorage.setItem('pais', elemLS);
    }

    function lsDatePicker() {
      var elemLS = document.getElementById("datepicker").value;
      localStorage.setItem('datepicker', elemLS);
    }

    function lsEmail () {
      var elemLS = document.getElementById("email").value;
      localStorage.setItem('email', elemLS);
    }


    function lsBanc () {
      var elemLS = document.getElementById("banc").value;
      localStorage.setItem('banc', elemLS);
    }


    function init() {
//El if del nom es una prova pero tampoco tira
      if (!localStorage.getItem("nom") === null) {
       document.getElementById("nom").value = localStorage.getItem('nom');
     }
     if (localStorage["cognom"]) {
       document.getElementById("cognom").value = localStorage.getItem('cognom');
     }
     if (localStorage["telf"]) {
       document.getElementById("telf").value = localStorage.getItem('telf');
     }
     if (localStorage["adress"]) {
       document.getElementById("adress").value = localStorage.getItem('adress');
     }
     if (localStorage["poblacio"]) {
       document.getElementById("poblacio").value = localStorage.getItem('poblacio');
     }
     if (localStorage["cp"]) {
       document.getElementById("cp").value = localStorage.getItem('cp');
     }
     if (localStorage["pais"]) {
       document.getElementById("pais").value = localStorage.getItem('pais');
     }
     if (localStorage["datepicker"]) {
       document.getElementById("datepicker").value = localStorage.getItem('datepicker');
     }
     if (localStorage["email"]) {
       document.getElementById("email").value = localStorage.getItem('email');
     }
     if (localStorage["banc"]) {
       document.getElementById("banc").value = localStorage.getItem('banc');
     }
   }

