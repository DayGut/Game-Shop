CREATE TABLE `Usuarios` (
  `id_usuario` int,
  `name` varChar(40),
  `email` varChar(40),
  `avatar` varChar(100),
  `rol` tinyint,
  PRIMARY KEY (`id_usuario`)
);

CREATE TABLE `usuarios_poductos` (
  `Num_pedido` int,
  `id_usuario` int,
  `id_producto` int,
  PRIMARY KEY (`Num_pedido`),
  FOREIGN KEY (`id_usuario`) REFERENCES `Usuarios`(`id_usuario`)
);

CREATE TABLE `Producto` (
  `id_producto` int,
  `name` varChar(40),
  `price` int,
  `categoryid` int,
  `description` varChar(200),
  `image` varChar(100),
  `stock` tinyint,
  PRIMARY KEY (`id_producto`),
  FOREIGN KEY (`id_producto`) REFERENCES `usuarios_poductos`(`id_producto`)
);

CREATE TABLE `productos_categorias` (
  `Id_categoria` int,
  `id_usuario` int,
  `id_producto` int,
  PRIMARY KEY (`Id_categoria`),
  FOREIGN KEY (`id_usuario`) REFERENCES `Producto`(`price`)
);

CREATE TABLE `productos_imagenes` (
  `id_img_prod` int,
  `id_usuario` int,
  `id_producto` int,
  PRIMARY KEY (`id_img_prod`),
  FOREIGN KEY (`id_img_prod`) REFERENCES `Producto`(`name`)
);

CREATE TABLE `Imagenes` (
  `id_imagenes` tinyint,
  `name` varChar(40),
  PRIMARY KEY (`id_imagenes`),
  FOREIGN KEY (`name`) REFERENCES `productos_imagenes`(`id_producto`)
);

CREATE TABLE `Categorias` (
  `Id_categoria` tinyint,
  `name` varChar(40),
  PRIMARY KEY (`Id_categoria`),
  FOREIGN KEY (`Id_categoria`) REFERENCES `productos_categorias`(`id_producto`)
);

