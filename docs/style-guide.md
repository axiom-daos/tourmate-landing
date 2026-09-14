# Tourmate — Style Guide de la Landing Page

Documento de especificaciones exactas de la landing implementada en `app/page.tsx` y `app/globals.css`. Los valores descritos corresponden al diseño actual, no son recomendaciones.

## 1. Identidad visual

- Marca visible: `Tourmate`.
- Concepto de marca: `Más camino. Menos ruido.`
- Personalidad visual: natural, clara, cercana, humana y serena.
- Estética: editorial outdoor con espacios amplios, colores tierra y composición sencilla.
- No se utilizan gradientes decorativos intensos, sombras pronunciadas, negro puro ni elementos visuales saturados.

## 2. Colores implementados

| Variable | Valor | Uso actual |
|---|---|---|
| `--background` | `#f8f7f2` | Fondo general de la página |
| `--foreground` | `#29433a` | Texto principal |
| `--primary` | `#29433a` | Botones y elementos primarios |
| `--primary-foreground` | `#f8f7f2` | Texto sobre elementos primarios |
| `--border` | `#d9ded5` | Bordes de tarjetas y separadores |
| `--muted` | `#6e7d73` | Texto secundario |
| `--forest` | `#29433a` | Verde principal |
| `--deep-forest` | `#20362e` | Fondo del footer |
| `--sage` | `#dfe9dc` | Fondo de sección de agencias y placeholders |
| `--sand` | `#f8f7f2` | Fondo principal y tarjetas |
| `--clay` | `#b87859` | Acentos, roles e iconos |
| `--white` | `#fffefb` | Texto claro y botones claros |
| Contacto | `#c98b6c` | Fondo de la sección de contacto |
| Texto secundario | `#65756c` | Párrafos de contenido |
| Texto auxiliar | `#718078` | Descripciones, etiquetas e información secundaria |

### Colores con transparencia

- Overlay principal del hero: `rgba(35,63,53,.88)` a `rgba(35,63,53,.1)`.
- Texto claro principal: `rgba(255,254,251,.82)`.
- Texto claro secundario: `rgba(255,254,251,.62)`.
- Borde de navegación: `rgba(255,254,251,.45)`.
- Overlay de imágenes internas: `rgba(41,67,58,.04)` a `rgba(41,67,58,.18)`.
- Footer: fondo `#20362e` y texto principal `rgba(255,254,251,.62)`.

## 3. Tipografía

- Fuente principal: `'Geist', Arial, sans-serif`.
- Fuente serif de énfasis: `Georgia, serif`.
- Fuente configurada en el tema Tailwind: `'Geist'`, `'Geist Fallback'`.
- No se utiliza una tercera familia tipográfica.

### Escala tipográfica implementada

| Elemento | Valor desktop | Valor móvil | Peso | Line-height | Tracking |
|---|---:|---:|---:|---:|---:|
| H1 | `clamp(54px, 8vw, 104px)` | `clamp(52px, 14vw, 75px)` | `430` | `.96` | `-.07em` |
| H2 | `clamp(39px, 5.3vw, 70px)` | Igual | `420` | `1.02` | `-.06em` |
| H3 de beneficios | `20px` | `20px` | `570` | Normal | Normal |
| H3 de equipo | `17px` | `17px` | `570` | Normal | Normal |
| Texto general | `16px` | `16px` | `400` | `1.6–1.7` | Normal |
| Texto de tarjeta | `12px` | `12px` | `400` | `1.5` | Normal |
| Eyebrow | `10px` | `10px` | `650` | `1.4` | `.18em` |
| Navegación | `13px` | Oculta | `400` | Normal | Normal |
| CTA de navegación | `12px` | `11px` | `400` | Normal | Normal |
| Botón | `12px` | `12px` | `600` | Normal | Normal |
| Marca | `12px` | `12px` | `650` | Normal | `.2em` |

Los elementos `<em>` de H1 y H2 usan Georgia, peso `400` y color `#efc5a6`.

## 4. Estructura de la página

La landing utiliza un único `<main>` con estas secciones, en este orden:

1. `#inicio` — Hero y navegación.
2. `#vision` — Nuestra idea.
3. `#agencias` — Para agencias y guías.
4. `#viajeros` — Para viajeros.
5. `#team-development` — Team Development.
6. `#contacto` — Contacto.
7. Footer.

La navegación incluye los enlaces: Agencias, Viajeros, Team Development, Nuestra idea y Conocer más.

## 5. Layout y espaciado

- Contenedor desktop: `min(1160px, calc(100% - 48px))`.
- Contenedor móvil: `min(100% - 36px, 560px)`.
- Margen horizontal desktop: `24px` por lado.
- Margen horizontal móvil: `18px` por lado.
- Hero desktop: `min-height: 730px`.
- Hero móvil: `min-height: 700px`.
- Secciones generales desktop: `padding: 120px 0`.
- Secciones generales móvil: `padding: 88px 0`.
- Team Development desktop: `padding: 118px 0`.
- Team Development móvil: `padding: 88px 0`.
- Contacto: `padding: 108px 0`.
- Footer: `padding: 58px 0 22px`.
- Breakpoint responsive: `780px`.
- El layout usa CSS Grid para columnas y tarjetas, y Flexbox para navegación, botones y alineaciones.

## 6. Hero

- Clase: `.hero`.
- Fondo: `/images/hero-expedition.png`.
- Posición desktop: `center`.
- Posición móvil: `62% center`.
- Tamaño: `cover`.
- Overlay: gradiente horizontal verde translúcido.
- Contenido alineado hacia la parte inferior mediante `margin-top: auto`.
- Margen inferior del contenido desktop: `105px`.
- Margen inferior móvil: `85px`.
- El bloque inferior usa texto uppercase de `9px`, tracking `.15em` y una línea horizontal de máximo `100px`.

## 7. Navegación

- Padding superior: `26px`.
- Display: flex.
- Marca a la izquierda.
- Enlaces con separación de `32px`.
- Margen derecho de enlaces: `42px`.
- Enlaces ocultos a partir de `780px`.
- CTA con borde de `1px solid rgba(255,254,251,.45)`.
- CTA con padding `10px 15px` y radio `999px`.
- Marca incluye icono de montaña de `30px`.

## 8. Botones y enlaces

### Botones

- Clase base: `.button`.
- Display: inline-flex.
- Gap: `10px`.
- Padding: `13px 18px`.
- Radio: `999px`.
- Transición: `transform .2s, background .2s`.
- Hover: `translateY(-2px)`.
- Variante clara: fondo `#fffefb`, texto `#29433a`.
- Hover claro: fondo `#f1d4bd`.
- Variante oscura: fondo `#29433a`, texto `#fffefb`.
- Hover oscuro: fondo `#416253`.

### Enlaces de texto

- Display: inline-flex.
- Gap: `10px`.
- Padding inferior: `6px`.
- Borde inferior: `1px solid currentColor`.
- Tamaño: `12px`.
- Peso: `600`.
- Flecha final: `17px`.

## 9. Sección Nuestra idea

- Layout desktop: dos columnas `1.05fr .95fr`.
- Separación de columnas: `12%`.
- Alineación vertical: `end`.
- Texto descriptivo con ancho máximo de `420px`.
- La grilla inferior tiene tres columnas.
- Separación de la grilla superior: `margin-top: 105px`.
- Borde superior: `1px solid #d9ded5`.
- Padding superior: `28px`.
- Separación entre columnas: `45px`.
- En móvil la grilla pasa a una columna con gap de `32px` y margin-top de `72px`.

## 10. Secciones para agencias y viajeros

- Clase base: `.split-section`.
- Desktop: dos columnas iguales.
- Altura mínima: `620px`.
- Fondo de agencias: `#dfe9dc`.
- Fondo de viajeros: `#eee9df`.
- Imagen: altura mínima `520px`, en móvil `360px`.
- Contenido desktop: padding vertical `100px` y horizontal entre `40px` y `135px`.
- Contenido móvil: padding `72px 28px 80px`.
- Lista de puntos: grid con gap `13px`, margin superior `30px`, margin inferior `34px`.
- Check circular: `19px`, borde `1px solid rgba(41,67,58,.35)`.
- En móvil, imagen y contenido se apilan.

## 11. Team Development

- ID: `team-development`.
- Fondo: `#fffefb`.
- Layout desktop: columnas `.9fr 1.1fr`.
- Separación entre columnas: `12%`.
- La grilla de integrantes usa dos columnas.
- Gap entre cards: `18px`.
- En móvil la grilla usa una sola columna.
- En móvil la grilla comienza `48px` después del texto introductorio.

### Cards actuales

Cada card tiene:

- Clase: `.member-card`.
- Fondo: `#f8f7f2`.
- Borde: `1px solid #d9ded5`.
- Radio: `18px`.
- Overflow: `hidden`.
- Área visual: `.member-photo`.
- Altura mínima del área visual: `145px`.
- Fondo del área visual: `#dfe9dc`.
- Iniciales centradas en Georgia, tamaño `38px`, color `#29433a`.
- Información interna: padding `17px 18px 19px`.
- Rol: `11px`, peso `650`, tracking `.04em`, uppercase y color `#b87859`.
- Descripción: `12px`, line-height `1.5`, color `#718078`.

Integrantes provisionales actuales:

1. Ana García — Dirección de producto — `AG`.
2. Mateo Ruiz — Desarrollo de software — `MR`.
3. Sofía López — Diseño y experiencia — `SL`.
4. Diego Torres — Estrategia y operaciones — `DT`.
5. Valentina Cruz — Comunidad y alianzas — `VC`.

El texto provisional actual de cada integrante es: `Texto provisional del integrante.`

## 12. Contacto

- ID: `contacto`.
- Fondo: `#c98b6c`.
- Padding vertical: `108px`.
- Layout desktop: flex horizontal, alineado al final.
- Gap: `40px`.
- En móvil: columna vertical, alineada al inicio.
- CTA de contacto: fondo `#29433a`, texto `#fffefb`.
- Hover del CTA: fondo `#416253`.

## 13. Footer

- Fondo: `#20362e`.
- Padding superior: `58px`.
- Padding inferior: `22px`.
- Color base: `rgba(255,254,251,.62)`.
- Grid desktop: una columna de marca y tres columnas de enlaces: `1.8fr repeat(3, 1fr)`.
- Gap: `36px`.
- Padding inferior de la grilla: `48px`.
- Descripción de marca: ancho máximo `220px`, margin-top `18px`, line-height `1.6`.
- Etiquetas de columnas: `10px`, uppercase, tracking `.12em`, color `rgba(255,255,255,.38)`.
- Enlaces: gap vertical `11px`, color `rgba(255,254,251,.68)`.
- Hover de enlaces: `#fffefb`.
- Línea superior del bloque inferior: `1px solid rgba(255,255,255,.12)`.
- Bloque inferior: padding superior `18px`, tamaño `10px`, color `rgba(255,254,251,.42)`.
- En móvil: grid de dos columnas, gap vertical `34px`, gap horizontal `24px`.
- La marca ocupa las dos columnas en móvil.
- El bloque inferior se apila verticalmente con gap `8px`.

## 14. Imágenes y accesibilidad

- Imagen principal usada: `/images/hero-expedition.png`.
- Las imágenes se presentan con `background-size: cover`.
- Imagen de agencias: saturación `.7`.
- Imagen de viajeros: saturación `.55` y `hue-rotate(8deg)`.
- Las imágenes internas tienen overlays verdes sutiles.
- Las imágenes de secciones usan `role="img"` y `aria-label` descriptivo.
- Los iconos decorativos tienen `aria-hidden="true"`.
- La página utiliza `main`, `nav`, `section`, `article` y `footer`.
- El documento usa scroll suave mediante `html { scroll-behavior: smooth; }`.

## 15. Responsive exacto

Breakpoint único: `max-width: 780px`.

En móvil:

- El contenedor pasa a `calc(100% - 36px)` con máximo `560px`.
- Se ocultan los enlaces de navegación.
- El CTA de navegación reduce su padding a `9px 12px` y tamaño a `11px`.
- Los CTAs del hero se apilan en columna con gap `20px`.
- Las grillas de introducción, split y equipo pasan a una columna.
- Las tarjetas del equipo pasan a una columna.
- Las secciones split apilan primero imagen y después contenido.
- El footer usa dos columnas y la marca ocupa todo el ancho.

