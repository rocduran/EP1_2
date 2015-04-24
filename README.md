# EP1_2
Modul 2 EP1


- Preparació, revisió dels apunts :
  - Sintaxi base del llenguatge (Capítols 1,2,3,4,6)
  - Creació i validació de formularis (Capítol 5)
  - Enviament, recepció i tractament d’informació XML, JSON i AJAX (Capítol 7 + Complement DOM SAX JSON)
  - Components avançats en HTML5 (Capítol 9 i complements)
  - Apunts de [JavaScript](http://librosweb.es/libro/javascript/) : + complements de javascript
  - Expressions regulars per validació [aquí](http://webintenta.com/validacion-con-expresiones-regulares-y-javascript.html) 

- Part 1 : (Creació i validació de formularis)
  - Crear un formulari d’entrada/modificació de dades per un ciutadà amb els requisits següents :
	- Dades : Nom, cognom, Email, telèfon, contrasenya (+ verificació), data naixement, adreça, Població, País, Codi Postal, Dades bancàries (Context d’Andorra), quines xarxes socials es connecta habitualment (facebook, Twitter, etc..).
  - Cal tenir en compte d’escollir els elements d’entrada més adequats per evitar errades.
  -  A cada canvi de camp, cal indicar una marca verda (check Ok) en cas d’entrada correcta, i un missatge d’error i possible solució en cas erroni. Quan tots els camps siguin correctes, un botó ‘Registrar’ quedarà actiu per poder simular que s’envien les dades al servidor. Les dades quedaran emmagatzemades en localStorage i es podran llegir mitjançant un altre botó ‘Veure Dades locals’.  
  - Podeu usar un JS de Calendari per recollir la data (trobar-ho a Internet).
  - La contrasenya ha de disposar de com a mínim una lletra majúscula, una minúscula, 2 dígits numèrics i una llargada mínima de 6 caràcters en total.
  - Les dades bancàries han de complir amb el format IBAN (Amb 2 entitats bancàries n’hi ha prou)
  - El telèfon ha d’acceptar el guió i dígits, i suposarem que únicament podem entrar telèfons Andorrans (376-8XXXXX, 376-3XXXXX, 376-7XXXXX).     
 
- Part 2 : (Enviament, recepció i tractament d’informació)
  - Suposarem que volem presentar informació en el nostre portal de les participacions dels països veïns que també s’han afegit a aquesta modalitat de nova democràcia participativa. Aquestes dades ens les envien en dos formats JSON i XML.
  - Cal crear una pantalla que disposi de 2 botons (‘Llegir JSONDPFranca2015.txt’ i ‘Llegir XMLDPEspanya2015.XML’) que recuperin mitjançant petició AJAX i les emmagatzemin usant indexedDB. 
  - Cal fer una gestió CRUD en local d’aquestes dades : Llistat, Modificació, Esborrar.
  - Els dos fitxers anteriors els creeu vosaltres mateixos amb un editor de text i un conjunt de 4 registres cadascun.
  - Les dades dels fitxers XML i JSON presenten les informacions següents :
    - CodiDP : Identificador únic.
    - Tipus : String amb el tipus (Referèndum, enquesta, votació..)
    - Pregunta : String amb la pregunta proposada
    - DataO  : String amb la data de creació de la pregunta
    - DataF : String amb la data de finalització de la participació

- Part 3 : (Components avançats i HTML5) : 
  - Àudio i vídeo en HTML5 : Crear un exemple de cada (un de àudio i un de vídeo) usant els controls HTML5. Cal que es pugui reproduir en la majoria de navegadors. També s’ha de poder controlar el mitjà (Pausa, Play, etc...) 
  - Geolocalització : Definir una pàgina amb un comboBox que permeti escollir 2 llocs (podrien ser els centres d’informació) i ens indiqui la posició GPS en el Mapa.
  - Utilitzeu un parell d’efectes proposats en l’apartat ‘Semantics & Markup’ integrats en el vostre projecte de [http://slides.html5rocks.com/#semantics-markup-title](http://slides.html5rocks.com/#semantics-markup-title) 
  - Utilitzeu també un parell de noves característiques en l’apartat CSS3 de la mateixa web integrades en el vostre projecte.

- Implementació:
  Noves funcionalitats:
    - signup.html, signup.js : Validació de formaluri implementada i guardat de les dades (excepte contrasenya, per raons de seguretat) al localStorage per evitar pèrdues. Botó de "registrar" desactivat fins que l'usuari no ha introduit totes les dades vàlides i té activat el checkbox d'acceptar les condicions. La llista de paisos es carregada dinàmicament a partir d'un arxiu JSON.

    - altres.html, altres.css, altres.js : Creació de base de dades indexedDB, lectura i modificació en local d'arxius JSON i XML. Per accedir-hi, has d'estar a la pàgina d'admin ("usuari">Ajustaments) i llavors a la barra de navegació surt l'opció d'Altres.

    - multimedia.html, visualitzador.html, multimedia.js : Desde multimèdia es fa click al arxiu que vols veure i envia a visualitzador.html amb el arxiu a veure. pot ser un video(html5), un audio(html5) o un pdf(embed per veure'l sense descarregarlo). 

    - index.html, colabora.css, colabora.js: Implementació de funcionalitats de la geolocalització.

    - Hem utilitzat funcionalitats CCS3: :odd/:even per aplicar estils als llistats (admin.html o altres.html) o :after per aplicar estil **DESPRES** del selector (linia 423, styles.css). També hem utilitzat unitats de valors de propietats noves de CSS3, com:
      - em(agafa el valor del font-size, font-size:14px 1em=14px;): linia 335, styles.css.
      - vw (funciona d'una manera similar al em, però amb el tamany de la finestra, 1vw= 1% del tamany de la finestra del navegador): linia 38, altres.css.


  Millores de funcionalitats ja presents en el TV-1:
    - admin.html, admin.css, index.html, slider.js : Separació del codi html i js, canvis menors del codi(.html i .css).

    - multimedia.html, visualitzador.html, multimedia.js : Ara carrega l'arxiu que sel·lecciones a multimedia.html dinàmicament a visualitzador.html.

    - Reescrita tota la pàgina d'admin (html+css+js). 
