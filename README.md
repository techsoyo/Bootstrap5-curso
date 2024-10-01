---
title: "Bootstrap 5 - Curso Básico"
description: "Repositorio de práctica para el curso de Bootstrap 5."
author: "Kiko"
date: "2024-10-01"
---

# 🌐 Proyecto: **Bootstrap 5 - Curso Básico**

¡Bienvenido a este repositorio de práctica para el curso de **Bootstrap 5**! Aquí aprenderás a usar las herramientas esenciales de desarrollo web, como **HTML**, **CSS**, **JavaScript**, y por supuesto, **Bootstrap 5**.

...


## <span style="font-family: Arial, sans-serif;">🚀 Pasos para clonar este repositorio en <strong>Visual Studio Code</strong></span>

### <span style="font-family: Arial, sans-serif;">1️⃣ Verificar la instalación de <strong>Git</strong></span>

<span style="font-family: Arial, sans-serif;">Antes de clonar el repositorio, asegúrate de tener <strong>Git</strong> instalado en tu equipo.</span> 

📋 <span style="font-family: Arial, sans-serif;"><strong>Para verificarlo</strong>:</span>

- <span style="font-family: Arial, sans-serif;">Abre la terminal integrada en <strong>Visual Studio Code</strong>:</span>
  - **Windows**: `Ctrl + ñ`
  - **Mac**: `Cmd + \`` (Comando + acento grave)
  
- <span style="font-family: Arial, sans-serif;">Escribe el siguiente comando:</span>
  ```bash
  git --version
  ```

- <span style="font-family: Arial, sans-serif;">Si ves algo similar a:</span>  
  `git version 2.42.0.windows.2`, ¡Git está instalado correctamente! ✅

- <span style="font-family: Arial, sans-serif;"><strong>Si no tienes Git instalado</strong>, descárgalo e instálalo desde el siguiente enlace:</span>  
  🔗 [Descargar Git](https://git-scm.com/downloads)  
  <span style="font-family: Arial, sans-serif;">Luego, sigue el asistente de instalación y acepta las opciones predeterminadas.</span>

---

### <span style="font-family: Arial, sans-serif;">2️⃣ Clonar el repositorio</span>

📂 <span style="font-family: Arial, sans-serif;"><strong>Sigue estos pasos para clonar el repositorio</strong>:</span>

1. <span style="font-family: Arial, sans-serif;">En <strong>Visual Studio Code</strong>, abre la terminal o línea de comandos.</span>
2. <span style="font-family: Arial, sans-serif;">Navega a la carpeta donde deseas clonar este repositorio:</span>
   ```bash
   cd ruta/de/tu/carpeta
   ```
3. <span style="font-family: Arial, sans-serif;">Ejecuta el siguiente comando para clonar el repositorio:</span>
   ```bash
   git clone https://github.com/techsoyo/Bootstrap5-curso.git
   ```
4. <span style="font-family: Arial, sans-serif;">Espera a que se complete la clonación. Una vez finalizado, encontrarás los archivos del proyecto en una nueva carpeta llamada `Bootstrap5-curso`. 🎉</span>

---

### <span style="font-family: Arial, sans-serif;">3️⃣ Abrir el proyecto en <strong>Visual Studio Code</strong></span>

📂 <span style="font-family: Arial, sans-serif;"><strong>Para abrir el proyecto</strong>:</span>

1. <span style="font-family: Arial, sans-serif;">En <strong>Visual Studio Code</strong>, selecciona `File` > `Open Folder`.</span>
2. <span style="font-family: Arial, sans-serif;">Busca y selecciona la carpeta `Bootstrap5-curso` que acabas de clonar.</span>

---

💡 <span style="font-family: Arial, sans-serif;"><strong>Consejo</strong>: Aprovecha al máximo este curso practicando los ejemplos y experimentando con las herramientas que Bootstrap 5 ofrece. ¡Diviértete mientras aprendes! 😄</span>
```
---

## <span style="font-family: Arial, sans-serif;">💻 Instrucciones para instalar Bootstrap 5</span>

### <span style="font-family: Arial, sans-serif;">1️⃣ Incluir Bootstrap desde CDN en un archivo HTML</span>

Para empezar a usar **Bootstrap 5** en tu proyecto web de forma rápida, puedes incluir los archivos CSS y JavaScript desde un CDN.

📂 <span style="font-family: Arial, sans-serif;"><strong>Paso a paso:</strong></span>

1. En tu archivo **HTML**, agrega la siguiente línea en la sección `<head>` para importar el archivo **CSS** de Bootstrap:
   ```html
   <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
   ```
   
2. Luego, al final de la sección `<body>`, añade el siguiente script para importar el archivo **JavaScript** de Bootstrap:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
   ```

📋 <span style="font-family: Arial, sans-serif;"><strong>Ejemplo completo</strong>:</span>

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

### <span style="font-family: Arial, sans-serif;">2️⃣ Instalar Bootstrap localmente en tu PC</span>

Si prefieres trabajar con los archivos de **Bootstrap 5** directamente en tu computadora, sigue estos pasos para instalarlo:

📂 <span style="font-family: Arial, sans-serif;"><strong>Paso a paso para instalarlo localmente</strong>:</span>

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

📋 <span style="font-family: Arial, sans-serif;"><strong>Ejemplo completo</strong>:</span>

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

💡 <span style="font-family: Arial, sans-serif;"><strong>Consejo</strong>: Si trabajas con una estructura de carpetas en tu proyecto, asegúrate de que las rutas hacia los archivos **CSS** y **JavaScript** de Bootstrap sean correctas.</span>

---


