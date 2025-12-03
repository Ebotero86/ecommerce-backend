# Ecommerce Backend  
Backend desarrollado con **Node.js**, **Express** y **MongoDB**, diseñado para gestionar productos, usuarios, pedidos y autenticación.  
Forma parte de un sistema completo de comercio electrónico.

---

## Características principales

- API RESTful construida con **Express.js**
- Modelos y persistencia usando **MongoDB + Mongoose**
- Validación de datos con **express-validator**
- Gestión de productos (CRUD)
- Manejo de usuarios y autenticación JWT *(si aplica)*
- Gestión de inventario
- Control de imágenes de productos
- Arquitectura modular y escalable

---

## Estructura del Proyecto

ecommerce-backend/
├── helpers/
│ └── ...
├── models/
│ ├── Producto.js
│ └── Usuario.js
├── router/
│ ├── producto.routes.js
│ └── usuario.routes.js
├── uploads/ # Carpeta para imágenes (si aplica)
├── index.js # Punto de entrada principal
├── package.json
└── .env


---

## Tecnologías Utilizadas

- **Node.js**
- **Express.js**
- **MongoDB Atlas**
- **Mongoose**
- **jsonwebtoken (JWT)**
- **express-validator**
- **dotenv**
- **bcryptjs**

---

## Requisitos Previos

Para ejecutar el proyecto necesitarás:

- Node.js v16+  
- MongoDB (local o Atlas)  
- Git  
- Postman / Thunder Client para pruebas

---

## Instalación

Clonar el repositorio:

```bash
git clone https://github.com/Ebotero86/ecommerce-backend.git
cd ecommerce-backend


