-- MySQL dump 10.13  Distrib 5.6.24, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: gume
-- ------------------------------------------------------
-- Server version	5.6.27-log

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
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) NOT NULL,
  `name` varchar(45) NOT NULL,
  `radius` varchar(45) NOT NULL,
  `width` varchar(45) NOT NULL,
  `height` varchar(45) NOT NULL,
  `price` float NOT NULL,
  `images` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,'Tigar','Prima','15','195','65',6500,'guma_185.jpg'),(2,'Good Year','Max','14','175','65',7500,'guma_185.jpg'),(3,'Pireli','Winter','15','185','55',8500,'guma_195.jpg'),(4,'Kleber','Dinaxer','14','175','65',8000,'guma_185.jpg'),(5,'Kleber','Dinaxer','14','185','55',9000,'guma_205.jpg'),(6,'Kleber','Dinaxer','15','175','65',9200,'guma_195.jpg'),(7,'Kleber','Dinaxer','15','185','55',9600,'guma_205.jpg'),(8,'Kleber','Dinaxer','16','195','65',10500,'guma_195.jpg'),(9,'Kleber','Dinaxer','16','205','55',14000,'guma_195.jpg'),(10,'Dunlop','Maxer','14','175','65',12250,'guma_205.jpg'),(11,'Dunlop','Maxer','14','185','55',13500,'guma_205.jpg'),(12,'Dunlop','Maxer','15','175','65',14522,'guma_185.jpg'),(13,'Dunlop','Maxer','15','185','55',3232,'guma_195.jpg'),(14,'Dunlop','Maxer','16','195','65',17200,'guma_195.jpg'),(15,'Dunlop','Maxer','16','205','55',15300,'guma_205.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-08-30 15:57:41
