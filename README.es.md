# English False Friends: Guía de Falsos Amigos para Programadores

Esta es una aplicación web interactiva diseñada para ayudar a los desarrolladores y estudiantes de idiomas (inglés, español, francés, italiano) a identificar y comprender los "falsos amigos" más comunes en el ámbito de la programación y el desarrollo de software.

---

## Características Principales

- **Búsqueda Instantánea:** Filtra términos en tiempo real por palabra clave (código o significado).
- **Soporte Multilingüe:** Explora falsos amigos entre **Inglés**, **Español**, **Francés** e **Italiano**.
- **Modo Oscuro/Claro:** Diseño adaptable a las preferencias visuales del usuario para una lectura cómoda.
- **Quiz Interactivo:** Para poder a prueba lo aprendido.
- **Diseño Responsive:** Interfaz fluida y adaptable, desde grandes pantallas de escritorio hasta móviles.
- **Diseño Accesible:** Interfaz adaptada visualmente a los usuarios con daltonismo (en el test se muestra con x o v los errores en vez de con colores verde/rojo).
- **Estética Moderna:** Paleta de colores pasteles y un camaleón como mascota.

## Tecnologías Utilizadas

Este proyecto ha sido construido utilizando tecnologías web modernas enfocadas en el rendimiento y la experiencia de usuario:

- **React.js** (con **Vite** para un entorno de desarrollo rápido)
- **TypeScript** (para tipado estático y seguridad en el código)
- **CSS3** (con variables CSS, Flexbox, Grid y animaciones personalizadas)
- **Bootstrap Icons** (para los iconos de la interfaz)
- **LocalStorage** (para persistir la preferencia del tema oscuro/claro)

## Cómo Ejecutar el Proyecto Localmente

Si deseas clonar este proyecto y ejecutarlo en tu máquina local, sigue estos pasos:

### 1. Prerrequisitos

Necesitas tener instalado **Node.js** y **npm** (o **yarn**) en tu equipo.

### 2. Clonar el repositorio

Abre tu terminal y ejecuta:

```bash
git clone [https://github.com/beni0420/english-false-friends.git](https://github.com/beni0420/english-false-friends.git)
cd english-false-friends
```

### 3. Instala las librerías necesarias ejecutando:

npm install

### 4. Ejecutar el servidor de desarrollo

npm run dev

Por defecto, la aplicación se abrirá en http://localhost:5173

# Estructuctura de datos

La aplicación utiliza estructuras de datos centralizadas para facilitar la gestión del contenido en los cuatro idiomas. Los datos se encuentran en la carpeta src/data/:

- **dictionaryData.ts**: Contiene el array de objetos con todos los términos, sus significados correctos y sus falsos amigos para cada idioma soportado.

- **quizData.ts**: Almacena las preguntas y respuestas para el modo de juego (Quiz).
