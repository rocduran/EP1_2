//TODO remove class valid/noValid 

$(document).ready(function(){

  //variables
  var nom = $("#nom");
  var cognom = $("#cognom");
  var email = $("#email");
  var inp = document.getElementsByTagName("input");
  var comment = $(".palabras textarea");


   //Comprova si el NOM esta buit
   nom.on("blur",function(){
    var $this = $(this);
    var re = /^[A-Za-z]{2,20}$/;
    var val = $this.val();

    var errPara = document.createElement("p");
    var errText = document.createTextNode("Mínim 2 caràcters i màxim 20 caràcters");
    errPara.appendChild(errText);

    if(!re.test(val)){
      $this.addClass("noValid");
      var element = document.getElementById("errNom");
      element.appendChild(errPara);
      if ($this.hasClass("valid")) {
        $this.removeClass("valid");
      };
  } else{
    $this.addClass("valid");

    var element = document.getElementById("errNom");
    element.removeChild(errPara);
    if ($this.hasClass("noValid")) {
        $this.removeClass("noValid");
      };
  }
});


   cognom.on("blur",function(){
    var $this = $(this);
    var re = /^[A-Z a-z]{3,20}$/;
    var val = $this.val();

    if(!re.test(val)){
      if ($this.hasClass("valid")) {
        $this.removeClass("valid");
      };
      $this.addClass("noValid");
  } else{
    $this.addClass("valid");
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


    //clear inputs on click
    $(inp).on("focus",function(){
      if ($this.hasClass("noValid")) {
        $this.removeClass("noValid");
      };

      if ($this.hasClass("valid")) {
        $this.removeClass("valid");
      };

    });
    
    //show modal when inputs are valid and button
    //is clicked
    $(".submit").on("click",function(){
      if(name.val() !== "Name" && name.val() !== "" &&
       email.val() !== "Email" && 
       email.val() !== "" &&
       comment.val() !== "Comments" && 
       comment.val()!== ""){

          //remove invalid/valid classes
        name.removeClass().addClass("input");
        email.removeClass().addClass("input");
        comment.removeClass().addClass("input");

          //modal box
          modal_name.text(name.val());
          modal.slideDown("medium")
          .delay(2000).slideUp("fast");

          //put default text back
          name.val("Name");
          email.val("Email");
          comment.val("Comments");

          return false;

        } else{

          return false; }
        });

    $.datepicker.formatDate( "dd-mm-yy", new Date( 2007, 7 - 1, 26 ) );
    
    $(function() {
    $( "#datepicker" ).datepicker();
  });
    
  });
