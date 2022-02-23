CREATE TABLE `t_planets` (
  `id_planets` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `diameter` decimal(10,2) DEFAULT NULL,
  `rotation_period` int(11) DEFAULT NULL,
  `orbital_period` int(11) DEFAULT NULL,
  `gravity` decimal(10,2) DEFAULT NULL,
  `population` int(11) DEFAULT NULL,
  `climate` varchar(50) DEFAULT NULL,
  `terrain` varchar(50) DEFAULT NULL,
  `surface_water` decimal(10,2) DEFAULT NULL,
  `residents` json DEFAULT NULL,
  `films` json DEFAULT NULL,
  `url` varchar(150) DEFAULT NULL,
  `created` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
  `edited` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  PRIMARY KEY (`id_planets`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1