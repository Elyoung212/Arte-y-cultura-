// Script para cambiar entre vista de grid y vista de lista
document.addEventListener('DOMContentLoaded', function() {
  // Corregido: Usamos el selector correcto para los botones
  const viewButtons = document.querySelectorAll('.view-btn');
  // Corregido: Buscamos por clase en lugar de ID duplicado
  const galleryGrid = document.querySelector('.gallery-grid');
  
  if (viewButtons && galleryGrid) {
    viewButtons.forEach(button => {
      button.addEventListener('click', function() {
        // Remover clase 'active' de todos los botones
        viewButtons.forEach(btn => btn.classList.remove('active'));
        
        // Agregar clase 'active' al botón clickeado
        this.classList.add('active');
        
        // Obtener el tipo de vista seleccionado
        const viewType = this.getAttribute('data-view');
        
        // Cambiar el layout del grid
        if (viewType === 'list') {
          galleryGrid.classList.add('list-view');
          galleryGrid.classList.remove('grid-view');
        } else {
          galleryGrid.classList.add('grid-view');
          galleryGrid.classList.remove('list-view');
        }
      });
    });
    
    // Inicializar vista (solo si es necesario)
    const activeView = document.querySelector('.view-btn.active');
    if (activeView && activeView.getAttribute('data-view') === 'list') {
      galleryGrid.classList.add('list-view');
      galleryGrid.classList.remove('grid-view');
    }
  }
});

// Script para el sistema de filtrado de categorías
document.addEventListener('DOMContentLoaded', function() {
  // 1. Manejar los botones de filtro
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover clase 'active' de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Agregar clase 'active' al botón clickeado
      this.classList.add('active');
      
      // Obtener el filtro seleccionado
      const filter = this.getAttribute('data-filter');
      
      // Filtrar las obras
      galleryCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
      
      // Actualizar contador de resultados
      updateResultsInfo();
    });
  });
  
  // 2. Función para actualizar el contador de resultados
  function updateResultsInfo() {
    const visibleCards = document.querySelectorAll('.gallery-card:not([style*="display: none"])');
    const resultsInfo = document.querySelector('.results-info p');
    
    if (resultsInfo) {
      resultsInfo.innerHTML = `Mostrando <strong>${visibleCards.length}</strong> obras de <strong>${galleryCards.length}</strong>`;
    }
  }
  
  // 3. Inicializar el filtrado al cargar la página
  updateResultsInfo();
});

// Script para el sistema de filtrado y ordenamiento
document.addEventListener('DOMContentLoaded', function() {
  // 1. Manejar los botones de filtro
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-card');
  const sortSelect = document.querySelector('.sort-select');
  
  // Estado actual del filtro
  let currentFilter = 'all';
  
  // Manejador de clics para los botones de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remover clase 'active' de todos los botones
      filterButtons.forEach(btn => btn.classList.remove('active'));
      
      // Agregar clase 'active' al botón clickeado
      this.classList.add('active');
      
      // Obtener el filtro seleccionado
      currentFilter = this.getAttribute('data-filter');
      
      // Aplicar el filtrado
      applyFiltering();
      
      // Aplicar el ordenamiento actual
      applySorting(sortSelect.value);
    });
  });
  
  // 2. Manejador de cambio para el menú desplegable de ordenamiento
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      // Aplicar el ordenamiento
      applySorting(this.value);
    });
  }
  
  // 3. Función para aplicar el filtrado
  function applyFiltering() {
    galleryCards.forEach(card => {
      if (currentFilter === 'all' || card.getAttribute('data-category') === currentFilter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Actualizar contador de resultados
    updateResultsInfo();
  }
  
  // 4. Función para aplicar el ordenamiento
  function applySorting(sortType) {
    const galleryGrid = document.querySelector('.gallery-grid');
    const works = Array.from(document.querySelectorAll('.gallery-card'));
    
    // Filtrar solo las obras visibles (si hay filtrado por categoría)
    const visibleWorks = works.filter(work => 
      work.style.display !== 'none' && work.style.display !== ''
    );
    
    // Clonar las obras visibles para no perder referencias
    const sortedWorks = [...visibleWorks];
    
    // Aplicar el ordenamiento según el tipo
    switch(sortType) {
      case 'recent':
        // No implementado ya que no hay fechas (por defecto mantiene el orden original)
        break;
      case 'price-low':
        sortedWorks.sort((a, b) => {
          const priceA = parseFloat(a.querySelector('.card-price').textContent.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.querySelector('.card-price').textContent.replace(/[^0-9.]/g, ''));
          return priceA - priceB;
        });
        break;
      case 'price-high':
        sortedWorks.sort((a, b) => {
          const priceA = parseFloat(a.querySelector('.card-price').textContent.replace(/[^0-9.]/g, ''));
          const priceB = parseFloat(b.querySelector('.card-price').textContent.replace(/[^0-9.]/g, ''));
          return priceB - priceA;
        });
        break;
      case 'name':
        sortedWorks.sort((a, b) => {
          const nameA = a.querySelector('h3').textContent.toLowerCase();
          const nameB = b.querySelector('h3').textContent.toLowerCase();
          return nameA.localeCompare(nameB);
        });
        break;
    }
    
    // Reordenar los nodos en el DOM
    sortedWorks.forEach(work => {
      galleryGrid.appendChild(work);
    });
    
    // Actualizar contador de resultados
    updateResultsInfo();
  }
  
  // 5. Función para actualizar el contador de resultados
  function updateResultsInfo() {
    const visibleCards = document.querySelectorAll('.gallery-card:not([style*="display: none"])');
    const resultsInfo = document.querySelector('.results-info p');
    const noResults = document.getElementById('no-results');
    
    if (resultsInfo) {
      resultsInfo.innerHTML = `Mostrando <strong>${visibleCards.length}</strong> obras de <strong>${galleryCards.length}</strong>`;
    }
    
    // Mostrar u ocultar el mensaje de "no results"
    if (visibleCards.length === 0) {
      noResults.style.display = 'block';
    } else {
      noResults.style.display = 'none';
    }
  }
  
  // 6. Inicializar el filtrado y ordenamiento al cargar la página
  updateResultsInfo();
});
  

// Script para la paginación, filtrado y ordenamiento
document.addEventListener('DOMContentLoaded', function() {
  // Configuración
  const obrasPorPagina = 6;
  const galleryGrid = document.querySelector('.gallery-grid');
  const allWorks = Array.from(document.querySelectorAll('.gallery-card'));
  const filterButtons = document.querySelectorAll('.filter-btn');
  const sortSelect = document.querySelector('.sort-select');
  const pageButtons = document.querySelectorAll('.page-btn');
  const prevButton = pageButtons[0];
  const nextButton = pageButtons[pageButtons.length - 1];
  const resultsInfo = document.querySelector('.results-info p');
  
  // Estado
  let currentFilter = 'all';
  let currentSort = 'recent';
  let currentPage = 1;
  
  // Función principal para renderizar
  function renderGallery() {
    // 1. Filtrar obras
    const filteredWorks = allWorks.filter(work => {
      return currentFilter === 'all' || work.getAttribute('data-category') === currentFilter;
    });
    
    // 2. Ordenar obras
    const sortedWorks = [...filteredWorks];
    sortedWorks.sort(compareWorks);
    
    // 3. Calcular paginación
    const totalPages = Math.ceil(sortedWorks.length / obrasPorPagina);
    const startIndex = (currentPage - 1) * obrasPorPagina;
    const endIndex = Math.min(startIndex + obrasPorPagina, sortedWorks.length);
    
    // 4. Mostrar/ocultar obras
    allWorks.forEach(work => work.style.display = 'none');
    for (let i = startIndex; i < endIndex; i++) {
      sortedWorks[i].style.display = 'block';
    }
    
    // 5. Actualizar UI
    updateResultsInfo(filteredWorks.length);
    updatePaginationButtons(totalPages);
    
    // 6. Reordenar en el DOM para mantener el orden correcto
    sortedWorks.forEach(work => galleryGrid.appendChild(work));
  }
  
  // Función de comparación para ordenamiento
  function compareWorks(a, b) {
    switch(currentSort) {
      case 'price-low':
        const priceA = parseFloat(a.querySelector('.card-price').textContent.replace(/[^0-9.]/g, ''));
        const priceB = parseFloat(b.querySelector('.card-price').textContent.replace(/[^0-9.]/g, ''));
        return priceA - priceB;
        
      case 'price-high':
        const priceAHigh = parseFloat(a.querySelector('.card-price').textContent.replace(/[^0-9.]/g, ''));
        const priceBHigh = parseFloat(b.querySelector('.card-price').textContent.replace(/[^0-9.]/g, ''));
        return priceBHigh - priceAHigh;
        
      case 'name':
        const nameA = a.querySelector('h3').textContent.toLowerCase();
        const nameB = b.querySelector('h3').textContent.toLowerCase();
        return nameA.localeCompare(nameB);
        
      default: // 'recent' - mantener orden original
        return 0;
    }
  }
  
  // Actualizar contador de resultados
  function updateResultsInfo(totalVisible) {
    if (resultsInfo) {
      const visibleCount = document.querySelectorAll('.gallery-card:not([style*="display: none"])').length;
      resultsInfo.innerHTML = `Mostrando <strong>${visibleCount}</strong> obras de <strong>${totalVisible}</strong>`;
    }
  }
  
  // Actualizar botones de paginación
  function updatePaginationButtons(totalPages) {
    // Botones de números (excluyendo primero y último)
    const numButtons = Array.from(pageButtons).slice(1, -1);
    
    numButtons.forEach((btn, index) => {
      const pageNum = index + 1;
      
      // Actualizar texto
      btn.textContent = pageNum;
      
      // Activar/desactivar según la página actual
      btn.classList.toggle('active', pageNum === currentPage);
      
      // Deshabilitar si no hay más páginas
      btn.disabled = pageNum > totalPages;
    });
    
    // Botones de flechas
    prevButton.disabled = currentPage === 1;
    nextButton.disabled = currentPage >= totalPages;
  }
  
  // Eventos de filtro
  filterButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Actualizar filtro
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');
      currentFilter = this.getAttribute('data-filter');
      
      // Reiniciar a página 1
      currentPage = 1;
      
      // Renderizar
      renderGallery();
    });
  });
  
  // Evento de ordenamiento
  if (sortSelect) {
    sortSelect.addEventListener('change', function() {
      currentSort = this.value;
      currentPage = 1; // Reiniciar a página 1 al ordenar
      renderGallery();
    });
  }
  
  // Eventos de paginación
  pageButtons.forEach((button, index) => {
    button.addEventListener('click', function() {
      const numButtons = Array.from(pageButtons).slice(1, -1);
      const totalPages = Math.ceil(
        allWorks.filter(w => currentFilter === 'all' || w.getAttribute('data-category') === currentFilter).length 
        / obrasPorPagina
      );
      
      // Botón "Anterior"
      if (index === 0 && currentPage > 1) {
        currentPage--;
        renderGallery();
        return;
      }
      
      // Botón "Siguiente"
      if (index === pageButtons.length - 1 && currentPage < totalPages) {
        currentPage++;
        renderGallery();
        return;
      }
      
      // Botones de número
      if (index > 0 && index < pageButtons.length - 1) {
        const pageNum = index;
        if (pageNum <= totalPages && !button.disabled) {
          currentPage = pageNum;
          renderGallery();
        }
      }
    });
  });
  
  // Inicializar
  renderGallery();
});



// Script para el botón de favoritos
document.addEventListener('DOMContentLoaded', function() {
  // Seleccionar todos los botones de favorito
  const favoriteButtons = document.querySelectorAll('.overlay-btn[title="Favorito"]');
  
  // Agregar evento de clic a cada botón
  favoriteButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      e.stopPropagation(); // Evitar que se active otro evento
      
      // Obtener el ícono del corazón
      const heartIcon = this.querySelector('i');
      
      // Alternar entre corazón vacío y lleno
      if (heartIcon.classList.contains('far')) {
        // Cambiar a corazón lleno
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
        heartIcon.style.color = '#e0c94d'; // Color amarillo dorado
        
        // Guardar en favoritos (opcional)
        saveToFavorite(this);
      } else {
        // Cambiar a corazón vacío
        heartIcon.classList.remove('fas');
        heartIcon.classList.add('far');
        heartIcon.style.color = ''; // Restaurar color predeterminado
        
        // Eliminar de favoritos (opcional)
        removeFromFavorite(this);
      }
      
      // Prevenir el comportamiento predeterminado
      e.preventDefault();
    });
  });
  
  // Función para guardar en favoritos (puedes adaptarla según tus necesidades)
  function saveToFavorite(button) {
    // Obtener información de la obra
    const card = button.closest('.gallery-card');
    const title = card.querySelector('h3').textContent;
    const price = card.querySelector('.card-price').textContent;
    const categoryId = card.getAttribute('data-category');
    
    // Crear objeto de la obra
    const artwork = {
      id: Date.now(), // Usar timestamp como ID único
      title: title,
      price: price,
      category: categoryId,
      timestamp: new Date().toISOString()
    };
    
    // Guardar en localStorage
    let favorites = JSON.parse(localStorage.getItem('artFavorites')) || [];
    favorites.push(artwork);
    localStorage.setItem('artFavorites', JSON.stringify(favorites));
    
    // Mostrar notificación
    showNotification(`¡${title} agregado a favoritos!`);
  }
  
  // Función para eliminar de favoritos
  function removeFromFavorite(button) {
    // Obtener información de la obra
    const card = button.closest('.gallery-card');
    const title = card.querySelector('h3').textContent;
    
    // Eliminar de localStorage
    let favorites = JSON.parse(localStorage.getItem('artFavorites')) || [];
    favorites = favorites.filter(item => item.title !== title);
    localStorage.setItem('artFavorites', JSON.stringify(favorites));
    
    // Mostrar notificación
    showNotification(`¡${title} eliminado de favoritos!`);
  }
  
  // Función para mostrar notificaciones
  function showNotification(message) {
    // Crear notificación
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.innerHTML = `
      <div class="notification-content">
        <i class="fas fa-heart"></i>
        <span>${message}</span>
      </div>
    `;
    
    // Agregar al body
    document.body.appendChild(notification);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
      notification.style.opacity = '0';
      setTimeout(() => {
        document.body.removeChild(notification);
      }, 50);
    }, 3000);
  }
  
  // Inicializar favoritos al cargar la página
  function initFavorites() {
    const favorites = JSON.parse(localStorage.getItem('artFavorites')) || [];
    
    // Marcar como favoritos los que están en el localStorage
    favorites.forEach(fav => {
      const card = document.querySelector(`.gallery-card h3:contains('${fav.title}')`).closest('.gallery-card');
      if (card) {
        const heartIcon = card.querySelector('.overlay-btn[title="Favorito"] i');
        heartIcon.classList.remove('far');
        heartIcon.classList.add('fas');
        heartIcon.style.color = '#e0c94d';
      }
    });
  }
  
  // Inicializar
  initFavorites();
});



//Ver detalles

