# MontaTuPC: cómo publicarla

Todo lo de esta carpeta es la web completa. Se publica gratis en GitHub Pages.

## 1. Publicarla (unos 15 minutos)

1. Crea una cuenta en github.com. Se puede desde los 13 años.
2. Pulsa **New repository**, llámalo `montatupc`, déjalo en **Public** y pulsa **Create repository**.
3. Pulsa **uploading an existing file** y arrastra **todos** los archivos de esta carpeta, sin meterlos en otra carpeta. Pulsa **Commit changes**.
4. Ve a **Settings → Pages**. En **Branch** elige `main` y `/ (root)` y pulsa **Save**.
5. En un par de minutos tu web estará en `https://TU-USUARIO.github.io/montatupc`.

Cuando la tengas, **dime tu usuario de GitHub**: te regenero los archivos con tu dirección real. Así funcionan bien Google, el mapa del sitio y la imagen que sale al compartir por WhatsApp.

## 2. Antes de publicar: el aviso legal

Abre `aviso-legal.html` y `privacidad.html` con el Bloc de notas y cambia lo que dice "nombre y apellidos de tu padre o tu madre", "su NIF" y "un correo". La web tiene que estar a nombre de un adulto, igual que las cuentas de afiliado. **No pongas tus datos personales.**

## 3. Cuando tengáis las cuentas de afiliado

Abre `config.js` con el Bloc de notas. Es el único archivo que tienes que tocar:

```js
window.MONTATUPC_CONFIG = {
  amazonTag: "montatupc-21",  // tu ID de Amazon Afiliados
  ebayCampid: "5338000000",   // tu Campaign ID de eBay (opcional)
  goatcounter: "montatupc",   // tu contador de visitas
  titular: "Nombre Apellido Apellido",  // tu padre o tu madre
  nif: "12345678A",
  domicilio: "",   // si lo dejas vacío, no sale en el aviso legal
  correo: "montatupc@gmail.com"
};
```

Guarda y vuelve a subir `config.js` a GitHub. Todos los enlaces de la web cambian solos.

**eBay (segunda mano, opcional):** date de alta gratis en partnernetwork.ebay.com (a nombre de tu padre o tu madre, como Amazon). Crea una campaña y copia su *Campaign ID*, un número de 10 cifras, en `ebayCampid`. eBay paga una comisión por las compras que lleguen desde tus enlaces.

## 4. El contador de visitas (solo lo ves tú)

1. Crea una cuenta gratis en goatcounter.com. El nombre que elijas, por ejemplo `montatupc`, es el código.
2. Escríbelo en `goatcounter` dentro de `config.js` y súbelo.
3. Las visitas las ves en `https://montatupc.goatcounter.com` con tu contraseña. Nadie más las ve.

## 5. Avisar a Google

1. Entra en search.google.com/search-console con una cuenta de Google.
2. Añade tu web y sigue los pasos para verificarla.
3. En **Sitemaps** escribe `sitemap.xml` y pulsa **Enviar**.

Google tarda unas semanas en empezar a mostrar la web.

## Qué hay en cada archivo

- `index.html`: la página principal con el configurador.
- `mejor-pc-gaming-800-euros.html` y las demás: la misma herramienta con un presupuesto ya puesto. Sirven para salir en Google cuando alguien busca "mejor PC gaming 1000 euros".
- `guia-montaje.html`: la guía para montar un PC paso a paso.
- `aviso-legal.html` y `privacidad.html`: las páginas legales.
- `styles.css`: el diseño. `app.js`: el funcionamiento. `config.js`: tus códigos.
- `sitemap.xml` y `robots.txt`: para Google. `og.png`: la imagen al compartir. `favicon.svg`: el icono de la pestaña.


## Ojo: el aviso legal es público

Lo que pongáis en titular, NIF, domicilio y correo lo puede ver cualquiera que entre en la web: lo exige la ley (artículo 10 de la LSSI) a las webs que ganan dinero. Consejos:
- Usad un correo solo para la web (por ejemplo montatupc@gmail.com), no el personal.
- Nunca pongáis tus datos: siempre los de tu padre o tu madre, que son los titulares.
- El domicilio es opcional en la web: si lo dejáis vacío, no sale. Pero la ley lo pide; si queréis cumplir sin poner vuestra casa, podéis usar la dirección de una oficina virtual o de la gestoría. Preguntadlo a una gestoría.

- El aviso legal de la web es un modelo orientativo. Si tenéis dudas, que lo revise una gestoría.
