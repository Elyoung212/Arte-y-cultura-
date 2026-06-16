

    // Abrir modal
    function abrirModal() {
        document.getElementById('modalRenacer').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModal() {
        document.getElementById('modalRenacer').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cerrar con Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModal();
        }
    });
    
    // Cambiar imagen
    function cambiarImagen(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('.mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipal').src = img.src.replace('w=200', 'w=800');
    }



    
    // ===== MODAL VIENTO DE MAR =====
    
    // Abrir modal
    function abrirModalViento() {
        document.getElementById('modalVientoDeMar').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalViento() {
        document.getElementById('modalVientoDeMar').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenViento(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalVientoDeMar .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalViento').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalViento();
        }
    });


    // Abrir modal
    function abrirModalGuardian() {
        document.getElementById('modalGuardian').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalGuardian() {
        document.getElementById('modalGuardian').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenGuardian(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalGuardian .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalGuardian').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalGuardian();
        }
    });


     // ===== MODAL EQUILIBRIO =====
    
    // Abrir modal
    function abrirModalEquilibrio() {
        document.getElementById('modalEquilibrio').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalEquilibrio() {
        document.getElementById('modalEquilibrio').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenEquilibrio(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalEquilibrio .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalEquilibrio').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalEquilibrio();
        }
    });


    // ===== MODAL DANZA ETERNA =====
    
    // Abrir modal
    function abrirModalDanza() {
        document.getElementById('modalDanza').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalDanza() {
        document.getElementById('modalDanza').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenDanza(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalDanza .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalDanza').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalDanza();
        }
    });


    // ===== MODAL NATURALEZA VIVA =====
    
    // Abrir modal
    function abrirModalNaturaleza() {
        document.getElementById('modalNaturaleza').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalNaturaleza() {
        document.getElementById('modalNaturaleza').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenNaturaleza(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalNaturaleza .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalNaturaleza').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalNaturaleza();
        }
    });



    // ===== MODAL ESPÍRITU DEL BOSQUE =====
    
    // Abrir modal
    function abrirModalEspiritu() {
        document.getElementById('modalEspiritu').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalEspiritu() {
        document.getElementById('modalEspiritu').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenEspiritu(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalEspiritu .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalEspiritu').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalEspiritu();
        }
    });

// ===== MODAL PENSADOR MODERNO =====
    
    // Abrir modal
    function abrirModalPensador() {
        document.getElementById('modalPensador').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalPensador() {
        document.getElementById('modalPensador').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenPensador(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalPensador .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalPensador').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalPensador();
        }
    });


    
    // Abrir modal Ondas del Tiempo
    function abrirModalOndas() {
        document.getElementById('modalOndas').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal Ondas del Tiempo
    function cerrarModalOndas() {
        document.getElementById('modalOndas').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen Ondas del Tiempo
    function cambiarImagenOndas(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalOndas .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalOndas').src = img.src.replace('w=200', 'w=800');
    }
    
    // Agregar a favoritos (simplificado)
    function agregarFavorito(nombre, precio) {
        alert('¡' + nombre + ' agregado a favoritos!');
        // Aquí puedes agregar la lógica de localStorage si quieres
    }
    
    // Compartir obra (simplificado)
    function compartirObra(nombre) {
        // Copiar al portapapeles
        var texto = '¡Mira esta obra: ' + nombre + '! ' + window.location.href;
        
        // Crear elemento temporal
        var temp = document.createElement('textarea');
        temp.value = texto;
        document.body.appendChild(temp);
        temp.select();
        document.execCommand('copy');
        document.body.removeChild(temp);
        
        alert('¡Enlace copiado al portapapeles!');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalOndas();
        }
    });


    // ===== MODAL ARMONÍA =====
    
    // Abrir modal
    function abrirModalArmonia() {
        document.getElementById('modalArmonia').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalArmonia() {
        document.getElementById('modalArmonia').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenArmonia(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalArmonia .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalArmonia').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalArmonia();
        }
    });


 // ===== MODAL FUERZA INTERIOR =====
    
    // Abrir modal
    function abrirModalFuerza() {
        document.getElementById('modalFuerza').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalFuerza() {
        document.getElementById('modalFuerza').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenFuerza(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalFuerza .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalFuerza').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalFuerza();
        }
    });


// ===== MODAL GUARDIÁN DEL JARDÍN =====
    
    // Abrir modal
    function abrirModalGuardianJardin() {
        document.getElementById('modalGuardianJardin').classList.add('abierto');
        document.body.style.overflow = 'hidden';
    }
    
    // Cerrar modal
    function cerrarModalGuardianJardin() {
        document.getElementById('modalGuardianJardin').classList.remove('abierto');
        document.body.style.overflow = 'auto';
    }
    
    // Cambiar imagen
    function cambiarImagenGuardianJardin(img) {
        // Quitar activa de todas
        var minis = document.querySelectorAll('#modalGuardianJardin .mini-img');
        minis.forEach(function(m) {
            m.classList.remove('activa');
        });
        
        // Activar la clickeada
        img.classList.add('activa');
        
        // Cambiar imagen grande
        document.getElementById('imagenPrincipalGuardianJardin').src = img.src.replace('w=200', 'w=800');
    }

    // Cerrar con tecla Escape
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            cerrarModalGuardianJardin();
        }
    });