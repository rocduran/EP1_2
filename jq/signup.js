$(document).ready(function(){
    
  //variables
   var name = $("#nom");
       email = $("#email");
       comment = $(".palabras textarea");
       modal_name = $(".modal span");
       modal = $(".modal");
  
   //hide modal
    modal.hide();

   //check if name is empty
   name.on("blur",function(){
    var $this = $(this);
    if($this.val().length === 0 ||
       $this.val() === "Nom"){
        $this.addClass("noValid");
        $this.val("");
    } else{
        $this.addClass("valid");
      }
   });
    
    //check if email is empty
  email.on("blur",function(){
    var $this = $(this);
    if($this.val().length === 0 ||
       $this.val() === "Email"){
      $this.addClass("noValid");
        }
  });
    
    //check if email is valid
  email.on("blur",function(){
    var $this = $(this);
    if($this.val().indexOf("." && "@") > -1){
       $this.addClass("valid");
    } else{
        $this.addClass("noValid");
        $this.val("Email");
    }
  });
    
    //check if textarea is empty
  comment.on("blur",function(){
    var $this = $(this);
    if($this.val() === ""){
      $this.addClass("noValid");
      $this.val("Comments");
    } else{
      $this.addClass("valid");
    }
 });
    
    //clear inputs on click
    $(".input").on("focus",function(){
        $(this).val("");
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
    
});
