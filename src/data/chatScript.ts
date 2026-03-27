// Each entry is a single message or a group of messages sent after the user replies.
// type: "text" for regular messages, "file" for file attachments
export interface ScriptMessage {
  text: string;
  type: "text" | "file";
  fileName?: string;
  fileUrl?: string;
}

export const chatScript: ScriptMessage[][] = [
  // Block 0 - auto on mount
  [
    { type: "text", text: "Hola, investigadores. Si estáis en este chat quiere decir que os ha llegado el sobre con toda la información necesaria para este caso. Soy un contacto extraoficial de la policía y estoy ayudando a recopilar información sobre la investigación." },
    { type: "text", text: "A través de este chat estaremos en contacto debido a que no estamos autorizados a facilitar toda la información de manera oficial (dentro de vuestro sobre). Pero no os preocupéis, yo estaré aquí para ayudarnos a acceder a ella." },
    { type: "text", text: "Y lo más importante, necesitamos discreción por vuestra parte ya que no queremos que todo esto llegue a la prensa. Hannah es la que se puso en contacto con nosotros y asegura que últimamente no hay más que rumores inciertos." },
    { type: "text", text: "Necesitamos vuestra colaboración para resolver este caso ¿entendido?" },
  ],
  // Block 1
  [
    { type: "text", text: "Antes de nada... ¿ya habéis rellenado la tabla de los sospechosos que os adjuntamos en el sobre?" },
  ],
  // Block 2
  [
    { type: "text", text: "Vale pues primero con la información que tenéis rellenadlo y me volvéis a contactar cuando así sea." },
    { type: "text", text: "Primero debéis rellenar los nombres. Después con la información que os hemos proporcionado deberías poder rellenar el cuadro MOTIVOS/MÓVIL de MÍNIMO dos de ellos. Incluso si sois muy buenos observadores podéis llegar a tener tres o cuatro." },
    { type: "text", text: "Cuando lo tengáis me escribís \"Hola\" y yo ya sabré que sois vosotros." },
    { type: "text", text: "Espero vuestras noticias pronto, id con cuidado investigadores." },
  ],
  // Block 3
  [
    { type: "text", text: "Hola de nuevo investigadores, ya me estaba preocupando... ¿lo tenéis ya?" },
  ],
  // Block 4
  [
    { type: "text", text: "Genial investigadores! ¡¡¡¡Muy buen trabajo!!!!" },
    { type: "text", text: "Ahora, antes de nada, tengo que asegurarme que sois vosotros con quien hablo...necesito que me respondáis a una pregunta." },
    { type: "text", text: "¿Qué móvil tendría Valentina para amenazar a Hannah?" },
  ],
  // Block 5
  [
    { type: "text", text: "¡¡¡Perfecto!!! Ahora sí que sé que sois vosotros... por motivo de protección de datos no pudimos mandaros cierta evidencia..." },
    { type: "text", text: "Para llegar a ella solo os puedo decir que acudáis donde una artista prueba con detalle el sonido de cada canción. Allí, bajo lo que se pone en sus oídos, encontraréis lo que necesitáis...muy importante el SONIDO." },
    { type: "text", text: "Y recordad debéis dejarlo donde lo habéis encontrado y por supuesto modificar vuestra tabla. Volved a contactarme más adelante con un simple \"Lo tenemos\"." },
  ],
  // Block 6
  [
    { type: "text", text: "Investigadores, menos mal que habéis vuelto. Tenemos indicios de que Hannah dejó algo importante en un lugar donde solo alguien cercano podría encontrarlo. No podemos acceder directamente, y cualquier intento oficial llamaría la atención." },
    { type: "text", text: "Por lo que sabemos de sus rutinas, hay un espacio que ella visita siempre antes de sus actuaciones y donde acostumbra a revisar documentos y recortes. Nadie más que vosotros podríais revisar ese lugar sin levantar sospechas." },
    { type: "text", text: "Como agentes infiltrados solo vosotros podéis llegar a ello. Volveremos a estar en contacto cuando me digáis \"Lo encontramos\"." },
  ],
  // Block 7
  [
    { type: "text", text: "¿Alguna información os parece relevante investigadores?" },
  ],
  //Bloque añadido 1
   [
    { type: "text", text: "Debeis añadirlo a vuestro cuadro. Es muy importante. Pensad y deliberad entre todo el grupo y cuando me necesitéis volved a contactarme. Tengo que atender una llamada importante sobre el caso. Espero vuestras noticias" },
  ],
  // Block 8
  [
    { type: "text", text: "Investigadores, hemos recibido unos registros que podrían ser relevantes para el caso. No contienen remitente ni indicio claro de quién los mantiene, por lo que no podemos abrirlos oficialmente ni confirmar su procedencia." },
    { type: "text", text: "Vuestra labor hasta ahora demuestra que podéis analizar información con cuidado y discreción. Para desbloquear estos archivos necesitáis enviar una clave que conecte a todos los implicados con algo que simbolice entretenimiento o un canal que podría unirlos junto a un año, algo que podría aparecer en la memoria de los documentos y notas que habéis ido revisando durante la investigación." },
    { type: "text", text: "Una vez enviéis esa palabra o combinación de letras y números, os proporcionaré los registros para que podáis examinarlos detenidamente. Recordad: contienen información sensible y nadie más debe tener acceso." },
  ],
  // Block 9 - Archivos adjuntos
  [
    { type: "text", text: "Aquí tenéis los registros. Examinadlos con cuidado." },
    { type: "file", text: "01052026.docx", fileName: "01052026.docx", fileUrl: "/case-messenger/files/01052026.docx" },
    { type: "file", text: "GastosAbril_2026.xlsx", fileName: "GastosAbril_2026.xlsx", fileUrl: "/case-messenger/files/GastosAbril_2026.xlsx" },
    { type: "file", text: "Imprimir.docx", fileName: "Imprimir.docx", fileUrl: "/case-messenger/files/Imprimir.docx" },
  ],
  // Block 10
  [
    { type: "text", text: "¿Tenéis claro la persona y el motivo?" },
  ],
  // Block 11
  [
    { type: "text", text: "¡Excelente trabajo, investigadores!" },
    { type: "text", text: "Gracias a vuestra dedicación y atención a los detalles, habéis conseguido acceder a los archivos y analizar la información con cuidado. Ahora sois vosotros quienes tenéis la responsabilidad de exponer ante los demás quién es la persona implicada y las razones que lo demuestran." },
    { type: "text", text: "Vuestra labor hasta ahora ha sido impecable: habéis seguido las pistas, deducido patrones y actuado con discreción. Enhorabuena por el gran trabajo realizado, y recordad que ahora la siguiente fase depende de vuestra claridad y capacidad para argumentar vuestras conclusiones frente al resto del grupo." },
  ],
];
