const inputName = document.getElementById("name");
const inputProvincia = document.getElementById("provincia");
const inputCiudad = document.getElementById("ciudad");
const inputSector = document.getElementById("sector");
const inputcalle = document.getElementById("calle");
const inputCarrerasSelect = document.getElementById("CarreraSelect");


function formclear(){
    inputClear(inputName);
    inputClear(inputProvincia);
    inputClear(inputCiudad);
    inputClear(inputSector);
    inputClear(inputcalle);
    inputClear(inputCarrerasSelect);
    

}

function validator(input, value, isvalid) {
    if (value === "" || value == null) {
        input.classList.add("input-error");
        input.classList.remove("input-success");
        return false;
    } else {
        input.classList.add("input-success");
        input.classList.remove("input-error");
        return isvalid;
    }
}


document.getElementById('clearbutton').addEventListener('click', function() {
    formclear(); 
    
});

document.getElementById("Enviar").addEventListener("click", function() {
    var Carrera = document.getElementById("CarreraSelect").value;

    var formularioPrincipal = document.getElementById("content-container");
    formularioPrincipal.style.display = "none";

    document.getElementById("content").style.display = "none";
    document.getElementById("content-twu").style.display = "none";
    document.getElementById("content-materias").style.display = "none";

    if (Carrera === "Software") {
        document.getElementById("content").style.display = "block";
    } else if (Carrera === "Ciberseguridad") {
        document.getElementById("content-twu").style.display = "block";
    }else if (Carrera === "Multimedia"){
        document.getElementById("content-materias").style.display = "block";
    }
});

function goBack(){
    window.location.href = "index.html";
}

function irAConfirmacion() {
    const otroFormulario = document.getElementById('content');
    if (otroFormulario) {
        otroFormulario.style.display = 'none'; 
    }

    const formConfirmacion = document.getElementById('form-confirmacion');
    formConfirmacion.style.display = 'block'; 
    
}

function irAConfirmacion2() {
    const otroFormulario = document.getElementById('content-materias');
    if (otroFormulario) {
        otroFormulario.style.display = 'none'; 
    }

    const formConfirmacion = document.getElementById('form-confirmacion');
    formConfirmacion.style.display = 'block'; 
    
}

function irAConfirmacion3() {
    const otroFormulario = document.getElementById('content-twu');
    if (otroFormulario) {
        otroFormulario.style.display = 'none'; 
    }

    const formConfirmacion = document.getElementById('form-confirmacion2');
    formConfirmacion.style.display = 'block'; 
    
}

function VOlver(){
    const otroFormulario = document.getElementById('form-confirmacion');
    if (otroFormulario) {
        otroFormulario.style.display = 'none'; 
    }

    const formConfirmacion = document.getElementById('content');
    formConfirmacion.style.display = 'block'; 
    
}

function VOlver2(){
    const otroFormulario = document.getElementById('form-confirmacion3');
    if (otroFormulario) {
        otroFormulario.style.display = 'none'; 
    }

    const formConfirmacion = document.getElementById('content-materias');
    formConfirmacion.style.display = 'block'; 
    
}

function VOlver3(){
    const otroFormulario = document.getElementById('form-confirmacion2');
    if (otroFormulario) {
        otroFormulario.style.display = 'none'; 
    }

    const formConfirmacion = document.getElementById('content-twu');
    formConfirmacion.style.display = 'block'; 
    
}


 document.getElementById("finalizar1").addEventListener("click",function(){

    window.location = "index.html";
    alert("Estas seguro de finalizar");
    formclear();

 });




function inputClear(input, isfocus){
    input.value = "";
    input.classList.add("input-success");
    input.classList.remove("input-error");
    if(isfocus){
        input.focus();
    }
}


document.getElementById("accordionFlushExample").addEventListener("click", function(event) {
    if (event.target.closest('.accordion-button')) {
        var targetId = event.target.getAttribute('data-bs-target'); 
        var accordionContent = document.querySelector(targetId); 
        accordionContent.classList.toggle("show"); 
    }
});

document.getElementById("accordionFlushExample-twu").addEventListener("click", function(event) {
    if (event.target.closest('.accordion-button')) {
        var targetId = event.target.getAttribute('data-bs-target'); 
        var accordionContent = document.querySelector(targetId); 
        accordionContent.classList.toggle("show"); 
    }
});

document.getElementById("content-materias").addEventListener("click", function(event) {
    if (event.target.closest('.accordion-button')) {
        var targetId = event.target.getAttribute('data-bs-target'); 
        var accordionContent = document.querySelector(targetId);
        accordionContent.classList.toggle("show"); 
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const fields = ['name', 'phone', 'provincia', 'ciudad', 'sector', 'calle', 'CarreraSelect'];
    fields.forEach(field => {
        const storedValue = localStorage.getItem(field);
        if (storedValue) {
            document.getElementById(field).value = storedValue;
        }
    });
});



document.getElementById("Aceptar").addEventListener("click",function(){
    document.getElementById("content").style.display = "none";

    document.getElementById("form-confirmacion").style.display = "block";
    

})

    document.addEventListener("DOMContentLoaded", function() {
        // Obtener los elementos del formulario
        const inputName = document.getElementById("name");
        const inputProvincia = document.getElementById("provincia");
        const inputCiudad = document.getElementById("ciudad");
        const inputSector = document.getElementById("sector");
        const inputCalle = document.getElementById("calle");
        const inputCarreraSelect = document.getElementById("CarreraSelect");

        function mostrarDatos() {
            const listaDatos = document.getElementById('datos-personales');

            const nombreItem = document.createElement('li');
            nombreItem.classList.add('list-group-item');
            nombreItem.textContent = `Nombre: ${inputName.value}`;

            const provinciaItem = document.createElement('li');
            provinciaItem.classList.add('list-group-item');
            provinciaItem.textContent = `Provincia: ${inputProvincia.value}`;

            const ciudadItem = document.createElement('li');
            ciudadItem.classList.add('list-group-item');
            ciudadItem.textContent = `Ciudad: ${inputCiudad.value}`;

            const sectorItem = document.createElement('li');
            sectorItem.classList.add('list-group-item');
            sectorItem.textContent = `Sector: ${inputSector.value}`;

            const calleItem = document.createElement('li');
            calleItem.classList.add('list-group-item');
            calleItem.textContent = `Calle: ${inputCalle.value}`;

            const carreraItem = document.createElement('li');
            carreraItem.classList.add('list-group-item');
            carreraItem.textContent = `Carrera: ${inputCarreraSelect.value}`;

            // Agregar los elementos a la lista
            listaDatos.appendChild(nombreItem);
            listaDatos.appendChild(provinciaItem);
            listaDatos.appendChild(ciudadItem);
            listaDatos.appendChild(sectorItem);
            listaDatos.appendChild(calleItem);
            listaDatos.appendChild(carreraItem);

            document.getElementById('form-confirmacion').style.display = 'block';
            document.querySelector('.container.mt-5').style.display = 'none'; 
        }

        // Asignar el evento de clic al botón "Enviar"
        document.getElementById('Enviar').addEventListener('click', mostrarDatos);
    
    });

    document.getElementById("clear").addEventListener("click",function(){
        document.getElementById("content-twu").style.display = "none";
    
        document.getElementById("form-confirmacion").style.display = "block";
        
    
    })
    
        document.addEventListener("DOMContentLoaded", function() {
            // Obtener los elementos del formulario
            const inputName = document.getElementById("name");
            const inputProvincia = document.getElementById("provincia");
            const inputCiudad = document.getElementById("ciudad");
            const inputSector = document.getElementById("sector");
            const inputCalle = document.getElementById("calle");
            const inputCarreraSelect = document.getElementById("CarreraSelect");
    
            function mostrarDatos() {
                const listaDatos = document.getElementById('datos-personales');
    
                const nombreItem = document.createElement('li');
                nombreItem.classList.add('list-group-item');
                nombreItem.textContent = `Nombre: ${inputName.value}`;
    
                const provinciaItem = document.createElement('li');
                provinciaItem.classList.add('list-group-item');
                provinciaItem.textContent = `Provincia: ${inputProvincia.value}`;
    
                const ciudadItem = document.createElement('li');
                ciudadItem.classList.add('list-group-item');
                ciudadItem.textContent = `Ciudad: ${inputCiudad.value}`;
    
                const sectorItem = document.createElement('li');
                sectorItem.classList.add('list-group-item');
                sectorItem.textContent = `Sector: ${inputSector.value}`;
    
                const calleItem = document.createElement('li');
                calleItem.classList.add('list-group-item');
                calleItem.textContent = `Calle: ${inputCalle.value}`;
    
                const carreraItem = document.createElement('li');
                carreraItem.classList.add('list-group-item');
                carreraItem.textContent = `Carrera: ${inputCarreraSelect.value}`;
    
                // Agregar los elementos a la lista
                listaDatos.appendChild(nombreItem);
                listaDatos.appendChild(provinciaItem);
                listaDatos.appendChild(ciudadItem);
                listaDatos.appendChild(sectorItem);
                listaDatos.appendChild(calleItem);
                listaDatos.appendChild(carreraItem);
    
                document.getElementById('form-confirmacion2').style.display = 'block';
                document.querySelector('.container.mt-5').style.display = 'none'; 
            }
    
            // Asignar el evento de clic al botón "Enviar"
            document.getElementById('clear').addEventListener('click', mostrarDatos);
        
        });
    
        document.addEventListener("DOMContentLoaded", function () {
            const inputName = document.getElementById("name");
            const inputProvincia = document.getElementById("provincia");
            const inputCiudad = document.getElementById("ciudad");
            const inputSector = document.getElementById("sector");
            const inputCalle = document.getElementById("calle");
            const inputCarreraSelect = document.getElementById("CarreraSelect");
        
            // Obtener los elementos del formulario de confirmación
            const listaDatos = document.getElementById('datos-personales');
            const tablaHorarios = document.getElementById('tabla-horarios');
        
            // Función para crear un elemento de lista
            function crearElementoLista(texto) {
                const li = document.createElement('li');
                li.classList.add('list-group-item');
                li.textContent = texto;
                return li;
            }
        
            // Función para obtener los horarios seleccionados
            function obtenerHorariosSeleccionados() {
                const horariosSeleccionados = [];
                const materias = [
                    { nombre: 'Fundamentos de la programación', inputName: 'fundamentos' },
                    { nombre: 'Programación 1', inputName: 'programacion1' },
                    { nombre: 'Introducción a Bases de Datos', inputName: 'basesdedatos' },
                    { nombre: 'Programación 2', inputName: 'programacion2' },
                    { nombre: 'Programación 3', inputName: 'programacion3' }
                ];
        
                materias.forEach(materia => {
                    const seleccionado = document.querySelector(`input[name="${materia.inputName}"]:checked`);
                    if (seleccionado) {
                        const horarioTexto = seleccionado.nextElementSibling.textContent;
                        horariosSeleccionados.push({ asignatura: materia.nombre, horario: horarioTexto });
                    }
                });
        
                return horariosSeleccionados;
            }
        
            // Función para mostrar los datos en el formulario de confirmación
            function mostrarDatos() {
                // Limpiar el contenido previo
                while (listaDatos.firstChild) {
                    listaDatos.removeChild(listaDatos.firstChild);
                }
        
                while (tablaHorarios.firstChild) {
                    tablaHorarios.removeChild(tablaHorarios.firstChild);
                }
        
                // Añadir datos personales
                listaDatos.appendChild(crearElementoLista(`Nombre: ${inputName.value}`));
                listaDatos.appendChild(crearElementoLista(`Provincia: ${inputProvincia.value}`));
                listaDatos.appendChild(crearElementoLista(`Ciudad: ${inputCiudad.value}`));
                listaDatos.appendChild(crearElementoLista(`Sector: ${inputSector.value}`));
                listaDatos.appendChild(crearElementoLista(`Calle: ${inputCalle.value}`));
                listaDatos.appendChild(crearElementoLista(`Carrera: ${inputCarreraSelect.value}`));
        
                // Obtener y agregar los horarios seleccionados
                const horariosSeleccionados = obtenerHorariosSeleccionados();
                if (horariosSeleccionados.length > 0) {
                    horariosSeleccionados.forEach(({ asignatura, horario }) => {
                        const fila = document.createElement('tr');
                        
                        const asignaturaTd = document.createElement('td');
                        asignaturaTd.textContent = asignatura;
                        
                        const horarioTd = document.createElement('td');
                        horarioTd.textContent = horario;
        
                        fila.appendChild(asignaturaTd);
                        fila.appendChild(horarioTd);
                        tablaHorarios.appendChild(fila);
                    });
                } else {
                    const fila = document.createElement('tr');
                    const mensajeTd = document.createElement('td');
                    mensajeTd.colSpan = 2;
                    mensajeTd.textContent = 'No se han seleccionado horarios.';
                    fila.appendChild(mensajeTd);
                    tablaHorarios.appendChild(fila);
                }
        
                // Mostrar el formulario de confirmación
                document.getElementById('form-confirmacion').style.display = 'block';
                document.getElementById('content').style.display = 'none'; // Ocultar la sección de materias
            }
        
            // Asignar la función mostrarDatos al botón "Aceptar"
            document.getElementById('Aceptar').addEventListener('click', mostrarDatos);
            document.getElementById("finalizar").addEventListener("click", function(){
                const confirmar = confirm("Estas seguro que quieres finalizar");
                if(confirmar){
                    window.location.href = "index.html";

                }
            })
        });
        



//CiberSeguridad
document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos del formulario de datos personales
    const inputName = document.getElementById("name");
    const inputProvincia = document.getElementById("provincia");
    const inputCiudad = document.getElementById("ciudad");
    const inputSector = document.getElementById("sector");
    const inputCalle = document.getElementById("calle");
    const inputCarreraSelect = document.getElementById("CarreraSelect");

    // Obtener los elementos de los horarios seleccionados
    const horarios = {
        "opcion8": "Fundamentos a la Ciberseguridad - Ma 13:00 - 18:00",
        "opcion9": "Fundamentos a la Ciberseguridad - Lu 7:00 - 12:00",
        "opcion10": "Fundamentos a la Ciberseguridad - Ju 18:00 - 20:00",
        "opcion11": "Criptografía Básica - Vi 14:00 - 16:00",
        "opcion12": "Criptografía Básica - Ju 8:00 - 10:00",
        "opcion13": "Criptografía Básica - Lu 10:00 - 12:00",
        "opcion14": "Redes Seguras - Ma 10:00 - 12:00",
        "opcion15": "Redes Seguras - Vi 16:00 - 18:00",
        "opcion16": "Redes Seguras - Sa 10:00 - 12:00",
        "opcion17": "Circuito - Ma 10:00 - 12:00",
        "opcion18": "Circuito - Vi 16:00 - 18:00",
        "opcion19": "Circuito - Ju 18:00 - 20:00",
        "opcion20": "Matemáticas - Lu 09:00 - 11:00",
        "opcion21": "Matemáticas - Mi 14:00 - 16:00",
        "opcion22": "Matemáticas - Ju 10:00 - 12:00"
    };

    // Función para obtener el horario seleccionado
    function obtenerHorariosSeleccionados() {
        const horarioSeleccionado = [];
        document.querySelectorAll('input[type="radio"]:checked').forEach(function (element) {
            const horario = horarios[element.value];
            if (horario) {
                horarioSeleccionado.push(horario);
            }
        });
        return horarioSeleccionado;
    }

    // Función para crear y añadir un elemento `li` con el contenido dado
    function crearElementoLista(texto) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = texto;
        return li;
    }

    // Función para mostrar los datos en el formulario de confirmación
    function mostrarDatos() {
        const listaDatos = document.getElementById('datos-personales2');
        const tablaHorarios = document.getElementById('tabla-horarios2');
        
        // Limpiar el contenido previo
        while (listaDatos.firstChild) {
            listaDatos.removeChild(listaDatos.firstChild);
        }

        while (tablaHorarios.firstChild) {
            tablaHorarios.removeChild(tablaHorarios.firstChild);
        }

        // Añadir datos personales a la lista
        listaDatos.appendChild(crearElementoLista(`Nombre: ${inputName.value}`));
        listaDatos.appendChild(crearElementoLista(`Provincia: ${inputProvincia.value}`));
        listaDatos.appendChild(crearElementoLista(`Ciudad: ${inputCiudad.value}`));
        listaDatos.appendChild(crearElementoLista(`Sector: ${inputSector.value}`));
        listaDatos.appendChild(crearElementoLista(`Calle: ${inputCalle.value}`));
        listaDatos.appendChild(crearElementoLista(`Carrera: ${inputCarreraSelect.value}`));

        // Obtener y agregar los horarios seleccionados
        const horariosSeleccionados = obtenerHorariosSeleccionados();
        horariosSeleccionados.forEach(horario => {
            const fila = document.createElement('tr');
            const [asignatura, horarioTexto] = horario.split(' - ');

            const asignaturaTd = document.createElement('td');
            asignaturaTd.textContent = asignatura;
            
            const horarioTd = document.createElement('td');
            horarioTd.textContent = horarioTexto;

            fila.appendChild(asignaturaTd);
            fila.appendChild(horarioTd);
            tablaHorarios.appendChild(fila);
        });

        // Mostrar el formulario de confirmación y ocultar el contenido anterior
        document.getElementById('form-confirmacion2').style.display = 'block';
        document.getElementById('content-twu').style.display = 'none';
    }

    // Asignar la función mostrarDatos al botón "Aceptar"
    document.getElementById('clear').addEventListener('click', mostrarDatos);

   
});


window.onload = function() {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('provincia').value = localStorage.getItem('provincia') || '';
    document.getElementById('ciudad').value = localStorage.getItem('ciudad') || '';
    document.getElementById('sector').value = localStorage.getItem('sector') || '';
    document.getElementById('calle').value = localStorage.getItem('calle') || '';
    document.getElementById('CarreraSelect').value = localStorage.getItem('carrera') || '';
}

// Guardar la información en LocalStorage al escribir en los campos
document.querySelectorAll('#content-container input, #content-container select').forEach(function(element) {
    element.addEventListener('input', function() {
        localStorage.setItem(this.id, this.value);
    });
});

// Limpiar el formulario y el LocalStorage
document.getElementById('clearbutton').addEventListener('click', function() {
    document.querySelectorAll('#content-container input, #content-container select').forEach(function(element) {
        element.value = '';
        localStorage.removeItem(element.id);
    });
});







// Multimedia
document.addEventListener("DOMContentLoaded", function () {
    // Obtener los elementos del formulario de datos personales
    const inputName = document.getElementById("name");
    const inputProvincia = document.getElementById("provincia");
    const inputCiudad = document.getElementById("ciudad");
    const inputSector = document.getElementById("sector");
    const inputCalle = document.getElementById("calle");
    const inputCarreraSelect = document.getElementById("CarreraSelect");

    // Obtener los elementos de los horarios seleccionados
    const horarios = {
        "opcion1": "Introducción a Multimedia - Lu 8:00 - 10:00",
        "opcion2": "Producción de Video - Mi 10:00 - 12:00",
        "opcion3": "Edición de Sonido - Ju 14:00 - 16:00",
        "opcion4": "Diseño Gráfico - Ma 16:00 - 18:00",
        "opcion5": "Animación Digital - Vi 10:00 - 12:00",
        "opcion6": "Creación de Contenido - Lu 10:00 - 12:00",
        "opcion7": "Efectos Visuales - Ju 18:00 - 20:00"
    };

    // Función para obtener el horario seleccionado
    function obtenerHorariosSeleccionados() {
        const horarioSeleccionado = [];
        document.querySelectorAll('input[type="radio"]:checked').forEach(function (element) {
            const horario = horarios[element.value];
            if (horario) {
                horarioSeleccionado.push(horario);
            }
        });
        return horarioSeleccionado;
    }

    // Función para crear y añadir un elemento `li` con el contenido dado
    function crearElementoLista(texto) {
        const li = document.createElement('li');
        li.classList.add('list-group-item');
        li.textContent = texto;
        return li;
    }

    // Función para mostrar los datos en el formulario de confirmación
    function mostrarDatos() {
        const listaDatos = document.getElementById('datos-personales2');
        const tablaHorarios = document.getElementById('tabla-horarios2');
        
        // Limpiar el contenido previo
        while (listaDatos.firstChild) {
            listaDatos.removeChild(listaDatos.firstChild);
        }

        while (tablaHorarios.firstChild) {
            tablaHorarios.removeChild(tablaHorarios.firstChild);
        }

        // Añadir datos personales a la lista
        listaDatos.appendChild(crearElementoLista(`Nombre: ${inputName.value}`));
        listaDatos.appendChild(crearElementoLista(`Provincia: ${inputProvincia.value}`));
        listaDatos.appendChild(crearElementoLista(`Ciudad: ${inputCiudad.value}`));
        listaDatos.appendChild(crearElementoLista(`Sector: ${inputSector.value}`));
        listaDatos.appendChild(crearElementoLista(`Calle: ${inputCalle.value}`));
        listaDatos.appendChild(crearElementoLista(`Carrera: ${inputCarreraSelect.value}`));

        // Obtener y agregar los horarios seleccionados
        const horariosSeleccionados = obtenerHorariosSeleccionados();
        horariosSeleccionados.forEach(horario => {
            const fila = document.createElement('tr');
            const [asignatura, horarioTexto] = horario.split(' - ');

            const asignaturaTd = document.createElement('td');
            asignaturaTd.textContent = asignatura;
            
            const horarioTd = document.createElement('td');
            horarioTd.textContent = horarioTexto;

            fila.appendChild(asignaturaTd);
            fila.appendChild(horarioTd);
            tablaHorarios.appendChild(fila);
        });

        // Mostrar el formulario de confirmación y ocultar el contenido anterior
        document.getElementById('form-confirmacion2').style.display = 'block';
        document.getElementById('content-twu').style.display = 'none';
        document.getElementById('content-materias').style.display = 'none';
    }

    // Asignar la función mostrarDatos al botón "Aceptar"
    document.getElementById('clear2').addEventListener('click', mostrarDatos);
    document.getElementById('form-confirmacion2').style.display = 'none';
});

window.onload = function() {
    document.getElementById('name').value = localStorage.getItem('name') || '';
    document.getElementById('provincia').value = localStorage.getItem('provincia') || '';
    document.getElementById('ciudad').value = localStorage.getItem('ciudad') || '';
    document.getElementById('sector').value = localStorage.getItem('sector') || '';
    document.getElementById('calle').value = localStorage.getItem('calle') || '';
    document.getElementById('CarreraSelect').value = localStorage.getItem('carrera') || '';
}

// Guardar la información en LocalStorage al escribir en los campos
document.querySelectorAll('#content-container input, #content-container select').forEach(function(element) {
    element.addEventListener('input', function() {
        localStorage.setItem(this.id, this.value);
    });
});

// Limpiar el formulario y el LocalStorage
document.getElementById('clearbutton').addEventListener('click', function() {
    document.querySelectorAll('#content-container input, #content-container select').forEach(function(element) {
        element.value = '';
        localStorage.removeItem(element.id);
    });
});








