
window.onload = function () {

  associaDOMevents();  

  //localStorage
  init();

};

//Inici funcions

function associaDOMevents() {
//Associar events de la Vista
//variables

document.getElementById("nom").onblur = valNom;
document.getElementById("cognom").onblur = valCognom;
document.getElementById("email").onblur = valEmail;
document.getElementById("telf").onblur = valTelf;
document.getElementById("banc").onblur = valBanc;
document.getElementById("contrasenya").onblur = valPass;
document.getElementById("contrasenya2").onblur = valPass2;

document.getElementById("condicions").onchange = validarTot;

document.getElementById("nom").onkeyup = lsNom;
document.getElementById("cognom").onkeyup = lsCognom;
document.getElementById("telf").onkeyup = lsTelf;
document.getElementById("adress").onkeyup =  lsAdress;
document.getElementById("poblacio").onkeyup = lsPoblacio;
document.getElementById("cp").onkeyup = lsCp;
document.getElementById("pais").onkeyup = lsPais;
document.getElementById("datepicker").onkeyup = lsDatePicker;
document.getElementById("email").onkeyup = lsEmail;
document.getElementById("banc").onkeyup = lsBanc;

  //Calendari de "naixement"
  $(function() {
    $( "#datepicker" ).datepicker();
  });

  //volcar llista de paisos
  volcarJSON();
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
    return false;
  } else{
    elemVal.classList.add('valid');

    var divErr = document.getElementById("errNom");
    if (divErr.hasChildNodes()) {
      divErr.removeChild(divErr.childNodes[0]);
    }

    if (elemVal.classList.contains('noValid') ) {
      elemVal.classList.remove('noValid');
    };
    return true;
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
      return false
    } else{
      elemVal.classList.add('valid');

      var divErr = document.getElementById("errCognom");
      if (divErr.hasChildNodes()) {
        divErr.removeChild(divErr.childNodes[0]);
      }

      if (elemVal.classList.contains('noValid') ) {
        elemVal.classList.remove('noValid');
      };
      return true
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
        return false;
      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errMail");
        if (divErr.hasChildNodes()) {
          divErr.removeChild(divErr.childNodes[0]);
        }

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
        return true;
      }
    }

    function valTelf(){
      var elemVal = document.getElementById("telf");
      var regex = /(\+3763|6|7|8[0-9]{5})$/i;
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
        return false;
      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errTelf");
        if (divErr.hasChildNodes()) {
          divErr.removeChild(divErr.childNodes[0]);
        }

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
        return true;
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
        return false;
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
        return true;
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
        return false;
      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errPass");
        if (divErr.hasChildNodes()) {
          divErr.removeChild(divErr.childNodes[0]);
        }

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
        return true;
      }
    }

    function valPass2(){
      var elemVal = document.getElementById("contrasenya2");
      var contra = document.getElementById("contrasenya").value;
      var valor =  elemVal.value;

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Les contrasenyes han de coincidir");
      errPara.appendChild(errText);

      if(valor != contra || valor===""){
        elemVal.classList.add('noValid');
        var divErr = document.getElementById("errPass2");
        if (divErr.hasChildNodes()) {
          divErr.removeChild(divErr.childNodes[0]);
        }
        divErr.appendChild(errPara);
        if (elemVal.classList.contains('valid') ) {
          elemVal.classList.remove('valid');
        };
        return false;
      } else{
        elemVal.classList.add('valid');

        var divErr = document.getElementById("errPass2");
        if (divErr.hasChildNodes()) {
          divErr.removeChild(divErr.childNodes[0]);
        }

        if (elemVal.classList.contains('noValid') ) {
          elemVal.classList.remove('noValid');
        };
        return true;
      }
    }


    //Validar tot formulari
    function validarTot (){
      valNom();
      valCognom();
      valEmail();
      valTelf();
      valBanc();
      valPass();
      valPass2();
      if (valNom() && valCognom() && valEmail() && valTelf() && valBanc() && valPass() && valPass2()) {
        var boto = document.getElementById("registrar");
        boto.classList.remove("des");
        boto.setAttribute("disabled", "false");
      } else {
        var boto = document.getElementById("registrar");
        boto.classList.add("des");
        boto.setAttribute("disabled", "true");
        document.getElementById("condicions").checked = false;
      }
    }

    //Funcions de guardar al localStorage

    function lsNom () {
      var elemLS = document.getElementById("nom").value;
      localStorage.setItem('nom', elemLS);
    }

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

//Recuperem valors de la localStorage al carregar la pagina (si existeixen)
function init() {

  if (localStorage["nom"]) {
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

//Afegir paisos

function crearObjecteAjax() {
  var obj;
  if (window.XMLHttpRequest) { //si no es IE
    obj = new XMLHttpRequest();
  } else { //es IE o no te objecte
    try {
      obj = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {
      console.log("Navegador utilitzat no soportat !")
    }
  }
  return obj;
}

function volcarJSON(){
  jsonPaisos = '/RocMoi/BD/countries.txt';
  var jsonRequest = crearObjecteAjax();
  jsonRequest.onreadystatechange = function() {
    if (jsonRequest.readyState == 4 && jsonRequest.status == 200) {
      doc = JSON.parse(jsonRequest.responseText);
      document.getElementById("llistaPais").innerHTML = "";
      for (var i = 0; i < doc.length; i++) {
        document.getElementById("llistaPais").innerHTML += "<option value=\"" + doc[i].nom + "\">" + doc[i].codi +"</option>";
      } 
      
    }
  };
  jsonRequest.open('GET', jsonPaisos, true);
  jsonRequest.send("");
}