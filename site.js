/**
 * Planit launch site
 */
const PLANIT_SITE = {
  formspreeEndpoint: 'https://formspree.io/f/xvgwrynw',
  contactEmail: 'aplicacionplanit@gmail.com',
  supportEmail: 'aplicacionplanit@gmail.com',
};

const COOKIE_CONSENT_KEY = 'planit-cookie-consent';

const translations = {
  es: {
    'nav-features': 'Funciones',
    'nav-process': 'Cómo funciona',
    'nav-compare': 'Por qué',
    'nav-faq': 'FAQ',
    'nav-privacy': 'Privacidad',
    'notify-me': 'Avísame',
    'hero-badge': 'Planit · Planificación social',
    'hero-title': 'Organiza planes con amigos de forma fácil y divertida',
    'hero-title-accent': ['amigos', 'Planit'],
    'hero-subtitle-prefix': 'Coordina',
    'hero-subtitle-suffix': 'sin caos en el grupo. Vota, divide gastos y no te pierdas nada.',
    'hero-rotate-words': ['viajes', 'cenas', 'fiestas'],
    'hero-explore': 'Explorar funciones',
    'hero-coming': 'Próximamente en iOS y Android',
    'hero-vote': 'Votaciones en grupo',
    'notify-me-cta': 'Avísame cuando esté disponible',
    'float-plan': 'Viaje a la playa',
    'float-votes': '7 votos',
    'ui-plan': 'Plan activo',
    'ui-vote': '¿Mejores fechas?',
    'ui-cost': 'Gastos compartidos',
    'ui-friends': 'amigos',
    'ui-balance-delta': 'Viaje playa · confirmado',
    'mock-lodging': 'Alojamiento',
    'mock-transport': 'Transporte',
    'mock-dinner': 'Cena',
    'mock-plan-lodging-meta': '15–20 jul · Casa playa',
    'mock-plan-transport-meta': 'Ida y vuelta · 4 plazas',
    'mock-plan-dinner-meta': 'Sábado 21:00 · Votando',
    'mock-plan-activity': 'Paddle surf',
    'mock-plan-activity-meta': 'Domingo · Ana',
    'mock-plan-done': 'Hecho',
    'mock-plan-open': 'Pendiente',
    'mock-plan-voting': 'En voto',
    'mock-vote-opt': '15–20 jul',
    'mock-vote-opt-count': '7 votos',
    'mock-vote-base': '22–28 jul',
    'mock-vote-base-count': '4 votos',
    'mock-vote-pes': 'Agosto',
    'mock-vote-pes-count': '1 voto',
    'mock-vote-extra': '1–7 ago',
    'mock-vote-extra-count': '2 votos',
    'mock-vote-extra2': 'Septiembre',
    'mock-vote-extra2-count': '0 votos',
    'mock-vote-closes': 'Voto cierra hoy',
    'mock-notif-1-title': 'Encuestas y decisiones',
    'mock-notif-1-body': 'Luis votó en las fechas del plan',
    'mock-notif-2-title': 'Gastos',
    'mock-notif-2-body': 'María añadió un gasto · €48',
    'mock-notif-3-title': 'Actividades',
    'mock-notif-3-body': 'Ana añadió «Paddle surf» al plan',
    'mock-notif-4-title': 'Recordatorio',
    'mock-notif-4-body': 'Fin de semana en la playa es pronto',
    'mock-chat-user': '¿Cena o barbacoa?',
    'mock-chat-ai': 'Barbacoa lidera con 5 votos',
    'mock-act-1': 'Barbacoa en la playa',
    'mock-act-1-votes': '5 votos',
    'mock-act-2': 'Paddle surf',
    'mock-act-2-votes': '3 votos',
    'mock-act-3': 'Paseo al atardecer',
    'mock-act-3-votes': '1 voto',
    'mock-group-1': 'Organizadora',
    'mock-group-2': 'Participante',
    'mock-group-3': 'Participante',
    'compare-chat-header': 'Grupo: Viaje playa 🏖️',
    'compare-chat-1': 'Ana: ¿cuándo vamos?',
    'compare-chat-2': 'Luis: no sé, mirad arriba',
    'compare-chat-3': 'María: ???',
    'compare-chat-4': 'Yo: ¿alguien tiene Planit?',
    'compare-chat-lost': '… 47 mensajes después …',
    'compare-chat-warn': 'Todo mezclado · fechas perdidas · gastos sin repartir',
    'compare-app-plan': 'Fin de semana en la playa',
    'compare-tag-dates': 'Fecha ganadora · 15–20 jul',
    'compare-tag-cost': '€124/persona',
    'compare-tag-group': '8 confirmados',
    'compare-vote-a': '15–20 jul',
    'compare-vote-a-n': '7',
    'compare-vote-b': '22–28 jul',
    'compare-vote-b-n': '4',
    'compare-vote-c': 'Agosto',
    'compare-vote-c-n': '1',
    'viz-tag-dates': 'Fechas',
    'viz-tag-costs': 'Gastos',
    'viz-tag-group': 'Grupo',
    'mq-1': 'Planes y subplanes',
    'mq-2': 'Votaciones',
    'mq-3': 'Dividir gastos',
    'mq-4': 'Recordatorios',
    'mq-5': 'Actividades',
    'mq-6': 'Lista de espera abierta',
    'mq-7': 'Organizador',
    'mq-8': 'Confirmaciones',
    'mq-9': 'iOS y Android',
    'mq-10': 'Sin spam',
    'mq-11': 'Gratis al lanzar',
    'mq-12': 'Con amigos',
    'principle-1': 'Fácil de usar',
    'principle-2': 'Grupo al centro',
    'principle-3': 'Gastos justos',
    'principle-4': 'iOS y Android',
    'stat-1': 'Todo en un solo sitio: fechas, lugares, tareas y gastos del plan.',
    'stat-2-suffix': ' votos',
    'stat-2': 'El grupo decide fechas, actividades y opciones de forma democrática.',
    'stat-3': 'Lanzamiento en App Store y Google Play. Lista de espera abierta.',
    'stat-3-value': 'iOS + Android',
    'section-process': 'Cómo funciona',
    'process-title': 'De la idea al plan, en tres pasos',
    'step-1-title': 'Crea el plan',
    'step-1-desc': 'Define el evento principal y añade subplanes: alojamiento, transporte, actividades y más.',
    'step-2-title': 'Invita y propón',
    'step-2-desc': 'Añade amigos, propone opciones y reparte costes de forma transparente.',
    'step-3-title': 'Vota y confirma',
    'step-3-desc': 'El grupo vota fechas y actividades. Recibe recordatorios y mantén todo al día.',
    'section-features': 'Funciones',
    'features-title': 'Todo lo que necesitas para planear con amigos',
    'features-subtitle': 'Sin hojas de cálculo ni chats interminables. Solo planes claros y divertidos.',
    'f1-title': 'Planes y subplanes',
    'f1-desc': 'Organiza cada detalle, del evento principal a las tareas más pequeñas.',
    'f2-title': 'Dividir gastos',
    'f2-desc': 'Propón actividades y gestiona los gastos de forma transparente y justa.',
    'f3-title': 'Votaciones',
    'f3-desc': 'Deja que el grupo decida fechas, lugares y actividades democráticamente.',
    'f4-title': 'Notificaciones',
    'f4-desc': 'Recordatorios y avisos para que nadie se pierda un plazo ni una actualización.',
    'f5-title': 'Actividades',
    'f5-desc': 'Sugiere ideas y deja que el grupo elija qué hacer en cada momento.',
    'f6-title': 'Grupo conectado',
    'f6-desc': 'Todos ven el mismo plan, las votaciones y el estado de cada tarea.',
    'group-badge': 'En vivo',
    'section-compare': 'Por qué Planit',
    'compare-title': 'Deja el caos del grupo atrás',
    'compare-subtitle': 'Arrastra el control para ver la diferencia entre un chat de grupo y Planit.',
    'compare-left': 'Chat grupal',
    'compare-right': 'Planit',
    'compare-aria': 'Comparar chat grupal y Planit',
    'section-showcase': 'Vista previa',
    'showcase-title': 'Preparando el lanzamiento',
    'showcase-desc': 'Planit llegará pronto a iOS y Android. La forma más fácil de organizar planes con amigos.',
    'showcase-status-badge': 'En marcha',
    'showcase-status-caption': 'Estamos en ello',
    'showcase-ios': 'iOS',
    'showcase-android': 'Android',
    'perk-1': 'Sin hojas de cálculo',
    'perk-2': 'Sin mensajes perdidos',
    'perk-3': 'Todo el grupo alineado',
    'viz-title': 'Viaje verano 2026',
    'viz-pill': 'Confirmado',
    'viz-growth': 'Participantes',
    'viz-growth-val': '8 amigos',
    'viz-horizon': 'Fechas',
    'viz-horizon-val': '15–20 jul',
    'section-faq': 'Preguntas',
    'faq-title': 'Lo que suele preguntarse',
    'faq-q1': '¿Planit es gratis?',
    'faq-a1': 'Sí. Planit será gratuito en su lanzamiento. Apúntate a la lista y te avisaremos cuando esté disponible.',
    'faq-q2': '¿Para qué sirve Planit?',
    'faq-a2': 'Para crear y organizar planes con amigos: viajes, cenas, fiestas, eventos. Puedes votar opciones, dividir gastos y recibir recordatorios.',
    'faq-q3': '¿Cuándo estará disponible?',
    'faq-a3': 'Estamos preparando el lanzamiento en la App Store y Google Play. Apúntate a la lista y te avisaremos cuando Planit esté listo.',
    'faq-q4': '¿Qué datos recoge esta web?',
    'faq-a4': 'Solo tu email si te apuntas a la lista de espera. No vendemos tus datos. Consulta nuestra Política de Privacidad.',
    'cta-title': '¿Quieres ser de los primeros?',
    'cta-subtitle': 'Lista de espera para el lanzamiento en iOS y Android.',
    'cta-perk-1': 'Aviso cuando lancemos Planit',
    'cta-perk-2': 'Sin spam: solo novedades del proyecto',
    'cta-perk-3': 'Puedes darte de baja cuando quieras',
    'cta-placeholder': 'tu@email.com',
    'cta-button': 'Unirme',
    'terms-text':
      'Confirmo que tengo al menos 16 años y que he leído y acepto los <span class="modal-link" data-type="terms">Términos y Condiciones</span>, la <span class="modal-link" data-type="privacy">Política de Privacidad</span> y el <span class="modal-link" data-type="legal">Aviso Legal</span>.',
    'marketing-text':
      'Acepto recibir correos promocionales y novedades sobre Planit (opcional). Puedo darme de baja en cualquier momento.',
    'privacy-policy':
      'Tu correo se usa solo para gestionar la lista de espera. Los envíos se procesan mediante <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="modal-link">Formspree</a>, nuestro proveedor de formularios. No vendemos tus datos. Consulta nuestra <span class="modal-link" data-type="privacy">Política de Privacidad</span>.',
    'disclaimer-short':
      'Planit está en desarrollo. Apuntarse a la lista no garantiza acceso, fecha de lanzamiento ni disponibilidad en tu región.',
    'footer-terms': 'Términos',
    'footer-privacy': 'Privacidad',
    'footer-legal': 'Aviso Legal',
    'footer-cookies': 'Cookies',
    'footer-contact': 'Contacto',
    'footer-disclaimer':
      'Planit es un proyecto en desarrollo de Buildit Labs. Los contenidos de esta web son informativos y no constituyen contrato ni oferta.',
    'footer-rights': 'Todos los derechos reservados.',
    'cookie-text':
      'Usamos almacenamiento esencial (idioma) y servicios de terceros (Formspree, fuentes). Consulta nuestra <span class="modal-link" data-type="cookies">Política de Cookies</span>.',
    'cookie-reject': 'Rechazar no esenciales',
    'cookie-accept': 'Aceptar',
    'form-success': '¡Gracias! Te avisaremos cuando Planit esté disponible.',
    'form-error': 'No se pudo enviar. Escríbenos a aplicacionplanit@gmail.com',
    'form-config': 'Configura Formspree en site.js (formspreeEndpoint).',
  },
  en: {
    'nav-features': 'Features',
    'nav-process': 'How it works',
    'nav-compare': 'Why',
    'nav-faq': 'FAQ',
    'nav-privacy': 'Privacy',
    'notify-me': 'Notify me',
    'hero-badge': 'Planit · Social planning',
    'hero-title': 'Organize plans with friends in a fun and easy way',
    'hero-title-accent': ['friends', 'Planit'],
    'hero-subtitle-prefix': 'Coordinate',
    'hero-subtitle-suffix': 'without group chat chaos. Vote, split costs and never miss a beat.',
    'hero-rotate-words': ['trips', 'dinners', 'parties'],
    'hero-explore': 'Explore features',
    'hero-coming': 'Coming soon on iOS & Android',
    'hero-vote': 'Group voting',
    'notify-me-cta': 'Notify me when it launches',
    'float-plan': 'Beach trip',
    'float-votes': '7 votes',
    'ui-plan': 'Active plan',
    'ui-vote': 'Best dates?',
    'ui-cost': 'Shared costs',
    'ui-friends': 'friends',
    'ui-balance-delta': 'Beach trip · confirmed',
    'mock-lodging': 'Lodging',
    'mock-transport': 'Transport',
    'mock-dinner': 'Dinner',
    'mock-plan-lodging-meta': 'Jul 15–20 · Beach house',
    'mock-plan-transport-meta': 'Round trip · 4 seats',
    'mock-plan-dinner-meta': 'Sat 9:00 PM · Voting',
    'mock-plan-activity': 'Paddle surf',
    'mock-plan-activity-meta': 'Sunday · Ana',
    'mock-plan-done': 'Done',
    'mock-plan-open': 'Pending',
    'mock-plan-voting': 'Voting',
    'mock-vote-opt': 'Jul 15–20',
    'mock-vote-opt-count': '7 votes',
    'mock-vote-base': 'Jul 22–28',
    'mock-vote-base-count': '4 votes',
    'mock-vote-pes': 'August',
    'mock-vote-pes-count': '1 vote',
    'mock-vote-extra': 'Aug 1–7',
    'mock-vote-extra-count': '2 votes',
    'mock-vote-extra2': 'September',
    'mock-vote-extra2-count': '0 votes',
    'mock-vote-closes': 'Vote closes today',
    'mock-notif-1-title': 'Polls & decisions',
    'mock-notif-1-body': 'Luis voted on the plan dates',
    'mock-notif-2-title': 'Expenses',
    'mock-notif-2-body': 'María added an expense · €48',
    'mock-notif-3-title': 'Activities',
    'mock-notif-3-body': 'Ana added “Paddle surf” to the plan',
    'mock-notif-4-title': 'Reminder',
    'mock-notif-4-body': 'Beach weekend is coming up soon',
    'mock-chat-user': 'Dinner or BBQ?',
    'mock-chat-ai': 'BBQ leads with 5 votes',
    'mock-act-1': 'Beach BBQ',
    'mock-act-1-votes': '5 votes',
    'mock-act-2': 'Paddle surf',
    'mock-act-2-votes': '3 votes',
    'mock-act-3': 'Sunset walk',
    'mock-act-3-votes': '1 vote',
    'mock-group-1': 'Organizer',
    'mock-group-2': 'Participant',
    'mock-group-3': 'Participant',
    'compare-chat-header': 'Group: Beach trip 🏖️',
    'compare-chat-1': 'Ana: when are we going?',
    'compare-chat-2': 'Luis: idk, scroll up',
    'compare-chat-3': 'María: ???',
    'compare-chat-4': 'Me: does anyone have Planit?',
    'compare-chat-lost': '… 47 messages later …',
    'compare-chat-warn': 'All mixed up · lost dates · costs not split',
    'compare-app-plan': 'Beach weekend',
    'compare-tag-dates': 'Winning date · Jul 15–20',
    'compare-tag-cost': '€124/person',
    'compare-tag-group': '8 confirmed',
    'compare-vote-a': 'Jul 15–20',
    'compare-vote-a-n': '7',
    'compare-vote-b': 'Jul 22–28',
    'compare-vote-b-n': '4',
    'compare-vote-c': 'August',
    'compare-vote-c-n': '1',
    'viz-tag-dates': 'Dates',
    'viz-tag-costs': 'Costs',
    'viz-tag-group': 'Group',
    'mq-1': 'Plans & sub-plans',
    'mq-2': 'Voting',
    'mq-3': 'Split costs',
    'mq-4': 'Reminders',
    'mq-5': 'Activities',
    'mq-6': 'Waitlist open',
    'mq-7': 'Organizer',
    'mq-8': 'Confirmations',
    'mq-9': 'iOS & Android',
    'mq-10': 'No spam',
    'mq-11': 'Free at launch',
    'mq-12': 'With friends',
    'principle-1': 'Easy to use',
    'principle-2': 'Group-first',
    'principle-3': 'Fair costs',
    'principle-4': 'iOS & Android',
    'stat-1': 'Everything in one place: dates, places, tasks and plan expenses.',
    'stat-2-suffix': ' votes',
    'stat-2': 'The group decides dates, activities and options democratically.',
    'stat-3': 'App Store and Google Play launch coming. Waitlist is open.',
    'stat-3-value': 'iOS + Android',
    'section-process': 'How it works',
    'process-title': 'From idea to plan in three steps',
    'step-1-title': 'Create the plan',
    'step-1-desc': 'Set the main event and add sub-plans: accommodation, transport, activities and more.',
    'step-2-title': 'Invite and propose',
    'step-2-desc': 'Add friends, suggest options and split costs transparently.',
    'step-3-title': 'Vote and confirm',
    'step-3-desc': 'The group votes on dates and activities. Get reminders and stay on track.',
    'section-features': 'Features',
    'features-title': 'Everything you need to plan with friends',
    'features-subtitle': 'No spreadsheets or endless chats. Just clear, fun planning.',
    'f1-title': 'Plans & sub-plans',
    'f1-desc': 'Organize every detail, from the main event to the smallest tasks.',
    'f2-title': 'Split costs',
    'f2-desc': 'Suggest activities and manage expenses transparently and fairly.',
    'f3-title': 'Voting',
    'f3-desc': 'Let the group decide dates, locations and activities democratically.',
    'f4-title': 'Notifications',
    'f4-desc': 'Reminders and alerts so no one misses a deadline or update.',
    'f5-title': 'Activities',
    'f5-desc': 'Suggest ideas and let the group choose what to do at each step.',
    'f6-title': 'Connected group',
    'f6-desc': 'Everyone sees the same plan, votes and task status.',
    'group-badge': 'Live',
    'section-compare': 'Why Planit',
    'compare-title': 'Leave group chat chaos behind',
    'compare-subtitle': 'Drag the control to see the difference between a group chat and Planit.',
    'compare-left': 'Group chat',
    'compare-right': 'Planit',
    'compare-aria': 'Compare group chat and Planit',
    'section-showcase': 'Preview',
    'showcase-title': 'Launch coming soon',
    'showcase-desc': 'Planit is heading to iOS and Android. The easiest way to organize plans with friends.',
    'showcase-status-badge': 'In progress',
    'showcase-status-caption': 'Working on it',
    'showcase-ios': 'iOS',
    'showcase-android': 'Android',
    'perk-1': 'No spreadsheets',
    'perk-2': 'No lost messages',
    'perk-3': 'Whole group aligned',
    'viz-title': 'Summer trip 2026',
    'viz-pill': 'Confirmed',
    'viz-growth': 'Participants',
    'viz-growth-val': '8 friends',
    'viz-horizon': 'Dates',
    'viz-horizon-val': 'Jul 15–20',
    'section-faq': 'Questions',
    'faq-title': 'Common questions',
    'faq-q1': 'Is Planit free?',
    'faq-a1': 'Yes. Planit will be free at launch. Join the waitlist and we will notify you when it is available.',
    'faq-q2': 'What is Planit for?',
    'faq-a2': 'To create and organize plans with friends: trips, dinners, parties, events. Vote on options, split costs and get reminders.',
    'faq-q3': 'When will it be available?',
    'faq-a3': 'We are preparing the App Store and Google Play launch. Join the waitlist and we will notify you when Planit is ready.',
    'faq-q4': 'What data does this site collect?',
    'faq-a4': 'Only your email if you join the waitlist. We do not sell your data. See our Privacy Policy.',
    'cta-title': 'Want to be among the first?',
    'cta-subtitle': 'Join the waitlist for the iOS and Android launch.',
    'cta-perk-1': 'Launch notification when Planit is ready',
    'cta-perk-2': 'No spam: Planit updates only',
    'cta-perk-3': 'Unsubscribe anytime',
    'cta-placeholder': 'you@email.com',
    'cta-button': 'Join waitlist',
    'terms-text':
      'I confirm I am at least 16 years old and I have read and accept the <span class="modal-link" data-type="terms">Terms & Conditions</span>, the <span class="modal-link" data-type="privacy">Privacy Policy</span> and the <span class="modal-link" data-type="legal">Legal Notice</span>.',
    'marketing-text':
      'I agree to receive promotional emails and Planit updates (optional). I can unsubscribe at any time.',
    'privacy-policy':
      'Your email is used only to manage the waitlist. Submissions are processed by <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="modal-link">Formspree</a>, our form provider. We do not sell your data. See our <span class="modal-link" data-type="privacy">Privacy Policy</span>.',
    'disclaimer-short':
      'Planit is in development. Joining the waitlist does not guarantee access, launch date, or availability in your region.',
    'footer-terms': 'Terms',
    'footer-privacy': 'Privacy',
    'footer-legal': 'Legal Notice',
    'footer-cookies': 'Cookies',
    'footer-contact': 'Contact',
    'footer-disclaimer':
      'Planit is a project in development by Buildit Labs. Site content is for information only and is not a contract or offer.',
    'footer-rights': 'All rights reserved.',
    'cookie-text':
      'We use essential storage (language preference) and third-party services (Formspree, fonts). See our <span class="modal-link" data-type="cookies">Cookie Policy</span>.',
    'cookie-reject': 'Reject non-essential',
    'cookie-accept': 'Accept',
    'form-success': 'Thanks! We will notify you when Planit is available.',
    'form-error': 'Could not submit. Email us at aplicacionplanit@gmail.com',
    'form-config': 'Configure Formspree in site.js (formspreeEndpoint).',
  },
  fr: {
    'nav-features': 'Fonctionnalités',
    'nav-process': 'Comment ça marche',
    'nav-compare': 'Pourquoi',
    'nav-faq': 'FAQ',
    'nav-privacy': 'Confidentialité',
    'notify-me': 'Prévenez-moi',
    'hero-badge': 'Planit · Organisation sociale',
    'hero-title': 'Organisez des plans entre amis facilement et avec plaisir',
    'hero-title-accent': ['amis', 'Planit'],
    'hero-subtitle-prefix': 'Coordonnez',
    'hero-subtitle-suffix': 'sans le chaos du groupe. Votez, partagez les frais et ne ratez rien.',
    'hero-rotate-words': ['voyages', 'dîners', 'fêtes'],
    'hero-explore': 'Découvrir les fonctions',
    'hero-coming': 'Bientôt sur iOS et Android',
    'hero-vote': 'Votes en groupe',
    'notify-me-cta': 'Prévenez-moi au lancement',
    'float-plan': 'Week-end plage',
    'float-votes': '7 votes',
    'ui-plan': 'Plan actif',
    'ui-vote': 'Meilleures dates ?',
    'ui-cost': 'Frais partagés',
    'ui-friends': 'amis',
    'ui-balance-delta': 'Week-end plage · confirmé',
    'mock-lodging': 'Hébergement',
    'mock-transport': 'Transport',
    'mock-dinner': 'Dîner',
    'mock-plan-lodging-meta': '15–20 juil. · Maison plage',
    'mock-plan-transport-meta': 'Aller-retour · 4 places',
    'mock-plan-dinner-meta': 'Sam. 21:00 · Vote',
    'mock-plan-activity': 'Paddle surf',
    'mock-plan-activity-meta': 'Sunday · Ana',
    'mock-plan-done': 'Fait',
    'mock-plan-open': 'En attente',
    'mock-plan-voting': 'En vote',
    'mock-vote-opt': '15–20 juil.',
    'mock-vote-opt-count': '7 votes',
    'mock-vote-base': '22–28 juil.',
    'mock-vote-base-count': '4 votes',
    'mock-vote-pes': 'Août',
    'mock-vote-pes-count': '1 vote',
    'mock-vote-extra': '1–7 août',
    'mock-vote-extra-count': '2 votes',
    'mock-vote-extra2': 'Septembre',
    'mock-vote-extra2-count': '0 votes',
    'mock-vote-closes': 'Vote clos aujourd’hui',
    'mock-notif-1-title': 'Sondages et décisions',
    'mock-notif-1-body': 'Luis a voté pour les dates du plan',
    'mock-notif-2-title': 'Dépenses',
    'mock-notif-2-body': 'María a ajouté une dépense · 48 €',
    'mock-notif-3-title': 'Activités',
    'mock-notif-3-body': 'Ana a ajouté « Paddle surf » au plan',
    'mock-notif-4-title': 'Rappel',
    'mock-notif-4-body': 'Le week-end plage approche',
    'mock-chat-user': 'Dîner ou barbecue ?',
    'mock-chat-ai': 'Le barbecue mène avec 5 votes',
    'mock-act-1': 'Barbecue à la plage',
    'mock-act-1-votes': '5 votes',
    'mock-act-2': 'Paddle surf',
    'mock-act-2-votes': '3 votes',
    'mock-act-3': 'Promenade au coucher du soleil',
    'mock-act-3-votes': '1 vote',
    'mock-group-1': 'Organisatrice',
    'mock-group-2': 'Participante',
    'mock-group-3': 'Participante',
    'compare-chat-header': 'Groupe : Week-end plage 🏖️',
    'compare-chat-1': 'Ana : on part quand ?',
    'compare-chat-2': 'Luis : aucune idée, remontez',
    'compare-chat-3': 'María : ???',
    'compare-chat-4': 'Moi : quelqu’un a Planit ?',
    'compare-chat-lost': '… 47 messages plus tard …',
    'compare-chat-warn': 'Tout mélangé · dates perdues · frais non partagés',
    'compare-app-plan': 'Week-end à la plage',
    'compare-tag-dates': 'Date gagnante · 15–20 juil.',
    'compare-tag-cost': '124 €/personne',
    'compare-tag-group': '8 confirmés',
    'compare-vote-a': '15–20 juil.',
    'compare-vote-a-n': '7',
    'compare-vote-b': '22–28 juil.',
    'compare-vote-b-n': '4',
    'compare-vote-c': 'Août',
    'compare-vote-c-n': '1',
    'viz-tag-dates': 'Dates',
    'viz-tag-costs': 'Frais',
    'viz-tag-group': 'Groupe',
    'mq-1': 'Plans et sous-plans',
    'mq-2': 'Votes',
    'mq-3': 'Partage des frais',
    'mq-4': 'Rappels',
    'mq-5': 'Activités',
    'mq-6': 'Liste d’attente ouverte',
    'mq-7': 'Organisateur',
    'mq-8': 'Confirmations',
    'mq-9': 'iOS et Android',
    'mq-10': 'Sans spam',
    'mq-11': 'Gratuit au lancement',
    'mq-12': 'Entre amis',
    'principle-1': 'Simple à utiliser',
    'principle-2': 'Le groupe d’abord',
    'principle-3': 'Frais équitables',
    'principle-4': 'iOS et Android',
    'stat-1': 'Tout au même endroit : dates, lieux, tâches et dépenses du plan.',
    'stat-2-suffix': ' votes',
    'stat-2': 'Le groupe décide des dates, activités et options démocratiquement.',
    'stat-3': 'Lancement App Store et Google Play. Liste d’attente ouverte.',
    'stat-3-value': 'iOS + Android',
    'section-process': 'Comment ça marche',
    'process-title': 'De l’idée au plan en trois étapes',
    'step-1-title': 'Créez le plan',
    'step-1-desc': 'Définissez l’événement principal et ajoutez des sous-plans : hébergement, transport, activités et plus.',
    'step-2-title': 'Invitez et proposez',
    'step-2-desc': 'Ajoutez des amis, proposez des options et partagez les frais en toute transparence.',
    'step-3-title': 'Votez et confirmez',
    'step-3-desc': 'Le groupe vote sur les dates et activités. Recevez des rappels et restez à jour.',
    'section-features': 'Fonctionnalités',
    'features-title': 'Tout pour planifier entre amis',
    'features-subtitle': 'Sans tableurs ni chats sans fin. Juste des plans clairs et fun.',
    'f1-title': 'Plans et sous-plans',
    'f1-desc': 'Organisez chaque détail, de l’événement principal aux plus petites tâches.',
    'f2-title': 'Partage des frais',
    'f2-desc': 'Proposez des activités et gérez les dépenses de façon transparente et juste.',
    'f3-title': 'Votes',
    'f3-desc': 'Laissez le groupe décider des dates, lieux et activités démocratiquement.',
    'f4-title': 'Notifications',
    'f4-desc': 'Rappels et alertes pour que personne ne rate une échéance ou une mise à jour.',
    'f5-title': 'Activités',
    'f5-desc': 'Suggérez des idées et laissez le groupe choisir quoi faire.',
    'f6-title': 'Groupe connecté',
    'f6-desc': 'Tout le monde voit le même plan, les votes et le statut des tâches.',
    'group-badge': 'En direct',
    'section-compare': 'Pourquoi Planit',
    'compare-title': 'Laissez le chaos du groupe derrière vous',
    'compare-subtitle': 'Faites glisser le contrôle pour voir la différence entre un chat de groupe et Planit.',
    'compare-left': 'Chat de groupe',
    'compare-right': 'Planit',
    'compare-aria': 'Comparer chat de groupe et Planit',
    'section-showcase': 'Aperçu',
    'showcase-title': 'Lancement en préparation',
    'showcase-desc': 'Planit arrive bientôt sur iOS et Android. La façon la plus simple d’organiser des plans entre amis.',
    'showcase-status-badge': 'En cours',
    'showcase-status-caption': 'On y travaille',
    'showcase-ios': 'iOS',
    'showcase-android': 'Android',
    'perk-1': 'Sans tableurs',
    'perk-2': 'Sans messages perdus',
    'perk-3': 'Tout le groupe aligné',
    'viz-title': 'Voyage été 2026',
    'viz-pill': 'Confirmé',
    'viz-growth': 'Participants',
    'viz-growth-val': '8 amis',
    'viz-horizon': 'Dates',
    'viz-horizon-val': '15–20 juil.',
    'section-faq': 'Questions',
    'faq-title': 'Questions fréquentes',
    'faq-q1': 'Planit est-il gratuit ?',
    'faq-a1': 'Oui. Planit sera gratuit au lancement. Rejoignez la liste et nous vous préviendrons quand il sera disponible.',
    'faq-q2': 'À quoi sert Planit ?',
    'faq-a2': 'À créer et organiser des plans entre amis : voyages, dîners, fêtes, événements. Votez, partagez les frais et recevez des rappels.',
    'faq-q3': 'Quand sera-t-il disponible ?',
    'faq-a3': 'Nous préparons le lancement sur l’App Store et Google Play. Rejoignez la liste et nous vous préviendrons.',
    'faq-q4': 'Quelles données ce site collecte-t-il ?',
    'faq-a4': 'Uniquement votre e-mail si vous rejoignez la liste d’attente. Nous ne vendons pas vos données. Voir la Politique de confidentialité.',
    'cta-title': 'Envie d’être parmi les premiers ?',
    'cta-subtitle': 'Liste d’attente pour le lancement iOS et Android.',
    'cta-perk-1': 'Alerte au lancement de Planit',
    'cta-perk-2': 'Sans spam : uniquement les actus Planit',
    'cta-perk-3': 'Désinscription à tout moment',
    'cta-placeholder': 'vous@email.com',
    'cta-button': 'Rejoindre',
    'terms-text': 'Je confirme avoir au moins 16 ans et avoir lu et accepté les <span class="modal-link" data-type="terms">Conditions générales</span>, la <span class="modal-link" data-type="privacy">Politique de confidentialité</span> et les <span class="modal-link" data-type="legal">Mentions légales</span>.',
    'marketing-text': 'J’accepte de recevoir des e-mails promotionnels et des actus Planit (optionnel). Je peux me désinscrire à tout moment.',
    'privacy-policy': 'Votre e-mail sert uniquement à gérer la liste d’attente. Les envois passent par <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="modal-link">Formspree</a>, notre prestataire de formulaires. Nous ne vendons pas vos données. Voir notre <span class="modal-link" data-type="privacy">Politique de confidentialité</span>.',
    'disclaimer-short': 'Planit est en développement. S’inscrire à la liste ne garantit ni accès, ni date de lancement, ni disponibilité dans votre région.',
    'footer-terms': 'Conditions',
    'footer-privacy': 'Confidentialité',
    'footer-legal': 'Mentions légales',
    'footer-cookies': 'Cookies',
    'footer-contact': 'Contact',
    'footer-disclaimer': 'Planit est un projet en développement de Buildit Labs. Le contenu de ce site est informatif et ne constitue ni contrat ni offre.',
    'footer-rights': 'Tous droits réservés.',
    'cookie-text': 'Nous utilisons un stockage essentiel (langue) et des services tiers (Formspree, polices). Voir notre <span class="modal-link" data-type="cookies">Politique de cookies</span>.',
    'cookie-reject': 'Refuser le non essentiel',
    'cookie-accept': 'Accepter',
    'form-success': 'Merci ! Nous vous préviendrons quand Planit sera disponible.',
    'form-error': 'Envoi impossible. Écrivez-nous à aplicacionplanit@gmail.com',
    'form-config': 'Configurez Formspree dans site.js (formspreeEndpoint).',
  },
  de: {
    'nav-features': 'Funktionen',
    'nav-process': 'So funktioniert’s',
    'nav-compare': 'Warum',
    'nav-faq': 'FAQ',
    'nav-privacy': 'Datenschutz',
    'notify-me': 'Benachrichtigen',
    'hero-badge': 'Planit · Social Planning',
    'hero-title': 'Organisiere Pläne mit Freunden leicht und mit Spaß',
    'hero-title-accent': ['Freunden', 'Planit'],
    'hero-subtitle-prefix': 'Koordiniere',
    'hero-subtitle-suffix': 'ohne Gruppenchat-Chaos. Abstimmen, Kosten teilen und nichts verpassen.',
    'hero-rotate-words': ['Reisen', 'Dinner', 'Partys'],
    'hero-explore': 'Funktionen entdecken',
    'hero-coming': 'Bald für iOS und Android',
    'hero-vote': 'Gruppenabstimmungen',
    'notify-me-cta': 'Benachrichtigen, wenn’s startet',
    'float-plan': 'Strandtrip',
    'float-votes': '7 Stimmen',
    'ui-plan': 'Aktiver Plan',
    'ui-vote': 'Beste Daten?',
    'ui-cost': 'Geteilte Kosten',
    'ui-friends': 'Freunde',
    'ui-balance-delta': 'Strandtrip · bestätigt',
    'mock-lodging': 'Unterkunft',
    'mock-transport': 'Transport',
    'mock-dinner': 'Abendessen',
    'mock-plan-lodging-meta': '15.–20. Jul · Strandhaus',
    'mock-plan-transport-meta': 'Hin und zurück · 4 Plätze',
    'mock-plan-dinner-meta': 'Sa 21:00 · Abstimmung',
    'mock-plan-activity': 'Paddle surf',
    'mock-plan-activity-meta': 'Sunday · Ana',
    'mock-plan-done': 'Erledigt',
    'mock-plan-open': 'Offen',
    'mock-plan-voting': 'Abstimmung',
    'mock-vote-opt': '15.–20. Jul',
    'mock-vote-opt-count': '7 Stimmen',
    'mock-vote-base': '22.–28. Jul',
    'mock-vote-base-count': '4 Stimmen',
    'mock-vote-pes': 'August',
    'mock-vote-pes-count': '1 Stimme',
    'mock-vote-extra': '1.–7. Aug',
    'mock-vote-extra-count': '2 Stimmen',
    'mock-vote-extra2': 'September',
    'mock-vote-extra2-count': '0 Stimmen',
    'mock-vote-closes': 'Abstimmung endet heute',
    'mock-notif-1-title': 'Umfragen & Entscheidungen',
    'mock-notif-1-body': 'Luis hat über die Plandaten abgestimmt',
    'mock-notif-2-title': 'Ausgaben',
    'mock-notif-2-body': 'María hat eine Ausgabe hinzugefügt · 48 €',
    'mock-notif-3-title': 'Aktivitäten',
    'mock-notif-3-body': 'Ana hat „Paddle Surf“ zum Plan hinzugefügt',
    'mock-notif-4-title': 'Erinnerung',
    'mock-notif-4-body': 'Das Strandwochenende steht bald an',
    'mock-chat-user': 'Dinner oder BBQ?',
    'mock-chat-ai': 'BBQ führt mit 5 Stimmen',
    'mock-act-1': 'Strand-BBQ',
    'mock-act-1-votes': '5 Stimmen',
    'mock-act-2': 'Paddle Surf',
    'mock-act-2-votes': '3 Stimmen',
    'mock-act-3': 'Spaziergang bei Sonnenuntergang',
    'mock-act-3-votes': '1 Stimme',
    'mock-group-1': 'Organisatorin',
    'mock-group-2': 'Teilnehmerin',
    'mock-group-3': 'Teilnehmerin',
    'compare-chat-header': 'Gruppe: Strandtrip 🏖️',
    'compare-chat-1': 'Ana: wann fahren wir?',
    'compare-chat-2': 'Luis: keine Ahnung, scrollt hoch',
    'compare-chat-3': 'María: ???',
    'compare-chat-4': 'Ich: hat jemand Planit?',
    'compare-chat-lost': '… 47 Nachrichten später …',
    'compare-chat-warn': 'Alles durcheinander · Daten verloren · Kosten nicht geteilt',
    'compare-app-plan': 'Strandwochenende',
    'compare-tag-dates': 'Gewinnerdatum · 15.–20. Jul',
    'compare-tag-cost': '124 €/Person',
    'compare-tag-group': '8 bestätigt',
    'compare-vote-a': '15.–20. Jul',
    'compare-vote-a-n': '7',
    'compare-vote-b': '22.–28. Jul',
    'compare-vote-b-n': '4',
    'compare-vote-c': 'August',
    'compare-vote-c-n': '1',
    'viz-tag-dates': 'Daten',
    'viz-tag-costs': 'Kosten',
    'viz-tag-group': 'Gruppe',
    'mq-1': 'Pläne & Unterpläne',
    'mq-2': 'Abstimmungen',
    'mq-3': 'Kosten teilen',
    'mq-4': 'Erinnerungen',
    'mq-5': 'Aktivitäten',
    'mq-6': 'Warteliste offen',
    'mq-7': 'Organisator',
    'mq-8': 'Bestätigungen',
    'mq-9': 'iOS & Android',
    'mq-10': 'Kein Spam',
    'mq-11': 'Kostenlos zum Launch',
    'mq-12': 'Mit Freunden',
    'principle-1': 'Einfach zu nutzen',
    'principle-2': 'Gruppe zuerst',
    'principle-3': 'Faire Kosten',
    'principle-4': 'iOS & Android',
    'stat-1': 'Alles an einem Ort: Daten, Orte, Tasks und Ausgaben des Plans.',
    'stat-2-suffix': ' Stimmen',
    'stat-2': 'Die Gruppe entscheidet demokratisch über Daten, Aktivitäten und Optionen.',
    'stat-3': 'Launch in App Store und Google Play. Warteliste ist offen.',
    'stat-3-value': 'iOS + Android',
    'section-process': 'So funktioniert’s',
    'process-title': 'Von der Idee zum Plan in drei Schritten',
    'step-1-title': 'Plan erstellen',
    'step-1-desc': 'Lege das Hauptevent fest und füge Unterpläne hinzu: Unterkunft, Transport, Aktivitäten und mehr.',
    'step-2-title': 'Einladen und vorschlagen',
    'step-2-desc': 'Füge Freunde hinzu, schlage Optionen vor und teile Kosten transparent.',
    'step-3-title': 'Abstimmen und bestätigen',
    'step-3-desc': 'Die Gruppe stimmt über Daten und Aktivitäten ab. Erhalte Erinnerungen und bleib auf Kurs.',
    'section-features': 'Funktionen',
    'features-title': 'Alles, was du zum Planen mit Freunden brauchst',
    'features-subtitle': 'Keine Tabellen, keine endlosen Chats. Klar und mit Spaß planen.',
    'f1-title': 'Pläne & Unterpläne',
    'f1-desc': 'Organisiere jedes Detail – vom Hauptevent bis zu kleinen Tasks.',
    'f2-title': 'Kosten teilen',
    'f2-desc': 'Schlage Aktivitäten vor und verwalte Ausgaben transparent und fair.',
    'f3-title': 'Abstimmungen',
    'f3-desc': 'Lass die Gruppe demokratisch über Daten, Orte und Aktivitäten entscheiden.',
    'f4-title': 'Benachrichtigungen',
    'f4-desc': 'Erinnerungen und Hinweise, damit niemand eine Frist oder ein Update verpasst.',
    'f5-title': 'Aktivitäten',
    'f5-desc': 'Schlage Ideen vor und lass die Gruppe wählen, was ihr macht.',
    'f6-title': 'Verbundene Gruppe',
    'f6-desc': 'Alle sehen denselben Plan, Abstimmungen und den Status jeder Aufgabe.',
    'group-badge': 'Live',
    'section-compare': 'Warum Planit',
    'compare-title': 'Lass Gruppenchat-Chaos hinter dir',
    'compare-subtitle': 'Zieh den Regler, um den Unterschied zwischen Gruppenchat und Planit zu sehen.',
    'compare-left': 'Gruppenchat',
    'compare-right': 'Planit',
    'compare-aria': 'Gruppenchat und Planit vergleichen',
    'section-showcase': 'Vorschau',
    'showcase-title': 'Launch in Vorbereitung',
    'showcase-desc': 'Planit kommt bald auf iOS und Android. Der einfachste Weg, Pläne mit Freunden zu organisieren.',
    'showcase-status-badge': 'In Arbeit',
    'showcase-status-caption': 'Wir sind dran',
    'showcase-ios': 'iOS',
    'showcase-android': 'Android',
    'perk-1': 'Keine Tabellen',
    'perk-2': 'Keine verlorenen Nachrichten',
    'perk-3': 'Ganze Gruppe aligned',
    'viz-title': 'Sommertrip 2026',
    'viz-pill': 'Bestätigt',
    'viz-growth': 'Teilnehmer',
    'viz-growth-val': '8 Freunde',
    'viz-horizon': 'Daten',
    'viz-horizon-val': '15.–20. Jul',
    'section-faq': 'Fragen',
    'faq-title': 'Häufige Fragen',
    'faq-q1': 'Ist Planit kostenlos?',
    'faq-a1': 'Ja. Planit ist zum Launch kostenlos. Trag dich in die Warteliste ein und wir benachrichtigen dich.',
    'faq-q2': 'Wofür ist Planit?',
    'faq-a2': 'Um Pläne mit Freunden zu organisieren: Reisen, Dinner, Partys, Events. Abstimmen, Kosten teilen und Erinnerungen erhalten.',
    'faq-q3': 'Wann ist es verfügbar?',
    'faq-a3': 'Wir bereiten den Launch in App Store und Google Play vor. Trag dich ein und wir sagen Bescheid.',
    'faq-q4': 'Welche Daten erfasst diese Website?',
    'faq-a4': 'Nur deine E-Mail, wenn du der Warteliste beitrittst. Wir verkaufen deine Daten nicht. Siehe Datenschutzrichtlinie.',
    'cta-title': 'Willst du unter den Ersten sein?',
    'cta-subtitle': 'Warteliste für den iOS- und Android-Launch.',
    'cta-perk-1': 'Benachrichtigung beim Planit-Launch',
    'cta-perk-2': 'Kein Spam: nur Planit-News',
    'cta-perk-3': 'Jederzeit abmelden',
    'cta-placeholder': 'du@email.com',
    'cta-button': 'Beitreten',
    'terms-text': 'Ich bestätige, dass ich mindestens 16 Jahre alt bin und die <span class="modal-link" data-type="terms">AGB</span>, die <span class="modal-link" data-type="privacy">Datenschutzrichtlinie</span> und den <span class="modal-link" data-type="legal">Rechtshinweis</span> gelesen und akzeptiert habe.',
    'marketing-text': 'Ich stimme zu, Werbe-E-Mails und Planit-Updates zu erhalten (optional). Abmeldung jederzeit möglich.',
    'privacy-policy': 'Deine E-Mail wird nur für die Warteliste genutzt. Übermittlungen laufen über <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="modal-link">Formspree</a>. Wir verkaufen deine Daten nicht. Siehe unsere <span class="modal-link" data-type="privacy">Datenschutzrichtlinie</span>.',
    'disclaimer-short': 'Planit ist in Entwicklung. Die Warteliste garantiert keinen Zugang, kein Launch-Datum und keine Verfügbarkeit in deiner Region.',
    'footer-terms': 'AGB',
    'footer-privacy': 'Datenschutz',
    'footer-legal': 'Rechtliches',
    'footer-cookies': 'Cookies',
    'footer-contact': 'Kontakt',
    'footer-disclaimer': 'Planit ist ein Projekt von Buildit Labs in Entwicklung. Inhalte dieser Website sind informativ und kein Vertrag oder Angebot.',
    'footer-rights': 'Alle Rechte vorbehalten.',
    'cookie-text': 'Wir nutzen essenziellen Speicher (Sprache) und Drittanbieter (Formspree, Schriften). Siehe unsere <span class="modal-link" data-type="cookies">Cookie-Richtlinie</span>.',
    'cookie-reject': 'Nicht essenziell ablehnen',
    'cookie-accept': 'Akzeptieren',
    'form-success': 'Danke! Wir benachrichtigen dich, wenn Planit verfügbar ist.',
    'form-error': 'Senden fehlgeschlagen. Schreib an aplicacionplanit@gmail.com',
    'form-config': 'Formspree in site.js konfigurieren (formspreeEndpoint).',
  },
  pt: {
    'nav-features': 'Funções',
    'nav-process': 'Como funciona',
    'nav-compare': 'Porquê',
    'nav-faq': 'FAQ',
    'nav-privacy': 'Privacidade',
    'notify-me': 'Avisem-me',
    'hero-badge': 'Planit · Planeamento social',
    'hero-title': 'Organiza planos com amigos de forma fácil e divertida',
    'hero-title-accent': ['amigos', 'Planit'],
    'hero-subtitle-prefix': 'Coordena',
    'hero-subtitle-suffix': 'sem o caos do grupo. Vota, divide despesas e não percas nada.',
    'hero-rotate-words': ['viagens', 'jantares', 'festas'],
    'hero-explore': 'Explorar funções',
    'hero-coming': 'Em breve no iOS e Android',
    'hero-vote': 'Votações em grupo',
    'notify-me-cta': 'Avisem-me quando estiver disponível',
    'float-plan': 'Fim de semana na praia',
    'float-votes': '7 votos',
    'ui-plan': 'Plano ativo',
    'ui-vote': 'Melhores datas?',
    'ui-cost': 'Despesas partilhadas',
    'ui-friends': 'amigos',
    'ui-balance-delta': 'Praia · confirmado',
    'mock-lodging': 'Alojamento',
    'mock-transport': 'Transporte',
    'mock-dinner': 'Jantar',
    'mock-plan-lodging-meta': '15–20 jul · Casa de praia',
    'mock-plan-transport-meta': 'Ida e volta · 4 lugares',
    'mock-plan-dinner-meta': 'Sáb 21:00 · A votar',
    'mock-plan-activity': 'Paddle surf',
    'mock-plan-activity-meta': 'Sunday · Ana',
    'mock-plan-done': 'Feito',
    'mock-plan-open': 'Pendente',
    'mock-plan-voting': 'Em voto',
    'mock-vote-opt': '15–20 jul',
    'mock-vote-opt-count': '7 votos',
    'mock-vote-base': '22–28 jul',
    'mock-vote-base-count': '4 votos',
    'mock-vote-pes': 'Agosto',
    'mock-vote-pes-count': '1 voto',
    'mock-vote-extra': '1–7 ago',
    'mock-vote-extra-count': '2 votos',
    'mock-vote-extra2': 'Setembro',
    'mock-vote-extra2-count': '0 votos',
    'mock-vote-closes': 'Voto fecha hoje',
    'mock-notif-1-title': 'Sondagens e decisões',
    'mock-notif-1-body': 'Luis votou nas datas do plano',
    'mock-notif-2-title': 'Despesas',
    'mock-notif-2-body': 'María adicionou uma despesa · €48',
    'mock-notif-3-title': 'Atividades',
    'mock-notif-3-body': 'Ana adicionou «Paddle surf» ao plano',
    'mock-notif-4-title': 'Lembrete',
    'mock-notif-4-body': 'O fim de semana na praia está perto',
    'mock-chat-user': 'Jantar ou churrasco?',
    'mock-chat-ai': 'O churrasco lidera com 5 votos',
    'mock-act-1': 'Churrasco na praia',
    'mock-act-1-votes': '5 votos',
    'mock-act-2': 'Paddle surf',
    'mock-act-2-votes': '3 votos',
    'mock-act-3': 'Passeio ao pôr do sol',
    'mock-act-3-votes': '1 voto',
    'mock-group-1': 'Organizadora',
    'mock-group-2': 'Participante',
    'mock-group-3': 'Participante',
    'compare-chat-header': 'Grupo: Viagem à praia 🏖️',
    'compare-chat-1': 'Ana: quando vamos?',
    'compare-chat-2': 'Luis: não sei, vejam acima',
    'compare-chat-3': 'María: ???',
    'compare-chat-4': 'Eu: alguém tem Planit?',
    'compare-chat-lost': '… 47 mensagens depois …',
    'compare-chat-warn': 'Tudo misturado · datas perdidas · despesas por dividir',
    'compare-app-plan': 'Fim de semana na praia',
    'compare-tag-dates': 'Data vencedora · 15–20 jul',
    'compare-tag-cost': '€124/pessoa',
    'compare-tag-group': '8 confirmados',
    'compare-vote-a': '15–20 jul',
    'compare-vote-a-n': '7',
    'compare-vote-b': '22–28 jul',
    'compare-vote-b-n': '4',
    'compare-vote-c': 'Agosto',
    'compare-vote-c-n': '1',
    'viz-tag-dates': 'Datas',
    'viz-tag-costs': 'Despesas',
    'viz-tag-group': 'Grupo',
    'mq-1': 'Planos e subplanos',
    'mq-2': 'Votações',
    'mq-3': 'Dividir despesas',
    'mq-4': 'Lembretes',
    'mq-5': 'Atividades',
    'mq-6': 'Lista de espera aberta',
    'mq-7': 'Organizador',
    'mq-8': 'Confirmações',
    'mq-9': 'iOS e Android',
    'mq-10': 'Sem spam',
    'mq-11': 'Grátis no lançamento',
    'mq-12': 'Com amigos',
    'principle-1': 'Fácil de usar',
    'principle-2': 'Grupo em primeiro',
    'principle-3': 'Despesas justas',
    'principle-4': 'iOS & Android',
    'stat-1': 'Tudo num só sítio: datas, locais, tarefas e despesas do plano.',
    'stat-2-suffix': ' votos',
    'stat-2': 'O grupo decide datas, atividades e opções de forma democrática.',
    'stat-3': 'Lançamento na App Store e Google Play. Lista de espera aberta.',
    'stat-3-value': 'iOS + Android',
    'section-process': 'Como funciona',
    'process-title': 'Da ideia ao plano em três passos',
    'step-1-title': 'Cria o plano',
    'step-1-desc': 'Define o evento principal e adiciona subplanos: alojamento, transporte, atividades e mais.',
    'step-2-title': 'Convida e propõe',
    'step-2-desc': 'Adiciona amigos, propõe opções e divide custos de forma transparente.',
    'step-3-title': 'Vota e confirma',
    'step-3-desc': 'O grupo vota datas e atividades. Recebe lembretes e mantém tudo em dia.',
    'section-features': 'Funções',
    'features-title': 'Tudo o que precisas para planear com amigos',
    'features-subtitle': 'Sem folhas de cálculo nem chats intermináveis. Só planos claros e divertidos.',
    'f1-title': 'Planos e subplanos',
    'f1-desc': 'Organiza cada detalhe, do evento principal às tarefas mais pequenas.',
    'f2-title': 'Dividir despesas',
    'f2-desc': 'Propõe atividades e gere despesas de forma transparente e justa.',
    'f3-title': 'Votações',
    'f3-desc': 'Deixa o grupo decidir datas, locais e atividades democraticamente.',
    'f4-title': 'Notificações',
    'f4-desc': 'Lembretes e avisos para ninguém perder um prazo ou atualização.',
    'f5-title': 'Atividades',
    'f5-desc': 'Sugere ideias e deixa o grupo escolher o que fazer.',
    'f6-title': 'Grupo ligado',
    'f6-desc': 'Todos veem o mesmo plano, votações e estado de cada tarefa.',
    'group-badge': 'Ao vivo',
    'section-compare': 'Porquê Planit',
    'compare-title': 'Deixa o caos do grupo para trás',
    'compare-subtitle': 'Arrasta o controlo para ver a diferença entre um chat de grupo e o Planit.',
    'compare-left': 'Chat de grupo',
    'compare-right': 'Planit',
    'compare-aria': 'Comparar chat de grupo e Planit',
    'section-showcase': 'Pré-visualização',
    'showcase-title': 'A preparar o lançamento',
    'showcase-desc': 'O Planit chega em breve ao iOS e Android. A forma mais fácil de organizar planos com amigos.',
    'showcase-status-badge': 'Em curso',
    'showcase-status-caption': 'Estamos nisso',
    'showcase-ios': 'iOS',
    'showcase-android': 'Android',
    'perk-1': 'Sem folhas de cálculo',
    'perk-2': 'Sem mensagens perdidas',
    'perk-3': 'Todo o grupo alinhado',
    'viz-title': 'Viagem de verão 2026',
    'viz-pill': 'Confirmado',
    'viz-growth': 'Participantes',
    'viz-growth-val': '8 amigos',
    'viz-horizon': 'Datas',
    'viz-horizon-val': '15–20 jul',
    'section-faq': 'Perguntas',
    'faq-title': 'Perguntas frequentes',
    'faq-q1': 'O Planit é grátis?',
    'faq-a1': 'Sim. O Planit será gratuito no lançamento. Junta-te à lista e avisamos-te quando estiver disponível.',
    'faq-q2': 'Para que serve o Planit?',
    'faq-a2': 'Para criar e organizar planos com amigos: viagens, jantares, festas, eventos. Vota, divide despesas e recebe lembretes.',
    'faq-q3': 'Quando estará disponível?',
    'faq-a3': 'Estamos a preparar o lançamento na App Store e Google Play. Junta-te à lista e avisamos-te.',
    'faq-q4': 'Que dados recolhe este site?',
    'faq-a4': 'Apenas o teu email se te juntares à lista de espera. Não vendemos os teus dados. Consulta a Política de Privacidade.',
    'cta-title': 'Queres ser dos primeiros?',
    'cta-subtitle': 'Lista de espera para o lançamento em iOS e Android.',
    'cta-perk-1': 'Aviso quando o Planit lançar',
    'cta-perk-2': 'Sem spam: só novidades do Planit',
    'cta-perk-3': 'Podes cancelar quando quiseres',
    'cta-placeholder': 'tu@email.com',
    'cta-button': 'Juntar-me',
    'terms-text': 'Confirmo que tenho pelo menos 16 anos e que li e aceito os <span class="modal-link" data-type="terms">Termos e Condições</span>, a <span class="modal-link" data-type="privacy">Política de Privacidade</span> e o <span class="modal-link" data-type="legal">Aviso Legal</span>.',
    'marketing-text': 'Aceito receber emails promocionais e novidades do Planit (opcional). Posso cancelar a qualquer momento.',
    'privacy-policy': 'O teu email é usado só para gerir a lista de espera. Os envios são processados pela <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="modal-link">Formspree</a>. Não vendemos os teus dados. Consulta a nossa <span class="modal-link" data-type="privacy">Política de Privacidade</span>.',
    'disclaimer-short': 'O Planit está em desenvolvimento. Entrar na lista não garante acesso, data de lançamento nem disponibilidade na tua região.',
    'footer-terms': 'Termos',
    'footer-privacy': 'Privacidade',
    'footer-legal': 'Aviso Legal',
    'footer-cookies': 'Cookies',
    'footer-contact': 'Contacto',
    'footer-disclaimer': 'O Planit é um projeto em desenvolvimento da Buildit Labs. O conteúdo deste site é informativo e não constitui contrato nem oferta.',
    'footer-rights': 'Todos os direitos reservados.',
    'cookie-text': 'Usamos armazenamento essencial (idioma) e serviços de terceiros (Formspree, fontes). Consulta a nossa <span class="modal-link" data-type="cookies">Política de Cookies</span>.',
    'cookie-reject': 'Recusar não essenciais',
    'cookie-accept': 'Aceitar',
    'form-success': 'Obrigado! Avisamos-te quando o Planit estiver disponível.',
    'form-error': 'Não foi possível enviar. Escreve para aplicacionplanit@gmail.com',
    'form-config': 'Configura o Formspree em site.js (formspreeEndpoint).',
  },
  it: {
    'nav-features': 'Funzioni',
    'nav-process': 'Come funziona',
    'nav-compare': 'Perché',
    'nav-faq': 'FAQ',
    'nav-privacy': 'Privacy',
    'notify-me': 'Avvisami',
    'hero-badge': 'Planit · Pianificazione social',
    'hero-title': 'Organizza piani con gli amici in modo facile e divertente',
    'hero-title-accent': ['amici', 'Planit'],
    'hero-subtitle-prefix': 'Coordina',
    'hero-subtitle-suffix': 'senza il caos del gruppo. Vota, dividi le spese e non perderti nulla.',
    'hero-rotate-words': ['viaggi', 'cene', 'feste'],
    'hero-explore': 'Esplora le funzioni',
    'hero-coming': 'Presto su iOS e Android',
    'hero-vote': 'Votazioni di gruppo',
    'notify-me-cta': 'Avvisami al lancio',
    'float-plan': 'Weekend al mare',
    'float-votes': '7 voti',
    'ui-plan': 'Piano attivo',
    'ui-vote': 'Date migliori?',
    'ui-cost': 'Spese condivise',
    'ui-friends': 'amici',
    'ui-balance-delta': 'Weekend mare · confermato',
    'mock-lodging': 'Alloggio',
    'mock-transport': 'Trasporto',
    'mock-dinner': 'Cena',
    'mock-plan-lodging-meta': '15–20 lug · Casa al mare',
    'mock-plan-transport-meta': 'Andata e ritorno · 4 posti',
    'mock-plan-dinner-meta': 'Sab 21:00 · In voto',
    'mock-plan-activity': 'Paddle surf',
    'mock-plan-activity-meta': 'Sunday · Ana',
    'mock-plan-done': 'Fatto',
    'mock-plan-open': 'In attesa',
    'mock-plan-voting': 'In voto',
    'mock-vote-opt': '15–20 lug',
    'mock-vote-opt-count': '7 voti',
    'mock-vote-base': '22–28 lug',
    'mock-vote-base-count': '4 voti',
    'mock-vote-pes': 'Agosto',
    'mock-vote-pes-count': '1 voto',
    'mock-vote-extra': '1–7 ago',
    'mock-vote-extra-count': '2 voti',
    'mock-vote-extra2': 'Settembre',
    'mock-vote-extra2-count': '0 voti',
    'mock-vote-closes': 'Voto chiude oggi',
    'mock-notif-1-title': 'Sondaggi e decisioni',
    'mock-notif-1-body': 'Luis ha votato sulle date del piano',
    'mock-notif-2-title': 'Spese',
    'mock-notif-2-body': 'María ha aggiunto una spesa · €48',
    'mock-notif-3-title': 'Attività',
    'mock-notif-3-body': 'Ana ha aggiunto «Paddle surf» al piano',
    'mock-notif-4-title': 'Promemoria',
    'mock-notif-4-body': 'Il weekend al mare è vicino',
    'mock-chat-user': 'Cena o barbecue?',
    'mock-chat-ai': 'Il barbecue guida con 5 voti',
    'mock-act-1': 'Barbecue in spiaggia',
    'mock-act-1-votes': '5 voti',
    'mock-act-2': 'Paddle surf',
    'mock-act-2-votes': '3 voti',
    'mock-act-3': 'Passeggiata al tramonto',
    'mock-act-3-votes': '1 voto',
    'mock-group-1': 'Organizzatrice',
    'mock-group-2': 'Partecipante',
    'mock-group-3': 'Partecipante',
    'compare-chat-header': 'Gruppo: Viaggio al mare 🏖️',
    'compare-chat-1': 'Ana: quando partiamo?',
    'compare-chat-2': 'Luis: non so, guardate sopra',
    'compare-chat-3': 'María: ???',
    'compare-chat-4': 'Io: qualcuno ha Planit?',
    'compare-chat-lost': '… 47 messaggi dopo …',
    'compare-chat-warn': 'Tutto mescolato · date perse · spese non divise',
    'compare-app-plan': 'Weekend al mare',
    'compare-tag-dates': 'Data vincente · 15–20 lug',
    'compare-tag-cost': '€124/persona',
    'compare-tag-group': '8 confermati',
    'compare-vote-a': '15–20 lug',
    'compare-vote-a-n': '7',
    'compare-vote-b': '22–28 lug',
    'compare-vote-b-n': '4',
    'compare-vote-c': 'Agosto',
    'compare-vote-c-n': '1',
    'viz-tag-dates': 'Date',
    'viz-tag-costs': 'Spese',
    'viz-tag-group': 'Gruppo',
    'mq-1': 'Piani e sottopiani',
    'mq-2': 'Votazioni',
    'mq-3': 'Dividere le spese',
    'mq-4': 'Promemoria',
    'mq-5': 'Attività',
    'mq-6': 'Lista d’attesa aperta',
    'mq-7': 'Organizzatore',
    'mq-8': 'Conferme',
    'mq-9': 'iOS e Android',
    'mq-10': 'Niente spam',
    'mq-11': 'Gratis al lancio',
    'mq-12': 'Con gli amici',
    'principle-1': 'Facile da usare',
    'principle-2': 'Il gruppo al centro',
    'principle-3': 'Spese eque',
    'principle-4': 'iOS & Android',
    'stat-1': 'Tutto in un unico posto: date, luoghi, task e spese del piano.',
    'stat-2-suffix': ' voti',
    'stat-2': 'Il gruppo decide date, attività e opzioni in modo democratico.',
    'stat-3': 'Lancio su App Store e Google Play. Lista d’attesa aperta.',
    'stat-3-value': 'iOS + Android',
    'section-process': 'Come funziona',
    'process-title': 'Dall’idea al piano in tre passi',
    'step-1-title': 'Crea il piano',
    'step-1-desc': 'Definisci l’evento principale e aggiungi sottopiani: alloggio, trasporto, attività e altro.',
    'step-2-title': 'Invita e proponi',
    'step-2-desc': 'Aggiungi amici, proponi opzioni e dividi i costi in modo trasparente.',
    'step-3-title': 'Vota e conferma',
    'step-3-desc': 'Il gruppo vota date e attività. Ricevi promemoria e resta aggiornato.',
    'section-features': 'Funzioni',
    'features-title': 'Tutto ciò che ti serve per pianificare con gli amici',
    'features-subtitle': 'Niente fogli di calcolo né chat infinite. Solo piani chiari e divertenti.',
    'f1-title': 'Piani e sottopiani',
    'f1-desc': 'Organizza ogni dettaglio, dall’evento principale ai task più piccoli.',
    'f2-title': 'Dividere le spese',
    'f2-desc': 'Proponi attività e gestisci le spese in modo trasparente ed equo.',
    'f3-title': 'Votazioni',
    'f3-desc': 'Lascia che il gruppo decida date, luoghi e attività democraticamente.',
    'f4-title': 'Notifiche',
    'f4-desc': 'Promemoria e avvisi così nessuno perde una scadenza o un aggiornamento.',
    'f5-title': 'Attività',
    'f5-desc': 'Suggerisci idee e lascia che il gruppo scelga cosa fare.',
    'f6-title': 'Gruppo connesso',
    'f6-desc': 'Tutti vedono lo stesso piano, le votazioni e lo stato di ogni task.',
    'group-badge': 'Live',
    'section-compare': 'Perché Planit',
    'compare-title': 'Lascia dietro il caos del gruppo',
    'compare-subtitle': 'Trascina il controllo per vedere la differenza tra una chat di gruppo e Planit.',
    'compare-left': 'Chat di gruppo',
    'compare-right': 'Planit',
    'compare-aria': 'Confronta chat di gruppo e Planit',
    'section-showcase': 'Anteprima',
    'showcase-title': 'Lancio in preparazione',
    'showcase-desc': 'Planit arriverà presto su iOS e Android. Il modo più semplice per organizzare piani con gli amici.',
    'showcase-status-badge': 'In corso',
    'showcase-status-caption': 'Ci stiamo lavorando',
    'showcase-ios': 'iOS',
    'showcase-android': 'Android',
    'perk-1': 'Niente fogli di calcolo',
    'perk-2': 'Niente messaggi persi',
    'perk-3': 'Tutto il gruppo allineato',
    'viz-title': 'Viaggio estate 2026',
    'viz-pill': 'Confermato',
    'viz-growth': 'Partecipanti',
    'viz-growth-val': '8 amici',
    'viz-horizon': 'Date',
    'viz-horizon-val': '15–20 lug',
    'section-faq': 'Domande',
    'faq-title': 'Domande frequenti',
    'faq-q1': 'Planit è gratis?',
    'faq-a1': 'Sì. Planit sarà gratuito al lancio. Unisciti alla lista e ti avviseremo quando sarà disponibile.',
    'faq-q2': 'A cosa serve Planit?',
    'faq-a2': 'Per creare e organizzare piani con gli amici: viaggi, cene, feste, eventi. Vota, dividi le spese e ricevi promemoria.',
    'faq-q3': 'Quando sarà disponibile?',
    'faq-a3': 'Stiamo preparando il lancio su App Store e Google Play. Unisciti alla lista e ti avviseremo.',
    'faq-q4': 'Quali dati raccoglie questo sito?',
    'faq-a4': 'Solo la tua email se ti unisci alla lista d’attesa. Non vendiamo i tuoi dati. Consulta l’Informativa sulla privacy.',
    'cta-title': 'Vuoi essere tra i primi?',
    'cta-subtitle': 'Lista d’attesa per il lancio su iOS e Android.',
    'cta-perk-1': 'Avviso al lancio di Planit',
    'cta-perk-2': 'Niente spam: solo novità Planit',
    'cta-perk-3': 'Cancellati quando vuoi',
    'cta-placeholder': 'tu@email.com',
    'cta-button': 'Iscriviti',
    'terms-text': 'Confermo di avere almeno 16 anni e di aver letto e accettato i <span class="modal-link" data-type="terms">Termini e Condizioni</span>, l’<span class="modal-link" data-type="privacy">Informativa sulla privacy</span> e l’<span class="modal-link" data-type="legal">Avviso legale</span>.',
    'marketing-text': 'Accetto di ricevere email promozionali e novità su Planit (opzionale). Posso cancellarmi in qualsiasi momento.',
    'privacy-policy': 'La tua email è usata solo per gestire la lista d’attesa. Gli invii passano da <a href="https://formspree.io" target="_blank" rel="noopener noreferrer" class="modal-link">Formspree</a>. Non vendiamo i tuoi dati. Consulta la nostra <span class="modal-link" data-type="privacy">Informativa sulla privacy</span>.',
    'disclaimer-short': 'Planit è in sviluppo. Iscriversi alla lista non garantisce accesso, data di lancio né disponibilità nella tua regione.',
    'footer-terms': 'Termini',
    'footer-privacy': 'Privacy',
    'footer-legal': 'Avviso legale',
    'footer-cookies': 'Cookie',
    'footer-contact': 'Contatto',
    'footer-disclaimer': 'Planit è un progetto in sviluppo di Buildit Labs. I contenuti di questo sito sono informativi e non costituiscono contratto né offerta.',
    'footer-rights': 'Tutti i diritti riservati.',
    'cookie-text': 'Usiamo archiviazione essenziale (lingua) e servizi di terzi (Formspree, font). Consulta la nostra <span class="modal-link" data-type="cookies">Cookie Policy</span>.',
    'cookie-reject': 'Rifiuta non essenziali',
    'cookie-accept': 'Accetta',
    'form-success': 'Grazie! Ti avviseremo quando Planit sarà disponibile.',
    'form-error': 'Invio non riuscito. Scrivici a aplicacionplanit@gmail.com',
    'form-config': 'Configura Formspree in site.js (formspreeEndpoint).',
  },
};

const SUPPORTED_LANGS = ['en', 'es', 'fr', 'de', 'pt', 'it'];
const LANG_LOCALES = {
  en: 'en-US',
  es: 'es-ES',
  fr: 'fr-FR',
  de: 'de-DE',
  pt: 'pt-PT',
  it: 'it-IT',
};

/** Prefer browser language (es→Spanish, en-GB→English, …). Default English. No GPS needed. */
function detectBrowserLanguage() {
  const candidates = [...(navigator.languages || []), navigator.language || ''];
  for (const raw of candidates) {
    const tag = String(raw || '').toLowerCase();
    if (!tag) continue;
    const primary = tag.split('-')[0];
    if (SUPPORTED_LANGS.includes(primary)) return primary;
  }
  return 'en';
}

function resolveInitialLanguage() {
  const saved = localStorage.getItem('planit-lang');
  if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
  return detectBrowserLanguage();
}

let currentLang = resolveInitialLanguage();
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const coarsePointer = window.matchMedia('(hover: none), (pointer: coarse)').matches;
const connection = navigator.connection;
const slowConnection =
  Boolean(connection?.saveData) || /(^2g$)|(^3g$)/.test(connection?.effectiveType || '');
const litePerf = prefersReducedMotion || coarsePointer || slowConnection;

let legalTextsPromise = null;

function loadLegalTexts() {
  if (typeof LEGAL_TEXTS !== 'undefined') return Promise.resolve();
  if (!legalTextsPromise) {
    legalTextsPromise = new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = './legal.js';
      script.async = true;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
    });
  }
  return legalTextsPromise;
}

function scheduleWhenIdle(fn, timeout = 1800) {
  if ('requestIdleCallback' in window) {
    requestIdleCallback(fn, { timeout });
  } else {
    setTimeout(fn, 120);
  }
}

function throttleRAF(fn) {
  let ticking = false;
  let lastArgs = null;
  return (...args) => {
    lastArgs = args;
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      fn(...lastArgs);
      ticking = false;
    });
  };
}

function renderHeroTitle(lang) {
  const el = document.getElementById('hero-title');
  if (!el) return;

  const text = translations[lang]['hero-title'];
  const accents = translations[lang]['hero-title-accent'] || [];
  const words = text.split(' ');

  el.innerHTML = words
    .map((word, i) => {
      const clean = word.replace(/[.,!?]/g, '');
      const cls = accents.some((a) => clean.toLowerCase() === a.toLowerCase()) ? 'word accent' : 'word';
      return `<span class="${cls}" style="transition-delay:${i * 0.07}s">${word}</span>`;
    })
    .join(' ');

  requestAnimationFrame(() => el.classList.add('is-visible'));
}

function updateRotatingWidth(word) {
  const wrap = document.querySelector('.rotating-wrap');
  if (!wrap || !word) return;

  const measure = document.createElement('span');
  measure.className = 'rotating-word';
  measure.style.cssText = 'position:absolute;visibility:hidden;white-space:nowrap;pointer-events:none';
  measure.textContent = word;
  wrap.appendChild(measure);
  wrap.style.minWidth = `${measure.offsetWidth}px`;
  wrap.removeChild(measure);
}

function setLanguage(lang) {
  currentLang = SUPPORTED_LANGS.includes(lang) ? lang : 'en';
  lang = currentLang;
  localStorage.setItem('planit-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang]').forEach((el) => {
    const key = el.getAttribute('data-lang');
    const text = translations[lang]?.[key];
    if (!text) return;
    if (el.tagName === 'INPUT') {
      el.setAttribute('aria-label', text);
    } else {
      el.innerHTML = text;
    }
  });

  document.querySelectorAll('[data-lang-aria]').forEach((el) => {
    const key = el.getAttribute('data-lang-aria');
    if (translations[lang][key]) el.setAttribute('aria-label', translations[lang][key]);
  });

  document.querySelectorAll('[data-lang-placeholder]').forEach((el) => {
    const key = el.getAttribute('data-lang-placeholder');
    if (translations[lang][key]) el.placeholder = translations[lang][key];
  });

  renderHeroTitle(lang);
  initRotatingText(lang);

  const sw = document.getElementById('language-switcher');
  if (sw) sw.value = lang;
  const consentLang = document.getElementById('consent-language-field');
  if (consentLang) consentLang.value = lang;
  bindModalLinks();
}

async function openLegalModal(type) {
  try {
    await loadLegalTexts();
  } catch {
    return;
  }

  const doc = typeof LEGAL_TEXTS !== 'undefined' ? (LEGAL_TEXTS[currentLang]?.[type] || LEGAL_TEXTS.en?.[type]) : null;
  if (!doc) return;
  const modal = document.getElementById('modal');
  document.getElementById('modal-title').textContent = doc.title;
  document.getElementById('modal-content').innerHTML = doc.content;
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  bindModalLinks();
}

function bindModalLinks() {
  document.querySelectorAll('.modal-link').forEach((link) => {
    link.replaceWith(link.cloneNode(true));
  });
  document.querySelectorAll('.modal-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openLegalModal(link.getAttribute('data-type'));
    });
  });
  document.querySelectorAll('[data-type]').forEach((btn) => {
    if (!btn.classList.contains('modal-link') && btn.tagName === 'BUTTON') {
      btn.onclick = (e) => {
        e.preventDefault();
        openLegalModal(btn.getAttribute('data-type'));
      };
    }
  });
}

function closeModal() {
  const modal = document.getElementById('modal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

let rotatingTimer = null;

function initRotatingText(lang = currentLang) {
  const el = document.getElementById('rotating-word');
  if (!el) return;

  const words = translations[lang]['hero-rotate-words'] || [];
  if (!words.length) return;

  if (rotatingTimer) clearInterval(rotatingTimer);

  let index = Math.max(0, words.indexOf(el.textContent.trim()));
  if (index < 0) index = 0;
  el.textContent = words[index];
  el.classList.remove('is-exit', 'is-enter');
  updateRotatingWidth(words[index]);

  if (prefersReducedMotion || words.length < 2) return;

  rotatingTimer = setInterval(() => {
    const next = (index + 1) % words.length;
    el.classList.add('is-exit');
    setTimeout(() => {
      el.textContent = words[next];
      updateRotatingWidth(words[next]);
      el.classList.remove('is-exit');
      el.classList.add('is-enter');
      requestAnimationFrame(() => {
        el.classList.remove('is-enter');
      });
      index = next;
    }, 280);
  }, 2800);
}

function initCompareSlider() {
  const wrap = document.getElementById('compare-wrap');
  const range = document.getElementById('compare-range');
  const appLayer = document.getElementById('compare-app-layer');
  const handle = document.getElementById('compare-handle');
  if (!wrap || !appLayer || !handle) return;

  const MIN = 8;
  const MAX = 92;
  let dragging = false;

  const clamp = (val) => Math.min(MAX, Math.max(MIN, Number(val)));

  const paint = (pct) => {
    const val = clamp(pct);
    const pctStr = `${val}%`;
    const rounded = String(Math.round(val));
    wrap.style.setProperty('--compare-pct', pctStr);
    appLayer.style.left = '';
    appLayer.style.right = '';
    appLayer.style.width = '';
    handle.style.left = pctStr;
    wrap.setAttribute('aria-valuenow', rounded);
    if (range) range.value = rounded;
  };

  const paintFromX = (clientX) => {
    const rect = wrap.getBoundingClientRect();
    if (!rect.width) return;
    paint(((clientX - rect.left) / rect.width) * 100);
  };

  const onPointerDown = (e) => {
    if (e.button > 0) return;
    e.preventDefault();
    dragging = true;
    wrap.setPointerCapture(e.pointerId);
    paintFromX(e.clientX);
  };

  const onPointerMove = (e) => {
    if (!dragging || !wrap.hasPointerCapture(e.pointerId)) return;
    e.preventDefault();
    paintFromX(e.clientX);
  };

  const onPointerEnd = (e) => {
    if (wrap.hasPointerCapture(e.pointerId)) {
      wrap.releasePointerCapture(e.pointerId);
    }
    dragging = false;
  };

  wrap.addEventListener('pointerdown', onPointerDown);
  wrap.addEventListener('pointermove', onPointerMove);
  wrap.addEventListener('pointerup', onPointerEnd);
  wrap.addEventListener('pointercancel', onPointerEnd);

  wrap.addEventListener('keydown', (e) => {
    const step = e.shiftKey ? 8 : 4;
    const current = Number(range?.value ?? wrap.getAttribute('aria-valuenow') ?? 50);
    if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      paint(current - step);
    } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      paint(current + step);
    }
  });

  range?.addEventListener('input', (e) => paint(e.target.value));
  paint(range?.value ?? 50);
}

function initHeroSpotlight() {
  /* Mouse-follow spotlight removed */
}

function initSpotlightCards() {
  if (litePerf) return;

  const onMove = throttleRAF((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty('--card-x', `${x}%`);
    card.style.setProperty('--card-y', `${y}%`);
  });

  document.querySelectorAll('.spotlight-card').forEach((card) => {
    card.addEventListener('mousemove', onMove, { passive: true });
  });
}

function initScrollReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;

  if (prefersReducedMotion) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  items.forEach((el) => observer.observe(el));
}

function formatCount(value, el) {
  if (el.id === 'balance-counter') {
    return Math.round(value).toLocaleString(LANG_LOCALES[currentLang] || 'en-US');
  }
  return String(Math.round(value));
}

function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const animate = (el) => {
    const target = parseInt(el.getAttribute('data-count'), 10);
    if (prefersReducedMotion) {
      el.textContent = formatCount(target, el);
      return;
    }
    const duration = el.id === 'balance-counter' ? 1800 : 1200;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatCount(target * eased, el);
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animate(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function initScrollEffects() {
  const header = document.getElementById('site-header');
  const bar = document.getElementById('scroll-progress');
  const links = document.querySelectorAll('.header-nav a[href^="#"], .mobile-nav a[href^="#"]');

  const sections = [...links]
    .map((link) => {
      const id = link.getAttribute('href')?.slice(1);
      const section = id ? document.getElementById(id) : null;
      return section ? { id, section } : null;
    })
    .filter(Boolean);

  let ticking = false;
  let hideTimer = null;
  const SHOW_DELAY_MS = 180;

  const showHeader = () => {
    if (header) header.classList.remove('is-hidden');
  };

  const update = () => {
    ticking = false;
    const y = window.scrollY;

    if (header) {
      // Always use the light scrolled chrome (preferred over hero-transparent style)
      header.classList.add('is-scrolled');

      // Hide only while scrolling; show again when scroll stops.
      // Keep visible at the very top of the page.
      if (y <= 56) {
        header.classList.remove('is-hidden');
        if (hideTimer) {
          clearTimeout(hideTimer);
          hideTimer = null;
        }
      } else {
        header.classList.add('is-hidden');
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(showHeader, SHOW_DELAY_MS);
      }
    }

    if (bar) {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = `${max > 0 ? (y / max) * 100 : 0}%`;
    }

    if (sections.length) {
      const offset = window.innerHeight * 0.35;
      let current = sections[0].id;
      sections.forEach(({ id, section }) => {
        if (section.getBoundingClientRect().top <= offset) current = id;
      });
      links.forEach((link) => {
        link.classList.toggle('is-active', link.getAttribute('href') === `#${current}`);
      });
    }
  };

  const onScroll = () => {
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(update);
    }
  };

  update();
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

function initMarqueePause() {
  if (prefersReducedMotion) return;

  const sections = document.querySelectorAll('.marquee-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle('is-paused', !entry.isIntersecting);
      });
    },
    { rootMargin: '50px 0px' }
  );

  sections.forEach((el) => observer.observe(el));
}

function initMobileNav() {
  const toggle = document.getElementById('mobile-nav-toggle');
  const nav = document.getElementById('mobile-nav');
  if (!toggle || !nav) return;

  const close = () => {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  };

  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', close));
  document.addEventListener('click', (e) => {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) close();
  });
}

function initPhoneTilt() {
  const phone = document.getElementById('phone-frame');
  const device = document.querySelector('.hero-device');
  if (!phone || !device || litePerf) return;

  const onMove = throttleRAF((e) => {
    const rect = device.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    phone.style.transform = `perspective(1200px) rotateY(${-8 + x * 10}deg) rotateX(${4 - y * 8}deg) translateY(-4px)`;
  });

  device.addEventListener('mousemove', onMove, { passive: true });
  device.addEventListener('mouseleave', () => {
    phone.style.transform = 'perspective(1200px) rotateY(-8deg) rotateX(4deg)';
  });
}

function initCookieBanner() {
  const banner = document.getElementById('cookie-banner');
  const accept = document.getElementById('cookie-accept');
  const reject = document.getElementById('cookie-reject');
  if (!banner) return;

  if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
    banner.classList.remove('hidden');
  }

  const hide = () => banner.classList.add('hidden');

  accept?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'accepted');
    hide();
  });
  reject?.addEventListener('click', () => {
    localStorage.setItem(COOKIE_CONSENT_KEY, 'rejected');
    hide();
  });
}

function initWaitlistForm() {
  const form = document.getElementById('waitlist-form');
  const status = document.getElementById('form-status');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const termsChecked = document.getElementById('terms')?.checked;
    document.getElementById('privacy-accepted-field').value = termsChecked ? 'yes' : 'no';
    document.getElementById('marketing-consent-field').value = document.getElementById('marketing')?.checked
      ? 'yes'
      : 'no';
    document.getElementById('consent-language-field').value = currentLang;

    let tsField = form.querySelector('input[name="consent_timestamp"]');
    if (!tsField) {
      tsField = document.createElement('input');
      tsField.type = 'hidden';
      tsField.name = 'consent_timestamp';
      form.appendChild(tsField);
    }
    tsField.value = new Date().toISOString();

    const endpoint = PLANIT_SITE.formspreeEndpoint;
    if (!endpoint || endpoint.includes('YOUR_FORM_ID')) {
      status.textContent = translations[currentLang]['form-config'];
      status.style.color = '#fff7ed';
      status.classList.remove('hidden');
      return;
    }

    const fd = new FormData(form);
    fd.append('_subject', '[Planit] Waitlist');
    if (!fd.get('product')) fd.append('product', 'Planit');

    status.classList.remove('hidden');
    status.textContent = '…';
    status.style.color = 'rgba(255, 255, 255, 0.85)';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        body: fd,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        status.textContent = translations[currentLang]['form-success'];
        status.style.color = '#ecfdf5';
        form.reset();
        document.getElementById('privacy-accepted-field').value = 'no';
        document.getElementById('marketing-consent-field').value = 'no';
      } else {
        throw new Error('bad response');
      }
    } catch {
      status.textContent = translations[currentLang]['form-error'];
      status.style.color = '#fecdd3';
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  if (litePerf) document.documentElement.classList.add('perf-lite');

  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());

  const sw = document.getElementById('language-switcher');
  if (sw) sw.addEventListener('change', (e) => setLanguage(e.target.value));

  document.getElementById('modal-close')?.addEventListener('click', closeModal);
  document.getElementById('modal')?.addEventListener('click', (e) => {
    if (e.target.id === 'modal') closeModal();
  });

  setLanguage(currentLang);
  initScrollEffects();
  initMobileNav();
  initCookieBanner();
  initWaitlistForm();
  bindModalLinks();

  scheduleWhenIdle(() => {
    initScrollReveal();
    initCounters();
    initMarqueePause();
    initCompareSlider();
  });

  if (!litePerf) {
    scheduleWhenIdle(() => {
      initHeroSpotlight();
      initSpotlightCards();
      initPhoneTilt();
    }, 2400);
  }
});
