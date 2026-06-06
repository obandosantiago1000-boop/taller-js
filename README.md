# 🗂️ Taller: Creador de Tarjetas con Persistencia Local (LocalStorage)

Este proyecto consiste en una aplicación web interactiva que permite a los usuarios gestionar tarjetas de información visual de manera dinámica. Los usuarios pueden añadir nuevos elementos mediante un formulario emergente, verlos reflejados inmediatamente en la pantalla y borrarlos cuando lo deseen, con la ventaja de que toda la información se almacena directamente en el navegador y no se pierde al cerrar la pestaña.

---

## 🚀 Funcionalidades del Taller

1. **Formulario en Modal:** Panel o ventana emergente que contiene los campos de registro. Permanece oculto a la vista y solo aparece en pantalla cuando se requiere introducir datos, protegiendo el espacio de la interfaz principal.
2. **Generación Dinámica de Elementos:** Capacidad del sistema para fabricar y dibujar nuevos bloques visuales con la información provista por el usuario, acomodándolos en la pantalla al instante sin necesidad de recargar la página.
3. **Persistencia de Datos:** Uso de la memoria interna del navegador web para guardar un registro escrito de todas las tarjetas creadas, permitiendo que la información sobreviva a cierres de sesión o actualizaciones del sitio.
4. **Limpieza Global:** Opción para vaciar por completo el almacenamiento del navegador y reiniciar la pantalla a su estado original con un solo clic.

---

## 🛠️ Tecnologías Utilizadas

* **Estructura Web (HTML):** Proporciona el esqueleto y los cimientos de la página, definiendo dónde van los botones, los campos del formulario y el área destinada a las tarjetas.
* **Diseño y Estilos (CSS):** Define la apariencia visual de la aplicación, el color de fondo de las tarjetas, las esquinas redondeadas, las sombras, el comportamiento visual al pasar el cursor por encima y las reglas para ocultar o mostrar el formulario.
* **Lógica de Control (JavaScript):** Funciona como el motor de la aplicación. Se encarga de reaccionar a los clics del usuario, procesar los textos introducidos, transferir la información a la memoria del navegador y mandar la orden de dibujar los elementos en pantalla.

---

## 💡 Flujo de Trabajo del Taller

1. **Apertura:** El usuario solicita crear un nuevo elemento y el sistema activa una regla visual que hace visible la ventana flotante con el formulario.
2. **Llenado:** Se introducen los datos requeridos: el nombre del elemento, una breve descripción y la dirección de enlace (URL) de una imagen de internet.
3. **Procesamiento:** Al presionar el botón de confirmación, el sistema interrumpe el reinicio automático de la página y extrae los textos escritos eliminando espacios vacíos sobrantes en los extremos.
4. **Guardado:** La información de los campos se unifica en un solo registro estructurado, se añade a una lista general y se almacena de forma segura en formato de texto dentro de la memoria local del navegador.
5. **Renderizado:** La aplicación limpia el espacio visual de la pantalla, lee la lista de datos actualizados en la memoria y vuelve a dibujar cada una de las tarjetas con su respectivo diseño.
6. **Cierre:** El formulario restablece sus campos para quedar completamente vacío y la ventana flotante vuelve a ocultarse automáticamente a la espera de una nueva interacción.
