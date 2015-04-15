//TODO remove class valid/noValid 

$(document).ready(function(){

  //variables
  var nom = $("#nom");
  var cognom = $("#cognom");
  var email = $("#email");
  var telefon = $("#telf");
  var banc = $("#banc");

  $(function() {
    $( "#datepicker" ).datepicker(
    {
      dateFormat: "dd-mm-yy"
    });

  });

   //Comprova si el NOM es correcte
   nom.on("blur",function(){
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
      };
    } else{
      $this.addClass("valid");

      var divErr = document.getElementById("errNom");
      divErr.removeChild(divErr.lastChild);

      if ($this.hasClass("noValid")) {
        $this.removeClass("noValid");
      };
    }
  });

   //Comprova si el COGNOM es correcte
   cognom.on("blur",function(){
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
      };
    }
  });

    //Comprova si l'EMAIL es valid
    email.on("blur",function(){
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
        };
      }
    });

    telefon.on("blur",function(){
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
        };
      }
    });

    banc.on("blur",function(){
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
        };
      }
    });




    
    //show modal when inputs are valid and button
    //is clicked
    // $(".submit").on("click",function(){
    //   if(name.val() !== "Name" && name.val() !== "" &&
    //    email.val() !== "Email" && 
    //    email.val() !== "" &&
    //    comment.val() !== "Comments" && 
    //    comment.val()!== ""){

    //       //remove invalid/valid classes
    //     name.removeClass().addClass("input");
    //     email.removeClass().addClass("input");
    //     comment.removeClass().addClass("input");

    //       //modal box
    //       modal_name.text(name.val());
    //       modal.slideDown("medium")
    //       .delay(2000).slideUp("fast");

    //       //put default text back
    //       name.val("Name");
    //       email.val("Email");
    //       comment.val("Comments");

    //       return false;

    //     } else{

    //       return false; }
    //     });



});
