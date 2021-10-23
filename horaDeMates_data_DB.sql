-- MySQL dump 10.13  Distrib 8.0.26, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: horademates_db
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'mates'),(2,'yerbas'),(3,'bolsos-materos'),(4,'bombillas'),(5,'otros');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (28,'Artesanal Cincelado a Mano','MATE DE CALABAZA FORRADO EN CUERO, VIROLA CINCELADA A MANO  CUATRO PARAS PARA REFORZAR SU ESTABILIDAD.',11200,'image-1633571084032.jpg',1),(29,'Canasta Entrerriana','Porta termo cuero color claro.',4100,'image-1633554517652.jpg',5),(30,'Bombilla Recto','Bombillon pico loro de acero inoxidable  coco resorte',200,'image-1633568427632.jpeg',4),(31,'Capincho','MATE DE VIDRIO FORRADO EN CUERO DE CARPINCHO.',1000,'image-1633571143837.jpg',1),(32,'Canasta Entrerriana Combinada','Porta termo símil cuero.',3000,'image-1633568643580.jpg',5),(33,'Bombilla Resorte','Bombillon pico Loro  resorte Desarmable',550,'image-1633568474938.jpeg',4),(34,'Mate Galleta','MATE GALLETA DE CALABAZA FORRADO EN CUERO, VIROLA DE ALUMINIO.',2200,'image-1633571200145.jpg',1),(35,'Canasta Doble Tamaño Stanley','Canasta entrerriana reforzada con madera para su estabilidad  tamaño Stanley',4900,'image-1633568703227.jpg',5),(36,'Bombilla Buenas Tardes','Bombilla con piedra desarmable  Acero quirúrgico.',700,'image-1633574042707.jpeg',4),(37,'Exclusivo Mate Arte Único','MATE ARTESANAL DE CALABAZA ,TRABAJO DE ORFEBRERIA EN VIROLA DE ALPACA - CUERO REPUJADO.',15600,'image-1633571310223.jpg',1),(38,'Canasta Entrerriana Liviana','Porta termo símil cuero',1200,'image-1633568771459.jpg',5),(39,'Bombilla Original','Bombilla entrerriana coco palita.',600,'image-1633561694522.jpg',4),(40,'Exclusivo copa Artesanal','Mate artesanal de calabaza curado trabajado en detalles de alpaca,  diseño de hojas y frutos.',6900,'image-1633559489666.jpg',1),(41,'Clásico Abierto Rígido','Porta Termo clásico abierto con seguro',7500,'image-1633568839422.jpg',5),(42,'Bombilla Clásico','Bombilla chata clásica',150,'image-1633574550371.jpeg',4),(43,'Copa Acero Cuero Repujado','MATE DE ACERO INOXIDABLE FORRADO EN CUERO REPUJADO',9500,'image-1633571416511.jpg',1),(44,'Clásico Abierto Rígido Marrón Claro','Porta Termo clásico abierto con seguro',7500,'image-1633568966197.jpg',5),(45,'Bombilla Clasico','Bombilla artesanal resorte de alpaca. cincelada a mano.',180,'image-1633568528048.jpeg',4),(46,'Mate Carpincho','MATE DE CALABAZA FORRADO EN CUERO DE CARPINCHO.  BASE Y VIROLA DE ALPACA.',4500,'image-1633569321655.jpg',1),(47,'Clásico Abierto Rígido Oscuro','Porta Termo clásico abierto, con seguro.',7500,'image-1633569509027.jpg',5),(48,'Bombilla de Alpaca','BOMBILLA ARTESANAL DE ALPACA',1232,'image-1633569957280.jpg',4),(49,'Mate Carpincho','Mate de Calabaza forrado en cuero de carpincho combinado con cinta guarda pampa.',1800,'image-1633571852120.jpg',1),(50,'Clásico Deportivo','Porta Termo Exclusivo de Cuero, incluye yerbera Criolla de bolsillo.  tamaño Stanley reforzada, con bolsillos en sus laterales y con correa desmontable.  Moderna y fácil de uso.',13800,'image-1633572026240.jpg',5),(51,'Bombilla Pampeana Curva','Bombilla tradicional de alpaca coco desarmable, boquilla enchapada en oro.',180,'image-1633572280131.jpg',4),(52,'Mate Entrerriano Pie Tejido','Mate de calabaza forrado en cueros combinados.  varios tamaños  pie de metal tejido a mano en tiento.',1800,'image-1633572487626.jpg',1),(53,'Entrerriano Doble Base Madera','Porta Termo Doble Básico',4600,'image-1633572807019.jpg',5),(54,' Bombilla Resorte Guitarra','Bombilla resorte de alpaca desarmable  , solo para yerba con palo.',900,'image-1633573014828.jpg',4),(55,'Mate Galleta Artesanal Bocón','Mate Galleta de calabaza modelo bocón, trabajado en alpaca.',4500,'image-1633573308019.jpg',1),(56,'Clásico Rígido Marrón Claro','Porta Termo tradicional Clásico rígido de colgar.',5800,'image-1633573720987.jpg',5),(57,'Bombilla Tradicional Coco Desarmable','BOMBILLA TRADICIONAL DE ACERO QUIRÚRGICO COCO DESMONTABLE,  CAÑO  GALLONEADO, NO SE OXIDA NI SOBRE CALIENTA.',1500,'image-1633573938929.jpg',4);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'user'),(2,'admin');
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'pepito','$2a$10$/v.MJ7kLs7jiqipQrVn8xef6aOgr3yOqXlAWg0Xwb4IoLqw7s5JAK','asdasd@gmail.com','2021-11-06','pepo',1),(4,'lean','$2a$10$136Q.yhS7ooHh3e07R9zQuTz15vq2teSswXkTKCxkdBEZ7E7o0NiO','lean2@gmail.com','2021-10-02','dro',1),(5,'Gabriel','$2a$10$0iBuR.eOeqSlkcovHvVCWeglaka3c3uC4K3/nnNWGCJ.ZcnrcWYwu','gabiibagna@gmail.com','2021-10-01','g4b7i3l',2),(8,'leandro segovia','$2a$10$Oyz7yOVFLIV.S0s88ry1..USgWGq7MOubwAV.NuxSTTSs8IWSQUMK','leandrosegoviaroman@gmail.com','1996-10-22','lea2224',2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-10-07 15:01:23
