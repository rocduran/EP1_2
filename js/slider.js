$(document).ready(function() { // Script del Slider de la pagina index

  $("div.opcio2, div.opcio3").hide(); // amaguem opcio2 i opcio3
  $('a.opcio1').addClass('aqui'); // mostrem opcio1

  $("a.opcio1").click(function(e) { // quan clickem opcio1, opcio2 i 3 s'amaguen i es mostra opcio1
    $('.menu_slider a').removeClass('aqui');
    $(this).addClass('aqui');
    $('div.opcio1').show('slow');
    $('div.opcio2, div.opcio3').hide('slow');
    return false;
    e.preventDefault();
  });

  $("a.opcio2").click(function(e) {
    $('.menu_slider a').removeClass('aqui');
    $(this).addClass('aqui');
    $('div.opcio2').show('slow');
    $('div.opcio1, div.opcio3').hide('slow');
    return false;
    e.preventDefault();
  });

  $("a.opcio3").click(function(e) {
    $('.menu_slider a').removeClass('aqui');
    $(this).addClass('aqui');
    $('div.opcio3').show('slow');
    $('div.opcio1, div.opcio2').hide('slow');
    return false;
    e.preventDefault();
  });

  //EXPANDIR NOTICIES INDEX
  $(function() {
    $(".notExp").on("click", function() {
      $(this).next().slideToggle(100);
      $expand = $(this).find(">:first-child");

      if ($expand.text() == "+") {
        $expand.text("-");
      } else {
        $expand.text("+");
      }
    });
  });

  //SLIDER ADMIN (mateix principi que SLIDER INDEX)
  $("div.noticies, div.multimedia, div.usuaris, div.inserirNoticia, div.inserirMulti, div.inserirUsuari").hide();
  $('a.resum').addClass('aqui');

  $("a.resum").click(function(e) {
    $('.menuadmin a').removeClass('aqui');
    $(this).addClass('aqui');
    $('div.resum').show();
    $('div.noticies, div.multimedia, div.usuaris, div.inserirNoticia, div.inserirMulti, div.inserirUsuari').hide();
    return false;
    e.preventDefault();
  });

  $("a.noticies").click(function(e) {
    $('.menuadmin a').removeClass('aqui');
    $(this).addClass('aqui');
    $('div.noticies').show();
    $('div.resum, div.multimedia, div.usuaris, div.inserirNoticia, div.inserirMulti, div.inserirUsuari').hide();
    return false;
    e.preventDefault();
  });

  $("a.multimedia").click(function(e) {
    $('.menuadmin a').removeClass('aqui');
    $(this).addClass('aqui');
    $('div.multimedia').show();
    $('div.noticies, div.resum, div.usuaris, div.inserirNoticia, div.inserirMulti, div.inserirUsuari').hide();
    return false;
    e.preventDefault();
  });

  $("a.usuaris").click(function(e) {
    $('.menuadmin a').removeClass('aqui');
    $(this).addClass('aqui');
    $('div.usuaris').show();
    $('div.noticies, div.multimedia, div.resum, div.inserirNoticia, div.inserirMulti, div.inserirUsuari').hide();
    return false;
    e.preventDefault();
  });

  $("a.inserirNoticia").click(function(e) {
    $('.menuadmin a').removeClass('aqui');
    $(this).addClass('aqui');
    $('.inserirNoticia .header').html("Inserir notícia");
    $('div.inserirNoticia').show();
    $('div.noticies, div.multimedia, div.resum,div.usuaris, div.inserirMulti, div.inserirUsuari').hide();
    return false;
    e.preventDefault();
  });

  $("a.inserirMulti").click(function(e) {
    $('.menuadmin a').removeClass('aqui');
    $(this).addClass('aqui');
    $('.inserirMulti .header').html("Inserir multimèdia");
    $('div.inserirMulti').show();
    $('div.noticies, div.multimedia, div.resum, div.usuaris, div.inserirUsuari').hide();
    return false;
    e.preventDefault();
  });

  $("a.inserirUsuari").click(function(e) {
    $('.menuadmin a').removeClass('aqui');
    $(this).addClass('aqui');
    $('.inserirUsuari .header').html("Inserir usuari");
    $('div.inserirUsuari').show();
    $('div.noticies, div.multimedia, div.resum, div.usuaris').hide();
    return false;
    e.preventDefault();
  });

});