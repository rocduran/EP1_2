//TODO remove class valid/noValid 

$(document).ready(function(){

  //variables
  var nom = $("#nom");
  var cognom = $("#cognom");
  var email = $("#email");

    
  $(function() {
    $( "#datepicker" ).datepicker(
      {
        dateFormat: "dd-mm-yy"
      });

  });

   //Comprova si el NOM esta buit
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

    //Comprova si el EMAIL esta buit
    email.on("blur",function(){
      var $this = $(this);
    if($this.val().length === 0){
      if ($this.hasClass("valid")) {
        $this.removeClass("valid");
      };
      $this.addClass("noValid");
    $this.val("");
  } else{
    $this.addClass("valid");
    if ($this.hasClass("noValid")) {
        $this.removeClass("noValid");
      };
  }
  });
    
    //Comprova si l'EMAIL es valid
    email.on("blur",function(){
      var $this = $(this);
      if($this.val().indexOf("." && "@") > -1){
       $this.addClass("valid");
     } else{
      $this.addClass("noValid");
      $this.val("Email");
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
