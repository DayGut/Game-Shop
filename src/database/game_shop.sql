-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: game_shop
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.24-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'aventura-simulacion'),(2,'deporte'),(3,'accion');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `price` int(11) NOT NULL,
  `description` text CHARACTER SET utf8mb4 NOT NULL,
  `stock` tinyint(4) DEFAULT NULL,
  `categorias_id` int(11) NOT NULL DEFAULT 1,
  `discount` int(11) NOT NULL,
  `imagen` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_id_categorias` (`categorias_id`),
  CONSTRAINT `fk_id_categorias` FOREIGN KEY (`categorias_id`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf16;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (25,'FIFFA22',3000,'FIFA 22 es un videojuego desarrollado por EA Vancouver y EA Romania, siendo publicado por EA Sports. EstÃƒÂ¡ disponible para PlayStation 4, PlayStation 5, Xbox Series X/S, Xbox One, Microsoft Windows, Google Stadia y Nintendo Switch.',1,3,15,'1655850644784_img_.jpeg'),(37,'pokemon',100,'video juego pokemon',0,1,10,'1657589505780_img_.jpg'),(38,'Rust',2440,'El Ãºnico objetivo en Rust es sobrevivir. ',0,1,0,'1657755490548_img_.jpg'),(39,'GTAV',1050,'Un joven estafador callejero, un ladrÃ³n de bancos retirado y un psicÃ³pata aterrador se meten en problemas',1,3,0,'1657755699040_img_.jpg'),(40,'CSGO',2887,'Counter-Strike: Global Offensive es un videojuego de disparos en primera persona',0,1,0,'1657755943911_img_.jpg'),(41,'SUPERHOT',1900,'Aventura y disparos en slow motion nunca antes vistos',0,3,0,'1657756157356_img_.jpg'),(42,'BEATSABER',4000,'Realidad aumentada y coordinaciÃ³n necesitaras en este desafÃ­o',0,3,0,'1657756285882_img_.jpg'),(43,'AMONGUS',500,'Descubre al impostor dentro de la nave espacial',0,1,0,'1657756522188_img_.jpg'),(44,'DMC5',1550,'Descubre quien es el padre de Nero y salva al Mundo',0,3,0,'1657756697886_img_.jpg'),(45,'DOTA2',2000,'FPS 5 vs 5 destruye el nexo enemigo y hazte con la victoria',0,2,0,'1657756861287_img_.jpg'),(46,'Starwars',4000,'Vence al imperio y recorre el camino de un Jedi a travÃ©s de la batalla',0,2,0,'1657756971679_img_.jpg'),(47,'NBA2K22',3500,'Convierte en un profesional y gana el anillo tras ganar la liga',0,3,0,'1657757245543_img_.jpg'),(49,'ARKS',1500,'CrÃ­a y caza dinosaurios y crea tu nuevo imperio en este nuevo mundo',0,1,0,'1657757484078_img_.jpg'),(50,'F1RACE',2880,'Construye tu auto gana carreras y convierte en el nuevo campeÃ³n de MÃ³naco',0,3,0,'1657757640113_img_.jpg'),(51,'PUGB',2345,'Cae en una isla, Ã¡rmate y se el ultimo sobreviviente de este battle royale ',0,3,0,'1657757795420_img_.jpg'),(52,'RAFT',3555,'Construye tu barca, consigue recursos y evita a los temibles tiburones de las aguas ',0,1,0,'1657757940005_img_.jpg'),(53,'ARMA3',3000,'Experiencia masiva de combate en un universo sandbox',0,3,0,'1657758166641_img_.jpg'),(54,'DAYZ',4256,'Sobrevive a la niebla venenosa y a los demas supervivientes que quieren matarte',0,1,0,'1657758342037_img_.jpg'),(55,'Devilmaycry',2431,'Esta es la historia del origen de Dante Sparda  antes de ser un demonio',1,1,0,'1657758621184_img_.JPG'),(56,'SYNTH',3650,'AdÃ©ntrate en el mundo de realidad virtual y afina tus sentidos y reflejos',0,3,0,'1657837078119_img_.jpg');
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `avatar` varchar(100) NOT NULL,
  `rol` varchar(50) NOT NULL,
  `lastname` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (3,'admin','admin@admin.com','$2a$08$GZDmH4FYLYOvPVwbExWHcOdZTwbspNVm..t.I9dz2iIxOWQo6tH7.','user-avatar.jpeg','admin',''),(4,'daiana','dai@email.com','$2a$08$9fpMbwY1FOiTwVstPiCeyOGEDviaZE6KX8JKUIKuvCACW4stJnEpu','1656617994974_img_.png','admin',''),(5,'daian','adminis@email.com','$2a$08$hoRRytgwwutVu4TxSa7eMeQOQ6HmEuWpwxL3kRIRxCaM3mqEZXFd.','1657224275153_img_.jpg','admin',''),(6,'admin','administradora@gmail.com','$2a$08$MMtXvGwmQk/EpKX1c94bQ.2AZGKSynzuMkbrOSaa44j5SUwdWDeFi','1657243635457_img_.jpg','admin',''),(7,'admi','admi@email.com','$2a$08$l0gXEDjZ2cyZ5iFXPq1ICeBOX6R6ZhtbqhImnKF/0sJTAcjWPmE3i','1657245198224_img_.jpg','admin',''),(8,'admi','admnistradores@gmail.com','$2a$08$d2vxJYJidW9u4b0R92Vgi.z55X5yLRsarHT8ECIJBGeJGJ7nRK8lG','1657246542667_img_.jpg','admin',''),(9,'admi','administradores@gmail.com','$2a$08$q6r1F.wPk1Hx7dlSQY81auBe7mFqKVxqlGVOysdKrfPjvfvuDYSPW','1657246597970_img_.jpg','admin',''),(10,'administrador','administrar@emaial.com','$2a$08$wqdpDDI37.ZGGgDko41Sh.q7qbQGXqqJZJn2E1zOe8i8y2JmRh5IW','1657248655072_img_.jpg','admin',''),(11,'admi','admin@administradoremail.com','$2a$08$oURAbKgm9FNndk8ikLumOu8VfPHX70pjDMQ01j5KlfZeBW2qvzhDi','1657249405220_img_.jpg','admin',''),(12,'admin','administracion@email.com','$2a$08$9vT8Ipev1MbRAocN7JwPmOn20eJIW.nM5an96tKdLCt8W6Mjl5pX.','1657257029309_img_.jpg','admin',''),(13,'admin','daiana@email.com','$2a$08$2F.6.GNCWIXkw3aVYtnx.OZeZuas6tXGUmaPS9cEUxaS8LKPkMKn6','1658406668985_img_.jpg','admin',''),(14,'daiana','daiana@daiana.com','$2a$08$YjPKkr0FztPwGDvXkayVDeI5EmSS8.4AFDLp/r50ByOSBGMDTaxre','1658410977514_img_.jpg','admin','daiana');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'game_shop'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-07-21 18:59:14
