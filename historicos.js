// ==================== FUNCIONES DE MODAL ====================

// FUNCIÓN PARA ABRIR EL MODAL
function openModal(img) {
    const modal = document.querySelector('.modal-overlay');
    const modalImg = document.querySelector('.modal-image');
    const modalCaption = document.querySelector('.modal-caption');
    
    modal.classList.add('active');
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
    
    // Prevenir scroll del body
    document.body.style.overflow = 'hidden';
}

// FUNCIÓN PARA CERRAR EL MODAL
function closeModal() {
    const modal = document.querySelector('.modal-overlay');
    modal.classList.remove('active');
    
    // Restaurar scroll del body
    document.body.style.overflow = 'auto';
}

// CERRAR MODAL CON ESC
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// ==================== FUNCIONES DE ACORDEÓN ====================

// Función para alternar una sección individual
function toggleSection(header) {
    const content = header.nextElementSibling;
    const isCollapsed = content.classList.contains('collapsed');
    
    if (isCollapsed) {
        // Expandir
        content.classList.remove('collapsed');
        header.classList.remove('collapsed');
    } else {
        // Colapsar
        content.classList.add('collapsed');
        header.classList.add('collapsed');  
    }
}

// Función para expandir/colapsar todas las secciones
function toggleAllSections() {
    const contents = document.querySelectorAll('.categoria-content');
    const headers = document.querySelectorAll('.categoria-header');
    
    // Verificar si todas están colapsadas
    const allCollapsed = Array.from(contents).every(content => 
        content.classList.contains('collapsed')
    );
    
    if (allCollapsed) {
        // Si todas están colapsadas, expandir todas
        contents.forEach(content => content.classList.remove('collapsed'));
        headers.forEach(header => header.classList.remove('collapsed'));
    } else {
        // Si alguna está expandida, colapsar todas
        contents.forEach(content => content.classList.add('collapsed'));
        headers.forEach(header => header.classList.add('collapsed'));
    }
}

// ==================== INICIALIZACIÓN ====================

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar con todas las secciones colapsadas
    const contenidos = document.querySelectorAll('.categoria-content');
    const headers = document.querySelectorAll('.categoria-header');

    contenidos.forEach(content => content.classList.add('collapsed'));
    headers.forEach(header => header.classList.add('collapsed'));
    
    // Animación escalonada de las tarjetas
    const tarjetas = document.querySelectorAll('.tarjeta-historico');
    tarjetas.forEach((tarjeta, index) => {
        tarjeta.style.animationDelay = `${index * 0.1}s`;
    });
});

// Efecto de scroll suave cuando se hace clic en una sección colapsada
document.querySelectorAll('.categoria-header').forEach(header => {
    header.addEventListener('click', function() {
        // Pequeño delay para que la animación se complete
        setTimeout(() => {
            if (!this.classList.contains('collapsed')) {
                this.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start',
                    inline: 'nearest' 
                });
            }
        }, 200);
    });
});