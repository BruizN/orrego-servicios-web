# CONTEXTO DEL PROYECTO: Orrego Servicios (Frontend MVP)

## 1. Visión y Propuesta de Valor
"Orrego Servicios" es una plataforma web para Claudio Orrego, Ingeniero en Construcción y técnico con años de experiencia práctica en Chile. 
- **Diferenciador crítico:** Romper con la informalidad típica del rubro de maestros de Google/Facebook. La web debe proyectar autoridad técnica, seriedad, garantías explícitas y capacidad de atender tanto hogares como empresas (emisión de facturas).
- **Estética Visual:** Dark Glassmorphism técnico (`#0F172A`, `#020617`), acentos en Naranja Eléctrico (`#FF5722`), Cyan Neón (`#00E5FF`) y alertas en Rojo Carmesí (`#EF4444`). Interfaz móvil-first impecable.

---

## 2. Reglas de Negocio Estrictas

1. **Filtro de Exclusión Activa (Caso Calefonts):**
   - Claudio **NO** atiende reparaciones ni mantenciones de calefonts.
   - Si en el formulario o descripción el usuario ingresa términos clave como: `calefont`, `calefon`, `serpentin`, `serpentín`, `piloto de gas`, el sistema debe interceptar la acción en tiempo real, mostrar un banner de advertencia amigable y **bloquear el envío**:
     > *"En Orrego Servicios nos especializamos en obras menores, climatización, redes eléctricas y sanitarias generales. Para trabajos de calefonts y gas de alta presión, te recomendamos acudir a un instalador certificado por la SEC."*

2. **Segmentación Dinámica B2C / B2B:**
   - **Hogar / Particular:** Solicitar Nombre, Teléfono (formato chileno +569), Comuna y descripción del problema.
   - **Empresa / Comunidad / Local:** Exigir Razón Social, RUT de empresa, Giro, opción de Factura y contacto del administrador.

3. **Canal de Salida MVP (Sin Backend por ahora):**
   - El envío de cotizaciones y urgencias no va a base de datos en esta fase.
   - Debe estructurar y formatear un mensaje codificado para la API de WhatsApp (`https://wa.me/569XXXXXXXX?text=...`) que abra la conversación de Claudio con todos los datos ordenados en un formato legible.

4. **Botón Flotante de Emergencia 24/7 (SOS):**
   - Botón flotante persistente en la esquina inferior derecha con animación pulsante.
   - Al presionarlo, abre un modal simple de 2 pasos:
     1. Tipo de falla crítica (Inundación, Cortocircuito, Fuga de gas/agua, Colapso).
     2. Teléfono + Comuna.
   - Envía un WhatsApp prioritario con la etiqueta `🚨 URGENCIA SOS 24/7`.

---

## 3. Arquitectura Técnica y Stack

- **Framework:** Astro 4.x / 5.x.
- **Estilos:** Tailwind CSS.
- **Iconos:** Lucide Icons (`lucide-astro` o SVGs optimizados).
- **Interactividad:** Componentes aislados con JavaScript nativo en etiquetas `<script>` de Astro o componentes ligeros. Evitar dependencias pesadas innecesarias.
- **Preparación para Futuro Backend (FastAPI):**
  - Toda la lógica de envío de datos y formateo de mensajes debe estar aislada en un módulo `src/services/` o `src/utils/` (ej. `quoteService.ts` o `whatsapp.ts`).
  - Cuando se integre la API REST más adelante, solo se reemplazará la función de envío de ese servicio por una llamada `fetch()` a los endpoints de FastAPI.

---

## 4. Convenciones de Git y GitHub Flow

- **Regla de Oro:** **NUNCA** hacer push directo a la rama `main`.
- **Estrategia de Ramas:**
  - Crear ramas descriptivas por funcionalidad desde `main`: `feat/setup-astro`, `feat/hero-section`, `feat/sos-modal`, `feat/quote-form`.
  - Commits convencionales: `feat:`, `fix:`, `refactor:`, `style:`.
  - Para incorporar cambios a `main`, se deben generar Pull Requests limpios.

---

## 5. Rol Pedagógico del Agente de IA

- El desarrollador a cargo es un Ingeniero de Backend (FastAPI, PostgreSQL, Docker) que está aprendiendo frontend moderno y Astro en sesiones de 30-40 minutos diarios.
- En cada implementación relevante, el agente debe explicar brevemente:
  1. Qué archivos se crearon o modificaron y por qué.
  2. Conceptos específicos de Astro utilizados (ej. islas de interactividad, directivas de cliente, scoped styles, slots).
  3. Cómo se estructuró el código para mantenerlo desacoplado y listo para recibir la API de FastAPI.