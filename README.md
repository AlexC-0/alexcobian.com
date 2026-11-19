# Portfolio de Alex Cobián Benito

Portfolio estático en español e inglés, orientado a desarrollo Salesforce y
Fullstack / Backend. Dominio: <https://alexcobian.com/>.

## Estructura y funcionamiento

- `index.html`: contenido español, proyectos, enlaces, descargas y metadatos iniciales.
- `app.js`: traducciones inglesas, selector de idioma, metadatos dinámicos,
  fotografía, navegación y desplazamiento al inicio.
- `styles.css`: identidad visual, contraste, foco y diseño adaptable.
- `assets/`: fotografías y documentos descargables.
- `CNAME`: dominio personalizado, conservado sin cambios.

No hay compilación, framework ni dependencias de ejecución instalables. Las
fuentes Sora y Manrope se solicitan a Google Fonts; hay una alternativa sans-serif.
La política CSP mantiene scripts del mismo origen y las fuentes externas existentes.

La presentación conserva el orden: introducción, competencias, stack, presencia
profesional y proyectos. La paleta procede de `053c266`: fondo `#cdb188` / `#e2cda8`,
texto `#fff8ef` / `#f5e7d2`, paneles `rgba(98, 69, 45, 0.68)` y acentos
`#f0b46c` / `#8bb48b`. Se conservan también sus degradados, bordes y sombras.
Los componentes nuevos reutilizan estos colores. Los accesos a perfiles y a ambos
CV están disponibles tanto en la presentación como en presencia profesional.

El documento y la raíz CSS declaran `color-scheme: only light`, conforme a la
[indicación de Chrome para evitar la transformación automática de colores](https://developer.chrome.com/blog/auto-dark-theme#how_to_opt-out_of_auto_dark_theme).
No hay un tema oscuro alternativo. Los ajustes forzados y extensiones del navegador
pueden alterar el aspecto; la emulación forzada mediante CDP sigue transformando
los colores en el navegador de prueba incluso con esa declaración.

Las competencias Salesforce se complementan con frontend, backend, bases de datos,
entornos, desarrollo multiplataforma y pruebas. Las nuevas capacidades deben
integrarse con las descripciones pertinentes existentes, conservando su detalle.

El español del HTML es la fuente inicial de las traducciones. Así se evita duplicar
su contenido en JavaScript y se conserva el contenido y las descargas sin scripts.
Para modificar un texto, actualizar el HTML y su clave inglesa en `translations.en`.
Los atributos accesibles usan `data-i18n-aria-label`, `data-i18n-title` y `data-i18n-alt`.
Las claves repetidas deben tener el mismo contenido español.

El selector conserva `portfolio-language` en almacenamiento local cuando está
disponible. Sin preferencia guardada, usa inglés para navegadores configurados en
inglés y español para el resto. Traduce título, descripción y metadatos sociales;
el canonical permanece en el dominio principal. Los robots sin ejecución de
JavaScript reciben los metadatos españoles. No existen datos estructurados.

## Proyectos y fuentes

Las tarjetas presentan finalidad, capacidades, tecnologías, disponibilidad y
enlaces. Los detalles desplegables conservan los límites de cada implementación.
Los resultados de pruebas citados son evidencias documentadas en sus repositorios;
no son ejecuciones realizadas desde este portfolio.

Fuentes consultadas el 19 de noviembre de 2026, junto con los README correspondientes:

| Proyecto | Referencia técnica |
| --- | --- |
| Posventa y garantías | [Aceptación](https://github.com/AlexC-0/posventa-garantias-salesforce/blob/main/docs/ACEPTACION-V1.md) |
| Consulta de tarifas | [Ficha técnica](https://github.com/AlexC-0/consulta-tarifas-salesforce/blob/main/docs/FICHA-V1.md) y [aceptación](https://github.com/AlexC-0/consulta-tarifas-salesforce/blob/main/docs/ACEPTACION-V1.md) |
| Importación CSV | [Evidencias](https://github.com/AlexC-0/importacion-validacion-datos/blob/main/docs/EVIDENCIAS_V1.md) |
| Solicitudes y aprobaciones | [Aceptación](https://github.com/AlexC-0/gestion-solicitudes-aprobaciones/blob/main/docs/ACEPTACION-V1.md) |
| Eventos de pedidos | [Entrega y garantías](https://github.com/AlexC-0/entrega-fiable-eventos-pedidos/blob/main/docs/ENTREGA.md) |
| GR-Inn | [Aplicación académica](https://github.com/AlexC-0/ProyectoTFGAno2GradoSuperiorDAW/blob/main/eco_woods/index.php) y estructura del repositorio |

Se conservan PKXpertise y las tres propuestas del mismo cliente de baterías
industriales. Cada propuesta tiene su tarjeta, descripción y enlace visibles,
sin atribuirle publicación. GR-Inn
mantiene el enlace de repositorio identificado en el CV y contrastado con el código.
No se ofrece acceso privado a organizaciones Salesforce ni demos simuladas.

## CV descargables

Los documentos proporcionados se copian íntegros, sin conversión ni cambios de
contenido o metadatos. Ambos están en español y se ofrecen desde los dos idiomas.

| Archivo | Bytes | SHA-256 |
| --- | ---: | --- |
| `assets/alex-cobian-cv-salesforce.pdf` | 75929 | `2a0f9145eb61aee2292623ef603ab3661969a22ad16199602973eb715f4cf856` |
| `assets/alex-cobian-cv-salesforce.docx` | 39620 | `8555b393564fc2fcdc39e7b2215b3024e09f5c3a50c444da430e6abd5157b3bb` |

Las descargas están en la sección Contacto y CV. No hay reglas de exclusión para
estos recursos. Al actualizar documentos, verificar autorización, apertura,
igualdad de hashes con los originales y bytes descargados mediante HTTP.

## Revisión local

Desde la raíz, con Python y Node disponibles:

```powershell
node --check app.js
git diff --check
python -m http.server 8765 --bind 127.0.0.1
```

Abrir `http://127.0.0.1:8765/`. Detener el servidor con Ctrl+C al finalizar.

Comprobaciones realizadas el 19 de noviembre de 2026:

- Sintaxis JavaScript y diff sin errores.
- Chromium: español e inglés a 320, 390, 768, 1024 y 1440 px, sin desbordamiento horizontal.
- Inspección visual de escritorio y móvil, con foco y jerarquía de encabezados revisados.
- Colores, fondos, bordes y sombras de los selectores originales contrastados con
  `053c266`: 84 declaraciones coincidentes. Las nuevas reglas usan la misma paleta.
- 120 claves de contenido y atributos con traducción inglesa disponible.
- Diez tarjetas de proyectos: cinco Salesforce/Fullstack/Backend, PKXpertise,
  tres propuestas para el mismo cliente y GR-Inn. Las descripciones anteriores
  de PKXpertise y las tres propuestas se conservan completas en ambos idiomas.
- Selector por teclado, Escape, cierre al perder foco y persistencia tras recargar.
- Enlace de salto, anclas sin ocultar títulos, detalles desplegables y vuelta al inicio.
- Contenido y descargas disponibles sin JavaScript.
- GitHub y PKXpertise responden correctamente. LinkedIn devuelve 999 y Trailblazer
  403 a las solicitudes automatizadas; esos bloqueos no acreditan enlaces rotos.
- Recursos locales correctos; recorrido con acceso a fuentes externas sin errores
  JavaScript ni solicitudes fallidas. Las restricciones de red del entorno de prueba
  bloqueaban inicialmente Google Fonts; la comprobación con acceso confirmó su carga.
- PDF leído con un parser; DOCX con ZIP/XML válido y abierto en Word en solo lectura,
  sin guardar. Ambos descargados mediante HTTP y navegador, con SHA-256 idénticos
  a sus originales, antes y después de las comprobaciones.

La inspección no constituye una certificación completa de accesibilidad, una
medición de rendimiento ni una ejecución de las suites de los proyectos enlazados.

## Publicación y mantenimiento

El mecanismo remoto observado es GitHub Pages, mediante `pages build and deployment`
sobre `main`, con dominio personalizado definido por `CNAME`. El repositorio no
contiene un workflow de publicación propio. Tras una actualización remota, comprobar
la nueva ejecución de Pages y su commit antes de verificar el dominio.

La versión `1f4bf66` se publicó y verificó en el dominio con ambos idiomas y los
dos CV íntegros. La restauración posterior de la paleta original está comprobada
localmente; su publicación y verificación pública quedan pendientes.
En el dominio deben
comprobarse ambos idiomas, recursos, enlaces y los hashes de los dos documentos
recibidos; un HTTP 200 por sí solo no verifica el CV.

Documentar objetivos, configuración, funcionalidades, decisiones, comprobaciones
y limitaciones. Excluir relatos de conversaciones, asignaciones personales, firmas
automáticas y detalles internos de elaboración. Conservar los documentos originales.
