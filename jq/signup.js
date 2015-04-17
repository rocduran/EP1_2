
$(document).ready(function(){

  // getPaisos();


  // function getPaisos() {
  // var url, itemPais;
  // url = 'countries.json';

  // $.getJSON('jq/countries.json', function(data) {
  //   alert("dins de getPaisos");
  //   $(data.llistaPaisos).each(function(i,paisactual) {
  //     alert("dins de getPaisos");
  //     itemPais = "<option>" + paisactual.code + "</option>";
  //     $('#llistaPais').append(itemPais);
  //   });
  // })};


  //variables
  var nom = $("#nom");
  var cognom = $("#cognom");
  var email = $("#email");
  var telefon = $("#telf");
  var banc = $("#banc");
  var contrasenya = $("#contrasenya");
  var contrasenya2 = $("#contrasenya2");

  nom.onBlur = valNom();
  cognom.onBlur = valCognom();
  mail.onBlur = valMail();
  telefon.onBlur = valTelf();
  banc.onBlur = valBanc();
  contrasenya.onBlur = valPass();
  contrasenya2.onBlur = valPass();

  //localStorage

  init();

  //guarda dades a mesura que anem escrivint
  $('.stored').keyup(function () {
    localStorage[$(this).attr('name')] = $(this).val();
  });

  //Boto de reset del formulari
  $('.button-cancelar').click(function() {
   if (confirm("Estàs segur que vols cancelar?\nAixò borrarà els camps") == true) {
    localStorage.clear();
    document.getElementById("formulari").reset();
  } else {}
  });

  $('#formulari').submit(function() {
   if (formValidat==false) {
    alert("Esta buit!!!")
  } else {}
  });
});



function valNom(){
  var $this = $(this);
  var regex = /^[A-Za-z]{2,20}$/;
  var valor = $this.val();

  var errPara = document.createElement("p");
  var errText = document.createTextNode("Mínim 2 caràcters i màxim 20 caràcters");
  errPara.appendChild(errText);

  if(!regex.test(valor)){
    $this.addClass("noValid");
    var divErr = document.getElementById("errNom");
    if (divErr.firstChild) {
      divErr.removeChild(divErr.lastChild);
    }
    divErr.appendChild(errPara);

    if ($this.hasClass("valid")) {
      $this.removeClass("valid");
    }
  } else{
    $this.addClass("valid");

    var divErr = document.getElementById("errNom");
    divErr.removeChild(divErr.lastChild);

    if ($this.hasClass("noValid")) {
      $this.removeClass("noValid");
    }
  }
}

   //Comprova si el COGNOM es correcte
   function valCognom(){
    var $this = $(this);
    var regex = /^[A-Z a-z]{3,20}$/;
    var valor = $this.val();

    var errPara = document.createElement("p");
    var errText = document.createTextNode("Mínim 3 caràcters i màxim 30 caràcters");
    errPara.appendChild(errText);

    if(!regex.test(valor)){
      $this.addClass("noValid");
      var divErr = document.getElementById("errCognom");
      if (divErr.firstChild) {
        divErr.removeChild(divErr.lastChild);
      }
      divErr.appendChild(errPara);

      if ($this.hasClass("valid")) {
        $this.removeClass("valid");
      };
    } else{
      $this.addClass("valid");

      var divErr = document.getElementById("errCognom");
      divErr.removeChild(divErr.lastChild);

      if ($this.hasClass("noValid")) {
        $this.removeClass("noValid");
      }
    }
  }

    //Comprova si l'EMAIL es valid
    function valMail(){
      var $this = $(this);
      var regex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      var valor = $this.val();

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Introdueix un correu vàlid 'exemple@exemple.com'");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        $this.addClass("noValid");
        var divErr = document.getElementById("errMail");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);

        if ($this.hasClass("valid")) {
          $this.removeClass("valid");
        };
      } else{
        $this.addClass("valid");

        var divErr = document.getElementById("errMail");
        divErr.removeChild(divErr.lastChild);

        if ($this.hasClass("noValid")) {
          $this.removeClass("noValid");
        }
      }
    }

    function valTelf(){
      var $this = $(this);
      var regex = /(\+376[0-9]{6})$/i;
      var valor = $this.val();

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Introdueix un telèfon de 6 números.");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        $this.addClass("noValid");
        var divErr = document.getElementById("errTelf");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);

        if ($this.hasClass("valid")) {
          $this.removeClass("valid");
        };
      } else{
        $this.addClass("valid");

        var divErr = document.getElementById("errTelf");
        divErr.removeChild(divErr.lastChild);

        if ($this.hasClass("noValid")) {
          $this.removeClass("noValid");
        }
      }
    }

    function valBanc(){
      var $this = $(this);
      var regex = /AD[0-9]{2}000(1|3)[0-9]{16}/i;
      var regAndBank = /AD[0-9]{2}0001[0-9]{16}/i;
      var regCredit = /AD[0-9]{2}0003[0-9]{16}/i;
      
      var bankPara = document.createElement("p");
      var andBank = document.createTextNode("AndBank");
      var credit = document.createTextNode("Crèdit Andorrà");
      var valor = $this.val();

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Introdueix un IBAN vàlid (ADCC BBBB SSSS ZZZZ ZZZZ ZZZZ).");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        $this.addClass("noValid");
        var divErr = document.getElementById("errBanc");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);

        if ($this.hasClass("valid")) {
          $this.removeClass("valid");
        };
      } else{
        $this.addClass("valid");
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

        if ($this.hasClass("noValid")) {
          $this.removeClass("noValid");
        }
      }
    }

    function valPass(){
      var $this = $(this);
      var regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d{2,})[^ ]{6,}$/;
      var valor = $this.val();

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Ha de contenir un mínim de 2 digits, una majúscula i una minúscula i 6 caràcters de llarg");
      errPara.appendChild(errText);

      if(!regex.test(valor)){
        $this.addClass("noValid");
        var divErr = document.getElementById("errPass");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);

        if ($this.hasClass("valid")) {
          $this.removeClass("valid");
        };
      } else{
        $this.addClass("valid");

        var divErr = document.getElementById("errPass");
        divErr.removeChild(divErr.lastChild);

        if ($this.hasClass("noValid")) {
          $this.removeClass("noValid");
        }
      }
    }

    function valPass2(){
      var $this = $(this);
      var contra = contrasenya.val();
      var valor = $this.val();

      var errPara = document.createElement("p");
      var errText = document.createTextNode("Les contrasenyes han de coincidir");
      errPara.appendChild(errText);

      if(valor!==contra){
        $this.addClass("noValid");
        var divErr = document.getElementById("errPass2");
        if (divErr.firstChild) {
          divErr.removeChild(divErr.lastChild);
        }
        divErr.appendChild(errPara);

        if ($this.hasClass("valid")) {
          $this.removeClass("valid");
        };
      } else{
        $this.addClass("valid");

        var divErr = document.getElementById("errPass2");
        divErr.removeChild(divErr.lastChild);

        if ($this.hasClass("noValid")) {
          $this.removeClass("noValid");
        }
      }
    }

function init() {
  if (localStorage["nom"]) {
    $('#nom').val(localStorage["nom"]);
  }
  if (localStorage["cognom"]) {
    $('#cognom').val(localStorage["cognom"]);
  }
  if (localStorage["telf"]) {
    $('#telf').val(localStorage["telf"]);
  }
  if (localStorage["adress"]) {
    $('#adress').val(localStorage["adress"]);
  }
  if (localStorage["poblacio"]) {
    $('#poblacio').val(localStorage["poblacio"]);
  }
  if (localStorage["cp"]) {
    $('#cp').val(localStorage["cp"]);
  }
  if (localStorage["pais"]) {
    $('#pais').val(localStorage["pais"]);
  }
  if (localStorage["datepicker"]) {
    $('#datepicker').val(localStorage["datepicker"]);
  }
  if (localStorage["email"]) {
    $('#email').val(localStorage["email"]);
  }
  if (localStorage["banc"]) {
    $('#banc').val(localStorage["banc"]);
  }
}

function validar(valor){
  var $this = $(this);
  if ($this.hasClass("valid") & !($this.hasClass("noValid"))) {
    return true;
  } else {
    return false;
  }
}