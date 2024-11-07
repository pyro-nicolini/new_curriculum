document.addEventListener('DOMContentLoaded', () => {
  const sidebar = document.querySelector('.sidebar');
  const navLinks = document.querySelectorAll('.nave a');
  const sections = document.querySelectorAll('section');
  const toggleButton = document.querySelector('.modo');

  // Función para actualizar el estado de la barra lateral
  function updateSidebarActiveState() {
      const activeLink = Array.from(navLinks).some(link => link.classList.contains('active'));
      if (activeLink) {
          sidebar.classList.add('active');
      } else {
          sidebar.classList.remove('active'); // Si no hay enlaces activos, puedes decidir eliminar la clase 'active'
      }
  }

  // Mantener el clic en los enlaces de navegación dentro del sidebar
  navLinks.forEach(link => {
      link.addEventListener('click', (event) => {
          event.preventDefault(); // Previene el comportamiento predeterminado del enlace
          navLinks.forEach(item => item.classList.remove('active')); // Remover la clase 'active' de todos los enlaces
          link.classList.add('active'); // Añadir la clase 'active' al enlace clicado

          // Desplazamiento suave a la sección correspondiente
          const targetId = link.getAttribute('href'); // Obtiene el ID del objetivo del enlace
          const targetSection = document.querySelector(targetId); // Selecciona la sección objetivo
          if (targetSection) {
              targetSection.scrollIntoView({ behavior: 'smooth' }); // Desplazamiento suave
          }

          // Actualiza el estado de la barra lateral
          updateSidebarActiveState();
      });
  });

  // Inicialmente activa la barra lateral
  updateSidebarActiveState();

  // Configura el Observador de Intersección
  const observerOptions = {
      root: null, // Usa el viewport como raíz
      rootMargin: '0px',
      threshold: 0.5 // Se activa cuando el 50% de la sección está visible
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          const id = entry.target.id; // Obtiene el ID de la sección
          const navLink = document.querySelector(`.nav a[href="#${id}"]`); // Selecciona el enlace correspondiente

          if (entry.isIntersecting) {
              // Si la sección es visible, activa el enlace
              navLinks.forEach(link => link.classList.remove('active')); // Remueve la clase 'active' de todos los enlaces
              navLink.classList.add('active'); // Activa el enlace correspondiente
          }
      });

      // Actualiza el estado de la barra lateral
      updateSidebarActiveState();
  }, observerOptions);

  // Observa cada sección
  sections.forEach(section => {
      observer.observe(section);
  });

  // Modo nocturno por defecto
  if (!document.body.classList.contains('night-mode')) {
    document.body.classList.add('night-mode'); // Iniciar en modo oscuro
  }

  // Cambiar entre modo diurno y nocturno
  toggleButton.addEventListener('click', function() {
    // Alternar entre las clases 'day-mode' y 'night-mode'
    document.body.classList.toggle('night-mode');
    document.body.classList.toggle('day-mode');

    // Cambiar el ícono del botón según el modo
    if (document.body.classList.contains('night-mode')) {
      toggleButton.textContent = '🌙'; // Ícono de luna para modo oscuro
    } else {
      toggleButton.textContent = '☀️'; // Ícono de sol para modo claro
    }
  });
});

