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
    'mock-vote-opt': '15–20 jul',
    'mock-vote-opt-count': '7 votos',
    'mock-vote-base': '22–28 jul',
    'mock-vote-base-count': '4 votos',
    'mock-vote-pes': 'Agosto',
    'mock-vote-pes-count': '1 voto',
    'mock-vote-closes': 'Voto cierra hoy',
    'mock-chat-user': '¿Cena o barbacoa?',
    'mock-chat-ai': 'Barbacoa lidera con 5 votos',
    'compare-chat-header': 'Grupo: Viaje playa 🏖️',
    'compare-chat-1': 'Ana: ¿cuándo vamos?',
    'compare-chat-2': 'Luis: no sé, mirad arriba',
    'compare-chat-3': 'María: ???',
    'compare-chat-4': 'Yo: ¿alguien tiene el Excel?',
    'compare-chat-lost': '… 47 mensajes después …',
    'compare-chat-warn': 'Todo mezclado · fechas perdidas · gastos sin repartir',
    'compare-app-plan': 'Viaje playa 2026',
    'compare-tag-dates': '15–20 jul · 7 votos',
    'compare-tag-cost': '€124/persona',
    'compare-tag-group': '8 confirmados',
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
    'mock-vote-opt': 'Jul 15–20',
    'mock-vote-opt-count': '7 votes',
    'mock-vote-base': 'Jul 22–28',
    'mock-vote-base-count': '4 votes',
    'mock-vote-pes': 'August',
    'mock-vote-pes-count': '1 vote',
    'mock-vote-closes': 'Vote closes today',
    'mock-chat-user': 'Dinner or BBQ?',
    'mock-chat-ai': 'BBQ leads with 5 votes',
    'compare-chat-header': 'Group: Beach trip 🏖️',
    'compare-chat-1': 'Ana: when are we going?',
    'compare-chat-2': 'Luis: idk, scroll up',
    'compare-chat-3': 'María: ???',
    'compare-chat-4': 'Me: does anyone have the spreadsheet?',
    'compare-chat-lost': '… 47 messages later …',
    'compare-chat-warn': 'All mixed up · lost dates · costs not split',
    'compare-app-plan': 'Beach trip 2026',
    'compare-tag-dates': 'Jul 15–20 · 7 votes',
    'compare-tag-cost': '€124/person',
    'compare-tag-group': '8 confirmed',
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
};

let currentLang = localStorage.getItem('planit-lang') || 'es';
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
  currentLang = lang;
  localStorage.setItem('planit-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang]').forEach((el) => {
    const key = el.getAttribute('data-lang');
    const text = translations[lang][key];
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

  const doc = typeof LEGAL_TEXTS !== 'undefined' ? LEGAL_TEXTS[currentLang]?.[type] : null;
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
    appLayer.style.left = pctStr;
    appLayer.style.width = `calc(100% - ${pctStr})`;
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
  const hero = document.querySelector('.hero');
  const spotlight = document.getElementById('hero-spotlight');
  if (!hero || !spotlight || litePerf) return;

  const onMove = throttleRAF((e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    spotlight.style.setProperty('--spot-x', `${x}%`);
    spotlight.style.setProperty('--spot-y', `${y}%`);
  });

  hero.addEventListener('mousemove', onMove, { passive: true });
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
    return Math.round(value).toLocaleString(currentLang === 'es' ? 'es-ES' : 'en-US');
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

  let lastY = window.scrollY;
  let ticking = false;

  const update = () => {
    ticking = false;
    const y = window.scrollY;

    if (header) {
      header.classList.toggle('is-hidden', y > lastY && y > 120);
      lastY = y;
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
