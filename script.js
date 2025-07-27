// Variables
const darkModeToggle = document.createElement('button');
darkModeToggle.textContent = '🌙';
darkModeToggle.setAttribute('aria-label', 'Activar modo oscuro');
darkModeToggle.id = 'darkModeToggle';
document.body.prepend(darkModeToggle);

// Dark mode toggle
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  if (document.body.classList.contains('dark-mode')) {
    darkModeToggle.textContent = '☀️';
    darkModeToggle.setAttribute('aria-label', 'Activar modo claro');
  } else {
    darkModeToggle.textContent = '🌙';
    darkModeToggle.setAttribute('aria-label', 'Activar modo oscuro');
  }
});

// Validación formulario
const form = document.getElementById('formulario-contacto');

form.addEventListener('submit', e => {
  e.preventDefault();
  const nombre = form.nombre.value.trim();
  const email = form.email.value.trim();
  const mensaje = form.mensaje.value.trim();

  if (!nombre || !email || !mensaje) {
    alert('Por favor, completa todos los campos.');
    return;
  }

  // Validación básica email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert('Por favor, ingresa un correo válido.');
    return;
  }

  alert('Mensaje enviado correctamente. ¡Gracias!');
  form.reset();
});

// Animaciones suaves al hacer scroll
const sections = document.querySelectorAll('.section, .hero-content');

const observerOptions = {
  threshold: 0.1,
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
  const header = item.querySelector('h3');
  header.addEventListener('click', () => {
    // Alternar la clase active
    item.classList.toggle('active');
  });
});

const menuToggle = document.getElementById('menu-toggle');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
  navUl.classList.toggle('active');
});

const scrollElements = document.querySelectorAll('.scroll-reveal');

const revealOnScroll = () => {
  const triggerBottom = window.innerHeight * 0.85;

  scrollElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom) {
      el.classList.add('revealed');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

document.getElementById('formulario-contacto').addEventListener('submit', function (e) {
  e.preventDefault();

  let valido = true;

  const campos = ['nombre', 'email', 'mensaje'];

  campos.forEach(campo => {
    const input = document.getElementById(campo);
    const error = input.nextElementSibling;

    if (!input.value.trim()) {
      error.textContent = `Por favor completá el campo ${campo}.`;
      valido = false;
    } else {
      error.textContent = '';
    }

    if (campo === 'email' && input.value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(input.value)) {
        error.textContent = 'Por favor ingresá un email válido.';
        valido = false;
      }
    }
  });

  if (valido) {
    alert('Mensaje enviado correctamente. ¡Gracias por contactarnos!');
    this.reset();
  }
});

const btnDarkMode = document.getElementById('btn-darkmode');

btnDarkMode.addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});
document.getElementById('btn-darkmode').addEventListener('click', () => {
  document.body.classList.toggle('modo-oscuro');
});
