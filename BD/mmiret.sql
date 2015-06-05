# Host: 192.168.3.120  (Version: 5.0.51b-community-nt)
# Date: 2015-06-05 10:19:03
# Generator: MySQL-Front 5.3  (Build 4.214)

/*!40101 SET NAMES latin1 */;

#
# Structure for table "elements_mm"
#

CREATE TABLE `elements_mm` (
  `id` int(11) NOT NULL auto_increment,
  `tipus` varchar(255) default NULL,
  `titol` varchar(255) default NULL,
  `desc` varchar(255) default NULL,
  `url` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=45 DEFAULT CHARSET=latin1;

#
# Data for table "elements_mm"
#

INSERT INTO `elements_mm` VALUES (37,'Video','asdasd',NULL,'img/MiretGutierrezMoises_Fitxa_formulari_ordenat.docx'),(38,'Video','qweqwe',NULL,'img/get name and sex.xlsm'),(39,'Article','Graminias',NULL,'img/eula.1031.txt'),(40,'Video','asd',NULL,'img/emu8086.ini'),(42,'Article','qfqafdafda',NULL,'img/'),(43,'undefined','',NULL,'img/BIOS_ROM'),(44,'Article','miki',NULL,'img/BIOS_ROM');

#
# Structure for table "noticies"
#

CREATE TABLE `noticies` (
  `id` tinyint(3) NOT NULL auto_increment,
  `tipus` varchar(255) default NULL,
  `titol` varchar(255) default NULL,
  `contingut` varchar(255) default NULL,
  `resum` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;

#
# Data for table "noticies"
#

INSERT INTO `noticies` VALUES (62,'Ref','qweqwe','asdasdqweqwe','test'),(87,'Enq','243434','345345335','test'),(88,'Enq',',mnbvcx','bvcxz','test'),(89,'Enq','asdasdads','asdasdasd','test'),(90,'Vot','Miki votacio','Votacio miki','test'),(91,'Vot','Miki votacio','Votacio miki','test'),(93,'Vot','asdadad','asdasdadadasdasd','test');

#
# Structure for table "usuaris"
#

CREATE TABLE `usuaris` (
  `id` int(11) NOT NULL auto_increment,
  `nom` varchar(255) NOT NULL default '',
  `cognom` varchar(255) NOT NULL default '',
  `telefon` varchar(255) default NULL,
  `adreca` varchar(255) default NULL,
  `poblacio` varchar(255) default '',
  `codiPostal` varchar(255) default NULL,
  `pais` varchar(255) NOT NULL default '',
  `dataNaix` varchar(255) default '',
  `email` varchar(255) default NULL,
  `contrasenya` varchar(255) NOT NULL default '',
  `iban` varchar(255) default NULL,
  PRIMARY KEY  (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

#
# Data for table "usuaris"
#

INSERT INTO `usuaris` VALUES (5,'asd','asd',' 376620597','','asd','','Zambia','undefined','asd@dsa.com','1234mM','AD0100011111222233334444'),(6,'asd','asd',' 376620597','','asd','','sad','undefined','asd@dsa.com','1234mM','AD0100011111222233334444'),(7,'asdqweqwe','asdqwepoiuyt',' 376620597','','asd','','Zambia','undefined','asd@dsa.com','1234mM','AD0100011111222233334444'),(8,'Roc','Duran',' 376840432','','234234','','Algeria','undefined','rocduran@gmail.com','ALdosa193','AD0200031111222233334444'),(9,'Roc','Duran',' 376840432','','234234','','s','undefined','rocduran@gmail.com','1234rR','AD0200031111222233334444'),(10,'Miki','Duran',' 376840432','','234234','','s','undefined','rocduran@gmail.com','1234rR','AD0200031111222233334444');
