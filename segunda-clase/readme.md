Client-Side Rendering

Desventajas:

- Sin JS habilitado no tenemos vista
- No tenemos meta-tags por rutas, ya que el HTML / etiqueta head es compartido para toda la aplicación
- No tenemos code-splitting por ende enviamos en 1 solo bundle (JS) todo el código de nuestra aplicación
- Problemas de SEO ya que los robots no puede hacer crawling del contenido
- No puedo manejar cookies, por ende chequear por ej si un usuario esta autenticado o no y redireccionar a la página correcta

Ventajas:

- Le sacamos trabajo al servidor
- Nos sacamos el peso de levantar un servidor
