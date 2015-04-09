# EP1_2
Modul 2 EP1


- Preparació, revisió dels apunts :
  [] Sintaxi base del llenguatge (Capítols 1,2,3,4,6)
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

