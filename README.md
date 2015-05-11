# EP1_3
##Modul 3 EP1


- L’objectiu d’aquest projecte és la de completar la web estàtica creada en el treball anterior per tal d’implementar la funcionalitat en un llenguatge de servidor del tipus script (en aquest cas PHP). Part de la implementació es durà a terme fent servir la biblioteca JQUERY presentada a classe de laboratori i adaptada per part de l’alumne al projecte. També s’incorpora la utilització de AJAX en algunes peticions al servidor.

- Preparació : 
  - Lectura i estudi de les transparències i llibre del curs en els seus diferents apartats. 
  - Exemple base comentat a classe [aquí](http://exemples.ua.ad/Miki/webapp/).Patró exemple MVC amb ajax [aquí](http://exemples.ua.ad/Miki/MVCphpAjax/).
  - Un exemple de pujar arxius al servidor [aquí](http://www.purosoftware.com/desarrollo-web-scripts-archivos-upload/07-jquery-file-upload-plugin.html) (elements multimèdia)
  - Un exemple de Servei web [aquí](http://donnierock.com/2013/01/17/crear-un-webservice-basico-con-php-y-soap/) (adreça Web + utilització de nusoap)

- Enunciat 
  - Part PHP + JQUERY + AJAX :
  - Recuperarem la línia del projecte anterior (Democràcia participativa)  per tal d’afegir la part persistència de dades.
  - Definir la BD que permeti emmagatzemar els diferents elements i dades personals dels usuaris.
  - Utilitzar PHP, el mètode $.ajax() en les trucades als diferents .php (a l’estil del patró de programació proposat en els exemples comentats a classe (es troben funcionals en http://exemples.ua.ad/)
  - Volem implementar part de la funcionalitat del projecte anterior (les dades estan ara situades en un servidor MySQL):
    - Part Client :
      - Poder donar-se d’alta com a client (recuperar formulari d’entrada de dades de TV2).
      - Autenticació via LDAP (tema 5 Part autenticació) i manteniment de sessió (indiqueu per exemple el nom i cognom de l’usuari en un algun indret de la capçalera amb un botó desconnectar)
      - Llistat dels elements (a partir del tipus, per exemple, votacions, referèndums o enquestes)
      - Crear un formulari per poder efectuar una votació
    - Part Administrador :
      - Crear un nou element en la taula ELEMENTS_MM inclòs el FTP per upload:
      -  CodiElement : Codi únic
      - Tipus : (1->PDF, 2 -> Vídeo 3 -> àudio, 4-> altres). 
      - Titol : String
      - Breu descripció : String
      - URL : Del fitxer multimèdia en el servidor

- Part altres (tema 5 Proves i depuració) OPCIONAL :
  - Mitjançant PHPUNIT definiu un informe amb els diferents test efectuats per provar i depurar el vostre projecte
  - Part serveis Web i Mashups (temes 6, 7 i 9):
    - En el treball anterior, es van recollir les dades provinents de les diferents països veïns en format XML i Json (DPEspanya2015.XML  i DPFranca2015.txt).
    - En aquest treball, us demano de que aquestes informacions provinguin d’un serveiWeb que generi la mateixa informació en XML
    - Crear una pàgina web en la que es combinin informacions provinents d’un parell de RSS i del servei GoogleMaps.