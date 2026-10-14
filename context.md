# CONTEXTO DEL PROYECTO: KoFixRed (Frontend MVP)

## 1. Visión y Propuesta de Valor
**KoFixRed** es la plataforma web técnica para Claudio Orrego, Ingeniero en Construcción y especialista sanitario en Chile.
- **Slogan Oficial:** *"Ingeniería en agua potable y soluciones sanitarias"*
- **Diferenciador crítico:** Romper con la informalidad típica del rubro de maestros de Google/Facebook. La web debe proyectar autoridad técnica de ingeniería, seriedad, garantías por escrito explícitas y capacidad de atender tanto hogares (B2C) como condominios, empresas y locales comerciales (B2B con emisión de facturas).
- **Los 4 Pilares Innegociables:**
  1. *Diagnóstico sin destrucción:* Uso de tecnología (cámaras de inspección, geófono, termografía) para encontrar fallas sin romper muros o pisos innecesariamente.
  2. *Garantía por escrito:* Respaldo formal en cada intervención técnica.
  3. *Protocolo de trabajo pulcro:* Protección de pisos, calzado y entrega de la zona de trabajo impecable.
  4. *Presupuestos transparentes:* Cotizaciones claras y desglosadas por escrito antes de iniciar faenas.
- **Estética Visual:** Dark Glassmorphism técnico (`#0F172A`, `#020617`), acentos en Naranja Eléctrico (`#FF5722`), Cyan Neón (`#00E5FF`) y alertas en Rojo Carmesí (`#EF4444`). Interfaz mobile-first impecable.

---

## 2. Reglas de Negocio y Exclusiones Estrictas

1. **Exclusión Total de Redes Eléctricas:**
   - Claudio **NO** atiende servicios de electricidad, cableado ni tableros eléctricos. Todos los contenidos del sitio deben enfocarse exclusivamente en agua potable, alcantarillado e ingeniería sanitaria.

2. **Filtro de Exclusión Activa (Caso Calefonts y Alta Presión de Gas):**
   - Claudio **NO** atiende reparaciones ni mantenciones de calefonts.
   - Si en el formulario o descripción el usuario ingresa términos clave como: `calefont`, `calefon`, `serpentin`, `serpentín`, `piloto de gas`, el sistema debe interceptar la acción en tiempo real, mostrar un banner de advertencia amigable y **bloquear el envío**:
     > *"En KoFixRed nos especializamos en redes de agua potable, bombas hidroneumáticas, alcantarillado y soluciones sanitarias integrales. Para trabajos de calefonts y gas de alta presión, te recomendamos acudir a un instalador certificado por la SEC."*

3. **Segmentación Dinámica B2C / B2B:**
   - **Hogar / Particular (B2C):** Solicitar Nombre, Teléfono (formato chileno +569), Comuna (selector desplegable) y descripción del problema (roturas, filtraciones, destapes, grifería, remodelación).
   - **Empresa / Comunidad / Local (B2B):** Exigir Razón Social, RUT de empresa, Giro, opción de Factura, Comuna y requerimientos específicos (salas de bombas hidroneumáticas, estanques de reserva, trampas de grasa, pruebas hidrostáticas).

4. **Canal de Salida MVP (Sin Backend por ahora):**
   - El envío de cotizaciones y urgencias no va a base de datos en esta fase.
   - Toda la lógica de negocio está centralizada en `src/services/whatsapp.ts`, estructurando el mensaje codificado para la API de WhatsApp (`https://wa.me/569XXXXXXXX?text=...`).
   - Cuando se integre la API REST en FastAPI en el futuro, solo se reemplazará la función de envío de este servicio por una llamada `fetch()` a los endpoints de FastAPI.

5. **Botón Flotante de Emergencia 24/7 (SOS):**
   - Botón flotante persistente en la esquina inferior derecha con animación pulsante.
   - Al presionarlo, abre un modal simple de 2 pasos enfocado en fallas sanitarias críticas:
     1. Tipo de falla crítica (Inundación / Rotura de matriz, Rebalse de alcantarillado, Fuga de gas, Sin suministro / Falla de bomba).
     2. Teléfono + Comuna (desplegable).
   - Envía un WhatsApp prioritario con la etiqueta `🚨 URGENCIA SOS 24/7`.

---

## 3. Arquitectura Técnica y Stack

- **Framework:** Astro 5.x.
- **Estilos:** Tailwind CSS v4.
- **Iconos:** `@lucide/astro`.
- **Interactividad:** Componentes aislados con JavaScript nativo en etiquetas `<script>` de Astro o módulos desacoplados.

---

## 4. Convenciones de Git y GitHub Flow

- **Regla de Oro:** **NUNCA** hacer push directo a la rama `main`.
- **Estrategia de Ramas:**
  - Ramas descriptivas por funcionalidad: `feat/initial-setup`, `feat/hero-section`, `feat/sos-modal`, `feat/quote-form`, `feat/rebranding-kofixred`.
  - Commits convencionales: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`.