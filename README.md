# Barbosa React Challenge

Una aplicación web de gestión de videos desarrollada en React, que permite organizar y visualizar contenido multimedia por categorías con una interfaz moderna y responsive.

## 📋 Descripción

Esta aplicación funciona como una plataforma de gestión de videos donde los usuarios pueden agregar, visualizar y organizar contenido multimedia por categorías. Incluye funcionalidades para crear nuevos videos, mostrarlos en diferentes secciones y gestionar el contenido mediante una interfaz intuitiva.

## 🖼️ Capturas de Pantalla

### Vista Principal
![Vista Principal](./screenshots/home.png)
*Página principal con banner destacado y videos organizados por categorías*

### Gestión de Videos
![Gestión de Videos](./screenshots/video-cards.png)
*Tarjetas de video mostrando el contenido organizado por categorías*

### Formulario Nuevo Video
![Nuevo Video](./screenshots/nuevo-video.png)
*Formulario para agregar nuevos videos a la plataforma*

### Modal de Video
![Modal](./screenshots/modal.png)
*Modal para visualizar videos en detalle*

### Responsive Design
![Responsive](./screenshots/responsive.png)
*Diseño adaptativo para dispositivos móviles y tablets*

> **Nota:** Para agregar las imágenes, crea una carpeta `screenshots` en la raíz del proyecto y coloca las capturas de pantalla correspondientes.

## 🚀 Tecnologías Utilizadas

- **React** - Biblioteca principal para la construcción de la interfaz
- **Tailwind CSS** - Framework CSS para diseño rápido y responsivo
- **CSS3** - Estilos personalizados adicionales
- **JSON Server** - Base de datos simulada para desarrollo
- **HTML5** - Estructura semántica

## 📁 Estructura del Proyecto

```
barbosa191919-react-challenge/
├── README.md
├── db.json                 # Base de datos simulada
├── package.json
├── tailwind.config.js      # Configuración de Tailwind
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── robots.txt
└── src/
    ├── App.css
    ├── App.js
    ├── App.test.js
    ├── index.css
    ├── index.js
    ├── reportWebVitals.js
    ├── setupTests.js
    ├── tailwind.config.js
    ├── Componentes/
    │   ├── Banner/
    │   ├── Categoria/
    │   ├── Footer/
    │   ├── Header/
    │   ├── Modal/
    │   └── VideoCard/
    └── Pages/
        ├── Home.jsx
        ├── NuevoVideo.css
        └── NuevoVideo.jsx
```

## 🧩 Componentes

### Componentes de Layout

- **Header** - Barra de navegación principal con menú y branding
- **Footer** - Pie de página con información y enlaces
- **Banner** - Sección destacada para contenido principal

### Componentes de Contenido

- **VideoCard** - Tarjeta individual para mostrar información de videos
- **CategoriaSection** - Sección que agrupa videos por categorías
- **Modal** - Ventana modal para visualización detallada de videos

### Páginas

- **Home** - Página principal que muestra todos los videos organizados
- **NuevoVideo** - Formulario para agregar nuevos videos al sistema

## 🛠️ Instalación

1. Clona el repositorio:
```bash
git clone [URL_DEL_REPOSITORIO]
cd barbosa191919-react-challenge
```

2. Instala las dependencias:
```bash
npm install
```

3. Inicia el servidor JSON (base de datos simulada):
```bash
npx json-server --watch db.json --port 3001
```

4. En otra terminal, inicia la aplicación:
```bash
npm start
```

5. Abre tu navegador en `http://localhost:3000`

## 📝 Scripts Disponibles

- `npm start` - Ejecuta la aplicación en modo desarrollo
- `npm test` - Ejecuta las pruebas unitarias
- `npm run build` - Construye la aplicación para producción
- `npm run eject` - Expone la configuración de webpack (irreversible)

## 🌟 Características

- ✅ Gestión completa de videos por categorías
- ✅ Interfaz moderna con Tailwind CSS
- ✅ Formularios interactivos para agregar contenido
- ✅ Modal para visualización detallada
- ✅ Diseño completamente responsive
- ✅ Base de datos simulada con JSON Server
- ✅ Arquitectura modular y escalable

## 🎯 Funcionalidades

- **Visualización de Videos**: Navega por videos organizados por categorías
- **Agregar Videos**: Formulario completo para añadir nuevo contenido
- **Modal de Detalles**: Visualización ampliada de videos seleccionados
- **Categorización**: Organización automática por categorías
- **Responsive**: Adaptación perfecta a todos los dispositivos

## 📱 Responsividad

La aplicación utiliza Tailwind CSS para garantizar una experiencia óptima en:
- 💻 Escritorio (1024px+)
- 📱 Dispositivos móviles (320px-768px)
- 📊 Tablets (768px-1024px)

## 🗃️ Base de Datos

El archivo `db.json` contiene la estructura de datos simulada:
```json
{
  "videos": [
    {
      "id": 1,
      "titulo": "Título del video",
      "categoria": "Categoría",
      "url": "URL del video",
      "descripcion": "Descripción del contenido"
    }
  ],
  "categorias": [...]
}
```

## 🔧 Configuración de Tailwind

El proyecto incluye configuración personalizada de Tailwind CSS en `tailwind.config.js` para:
- Colores personalizados
- Breakpoints específicos
- Componentes reutilizables
- Utilidades extendidas

## 🤝 Contribución

1. Haz un fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commitea tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👨‍💻 Autor

**Barbosa191919**

## 📞 Contacto

Para consultas o sugerencias:
- GitHub: [@barbosa191919](https://github.com/barbosa191919)

---

⭐ ¡No olvides dar una estrella al proyecto si te fue útil!
