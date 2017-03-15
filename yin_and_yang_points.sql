-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 15 2017 г., 18:03
-- Версия сервера: 5.5.45
-- Версия PHP: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- База данных: `yin-and-yang`
--

-- --------------------------------------------------------

--
-- Структура таблицы `yin_and_yang_points`
--

CREATE TABLE IF NOT EXISTS `yin_and_yang_points` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ip_user` varchar(11) NOT NULL,
  `time` varchar(225) NOT NULL,
  `id_point` varchar(225) NOT NULL,
  `coord_x` varchar(11) NOT NULL,
  `coord_y` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=19 ;

--
-- Дамп данных таблицы `yin_and_yang_points`
--

INSERT INTO `yin_and_yang_points` (`id`, `ip_user`, `time`, `id_point`, `coord_x`, `coord_y`) VALUES
(1, '127.00.01', '15-03-17 10:48', 'mxYayPoint_Yin', '124', '234'),
(2, '127.00.01', '15-03-17 10:48', 'mxYayPoint_Yang', '324', '54'),
(3, '120.00.92', '111111111', 'mxYayPoint_Yang', '654', '98'),
(4, '120.00.92', '111111111', 'mxYayPoint_Yang', '354', '198'),
(6, '122.00.11.1', '14:27', 'mxYayPoint_Yin', '12', '111'),
(7, '122.00.11.1', '15:27', 'mxYayPoint_Yin', '34', '54'),
(8, '122.00.11.1', '15:27', 'mxYayPoint_Yin', '34', '23'),
(9, '122.00.11.1', '15:50', 'mxYayPoint_Yin', '134', '54'),
(13, '127.0.0.1', '17:03:19', 'mxYayPoint_Yin', '119', '125'),
(14, '127.0.0.1', '17:03:41', 'mxYayPoint_Yang', '940', '196'),
(15, '127.0.0.1', '17:03:28', 'mxYayPoint_Yang', '631', '391'),
(16, '127.0.0.1', '17:03:05', 'mxYayPoint_Yin', '518', '178'),
(17, '127.0.0.1', '17:03:13', 'mxYayPoint_Yin', '677', '200'),
(18, '127.0.0.1', '17:03:17', 'mxYayPoint_Yin', '322', '0');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
