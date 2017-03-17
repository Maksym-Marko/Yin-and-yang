-- phpMyAdmin SQL Dump
-- version 4.0.10.10
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Время создания: Мар 17 2017 г., 16:37
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
  `ip_user` varchar(20) NOT NULL,
  `time` varchar(225) NOT NULL,
  `id_point` varchar(225) NOT NULL,
  `coord_x` varchar(11) NOT NULL,
  `coord_y` varchar(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=39 ;

--
-- Дамп данных таблицы `yin_and_yang_points`
--

INSERT INTO `yin_and_yang_points` (`id`, `ip_user`, `time`, `id_point`, `coord_x`, `coord_y`) VALUES
(21, '4343.455', '15:03:41', 'mxYayPoint_Yin', '35', '127'),
(22, '4343.455', '15:03:35', 'mxYayPoint_Yin', '36', '101'),
(23, '4343.455', '15:03:55', 'mxYayPoint_Yang', '37', '95'),
(24, '4343.455', '16:03:39', 'mxYayPoint_Yin', '130', '103'),
(25, '4343.455', '16:03:08', 'mxYayPoint_Yin', '73', '248'),
(26, '11.4343.455', '16:03:31', 'mxYayPoint_Yang', '113', '158'),
(27, '112.4343.45', '16:03:51', 'mxYayPoint_Yang', '21', '502'),
(28, '112.4343.47', '16:03:06', 'mxYayPoint_Yang', '48', '367'),
(29, '112.4343.47', '16:03:27', 'mxYayPoint_Yin', '109', '22'),
(30, '112.4343.470', '16:03:46', 'mxYayPoint_Yang', '1118', '349'),
(31, '112.4343.470', '16:03:25', 'mxYayPoint_Yin', '533', '179'),
(32, '112.4343.470', '16:03:29', 'mxYayPoint_Yang', '557', '104'),
(33, '112.4343.470', '16:03:32', 'mxYayPoint_Yin', '508', '119'),
(34, '112.4343.470', '16:03:36', 'mxYayPoint_Yang', '567', '145'),
(35, '112.4343.470', '16:03:52', 'mxYayPoint_Yang', '1099', '136'),
(36, '112.4343.470', '16:03:54', 'mxYayPoint_Yang', '1060', '92'),
(37, '112.4343.470', '16:03:57', 'mxYayPoint_Yang', '1109', '87'),
(38, '112.4343.470', '16:03:01', 'mxYayPoint_Yin', '1091', '99');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
