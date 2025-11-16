document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Función para aplicar el tema guardado o el predeterminado
    function applyTheme() {
        const savedTheme = localStorage.getItem('theme') || 'light-mode';
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(savedTheme);
        
        // Cambia el ícono del botón
        if (savedTheme === 'dark-mode') {
            themeToggle.textContent = '☀️'; // Sol para cambiar a modo claro
        } else {
            themeToggle.textContent = '🌙'; // Luna para cambiar a modo oscuro
        }
    }

    // Aplica el tema al cargar la página
    applyTheme();

    // Evento para alternar el tema al hacer clic
    themeToggle.addEventListener('click', () => {
        // Determina el tema actual
        const isDarkMode = body.classList.contains('dark-mode');
        let newTheme;

        if (isDarkMode) {
            newTheme = 'light-mode';
            themeToggle.textContent = '🌙'; // Muestra la luna para ir a oscuro
        } else {
            newTheme = 'dark-mode';
            themeToggle.textContent = '☀️'; // Muestra el sol para ir a claro
        }

        // Actualiza el cuerpo y guarda la preferencia
        body.classList.remove('light-mode', 'dark-mode');
        body.classList.add(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});