/**
 * Módulo de integración para envío de mensajes a WhatsApp.
 * Preparado para ser refactorizado fácilmente hacia llamadas a una API REST (FastAPI).
 */

// Teléfono de Claudio (formato internacional sin el +). Ejemplo temporal.
const CLAUDIO_PHONE = '56949086102'; 

export interface SOSData {
  failureType: string;
  phone: string;
  commune: string;
}

/**
 * Procesa la solicitud SOS y genera el redireccionamiento a WhatsApp.
 * En el futuro, aquí se reemplazará la redirección por un fetch a FastAPI.
 */
export function sendSOSEmergency(data: SOSData): void {
  // Construimos el mensaje con formato amigable
  const text = `🚨 *URGENCIA SOS 24/7* 🚨\n\n`
    + `*Tipo de falla:* ${data.failureType}\n`
    + `*Comuna:* ${data.commune}\n`
    + `*Teléfono de contacto:* ${data.phone}\n\n`
    + `_Necesito asistencia inmediata por favor._`;

  // Codificamos para URL
  const encodedText = encodeURIComponent(text);
  
  // URL de API de WhatsApp
  const whatsappUrl = `https://wa.me/${CLAUDIO_PHONE}?text=${encodedText}`;

  // En el MVP abrimos WhatsApp directamente
  window.open(whatsappUrl, '_blank');

  // TODO Backend: Cuando FastAPI esté listo:
  // fetch('https://api.kofixred.cl/v1/urgencies', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(data)
  // }).then(res => res.json()).then(...)
}

export interface QuoteData {
  type: 'B2C' | 'B2B';
  name?: string; // B2C
  phone: string;
  commune: string;
  description: string;
  
  // B2B específicos
  businessName?: string;
  rut?: string;
  businessType?: string;
  requiresInvoice?: boolean;
}

/**
 * Procesa la cotización general y genera el redireccionamiento a WhatsApp.
 */
export function sendQuote(data: QuoteData): void {
  let text = `👋 *NUEVA SOLICITUD DE COTIZACIÓN*\n\n`;

  if (data.type === 'B2C') {
    text += `*Perfil:* 🏠 Hogar / Particular\n`
         + `*Nombre:* ${data.name || 'No especificado'}\n`;
  } else {
    text += `*Perfil:* 🏢 Empresa / B2B\n`
         + `*Razón Social:* ${data.businessName || 'No especificada'}\n`
         + `*RUT:* ${data.rut || 'No especificado'}\n`
         + `*Giro:* ${data.businessType || 'No especificado'}\n`
         + `*¿Requiere Factura?:* ${data.requiresInvoice ? '✅ Sí' : '❌ No'}\n`;
  }

  text += `*Teléfono:* ${data.phone}\n`
        + `*Comuna:* ${data.commune}\n\n`
        + `*Descripción del problema/proyecto:*\n${data.description}`;

  const encodedText = encodeURIComponent(text);
  const whatsappUrl = `https://wa.me/${CLAUDIO_PHONE}?text=${encodedText}`;

  window.open(whatsappUrl, '_blank');
}
