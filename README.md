Aquí tienes el README completo con las instrucciones que me solicitaste integradas:

---

# 🌐 Proyecto: **Bootstrap 5 - Curso Básico**

¡Bienvenido a este repositorio de práctica para el curso de **Bootstrap 5**! Aquí aprenderás a usar las herramientas esenciales de desarrollo web, como **HTML**, **CSS**, **JavaScript**, y por supuesto, **Bootstrap 5**.

## ✨ Contenido

Este curso cubre los conceptos básicos y avanzados de Bootstrap 5, permitiéndote construir sitios web modernos y responsivos de manera sencilla.

- **Instalación de Bootstrap**
  - A través de CDN
  - Instalación local
- Componentes esenciales: botones, formularios, tablas, y más.
- Grid System de Bootstrap.
- Utilización de Flexbox.
- Creación de layouts responsivos.

---

## 🚀 Pasos para clonar este repositorio en **Visual Studio Code**

### 1️⃣ Verificar la instalación de **Git**

Antes de clonar el repositorio, asegúrate de tener **Git** instalado en tu equipo.

📋 **Para verificarlo**:

- Abre la terminal integrada en **Visual Studio Code**:
  - **Windows**: `Ctrl + ñ`
  - **Mac**: `Cmd + \`` (Comando + acento grave)
  
- Escribe el siguiente comando:
  ```bash
  git --version
  ```

- Si ves algo similar a:  
  `git version 2.42.0.windows.2`, ¡Git está instalado correctamente! ✅

- **Si no tienes Git instalado**, descárgalo e instálalo desde el siguiente enlace:  
  🔗 [Descargar Git](https://git-scm.com/downloads)  
  Luego, sigue el asistente de instalación y acepta las opciones predeterminadas.

---

### 2️⃣ Clonar el repositorio

📂 **Sigue estos pasos para clonar el repositorio**:

1. En **Visual Studio Code**, abre la terminal o línea de comandos.
2. Navega a la carpeta donde deseas clonar este repositorio:
   ```bash
   cd ruta/de/tu/carpeta
   ```
3. Ejecuta el siguiente comando para clonar el repositorio:
   ```bash
   git clone https://github.com/techsoyo/Bootstrap5-curso.git
   ```
4. Espera a que se complete la clonación. Una vez finalizado, encontrarás los archivos del proyecto en una nueva carpeta llamada `Bootstrap5-curso`. 🎉

---

### 3️⃣ Abrir el proyecto en **Visual Studio Code**

📂 **Para abrir el proyecto**:

1. En **Visual Studio Code**, selecciona `File` > `Open Folder`.
2. Busca y selecciona la carpeta `Bootstrap5-curso` que acabas de clonar.

---

## 💻 Instrucciones para instalar Bootstrap 5

### 1️⃣ Incluir Bootstrap desde CDN en un archivo HTML

Para empezar a usar **Bootstrap 5** en tu proyecto web de forma rápida, puedes incluir los archivos CSS y JavaScript desde un CDN.

📂 **Paso a paso**:

1. En tu archivo **HTML**, agrega la siguiente línea en la sección `<head>` para importar el archivo **CSS** de Bootstrap:
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
   ```
   
2. Luego, al final de la sección `<body>`, añade el siguiente script para importar el archivo **JavaScript** de Bootstrap:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
   ```

📋 **Ejemplo completo**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Proyecto Bootstrap 5</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <h1 class="text-center">¡Hola, Bootstrap 5!</h1>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

---

### 2️⃣ Instalar Bootstrap localmente en tu PC

Si prefieres trabajar con los archivos de **Bootstrap 5** directamente en tu computadora, sigue estos pasos para instalarlo:

📂 **Paso a paso para instalarlo localmente**:

1. **Descarga Bootstrap 5** desde su sitio oficial:
   - 🔗 [Descargar Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/download/)

2. **Extrae** el archivo ZIP descargado en una carpeta de tu proyecto.

3. **Agrega los archivos CSS y JS** de Bootstrap en tu archivo **HTML**:
   - En la sección `<head>`, enlaza el archivo **CSS** que descargaste:
     ```html
     <link href="ruta/a/tu/bootstrap.min.css" rel="stylesheet">
     ```
   - Al final del `<body>`, enlaza el archivo **JavaScript**:
     ```html
     <script src="ruta/a/tu/bootstrap.bundle.min.js"></script>
     ```

📋 **Ejemplo completo**:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Mi Proyecto Bootstrap Local</title>
  <link href="css/bootstrap.min.css" rel="stylesheet">
</head>
<body>

  <h1 class="text-center">¡Hola, Bootstrap Local!</h1>

  <script src="js/bootstrap.bundle.min.js"></script>
</body>
</html>
```

💡 **Consejo**: Si trabajas con una estructura de carpetas en tu proyecto, asegúrate de que las rutas hacia los archivos **CSS** y **JavaScript** de Bootstrap sean correctas.

---

💡 **Consejo**: Aprovecha al máximo este curso practicando los ejemplos y experimentando con las herramientas que Bootstrap 5 ofrece. ¡Diviértete mientras aprendes! 😄
