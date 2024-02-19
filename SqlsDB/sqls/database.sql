CREATE DATABASE  IF NOT EXISTS `railwtegoriesay` 
USE `railway`;

--
-- Table structure for table `Categories`
--

CREATE TABLE `Categories` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
--
-- Dumping data for table `Categories`
--

INSERT INTO `Categories` VALUES (1,'Main'),(2,'MostViewed'),(3,'InSale');

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `price` int NOT NULL,
  `category_id` int DEFAULT NULL,
  `image` varchar(60) NOT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `fk_Products_Categories1_idx` (`category_id`),
  CONSTRAINT `fk_Products_Categories1` FOREIGN KEY (`category_id`) REFERENCES `Categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `name`, `price`, `category_id`, `image`, `createdAt`, `updatedAt`, `deletedAt`) VALUES
(1, 'Pulsera tejida', 15000, 2, '1690381095309.png', NULL, '2023-07-26', NULL),
(2, 'Correa', 26000, 3, 'correa.png', NULL, NULL, NULL),
(3, 'Sombrero', 50000, 2, 'sombrero.png', NULL, NULL, NULL),
(4, 'Camisa', 38000, 1, 'camisa.png', NULL, NULL, NULL);

--
-- Table structure for table `Types`
--

CREATE TABLE `Types` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Types`
--

INSERT INTO `Types` VALUES (1,'Admin'),(2,'Client'),(3,'Employee');

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `nick` varchar(45) NOT NULL,
  `email` varchar(60) NOT NULL,
  `password` text NOT NULL,
  `address` varchar(60) DEFAULT NULL,
  `image` varchar(60) DEFAULT NULL,
  `type_id` int DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL,
  `deletedAt` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nick_UNIQUE` (`nick`),
  KEY `fk_Users_Types_idx` (`type_id`),
  CONSTRAINT `fk_Users_Types` FOREIGN KEY (`type_id`) REFERENCES `Types` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` VALUES (1, 'Juan fernanado', 'España', 'Administrador', 'juanF@gmail.com', '$2a$10$KHfXI/jkDwvH6rTvZSSz6ex6cNh5IVVQmk.mIM.T2XE4f3css/gSu', 'calle falsa # 1-23', 'default.png', 1, '2023-07-13', '2023-07-13', NULL);
-- Pa$$w0rd!