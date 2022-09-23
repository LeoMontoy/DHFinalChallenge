-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-09-2022 a las 23:25:01
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `mydb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `brand`
--

CREATE TABLE `brand` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `brand`
--

INSERT INTO `brand` (`id`, `name`) VALUES
(1, 'Jordan'),
(2, 'Nike'),
(3, 'Adidas'),
(4, 'Under Armour'),
(5, 'Reebok'),
(6, 'Converse');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `color`
--

CREATE TABLE `color` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `color`
--

INSERT INTO `color` (`id`, `name`) VALUES
(1, 'White'),
(2, 'Black'),
(3, 'Red'),
(4, 'Blue'),
(5, 'Grey'),
(6, 'Yellow');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `images`
--

CREATE TABLE `images` (
  `id` int(11) NOT NULL,
  `url` varchar(500) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `images`
--

INSERT INTO `images` (`id`, `url`, `product_id`) VALUES
(1, 'https://sneakerbardetroit.com/wp-content/uploads/2022/02/Air-Jordan-1-Brotherhood-555088-706-Release-Date-1.jpeg', 1),
(5, 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTymfthShxfJF2xqCGJQ7PxcrLS_D7_YsqcZw&usqp=CAU', 4),
(15, 'https://i.ebayimg.com/images/g/CxEAAOSw~atb2wbV/s-l500.jpg', 111),
(18, 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2018/07/31/15330534472974.jpg', 116),
(19, 'https://thumbs.nosto.com/quick/rbxh5h46/8/244418_alt_0a745037085ac24bb6d2ae90cda37716fabe9b0203494e03b375e98910595386/81ee8d3375a4ef82ba4be93c060acd436ea2d749751db423ca73eb4dd6dc20c6/A', 117),
(20, 'https://static.eldiario.es/clip/73a81344-37e9-4256-9d69-ab6b7ce0d38b_16-9-discover-aspect-ratio_default_0.jpg', 118),
(21, 'https://www.america-retail.com/static/2022/05/Reebok-e1651668809522.jpeg', 119);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `material`
--

CREATE TABLE `material` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `material`
--

INSERT INTO `material` (`id`, `name`) VALUES
(1, 'Leather'),
(2, 'Synthetic'),
(3, 'Textile'),
(4, 'Canvas'),
(5, 'Rubber');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `price` int(11) NOT NULL,
  `description` varchar(500) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `material_id` int(11) NOT NULL,
  `color_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `products`
--

INSERT INTO `products` (`id`, `name`, `price`, `description`, `brand_id`, `material_id`, `color_id`) VALUES
(1, 'Jordan 1 High OG “Brotherhood”', 170, 'Dressed in a University Gold, Light Bordeaux, and White color scheme. This Air Jordan 1 features White leather side panels, nylon tongues, and midsole paired with Gold and Purple overlays nodding to the colors of the fraternity. A White midsole atop a Yellow rubber outsole completes the design.', 1, 1, 1),
(4, 'Converse Chuck Taylor All Star Hi', 100, 'Estos zapatos clásicos tienen una parte superior de lona negra y una puntera y suela de goma en color blanco. Son terminados con gráfico logo Converse imprimido por el lado', 6, 3, 2),
(111, 'Under Armour Men Black Canvas', 40000, 'Full style, Recomendado para el hombre elegante, de buen vestir.', 4, 4, 2),
(116, 'Camiseta Basket Lakers ', 33000, ' NBA Los Lakers desvelan su camiseta Showtime para la próxima temporada!', 2, 2, 6),
(117, 'Short Selección Argentina', 10000, 'Short seleccion Argentina Qatar 2022', 3, 3, 2),
(118, 'Camiseta Argentina Futbol', 18200, 'La nueva camiseta alternativa Argentina 2022 Qatar 2022', 3, 3, 4),
(119, 'Zapatillas UnderGround Life', 32600, 'El nuevo modelo de la marca define estilo underground para todo el que vive una vida con flow', 5, 4, 5);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `brand`
--
ALTER TABLE `brand`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_images_products` (`product_id`);

--
-- Indices de la tabla `material`
--
ALTER TABLE `material`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_products_brand` (`brand_id`),
  ADD KEY `FK_products_material` (`material_id`),
  ADD KEY `FK_products_color` (`color_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `brand`
--
ALTER TABLE `brand`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `color`
--
ALTER TABLE `color`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `images`
--
ALTER TABLE `images`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `material`
--
ALTER TABLE `material`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=120;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `images`
--
ALTER TABLE `images`
  ADD CONSTRAINT `FK_images_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `FK_products_brand` FOREIGN KEY (`brand_id`) REFERENCES `brand` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_products_color` FOREIGN KEY (`color_id`) REFERENCES `color` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_products_material` FOREIGN KEY (`material_id`) REFERENCES `material` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
