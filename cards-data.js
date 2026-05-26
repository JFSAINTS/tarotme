// Datos de las 78 cartas del Tarot Rider-Waite en español
// Imágenes: todas las 78 cartas de Wikimedia Commons (dominio público)
// Todas las ilustraciones de Pamela Colman Smith (1910) son de dominio público.

const WIKIMEDIA = "https://upload.wikimedia.org/wikipedia/commons/";

export const CARTAS = [

  // ═══════════════════════════════════════════
  // ARCANOS MAYORES (22 cartas)
  // ═══════════════════════════════════════════

  {
    id: "ar00", numero: "0", nombre: "El Loco", ingles: "The Fool",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "9/90/RWS_Tarot_00_Fool.jpg",
    palabrasClave: ["nuevos comienzos", "aventura", "inocencia", "espontaneidad", "libertad"],
    derecho: "El Loco marca el inicio de un viaje lleno de posibilidades. Es la energía del que se lanza sin miedo, confiando en el universo. Momento ideal para comenzar proyectos nuevos, explorar territorios desconocidos o simplemente atreverse a dar ese paso que llevas tiempo posponiendo. La vida te invita a soltar el control y fluir.",
    invertido: "Cuando aparece invertido, El Loco advierte sobre imprudencia o falta de dirección. Puede que estés actuando sin pensar las consecuencias, o al contrario, que el miedo te impida dar el salto necesario. Haz una pausa antes de lanzarte.",
    simbolismo: "Un joven camina hacia el borde de un precipicio mirando al cielo, con una mochila liviana y una flor blanca. Su perro le ladra advertencias que él ignora. Representa el espíritu libre antes de que la experiencia lo moldee."
  },
  {
    id: "ar01", numero: "I", nombre: "El Mago", ingles: "The Magician",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "1/10/RWS_Tarot_01_Magician.jpg",
    palabrasClave: ["voluntad", "poder", "manifestación", "habilidad", "acción"],
    derecho: "Tienes todos los recursos que necesitas para lograr lo que deseas. El Mago te dice que el momento de actuar es ahora, con intención y determinación. Las cuatro herramientas sobre su mesa (varita, copa, espada y pentáculo) representan que tienes acceso a todo lo necesario. «Como arriba, así abajo»: lo que imaginas puedes hacerlo real.",
    invertido: "Manipulación, uso de habilidades para fines equivocados o potencial que no se está aprovechando. También puede señalar engaño por parte de alguien cercano o dudas sobre tus propias capacidades.",
    simbolismo: "Un hombre señala al cielo con una varita y a la tierra con la otra mano. Sobre su mesa están los cuatro palos del tarot. El símbolo del infinito flota sobre su cabeza. Es el puente entre el mundo espiritual y el material."
  },
  {
    id: "ar02", numero: "II", nombre: "La Sacerdotisa", ingles: "The High Priestess",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "8/88/RWS_Tarot_02_High_Priestess.jpg",
    palabrasClave: ["intuición", "misterio", "sabiduría interior", "paciencia", "subconsciente"],
    derecho: "La respuesta que buscas no está fuera, está dentro de ti. La Sacerdotisa te pide que confíes en tu intuición, que hagas silencio y escuches tu voz interior. No es momento de actuar sino de observar, sentir y dejar que la sabiduría profunda emerja. Algo importante se revelará si tienes paciencia.",
    invertido: "Secretos que salen a la luz, o por el contrario, una desconexión con tu intuición. Puede que estés ignorando señales importantes o confiando demasiado en la lógica cuando deberías escuchar tu corazón.",
    simbolismo: "Una mujer serena entre dos columnas (Boaz y Jachin), con un velo detrás que oculta el misterio. Sostiene un pergamino parcialmente oculto. Representa el conocimiento que no puede transmitirse con palabras."
  },
  {
    id: "ar03", numero: "III", nombre: "La Emperatriz", ingles: "The Empress",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "d/d2/RWS_Tarot_03_Empress.jpg",
    palabrasClave: ["abundancia", "fertilidad", "creatividad", "naturaleza", "nutrición"],
    derecho: "Abundancia en todos los sentidos: creatividad, amor, prosperidad, crecimiento. La Emperatriz representa la energía de la naturaleza en plena floración. Conecta con tu cuerpo, con lo sensorial, con la madre tierra. Es un momento de crear, de nutrir y de recibir los frutos de lo que has sembrado.",
    invertido: "Dependencia emocional, bloqueo creativo o falta de cuidado propio. Puede indicar sobreprotección o dificultades relacionadas con la maternidad, el hogar o la abundancia material.",
    simbolismo: "Una mujer embarazada rodeada de vegetación exuberante, coronada con estrellas. Su escudo muestra el símbolo de Venus. Todo a su alrededor florece y crece. Es la Gran Madre, la creadora de vida."
  },
  {
    id: "ar04", numero: "IV", nombre: "El Emperador", ingles: "The Emperor",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "c/c3/RWS_Tarot_04_Emperor.jpg",
    palabrasClave: ["autoridad", "estructura", "estabilidad", "control", "liderazgo"],
    derecho: "El orden y la estructura son la base del éxito ahora. El Emperador te invita a ser líder, a establecer límites claros, a actuar con disciplina y a construir sobre bases sólidas. Puede también representar una figura de autoridad —padre, jefe, mentor— que juega un papel importante en tu situación.",
    invertido: "Rigidez excesiva, abuso de poder o control desmedido. Puede indicar una figura autoritaria que actúa de forma tirana, o en ti mismo, una falta de estructura y disciplina que te impide avanzar.",
    simbolismo: "Un rey imponente en su trono de piedra, armado, con un cetro en forma de ank y un orbe. Las montañas detrás de él son áridas pero sólidas. Todo en la imagen transmite poder, permanencia y autoridad."
  },
  {
    id: "ar05", numero: "V", nombre: "El Hierofante", ingles: "The Hierophant",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "8/8d/RWS_Tarot_05_Hierophant.jpg",
    palabrasClave: ["tradición", "espiritualidad", "enseñanza", "guía", "institución"],
    derecho: "Busca la guía de alguien con experiencia o sabiduría establecida. El Hierofante representa el aprendizaje estructurado, las tradiciones, las instituciones y el valor de los maestros. Puede invitarte a seguir un camino espiritual formal o a consultar con alguien de mayor experiencia en el área que te preocupa.",
    invertido: "Cuestionamiento de normas, rebeldía ante la institución o el dogma. Puede ser liberador —encontrar tu propio camino— o problemático si implica rechazar consejo sabio por orgullo.",
    simbolismo: "Un sacerdote entre dos columnas, bendiciendo a dos figuras arrodilladas. Su mano hace el gesto de la bendición papal. Representa la transmisión de conocimiento sagrado a través de las generaciones."
  },
  {
    id: "ar06", numero: "VI", nombre: "Los Amantes", ingles: "The Lovers",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "3/3a/TheLovers.jpg",
    palabrasClave: ["amor", "elección", "valores", "unión", "alineación"],
    derecho: "Una gran decisión de amor o de valores llama a tu puerta. Los Amantes no son solo sobre relaciones románticas: también hablan de elegir desde el corazón y alinearte con lo que verdaderamente valoras. Cuando aparece, hay algo importante que decidir, y la elección debe venir de tus convicciones más profundas.",
    invertido: "Desalineación de valores, conflicto interno entre lo que quieres y lo que crees que debes hacer. También puede señalar una relación con incompatibilidades profundas o una decisión que se evita.",
    simbolismo: "Adán y Eva bajo el ángel Rafael. Él mira a ella, ella mira al ángel. Detrás de Eva, el árbol del conocimiento. Representa la elección entre lo físico y lo espiritual, entre el placer y el propósito."
  },
  {
    id: "ar07", numero: "VII", nombre: "El Carro", ingles: "The Chariot",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "9/9b/RWS_Tarot_07_Chariot.jpg",
    palabrasClave: ["victoria", "determinación", "control", "movimiento", "triunfo"],
    derecho: "La victoria llega a quienes dirigen su energía con voluntad. El Carro te habla de superar obstáculos a través de la disciplina, la determinación y el equilibrio entre fuerzas opuestas. Es momento de avanzar con fuerza hacia tu meta, sin desvíos. El éxito es posible si mantienes el enfoque.",
    invertido: "Falta de control, impulsividad o agresión que te aleja de tu objetivo. También puede indicar que estás siendo demasiado rígido y no te adaptas al camino.",
    simbolismo: "Un guerrero en un carro tirado por dos esfinges de colores opuestos. No sostiene riendas: los controla con su voluntad. Sobre él, un dosel de estrellas. Representa la victoria obtenida por dominio interior."
  },
  {
    id: "ar08", numero: "VIII", nombre: "La Fuerza", ingles: "Strength",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "f/f5/RWS_Tarot_08_Strength.jpg",
    palabrasClave: ["coraje", "compasión", "paciencia", "fortaleza interior", "valor"],
    derecho: "La verdadera fuerza no es física sino espiritual. Esta carta te recuerda que tienes la capacidad de manejar situaciones difíciles con gracia y compasión en lugar de con agresión. La fortaleza interior te permite dominar tus miedos, tus impulsos y las situaciones adversas sin perder la ternura.",
    invertido: "Duda, inseguridad, baja autoestima o pérdida del control emocional. Puede indicar que el miedo está gobernando tus decisiones en lugar de la confianza.",
    simbolismo: "Una mujer joven cierra con suavidad la boca de un león. El símbolo del infinito flota sobre su cabeza. No hay violencia ni miedo en la escena: la mujer domina a la bestia con amor y calma."
  },
  {
    id: "ar09", numero: "IX", nombre: "El Ermitaño", ingles: "The Hermit",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "4/4d/RWS_Tarot_09_Hermit.jpg",
    palabrasClave: ["introspección", "soledad", "búsqueda interior", "sabiduría", "guía"],
    derecho: "La respuesta que buscas requiere retiro y reflexión. El Ermitaño te invita a alejarte del ruido externo y escuchar tu voz interior. También puede representar a un mentor o guía que aparecerá en tu camino. Este no es el momento de actuar sino de iluminarte desde adentro antes de dar el siguiente paso.",
    invertido: "Aislamiento excesivo o no elegido, rechazo al consejo de otros, o sentirse perdido en la oscuridad sin encontrar el camino. Puede ser señal de que el tiempo de reflexión ya se extendió demasiado.",
    simbolismo: "Un anciano solitario en la cima de una montaña, sosteniendo una linterna que ilumina solo el siguiente paso. Representa la sabiduría adquirida en soledad y la búsqueda espiritual sincera."
  },
  {
    id: "ar10", numero: "X", nombre: "La Rueda de la Fortuna", ingles: "Wheel of Fortune",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "3/3c/RWS_Tarot_10_Wheel_of_Fortune.jpg",
    palabrasClave: ["destino", "ciclos", "cambio", "suerte", "karma"],
    derecho: "La rueda gira y los ciclos cambian, generalmente a tu favor. Lo que has sembrado está dando frutos. Este es un momento de cambio en la danza del destino. Acepta lo que llega con gratitud; el universo está conspirando a tu favor. También es un recordatorio de que todo cambia: los buenos tiempos y los difíciles.",
    invertido: "Mala suerte, resistencia al cambio o karma desfavorable retornando. También puede indicar que estás fuera de flujo con los ciclos naturales de tu vida.",
    simbolismo: "Una enorme rueda giratoria con símbolos alquímicos, flanqueada por figuras que suben y bajan: la serpiente, Anubis y la esfinge coronada. Cuatro criaturas aladas en las esquinas representan los evangelistas y los cuatro elementos."
  },
  {
    id: "ar11", numero: "XI", nombre: "La Justicia", ingles: "Justice",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "e/e0/RWS_Tarot_11_Justice.jpg",
    palabrasClave: ["verdad", "equidad", "causa y efecto", "decisión", "responsabilidad"],
    derecho: "La verdad prevalece y las consecuencias son justas. La Justicia habla de karma, de que cada acción tiene su efecto. Si has actuado con honestidad e integridad, confía en que el resultado será justo. También puede indicar un proceso legal, una evaluación o una decisión imparcial que te afecta.",
    invertido: "Injusticia, deshonestidad o evasión de responsabilidad. Puede señalar un veredicto injusto, que alguien no enfrenta las consecuencias de sus actos, o que tú mismo estás evitando asumir algo.",
    simbolismo: "Una figura sentada entre columnas sostiene una espada recta en la mano derecha y una balanza equilibrada en la izquierda. No hay adornos ni emociones en su expresión: solo imparcialidad absoluta."
  },
  {
    id: "ar12", numero: "XII", nombre: "El Colgado", ingles: "The Hanged Man",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "2/2b/RWS_Tarot_12_Hanged_Man.jpg",
    palabrasClave: ["pausa", "sacrificio", "nueva perspectiva", "rendición", "espera"],
    derecho: "Una pausa necesaria para ganar una perspectiva completamente nueva. El Colgado te invita a soltar el control, a rendirte ante lo que es, y a ver las cosas desde un ángulo diferente. A veces el sacrificio temporal de lo que queremos ahora abre puertas a algo mucho mejor. La inacción es también una forma de actuar.",
    invertido: "Resistencia a lo inevitable, martirio innecesario o egoísmo. También puede indicar que la pausa ya fue suficiente y es momento de desatarse y actuar.",
    simbolismo: "Un hombre cuelga de un árbol vivo por un pie, con expresión serena y un halo de luz. No está sufriendo: ha elegido esta posición para ver el mundo al revés. Representa el sacrificio voluntario por iluminación."
  },
  {
    id: "ar13", numero: "XIII", nombre: "La Muerte", ingles: "Death",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "d/d7/RWS_Tarot_13_Death.jpg",
    palabrasClave: ["transformación", "final", "cambio", "renacimiento", "transición"],
    derecho: "Esta carta NO representa la muerte literal. Anuncia el fin de un ciclo y el comienzo de otro. Una transformación profunda e inevitable está llegando o ya está en marcha. Lo que debe terminar, terminará. Lo que debe nacer, nacerá. La resistencia solo prolonga el dolor; la aceptación abre la puerta al renacimiento.",
    invertido: "Resistencia al cambio inevitable, apego al pasado o estancamiento por miedo a la transformación. El cambio llegará de todas formas; la carta invertida solo dice que se está posponiendo.",
    simbolismo: "Un esqueleto con armadura negra monta un caballo blanco, portando una bandera con una rosa blanca. A su paso, caen figuras de todas las clases sociales. El sol sale entre dos torres en el horizonte."
  },
  {
    id: "ar14", numero: "XIV", nombre: "La Templanza", ingles: "Temperance",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "f/f8/RWS_Tarot_14_Temperance.jpg",
    palabrasClave: ["equilibrio", "moderación", "paciencia", "propósito", "sanación"],
    derecho: "La armonía entre opuestos es la clave ahora. La Templanza te invita a encontrar el punto medio, a no ir a extremos, a integrar diferentes aspectos de tu vida o de la situación. Es también una carta de sanación: las cosas están volviendo a su cauce natural. Ten paciencia; el proceso tiene su tiempo.",
    invertido: "Excesos, desequilibrio, impaciencia o conflicto de propósito. Puede indicar que estás tirando de dos direcciones opuestas y necesitas encontrar el centro.",
    simbolismo: "Un ángel con un pie en el agua y otro en la tierra transvasa líquido entre dos copas de oro. Un sol brilla sobre una montaña al fondo. Representa la alquimia de integrar opuestos en una armonía superior."
  },
  {
    id: "ar15", numero: "XV", nombre: "El Diablo", ingles: "The Devil",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "5/55/RWS_Tarot_15_Devil.jpg",
    palabrasClave: ["apego", "limitación", "adicción", "sombra", "materialismo"],
    derecho: "Hay algo que te tiene atado: una adicción, un patrón de comportamiento, una relación tóxica, el apego al dinero o al status. El Diablo no es un ser externo: representa tu propia sombra, tus miedos y tus cadenas. Lo importante es que las cadenas que ves son más flojas de lo que crees. La liberación es posible.",
    invertido: "Rompiendo cadenas, tomando conciencia de dependencias, inicio de la liberación. Es una señal alentadora: estás empezando a ver las ataduras por lo que son y encontrando el poder para soltarlas.",
    simbolismo: "Una figura demoníaca con alas de murciélago en un pedestal al que están encadenados un hombre y una mujer. Sus cadenas son sueltas, podrían soltarse. Representan cómo nos encadenamos a nosotros mismos."
  },
  {
    id: "ar16", numero: "XVI", nombre: "La Torre", ingles: "The Tower",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "5/53/RWS_Tarot_16_Tower.jpg",
    palabrasClave: ["caos", "revelación", "ruptura súbita", "crisis", "liberación"],
    derecho: "Un cambio abrupto e inevitable está sacudiendo las bases de algo en tu vida. Lo que se construyó sobre cimientos falsos deberá caer. Aunque puede ser un momento doloroso o inesperado, La Torre libera: elimina lo que no era real, lo que no era tuyo, lo que te limitaba. Del caos emerge una verdad más sólida.",
    invertido: "Evitar el cambio necesario o una crisis que se vive internamente sin manifestarse aún hacia afuera. También puede indicar que la sacudida fue menos grave de lo esperado.",
    simbolismo: "Un rayo golpea la cima de una torre alta, derribando su corona. Dos figuras caen al vacío. El rayo es la verdad divina que destruye lo construido con arrogancia o sobre bases falsas."
  },
  {
    id: "ar17", numero: "XVII", nombre: "La Estrella", ingles: "The Star",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "d/db/RWS_Tarot_17_Star.jpg",
    palabrasClave: ["esperanza", "inspiración", "renovación", "fe", "guía"],
    derecho: "Después de la tormenta llega la calma y con ella, la esperanza. La Estrella es una de las cartas más hermosas y alentadoras del mazo: anuncia curación, inspiración renovada y fe en el futuro. Siente que el universo te apoya y te guía. Este es un momento de reconectar con tu propósito y con la belleza de estar vivo.",
    invertido: "Desesperanza, falta de fe o desconexión del propósito de vida. También puede indicar inseguridad o que la curación esperada tarda más de lo deseado.",
    simbolismo: "Una mujer desnuda vierte agua de dos jarras sobre la tierra y el agua bajo un cielo lleno de estrellas. Una gran estrella de ocho puntas domina el cielo. Representa la pureza, la renovación y la conexión con lo divino."
  },
  {
    id: "ar18", numero: "XVIII", nombre: "La Luna", ingles: "The Moon",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "7/7f/RWS_Tarot_18_Moon.jpg",
    palabrasClave: ["ilusión", "miedo", "subconsciente", "confusión", "intuición profunda"],
    derecho: "Las cosas no son lo que parecen. La Luna ilumina lo oscuro pero distorsiona las formas: hay ilusiones, miedos, incertidumbres. Tu subconsciente está enviando mensajes a través de sueños, corazonadas y emociones difusas. Navega este período con cuidado y sin tomar decisiones importantes hasta que llegue más claridad.",
    invertido: "Liberación de miedos, mayor claridad que llega o mentiras que finalmente salen a la luz. La confusión empieza a disiparse y puedes ver la situación con más nitidez.",
    simbolismo: "Una luna llena con un rostro melancólico ilumina un camino que se pierde entre dos torres. Un cangrejo emerge del agua oscura. Un perro y un lobo aúllan a la luna. Todo transmite lo misterioso, lo oculto y lo temido."
  },
  {
    id: "ar19", numero: "XIX", nombre: "El Sol", ingles: "The Sun",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "1/17/RWS_Tarot_19_Sun.jpg",
    palabrasClave: ["alegría", "vitalidad", "éxito", "claridad", "optimismo"],
    derecho: "Claridad total, éxito y alegría genuina. El Sol es una de las cartas más positivas del tarot: anuncia que las cosas fluyen, que la energía está alta y que hay motivos para celebrar. La verdad brilla, el camino está claro y la vida se siente plena. Disfruta este período con gratitud y compártelo con los que quieres.",
    invertido: "Optimismo que se frena, alegría bloqueada temporalmente o éxito que llega un poco más tarde de lo esperado. No es una mala carta incluso invertida: solo indica un pequeño retraso en la luz.",
    simbolismo: "Un niño desnudo monta un caballo blanco bajo un sol radiante con rostro humano. Girasoles enormes crecen detrás de un muro. Todo irradia vida, calor y felicidad sin reservas."
  },
  {
    id: "ar20", numero: "XX", nombre: "El Juicio", ingles: "Judgement",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "d/dd/RWS_Tarot_20_Judgement.jpg",
    palabrasClave: ["despertar", "evaluación", "absolución", "llamado", "renacimiento"],
    derecho: "Un gran despertar y llamado a una nueva vida. El Juicio te invita a hacer una evaluación honesta de tu pasado, a perdonarte y a responderte: ¿estás viviendo alineado con tu propósito más profundo? Es una carta de renacimiento, de escuchar el llamado del alma y tener el valor de responderle.",
    invertido: "Autoduda, miedo al cambio, ignorar el llamado o juzgarte a ti mismo con demasiada dureza. Puede indicar que no estás dispuesto a evaluar honestamente algo importante.",
    simbolismo: "El arcángel Gabriel toca su trompeta desde las nubes. Figuras de todas las edades se elevan de sus tumbas con los brazos abiertos. Una enorme bandera con la cruz roja y blanca ondea. Es el momento de la resurrección y el juicio final."
  },
  {
    id: "ar21", numero: "XXI", nombre: "El Mundo", ingles: "The World",
    arcana: "mayor", palo: null,
    imagen: WIKIMEDIA + "f/ff/RWS_Tarot_21_World.jpg",
    palabrasClave: ["completitud", "logro", "integración", "celebración", "ciclo cerrado"],
    derecho: "Has llegado al final de un ciclo con éxito. El Mundo celebra la integración total de la experiencia, la realización plena y el logro de lo que te propusiste. El mundo está a tus pies. Si aún no ha llegado, está muy cerca. Es un momento de gratitud, de celebrar lo recorrido y de prepararte para el próximo gran comienzo.",
    invertido: "Ciclo incompleto, camino que aún no se ha cerrado o búsqueda de atajos que impide terminar bien lo que se comenzó. A veces indica miedo a terminar algo definitivamente.",
    simbolismo: "Una figura danzante envuelta en una tela púrpura flota en el centro de una corona de laurel. En las cuatro esquinas, los mismos cuatro seres del Carro y la Rueda de la Fortuna. Es la danza de la realización completa."
  },

  // ═══════════════════════════════════════════
  // ARCANO MENOR — BASTOS (Fuego · Acción · Pasión)
  // ═══════════════════════════════════════════

  {
    id: "wa01", numero: "As", nombre: "As de Bastos", ingles: "Ace of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/11/Wands01.jpg",
    palabrasClave: ["nueva inspiración", "inicio con energía", "potencial creativo", "chispa"],
    derecho: "Una chispa de inspiración llega a tu vida. El As de Bastos es el inicio más puro de la energía de fuego: entusiasmo, creatividad y el potencial para lanzarse a algo completamente nuevo. Es el momento de comenzar ese proyecto que llevas en mente. La energía está ahí, solo tienes que tomar el bastón.",
    invertido: "Bloqueo creativo, inicio retrasado o energía que no sabe hacia dónde dirigirse. Las ganas están pero falta claridad en el camino.",
    simbolismo: "Una mano surge de las nubes ofreciendo un bastón lleno de brotes nuevos. El paisaje al fondo muestra un castillo y montañas. Los brotes representan el potencial creativo en estado puro."
  },
  {
    id: "wa02", numero: "II", nombre: "Dos de Bastos", ingles: "Two of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Wands02.jpg",
    palabrasClave: ["planificación", "visión de futuro", "expansión", "decisión"],
    derecho: "Tienes el mundo en tus manos y es momento de planificar tu próximo movimiento. El Dos de Bastos habla de mirar hacia el horizonte con confianza, de decidir en qué dirección expandirte. Ya has tomado los primeros pasos; ahora defines el camino. Hay posibilidad de viaje o de ampliar tu mundo.",
    invertido: "Miedo al cambio, falta de planificación o planes que no llegan a concretarse. También puede indicar que esperas noticias o resultados del exterior.",
    simbolismo: "Un hombre de pie en un castillo sostiene el mundo en una mano y un bastón en la otra, mirando al horizonte sobre el mar. Representa la visión del que ya tiene poder y busca más."
  },
  {
    id: "wa03", numero: "III", nombre: "Tres de Bastos", ingles: "Three of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Wands03.jpg",
    palabrasClave: ["anticipación", "expansión", "empresa", "barcos que llegan"],
    derecho: "Lo que pusiste en marcha está dando frutos. El Tres de Bastos habla de ver tus proyectos avanzar hacia el horizonte, de expansión comercial o personal, de buenos resultados que llegan. Es momento de anticipar el éxito con confianza y prepararte para recibirlo.",
    invertido: "Demoras en resultados esperados, obstáculos en planes de expansión o proyectos que no avanzan como se esperaba.",
    simbolismo: "Un hombre de espaldas observa desde un acantilado cómo tres barcos navegan hacia el horizonte. Ha enviado sus proyectos al mundo y ahora espera con confianza los resultados."
  },
  {
    id: "wa04", numero: "IV", nombre: "Cuatro de Bastos", ingles: "Four of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Wands04.jpg",
    palabrasClave: ["celebración", "hogar", "logro", "comunidad", "festividad"],
    derecho: "Celebración, armonía y sentido de hogar. El Cuatro de Bastos representa un momento de júbilo genuino, un hito alcanzado, una bienvenida o reunión familiar. Puede indicar una boda, una mudanza afortunada o simplemente un período de bienestar donde todo parece en su lugar.",
    invertido: "Tensión en el hogar, celebración que se pospone o inestabilidad en la vida familiar o doméstica.",
    simbolismo: "Cuatro bastones forman un pórtico adornado con flores bajo el que danzan dos figuras. Detrás, un castillo y una multitud celebrante. Transmite alegría compartida y sentido de pertenencia."
  },
  {
    id: "wa05", numero: "V", nombre: "Cinco de Bastos", ingles: "Five of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Wands05.jpg",
    palabrasClave: ["competencia", "conflicto", "desacuerdo", "lucha", "caos"],
    derecho: "Hay competencia, desacuerdo o conflicto en el aire. El Cinco de Bastos habla de energías que se chocan, de opiniones encontradas o de una sana (o no tan sana) rivalidad. Puede ser energizante o agotador según cómo lo gestiones. Es momento de defender tu posición sin perder la compostura.",
    invertido: "El conflicto empieza a resolverse o se ha evitado, aunque también puede indicar confrontación interna no expresada.",
    simbolismo: "Cinco jóvenes agitan sus bastones en aparente caos. No hay sangre ni rencor: parece más un juego o una disputa sin graves consecuencias."
  },
  {
    id: "wa06", numero: "VI", nombre: "Seis de Bastos", ingles: "Six of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Wands06.jpg",
    palabrasClave: ["victoria", "reconocimiento", "éxito público", "confianza", "liderazgo"],
    derecho: "Reconocimiento público, victoria merecida y confianza en alza. El Seis de Bastos llega cuando tus esfuerzos son reconocidos por los demás. Es un momento de liderazgo, de que tu trabajo habla por sí solo y te posiciona como referente. Celebra sin falsa modestia.",
    invertido: "Caída del liderazgo, arrogancia que genera rechazo o éxito que no llega. También puede indicar miedo al fracaso público.",
    simbolismo: "Un jinete con una corona de laurel cabalga entre una multitud que lo aclama con bastones en alto. Es la imagen del triunfo y la admiración ganada."
  },
  {
    id: "wa07", numero: "VII", nombre: "Siete de Bastos", ingles: "Seven of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Wands07.jpg",
    palabrasClave: ["perseverancia", "defensa", "desafío", "resistencia", "posición ventajosa"],
    derecho: "Defiende lo que has construido con determinación. El Siete de Bastos dice que estás en una posición de ventaja pero debes mantenerla frente a quienes quieren quitártela. La perseverancia es clave. No cedas bajo la presión; tienes más fuerza de lo que crees.",
    invertido: "Agotamiento por la lucha continua, ceder bajo la presión o sentirte abrumado por los desafíos. Quizás es momento de reevaluar si la batalla vale la pena.",
    simbolismo: "Un hombre en alto defiende su posición con un bastón contra seis que atacan desde abajo. Su postura es de determinación, no de miedo."
  },
  {
    id: "wa08", numero: "VIII", nombre: "Ocho de Bastos", ingles: "Eight of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6b/Wands08.jpg",
    palabrasClave: ["velocidad", "movimiento", "noticias", "acción rápida", "comunicación"],
    derecho: "Las cosas se mueven muy rápido ahora. El Ocho de Bastos anuncia noticias, mensajes, viajes o un período de acción intensa y rápida. Lo que estaba estancado se desbloquea. La energía fluye y los eventos se precipitan. Prepárate para actuar y decidir con agilidad.",
    invertido: "Demoras, confusión en comunicaciones o energía dispersa que no logra enfocarse en un objetivo.",
    simbolismo: "Ocho bastones vuelan en paralelo por el cielo sobre un paisaje tranquilo. No hay figuras humanas: es pura energía cinética en movimiento."
  },
  {
    id: "wa09", numero: "IX", nombre: "Nueve de Bastos", ingles: "Nine of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Wands09.jpg",
    palabrasClave: ["resiliencia", "guardia alta", "agotamiento", "perseverancia", "última prueba"],
    derecho: "Has luchado mucho y estás cansado, pero aún queda un tramo. El Nueve de Bastos habla de resiliencia: aunque estás agotado y herido, tienes la fuerza para la última prueba. No te rindas ahora. También puede indicar que estás demasiado a la defensiva por experiencias pasadas.",
    invertido: "Paranoia, exceso de defensas que aíslan o rendirse justo antes de cruzar la línea de meta.",
    simbolismo: "Un hombre con la cabeza vendada apoya en un bastón mientras ocho más están plantados detrás de él. Su mirada es vigilante. Ha peleado pero no ha sido derrotado."
  },
  {
    id: "wa10", numero: "X", nombre: "Diez de Bastos", ingles: "Ten of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Wands10.jpg",
    palabrasClave: ["sobrecarga", "responsabilidad excesiva", "peso", "agotamiento", "límite"],
    derecho: "Llevas demasiado sobre los hombros. El Diez de Bastos señala un período de sobrecarga donde quizás has asumido más responsabilidades de las que puedes manejar. Es momento de delegar, priorizar o simplemente soltar algo antes de agotarte completamente. No tienes que cargarlo todo solo.",
    invertido: "Empezar a liberar la carga, delegar o reconocer que el peso era innecesario. También puede indicar estrés extremo.",
    simbolismo: "Una figura cargada camina encorvada bajo el peso de diez bastones que casi le tapan la vista. Un pueblo tranquilo se ve al fondo: la meta está cerca pero la carga es muy pesada."
  },
  {
    id: "wa11", numero: "Paje", nombre: "Paje de Bastos", ingles: "Page of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Wands11.jpg",
    palabrasClave: ["entusiasmo", "exploración", "mensaje", "novato", "creatividad joven"],
    derecho: "Energía fresca, curiosidad y entusiasmo ante algo nuevo. El Paje de Bastos trae buenas noticias relacionadas con proyectos creativos o nuevas aventuras. También representa a una persona joven y apasionada, o esa parte de ti que todavía se maravilla y se lanza sin miedo.",
    invertido: "Falta de dirección, proyectos que no avanzan, retraso en noticias o energía que no sabe canalizarse.",
    simbolismo: "Un joven sostiene un bastón con admiración en medio de un desierto árido. En su sombrero, la salamandra, símbolo del fuego. Representa el entusiasmo puro antes de la experiencia."
  },
  {
    id: "wa12", numero: "Caballero", nombre: "Caballero de Bastos", ingles: "Knight of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/16/Wands12.jpg",
    palabrasClave: ["aventura", "impulsividad", "energía", "pasión", "movimiento rápido"],
    derecho: "Acción audaz, aventura y pasión desbordante. El Caballero de Bastos se lanza con todo sin pensarlo dos veces. Es carismático, apasionado y rápido. Puede representar a una persona así en tu vida, o la llamada a actuar con más energía y menos miedo.",
    invertido: "Imprudencia, comportamiento errático, retraso en viajes o planes que fracasan por falta de planificación.",
    simbolismo: "Un caballero sobre un caballo encabritado, con el bastón en alto, avanza velozmente sobre un paisaje de pirámides y dunas. La salamandra en su armadura confirma su naturaleza ígnea."
  },
  {
    id: "wa13", numero: "Reina", nombre: "Reina de Bastos", ingles: "Queen of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Wands13.jpg",
    palabrasClave: ["confianza", "carisma", "determinación", "vitalidad", "liderazgo femenino"],
    derecho: "Confianza en sí misma, vitalidad y un magnetismo natural que atrae a los demás. La Reina de Bastos es apasionada, independiente y sabe exactamente lo que quiere. Su energía es cálida pero poderosa. Puede representar a alguien así en tu vida o invitarte a encarnar esas cualidades.",
    invertido: "Inseguridad disfrazada de agresividad, celos, demandas excesivas o energía volcánica fuera de control.",
    simbolismo: "Una reina en su trono sostiene un girasol y un bastón. Un gato negro reposa a sus pies. Detrás de ella, los leones. Irradia calidez solar con una fuerza que no necesita demostrar nada."
  },
  {
    id: "wa14", numero: "Rey", nombre: "Rey de Bastos", ingles: "King of Wands",
    arcana: "menor", palo: "bastos",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Wands14.jpg",
    palabrasClave: ["liderazgo visionario", "emprendimiento", "visión", "honor", "carisma maduro"],
    derecho: "Liderazgo con visión, honor y magnetismo. El Rey de Bastos es el empresario, el líder inspirador, el que mueve a multitudes con su ejemplo. Tiene experiencia y sabe cómo usar su energía con sabiduría. Su presencia indica que tienes los recursos para liderar o que alguien así te apoya.",
    invertido: "Impulsividad sin sabiduría, comportamiento tiránico, expectativas demasiado altas o fracaso en el liderazgo.",
    simbolismo: "Un rey maduro en su trono adornado con salamandras y leones. Su capa tiene la misma criatura. Mira hacia adelante con determinación y confianza. A sus pies, una salamandra completa su propio círculo."
  },

  // ═══════════════════════════════════════════
  // ARCANO MENOR — COPAS (Agua · Emociones · Intuición)
  // ═══════════════════════════════════════════

  {
    id: "cu01", numero: "As", nombre: "As de Copas", ingles: "Ace of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/36/Cups01.jpg",
    palabrasClave: ["nuevo amor", "compasión", "inicio emocional", "creatividad", "abundancia sentimental"],
    derecho: "Un nuevo amor, una nueva conexión emocional profunda o un comienzo lleno de sentimientos positivos. El As de Copas es la chispa del mundo emocional: puede ser un romance, una amistad profunda, la maternidad o una conexión espiritual renovada. El corazón se abre y desborda.",
    invertido: "Amor bloqueado, vacío emocional, heridas que impiden abrirse o una creatividad reprimida.",
    simbolismo: "Una mano celestial sostiene una copa dorada de la que mana agua en cinco corrientes. Una paloma desciende colocando una hostia sobre ella. Flores de loto florecen en el estanque. Es la gracia divina derramándose."
  },
  {
    id: "cu02", numero: "II", nombre: "Dos de Copas", ingles: "Two of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f8/Cups02.jpg",
    palabrasClave: ["unión", "amor mutuo", "asociación", "conexión profunda", "compromiso"],
    derecho: "Una conexión profunda y recíproca entre dos personas. El Dos de Copas habla de amor mutuo, de una relación equilibrada donde ambos dan y reciben por igual. También puede representar una sociedad profesional armoniosa. Es la carta de la unión genuina.",
    invertido: "Ruptura en la relación, desequilibrio en el dar y recibir, tensiones en una asociación o falta de comunicación emocional.",
    simbolismo: "Dos figuras se intercambian copas bajo el símbolo del caduceo y el león alado. El gesto es solemne y amoroso: es el intercambio de corazones."
  },
  {
    id: "cu03", numero: "III", nombre: "Tres de Copas", ingles: "Three of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Cups03.jpg",
    palabrasClave: ["celebración", "amistad", "comunidad", "alegría compartida", "reunión"],
    derecho: "Celebración con amigos o seres queridos, comunidad que te apoya y alegría compartida. El Tres de Copas es la fiesta del alma: indica buenos momentos en compañía, reuniones, apoyo del círculo cercano y abundancia emocional. También puede señalar noticias felices que celebrar.",
    invertido: "Excesos en las celebraciones, triángulos amorosos, chismes o una amistad que no es lo que parece.",
    simbolismo: "Tres mujeres danzan en círculo levantando sus copas. A sus pies, abundancia de frutas y flores. Es la imagen del gozo femenino compartido."
  },
  {
    id: "cu04", numero: "IV", nombre: "Cuatro de Copas", ingles: "Four of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/35/Cups04.jpg",
    palabrasClave: ["contemplación", "apatía", "retraimiento", "insatisfacción", "meditación"],
    derecho: "Un período de introspección o descontento con lo que tienes frente a ti. El Cuatro de Copas señala que estás tan absorto en lo que no tienes que no ves las oportunidades que se te ofrecen. Hay una nueva copa extendiéndose hacia ti que no estás viendo. Sal de ese ensimismamiento.",
    invertido: "Motivación renovada, salir del letargo, aceptar lo que se ofrece o recuperar el entusiasmo perdido.",
    simbolismo: "Un joven sentado bajo un árbol cruza los brazos y mira tres copas en el suelo. Una cuarta copa le es ofrecida por una mano celestial que él ignora. Representa la ceguera ante lo que se nos da."
  },
  {
    id: "cu05", numero: "V", nombre: "Cinco de Copas", ingles: "Five of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d7/Cups05.jpg",
    palabrasClave: ["pérdida", "lamento", "duelo", "pesimismo", "no ver lo que queda"],
    derecho: "Una pérdida real que duele y merece ser llorada. El Cinco de Copas valida tu tristeza, pero también te recuerda que no todo se perdió: dos copas siguen en pie detrás de ti. Llora lo que dejaste ir, pero no olvides lo que aún tienes. La recuperación emocional requiere tiempo y honestidad.",
    invertido: "Empezar a aceptar la pérdida, ver lo que queda en pie, dar los primeros pasos hacia la recuperación emocional.",
    simbolismo: "Una figura de negro mira tres copas caídas y derramadas. Detrás de ella, dos copas están intactas. Un puente conduce a un castillo: el camino hacia adelante existe aunque no se vea desde aquí."
  },
  {
    id: "cu06", numero: "VI", nombre: "Seis de Copas", ingles: "Six of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/17/Cups06.jpg",
    palabrasClave: ["nostalgia", "infancia", "inocencia", "recuerdos", "regalo del pasado"],
    derecho: "Recuerdos felices, nostalgia sana e inocencia recuperada. El Seis de Copas puede indicar un reencuentro con alguien del pasado, la revisita de lugares de la infancia o simplemente un momento de dulzura y sencillez. También puede señalar que algo del pasado tiene una lección valiosa para el presente.",
    invertido: "Apego excesivo al pasado que impide avanzar, idealización de lo que fue o un pasado difícil que regresa.",
    simbolismo: "Un niño ofrece a una niña pequeña una copa llena de flores blancas. Cinco copas más también están llenas. Un guardia se aleja. Transmite la pureza y la generosidad de los recuerdos de infancia."
  },
  {
    id: "cu07", numero: "VII", nombre: "Siete de Copas", ingles: "Seven of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Cups07.jpg",
    palabrasClave: ["ilusiones", "ensoñación", "demasiadas opciones", "fantasía", "deseo"],
    derecho: "Demasiadas opciones, muchos sueños pero poca claridad sobre cuál perseguir. El Siete de Copas puede indicar que te estás perdiendo en ilusiones o que tienes tanto donde elegir que no avanzas. No todas las opciones son lo que parecen. Es momento de discernir entre el sueño útil y la distracción agradable.",
    invertido: "Mayor claridad, tomar una decisión concreta, pasar de las fantasías a la acción real.",
    simbolismo: "Una silueta contempla siete copas flotantes en las nubes, cada una con algo diferente: un castillo, un dragón, joyas, una serpiente, una corona, una figura cubierta y una cabeza. Todo parece posible pero nada es real."
  },
  {
    id: "cu08", numero: "VIII", nombre: "Ocho de Copas", ingles: "Eight of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/60/Cups08.jpg",
    palabrasClave: ["abandono", "búsqueda espiritual", "dejar ir", "alejarse", "insatisfacción profunda"],
    derecho: "Es momento de dejar atrás lo que ya no te llena, aunque parezca perfectamente bien desde afuera. El Ocho de Copas habla de alejarse con valentía de situaciones, relaciones o lugares que han dejado de tener sentido para ti, en busca de algo más profundo y auténtico.",
    invertido: "Miedo al cambio, aferrarse a lo conocido aunque ya no sirva, o regresar a lo que se dejó.",
    simbolismo: "Una figura de capa roja se aleja de noche entre montañas, dejando atrás ocho copas cuidadosamente apiladas. La luna está eclipsada. No es huida: es una partida consciente hacia algo más verdadero."
  },
  {
    id: "cu09", numero: "IX", nombre: "Nueve de Copas", ingles: "Nine of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/24/Cups09.jpg",
    palabrasClave: ["deseos cumplidos", "satisfacción", "bienestar", "gratitud", "felicidad material"],
    derecho: "La carta del «deseo concedido». El Nueve de Copas anuncia que aquello que has deseado con fuerza está llegando o ya está aquí. Es una de las cartas más positivas para los asuntos del corazón y el bienestar personal. Disfruta de lo que tienes con gratitud genuina.",
    invertido: "Satisfacción superficial, exceso o una felicidad que resulta ser más vacía de lo esperado.",
    simbolismo: "Un hombre sonriente y satisfecho se sienta frente a un arco lleno de nueve copas doradas. Su expresión es de complacencia y abundancia. Parece haber logrado todo lo que quería en la vida."
  },
  {
    id: "cu10", numero: "X", nombre: "Diez de Copas", ingles: "Ten of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/8/84/Cups10.jpg",
    palabrasClave: ["felicidad familiar", "armonía", "amor duradero", "realización emocional", "hogar feliz"],
    derecho: "La realización emocional más plena: familia, amor duradero, hogar armonioso y felicidad genuina. El Diez de Copas es el «y vivieron felices para siempre» del tarot. Puede anunciar o confirmar una época de profunda satisfacción en las relaciones y la vida doméstica.",
    invertido: "Relaciones disfuncionales, ilusión de armonía que oculta tensiones o una felicidad que se busca fuera en lugar de construirla desde adentro.",
    simbolismo: "Una pareja se abraza mientras sus dos hijos danzan. Un arcoíris con diez copas corona el cielo. Detrás, un hogar acogedor. Es la imagen de la felicidad completa y compartida."
  },
  {
    id: "cu11", numero: "Paje", nombre: "Paje de Copas", ingles: "Page of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/ad/Cups11.jpg",
    palabrasClave: ["sensibilidad", "mensaje emocional", "intuición joven", "creatividad", "sorpresa"],
    derecho: "Un mensaje inesperado o una oportunidad emocional que llega de forma sorprendente. El Paje de Copas representa la mente abierta y creativa, la intuición en estado puro, la disposición a explorar el mundo emocional con curiosidad y sin miedo.",
    invertido: "Inmadurez emocional, fantasías poco realistas, emociones reprimidas o mal manejo de los sentimientos.",
    simbolismo: "Un joven elegante mira con asombro un pez que asoma de su copa. El mar ondula detrás de él. Representa la sorpresa de los mensajes del subconsciente y la apertura ante lo inesperado."
  },
  {
    id: "cu12", numero: "Caballero", nombre: "Caballero de Copas", ingles: "Knight of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Cups12.jpg",
    palabrasClave: ["romance", "oferta emocional", "idealismo", "encanto", "propuesta"],
    derecho: "Una oferta romántica, un mensaje cargado de sentimiento o la llegada de alguien carismático e idealista. El Caballero de Copas es el poeta, el romántico empedernido, el que llega con flores y poemas. También puede representar la invitación a seguir a tu corazón.",
    invertido: "Engaño disfrazado de encanto, capricho emocional, promesas que no se cumplen o exceso de sentimentalismo.",
    simbolismo: "Un caballero con casco alado cabalga tranquilamente y sostiene una copa con solemnidad. Los peces en su armadura confirman su naturaleza acuática. Su caballo avanza despacio, con gracia."
  },
  {
    id: "cu13", numero: "Reina", nombre: "Reina de Copas", ingles: "Queen of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/62/Cups13.jpg",
    palabrasClave: ["compasión", "empatía", "intuición profunda", "cuidado", "sensibilidad"],
    derecho: "Empatía profunda, intuición extraordinaria y la capacidad de cuidar a los demás desde un lugar de amor incondicional. La Reina de Copas escucha el alma de los que la rodean. Puede representar a una persona muy empática en tu vida o invitarte a conectar con tu lado más compasivo.",
    invertido: "Codependencia, inseguridad emocional, tendencia a absorber los problemas de todos o emociones que desbordan.",
    simbolismo: "Una reina en su trono frente al mar sostiene una copa muy ornamentada y cerrada: sus emociones son profundas pero íntimas. Sus pies casi tocan el agua. Es pura presencia intuitiva."
  },
  {
    id: "cu14", numero: "Rey", nombre: "Rey de Copas", ingles: "King of Cups",
    arcana: "menor", palo: "copas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/04/Cups14.jpg",
    palabrasClave: ["sabiduría emocional", "equilibrio", "diplomacia", "compasión madura", "control"],
    derecho: "Sabiduría emocional, capacidad de mantenerse ecuánime bajo presión y habilidad para guiar a otros con compasión y sin perder el norte. El Rey de Copas ha sentido mucho y ha aprendido a integrar esas emociones en lugar de ser gobernado por ellas.",
    invertido: "Inestabilidad emocional que se oculta detrás de una fachada tranquila, frialdad o uso de la emoción como manipulación.",
    simbolismo: "Un rey sentado en su trono flota sobre el mar agitado, con una copa en una mano y un cetro en la otra. A pesar del mar revuelto, permanece sereno. Es la mente que no se deja arrastrar por las olas."
  },

  // ═══════════════════════════════════════════
  // ARCANO MENOR — ESPADAS (Aire · Mente · Verdad)
  // ═══════════════════════════════════════════

  {
    id: "sw01", numero: "As", nombre: "As de Espadas", ingles: "Ace of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Swords01.jpg",
    palabrasClave: ["claridad mental", "verdad", "victoria intelectual", "nueva idea", "corte limpio"],
    derecho: "Una verdad que se impone con claridad, una nueva idea poderosa o la resolución de una confusión que venía arrastrándose. El As de Espadas corta la niebla y deja ver las cosas tal como son. Es momento de actuar desde la inteligencia y la honestidad, sin rodeos.",
    invertido: "Confusión mental, caos de ideas, falta de claridad o el uso de la mente de forma destructiva.",
    simbolismo: "Una mano celestial sujeta una espada recta coronada por una corona de laurel. Montañas escarpadas al fondo. La espada representa el poder de la mente para cortar la ilusión y revelar la verdad."
  },
  {
    id: "sw02", numero: "II", nombre: "Dos de Espadas", ingles: "Two of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Swords02.jpg",
    palabrasClave: ["punto muerto", "bloqueo", "negación", "decisión difícil", "impasse"],
    derecho: "Estás en un punto muerto, evitando mirar algo que necesitas enfrentar. El Dos de Espadas señala un bloqueo mental: tienes dos opciones y no quieres elegir ninguna. La venda en los ojos indica negación. La decisión que evitas no va a desaparecer: es momento de mirarla de frente.",
    invertido: "Información importante que sale a la luz, una decisión que finalmente se toma o la resolución de un impasse.",
    simbolismo: "Una mujer vendada se sienta frente al mar con dos espadas cruzadas sobre el pecho. La luna se refleja en el agua. Su postura defensiva la protege pero también la ciega."
  },
  {
    id: "sw03", numero: "III", nombre: "Tres de Espadas", ingles: "Three of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/0/02/Swords03.jpg",
    palabrasClave: ["tristeza", "traición", "dolor", "pérdida", "corazón roto"],
    derecho: "Una de las cartas más directas del tarot: hay dolor de corazón, traición o pérdida emocional real. No se puede suavizar este mensaje, pero tampoco debe dramatizarse: el dolor es parte de la vida y tiene su función. Allowarse sentirlo es el primer paso hacia la sanación.",
    invertido: "Proceso de recuperación emocional en marcha, empezar a perdonar o heridas que empiezan a sanar.",
    simbolismo: "Un corazón rojo atravesado por tres espadas bajo una nube lluviosa. Sin figuras humanas: la imagen habla por sí sola. Es la representación más directa del dolor emocional en todo el tarot."
  },
  {
    id: "sw04", numero: "IV", nombre: "Cuatro de Espadas", ingles: "Four of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Swords04.jpg",
    palabrasClave: ["descanso", "recuperación", "meditación", "pausa necesaria", "restauración"],
    derecho: "Necesitas parar y descansar. El Cuatro de Espadas es la carta de la recuperación: después de la batalla, el guerrero se retira a recuperar fuerzas. No es rendirse; es la sabiduría de saber cuándo el cuerpo y la mente necesitan silencio. El descanso es parte de la estrategia.",
    invertido: "Agitación que impide el descanso, inquietud o el momento en que la pausa ya fue suficiente y es hora de volver a la acción.",
    simbolismo: "Un caballero yace en reposo sobre una lápida en postura de oración. Tres espadas cuelgan sobre él; una está a su lado. Una vidriera colorida lo ilumina. No está muerto: está en meditación profunda."
  },
  {
    id: "sw05", numero: "V", nombre: "Cinco de Espadas", ingles: "Five of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/23/Swords05.jpg",
    palabrasClave: ["conflicto", "derrota", "victoria vacía", "deshonor", "humillación"],
    derecho: "Un conflicto que deja cicatrices aunque ganes. El Cinco de Espadas habla de victorias huecas, de luchas donde todos pierden algo, o de alguien que utiliza tácticas deshonestas para ganar. Puede ser el momento de elegir la paz sobre tener razón.",
    invertido: "Reconciliación, pasar la página de un conflicto o tomar conciencia de que la batalla no valía la pena.",
    simbolismo: "Una figura recoge las espadas de dos figuras derrotadas que se alejan cabizbajosas. El cielo está nublado y revuelto. La expresión del ganador no es de triunfo: es ambigua. Esta victoria tiene un precio."
  },
  {
    id: "sw06", numero: "VI", nombre: "Seis de Espadas", ingles: "Six of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/29/Swords06.jpg",
    palabrasClave: ["transición", "viaje", "pasar adelante", "sanación gradual", "dejar atrás"],
    derecho: "Te alejás de aguas turbulentas hacia algo más tranquilo. El Seis de Espadas es la carta del viaje necesario: no es fácil dejar atrás, pero es lo correcto. La sanación es gradual. Puede indicar un viaje literal o una transición importante en la vida hacia un lugar más pacífico.",
    invertido: "Resistencia al cambio, equipaje emocional pesado que se arrastra o un viaje con complicaciones.",
    simbolismo: "Una mujer y un niño, cubiertos, son transportados en barca por un barquero. Seis espadas están clavadas en la proa. El agua detrás está agitada; la de adelante, tranquila. El cambio está en marcha."
  },
  {
    id: "sw07", numero: "VII", nombre: "Siete de Espadas", ingles: "Seven of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/34/Swords07.jpg",
    palabrasClave: ["engaño", "sigilo", "estrategia", "robo", "astucia"],
    derecho: "Alguien (o tú mismo) está actuando con sigilo o deshonestidad. El Siete de Espadas advierte sobre engaños, traiciones o estrategias encubiertas. También puede representar la necesidad de actuar con diplomacia en lugar de confrontación directa en ciertos contextos.",
    invertido: "Una confesión, la trampa descubierta, el engaño que sale a la luz o el retorno de algo que fue tomado injustamente.",
    simbolismo: "Una figura escapa de un campamento cargando cinco espadas con una sonrisa pícara, dejando dos atrás. El campamento está descuidado. Es el arquetipo del ladrón astuto o del que actúa en las sombras."
  },
  {
    id: "sw08", numero: "VIII", nombre: "Ocho de Espadas", ingles: "Eight of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Swords08.jpg",
    palabrasClave: ["restricción", "miedo", "victimismo", "parálisis", "prisión mental"],
    derecho: "Te sientes atrapado, pero la prisión es mental. El Ocho de Espadas muestra una figura vendada y atada, rodeada de espadas, pero si miraras bien verías que puede moverse. Los límites que sientes son en gran parte creados por tu propia mente. El miedo y el victimismo te tienen más atado que la situación real.",
    invertido: "Liberación gradual, nueva perspectiva que revela el camino de salida o recuperar el poder personal.",
    simbolismo: "Una mujer vendada y parcialmente atada está rodeada por ocho espadas clavadas en el suelo. El agua a sus pies y un castillo al fondo. Las espadas no la tocan: son los miedos que nos paralizan."
  },
  {
    id: "sw09", numero: "IX", nombre: "Nueve de Espadas", ingles: "Nine of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Swords09.jpg",
    palabrasClave: ["ansiedad", "pesadillas", "preocupación", "angustia nocturna", "desesperación"],
    derecho: "La ansiedad y los pensamientos oscuros te quitan el sueño. El Nueve de Espadas representa ese momento de las 3 de la mañana cuando todo parece peor de lo que es. Tus miedos son reales, pero raramente tan terribles como los imaginas de noche. Busca apoyo y perspectiva.",
    invertido: "Esperanza que regresa, buscar ayuda, empezar a manejar la ansiedad o darse cuenta de que la situación no es tan grave como parecía.",
    simbolismo: "Una figura sentada en la cama se cubre la cara con las manos. Nueve espadas cuelgan horizontales sobre ella en la oscuridad. Un panel decorativo en la base de la cama cuenta una historia de conflicto. Las pesadillas son los enemigos en la mente."
  },
  {
    id: "sw10", numero: "X", nombre: "Diez de Espadas", ingles: "Ten of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords10.jpg",
    palabrasClave: ["traición", "fin doloroso", "colapso", "golpe final", "derrota"],
    derecho: "El golpe final de un ciclo doloroso. El Diez de Espadas señala la traición más aguda, el final más amargo o el punto más bajo antes de la recuperación. La buena noticia: cuando se toca fondo, la única dirección es hacia arriba. El amanecer ya está tiñendo el horizonte en la imagen.",
    invertido: "La recuperación inevitable comienza, resistencia que permite sobrevivir o el rechazo a aceptar que algo ha terminado.",
    simbolismo: "Una figura yace boca abajo con diez espadas clavadas en la espalda. Sin embargo, el cielo oscuro se abre en el horizonte con un amanecer dorado. Es el fin más dramático del tarot, pero también el presagio del nuevo día."
  },
  {
    id: "sw11", numero: "Paje", nombre: "Paje de Espadas", ingles: "Page of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Swords11.jpg",
    palabrasClave: ["curiosidad intelectual", "vigilancia", "agilidad mental", "comunicación", "noticias"],
    derecho: "Mente ágil, curiosidad intelectual y disposición a aprender. El Paje de Espadas trae noticias o mensajes importantes. También puede representar a alguien joven e inteligente o la parte tuya que siempre está lista para analizar, observar y comunicar.",
    invertido: "Hablar sin pensar, cotilleo, ideas que no pasan de ser ideas, o alguien que usa la información en tu contra.",
    simbolismo: "Un joven sostiene una espada en alto contra un cielo ventoso y nublado. Pájaros vuelan detrás. Su expresión es alerta y perspicaz. Está listo para la acción mental aunque su cuerpo permanece estático."
  },
  {
    id: "sw12", numero: "Caballero", nombre: "Caballero de Espadas", ingles: "Knight of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Swords12.jpg",
    palabrasClave: ["determinación", "velocidad", "ambición", "intelecto en acción", "impulso"],
    derecho: "Acción rápida y decisiva, determinación intelectual y la voluntad de cortar lo que sea necesario para avanzar. El Caballero de Espadas va a toda velocidad hacia su objetivo. Puede ser inspirador o aterrador según el contexto. Lo importante es que la acción viene.",
    invertido: "Imprudencia, agresión verbal, conflictos por actuar sin pensar o precipitarse en decisiones importantes.",
    simbolismo: "Un caballero a toda velocidad sobre un caballo encabritado, espada en alto, con el viento a su favor. Los árboles al fondo se doblan. Nada puede detenerle. Es la mente como flecha."
  },
  {
    id: "sw13", numero: "Reina", nombre: "Reina de Espadas", ingles: "Queen of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Swords13.jpg",
    palabrasClave: ["independencia", "percepción aguda", "honestidad", "inteligencia", "claridad"],
    derecho: "Mente brillante, percepción aguda y la valentía de decir la verdad sin rodeos. La Reina de Espadas ha vivido mucho y su experiencia la hace perspicaz y directa. No tolera el engaño ni la mediocridad. Puede representar a alguien así en tu vida o la invitación a ser más claro y honesto.",
    invertido: "Frialdad que lastima, juicio duro que se convierte en crueldad, amargura o uso de la inteligencia para herir.",
    simbolismo: "Una reina en su trono eleva una espada y extiende su otra mano, como invitando y advirtiendo a la vez. Nubes y aves vuelan detrás. Su expresión es seria e impenetrable. Ha visto demasiado para ser ingenua."
  },
  {
    id: "sw14", numero: "Rey", nombre: "Rey de Espadas", ingles: "King of Swords",
    arcana: "menor", palo: "espadas",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/33/Swords14.jpg",
    palabrasClave: ["inteligencia", "autoridad intelectual", "verdad", "justicia", "poder mental"],
    derecho: "Autoridad intelectual, claridad de pensamiento y el poder de la mente para gobernar con justicia. El Rey de Espadas es el juez, el abogado, el analista. Su mente es su arma y su escudo. Actúa desde principios, no desde emociones. Puede representar a alguien con poder decisorio en tu situación.",
    invertido: "Abuso de poder intelectual, manipulación, crueldad mental o decisiones tomadas sin ninguna consideración emocional.",
    simbolismo: "Un rey de expresión severa sostiene su espada hacia arriba con firmeza. Ángeles decoran su trono; mariposas, su capa. El cielo despejado detrás de él contrasta con las nubes a los lados. Es la razón pura."
  },

  // ═══════════════════════════════════════════
  // ARCANO MENOR — OROS (Tierra · Materia · Cuerpo)
  // ═══════════════════════════════════════════

  {
    id: "pe01", numero: "As", nombre: "As de Oros", ingles: "Ace of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Pents01.jpg",
    palabrasClave: ["nueva oportunidad material", "prosperidad", "inicio financiero", "abundancia física"],
    derecho: "Una nueva oportunidad de prosperidad material está llegando. El As de Oros puede anunciar un nuevo trabajo, un proyecto lucrativo, una herencia o simplemente el inicio de un período de mayor estabilidad económica. La puerta está abierta: pasa.",
    invertido: "Oportunidad material que se pierde, apego excesivo al dinero o inicio de un proyecto con bases inestables.",
    simbolismo: "Una mano celestial sostiene un gran pentáculo dorado sobre un jardín en flor con una puerta abierta al horizonte. El camino hacia la prosperidad material está pavimentado y despejado."
  },
  {
    id: "pe02", numero: "II", nombre: "Dos de Oros", ingles: "Two of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Pents02.jpg",
    palabrasClave: ["equilibrio", "adaptabilidad", "flexibilidad", "malabares", "gestión"],
    derecho: "Estás haciendo malabares con diferentes responsabilidades y lo estás manejando bastante bien. El Dos de Oros habla de adaptabilidad y flexibilidad. Puedes manejar más de una cosa a la vez siempre que no pierdas el ritmo. La situación pide agilidad, no rigidez.",
    invertido: "Desequilibrio, desorganización o intentar manejar demasiadas cosas a la vez hasta que algo se cae.",
    simbolismo: "Un joven danza equilibrando dos pentáculos enlazados por un símbolo del infinito. Detrás de él, barcos en un mar agitado. Representa la gestión ágil de los recursos en tiempos de cambio."
  },
  {
    id: "pe03", numero: "III", nombre: "Tres de Oros", ingles: "Three of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents03.jpg",
    palabrasClave: ["trabajo en equipo", "colaboración", "aprendizaje", "maestría", "calidad"],
    derecho: "El trabajo en equipo y la colaboración producen resultados de calidad superior. El Tres de Oros valora el aprendizaje, la maestría artesanal y el trabajar con otros hacia un objetivo común. Estás en el camino correcto: tu trabajo es reconocido y valorado.",
    invertido: "Trabajo descuidado, falta de cooperación, conflictos en el equipo o aprendizaje que se estanca.",
    simbolismo: "Un artesano trabaja sobre un arco de piedra mientras un monje y un noble observan y discuten los planos. La cooperación entre el trabajador manual y los intelectuales produce algo hermoso y duradero."
  },
  {
    id: "pe04", numero: "IV", nombre: "Cuatro de Oros", ingles: "Four of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/3/35/Pents04.jpg",
    palabrasClave: ["seguridad", "acumulación", "control", "avaricia", "apego al dinero"],
    derecho: "Hay una necesidad de seguridad material que puede volverse avaricia o exceso de control. El Cuatro de Oros indica que aferrarse demasiado a lo que tienes puede impedirte crecer. La estabilidad es buena; el control obsesivo, no. ¿Estás invirtiendo o solo acumulando por miedo?",
    invertido: "Liberación de la avaricia, apertura a compartir o al contrario, despilfarro y falta de control financiero.",
    simbolismo: "Un hombre en el borde de una ciudad sujeta un pentáculo en sus brazos, otro bajo sus pies y dos sobre su cabeza. Su postura es de control total pero también de aislamiento. Está tan ocupado cuidando lo que tiene que no puede moverse."
  },
  {
    id: "pe05", numero: "V", nombre: "Cinco de Oros", ingles: "Five of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/9/96/Pents05.jpg",
    palabrasClave: ["adversidad", "pobreza", "inseguridad", "aislamiento", "dificultad material"],
    derecho: "Un período de dificultad material, inseguridad económica o sensación de exclusión. El Cinco de Oros señala tiempos difíciles, pero también recuerda que el apoyo existe si sabes dónde buscarlo. A veces el orgullo nos impide aceptar la ayuda que necesitamos.",
    invertido: "El inicio de la recuperación económica, aceptar ayuda o superar una crisis material.",
    simbolismo: "Dos figuras empobrecidas caminan descalzas bajo la nieve junto a una iglesia iluminada. Los cinco oros dorados brillan en la vidriera. El refugio y el apoyo están disponibles pero ellos siguen de largo."
  },
  {
    id: "pe06", numero: "VI", nombre: "Seis de Oros", ingles: "Six of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pents06.jpg",
    palabrasClave: ["generosidad", "caridad", "equilibrio en dar y recibir", "filantropía", "deuda"],
    derecho: "El flujo del dinero y los recursos entre quienes tienen y quienes necesitan. El Seis de Oros puede indicar que recibirás ayuda o que estás en posición de darla. Habla del equilibrio en las relaciones de dar y recibir, y de la generosidad que genera abundancia.",
    invertido: "Desequilibrio de poder en una relación económica, generosidad condicionada o deudas que generan obligaciones.",
    simbolismo: "Un hombre rico con una balanza distribuye monedas a dos mendigos arrodillados. La balanza que sostiene representa la equidad. Pero la dinámica tiene matices de poder: ¿se da por bondad o por control?"
  },
  {
    id: "pe07", numero: "VII", nombre: "Siete de Oros", ingles: "Seven of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Pents07.jpg",
    palabrasClave: ["paciencia", "inversión a largo plazo", "evaluación", "resultados futuros", "perseverancia"],
    derecho: "Momento de evaluar el progreso y tener paciencia con los procesos que llevan tiempo. El Siete de Oros dice que has invertido esfuerzo y los frutos están creciendo, pero aún no están listos para cosecharse. Confía en el proceso. Los buenos resultados requieren tiempo.",
    invertido: "Impaciencia, falta de visión a largo plazo o inversión de esfuerzo en algo que no va a rendir.",
    simbolismo: "Un campesino apoya su azada y contempla pensativo una planta con siete pentáculos. Ha trabajado duro. Ahora solo puede esperar. Su mirada mezcla satisfacción y pregunta: ¿valdrá la espera?"
  },
  {
    id: "pe08", numero: "VIII", nombre: "Ocho de Oros", ingles: "Eight of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/49/Pents08.jpg",
    palabrasClave: ["dedicación", "maestría", "aprendizaje", "trabajo artesanal", "mejora continua"],
    derecho: "Dedicación profunda al trabajo o al aprendizaje de una habilidad. El Ocho de Oros celebra el enfoque, la repetición perfeccionista y el orgullo del trabajo bien hecho. Es hora de poner la cabeza abajo y trabajar con disciplina. La maestría se construye ladrillo a ladrillo.",
    invertido: "Perfeccionismo que paraliza, falta de ambición o trabajo que no tiene calidad ni propósito.",
    simbolismo: "Un artesano labra pentáculos uno a uno con concentración total. Seis ya están terminados y colgados en el árbol; uno más en sus manos. Un camino lleva a una ciudad lejana. Es el retrato del trabajo artesanal y la dedicación."
  },
  {
    id: "pe09", numero: "IX", nombre: "Nueve de Oros", ingles: "Nine of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Pents09.jpg",
    palabrasClave: ["abundancia", "autosuficiencia", "independencia", "lujo merecido", "refinamiento"],
    derecho: "Abundancia ganada con esfuerzo y el placer de disfrutarla sin culpa. El Nueve de Oros celebra la autosuficiencia, el refinamiento y el lujo que se ha construido con trabajo propio. Es también una carta de independencia: tienes lo que necesitas sin depender de nadie.",
    invertido: "Dependencia financiera, derroche, abundancia que se usa para llenar vacíos emocionales o pérdida de lo logrado.",
    simbolismo: "Una mujer elegante en un jardín exuberante lleva un halcón en su mano enguantada. Nueve pentáculos rodean la viña. Está sola pero completamente satisfecha. No necesita a nadie para sentirse plena."
  },
  {
    id: "pe10", numero: "X", nombre: "Diez de Oros", ingles: "Ten of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/4/42/Pents10.jpg",
    palabrasClave: ["riqueza", "herencia", "familia", "legado", "estabilidad generacional"],
    derecho: "La culminación de la prosperidad material: riqueza sólida, herencia, legado familiar y estabilidad que se transmite de generación en generación. El Diez de Oros habla del bienestar que trasciende el individuo y beneficia a toda la familia o comunidad.",
    invertido: "Conflictos en torno a la herencia, inestabilidad familiar, pérdidas financieras o legado que se rompe.",
    simbolismo: "Un anciano con una capa ornamentada observa a su familia. Dos perros y niños juegan. Una pareja habla al fondo. Diez pentáculos forman el árbol de la vida de la Cábala. Es el cuadro de la abundancia transgeneracional."
  },
  {
    id: "pe11", numero: "Paje", nombre: "Paje de Oros", ingles: "Page of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Pents11.jpg",
    palabrasClave: ["ambición joven", "diligencia", "nuevas habilidades", "enfoque", "aprendizaje práctico"],
    derecho: "Un joven con ambición práctica y disposición para aprender y trabajar duro. El Paje de Oros puede anunciar noticias de tipo material o representar la energía del estudiante dedicado que está construyendo las bases de su futuro con paciencia y enfoque.",
    invertido: "Falta de ambición, pereza, proyectos materiales que no arrancan o desperdicio de talento y recursos.",
    simbolismo: "Un joven sostiene un pentáculo entre sus manos con concentración y asombro. Su mirada es de estudiante absorto. El campo fértil a sus espaldas prometé resultados si se trabaja bien."
  },
  {
    id: "pe12", numero: "Caballero", nombre: "Caballero de Oros", ingles: "Knight of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Pents12.jpg",
    palabrasClave: ["trabajo duro", "responsabilidad", "metodología", "paciencia", "confiabilidad"],
    derecho: "Trabajo duro, responsabilidad y un avance constante aunque lento. El Caballero de Oros no es el más rápido ni el más brillante, pero es el más confiable: termina lo que empieza, trabaja con método y nunca abandona una responsabilidad. Su constancia es su mayor virtud.",
    invertido: "Pereza, terquedad, exceso de cautela que impide avanzar o una rutina que se convierte en estancamiento.",
    simbolismo: "Un caballero sobre un caballo negro estático contempla un pentáculo con seriedad. No hay velocidad ni dramaturgia: todo es solidez y peso. El campo sin sembrar detrás de él espera su trabajo metódico."
  },
  {
    id: "pe13", numero: "Reina", nombre: "Reina de Oros", ingles: "Queen of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/8/88/Pents13.jpg",
    palabrasClave: ["practicidad", "nutrición", "abundancia compartida", "conexión con la tierra", "cuidado material"],
    derecho: "Practicidad, generosidad y la capacidad de crear un entorno de abundancia y bienestar para todos. La Reina de Oros cuida de los suyos de forma concreta: con comida, con un hogar hermoso, con recursos bien administrados. Conecta con el cuerpo, la tierra y los placeres sensoriales.",
    invertido: "Desequilibrio entre trabajo y vida personal, exceso de materialismo o descuido del bienestar propio.",
    simbolismo: "Una reina rodeada de flores sostiene un pentáculo con ternura, como si fuera una criatura viva. Un conejo salta a sus pies. Detrás, la naturaleza exuberante. Cuida del mundo material con el mismo amor que una madre."
  },
  {
    id: "pe14", numero: "Rey", nombre: "Rey de Oros", ingles: "King of Pentacles",
    arcana: "menor", palo: "oros",
    imagen: "https://upload.wikimedia.org/wikipedia/commons/1/1c/Pents14.jpg",
    palabrasClave: ["abundancia madura", "liderazgo financiero", "seguridad", "emprendimiento exitoso", "legado"],
    derecho: "Éxito material consolidado, liderazgo con sentido práctico y la capacidad de construir imperios duraderos. El Rey de Oros ha convertido sus sueños en realidades tangibles. Es generoso con sus recursos y protege lo que ha construido. Puede representar la madurez financiera o a un mentor con esas cualidades.",
    invertido: "Avaricia, materialismo que aplasta lo espiritual, obsesión con el status o fracaso financiero por malas decisiones.",
    simbolismo: "Un rey en su trono adornado con uvas y toros sostiene un pentáculo y un cetro. Sus pies reposan sobre la tierra. Castillos a los lados. Vides trepan su trono. Es la riqueza encarnada: concreta, sensual y poderosa."
  }

];

// Índice para búsqueda rápida por id
export const CARTAS_POR_ID = Object.fromEntries(CARTAS.map(c => [c.id, c]));

// Filtro por arcana/palo
export function filtrarCartas(filtro, busqueda = "") {
  let resultado = CARTAS;
  if (filtro === "mayor") resultado = CARTAS.filter(c => c.arcana === "mayor");
  else if (filtro !== "all") resultado = CARTAS.filter(c => c.palo === filtro);

  if (busqueda.trim()) {
    const q = busqueda.toLowerCase();
    resultado = resultado.filter(c =>
      c.nombre.toLowerCase().includes(q) ||
      c.ingles.toLowerCase().includes(q) ||
      c.palabrasClave.some(p => p.toLowerCase().includes(q))
    );
  }
  return resultado;
}
