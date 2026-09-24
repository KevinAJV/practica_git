const alumnos = [
    {nombre: "Ana", nota: 9, activo: true},
    {nombre: "Luis", nota: 5, activo: true},
    {nombre: "Pedro", nota: 8, activo: false},
    {nombre: "Maria", nota: 10, activo: true},
    {nombre: "sofia", nota: 6, activo: false}
];

const resultados = alumnos
.filter(alumno => alumno.activo === true && alumno.nota >= 7)
.map(alumno => alumno.nombre);

console.log(resultados);

const empleados = [
    { nombre: "Ana", edad: 24, salario: 900, activo: true },
    { nombre: "Luis", edad: 31, salario: 1200, activo: false },
    { nombre: "Pedro", edad: 19, salario: 700, activo: true },
    { nombre: "Maria", edad: 28, salario: 1500, activo: true },
    { nombre: "Sofia", edad: 22, salario: 800, activo: true }
];

const filtro = empleados 
.filter(empleado => empleado.activo === true && empleado.edad >= 21) 
.filter(empleado => empleado.salario >=800)
.map(empleado => `${empleado.nombre} - $${empleado.salario}`); 

console.log(filtro);


const dispositivos = [
    { nombre: "Laptop", precio: 1200, stock: 4, activo: true },
    { nombre: "Mouse", precio: 30, stock: 10, activo: true },
    { nombre: "Monitor", precio: 350, stock: 0, activo: true },
    { nombre: "Tablet", precio: 600, stock: 3, activo: false },
    { nombre: "Teclado", precio: 90, stock: 7, activo: true }
];

const unidades = dispositivos 
.filter (dispositivo => dispositivo.activo === true 
    && dispositivo.stock > 0)
.filter (dispositivo => dispositivo.precio >= 80)
.map (dispositivo => `${dispositivo.nombre} disponible - $${dispositivo.precio}`);

console.log(unidades);


const aspirantes = [
    { nombre: "Carlos", edad: 22, puntaje: 85, disponible: true },
    { nombre: "Andrea", edad: 17, puntaje: 95, disponible: true },
    { nombre: "Mateo", edad: 25, puntaje: 68, disponible: true },
    { nombre: "Lucia", edad: 21, puntaje: 92, disponible: false },
    { nombre: "Daniel", edad: 30, puntaje: 78, disponible: true }
];

const condicion = aspirantes
.filter(aspirante => aspirante.disponible ===true
    && aspirante.edad >=18)
.filter(aspirante => aspirante.puntaje >=75)

.map(aspirante => `${aspirante.nombre} - Puntaje: ${aspirante.puntaje}`);

console.log(condicion);

const compras = [
    { producto: "Laptop", precio: 1000 },
    { producto: "Mouse", precio: 30 },
    { producto: "Teclado", precio: 70 },
    { producto: "Monitor", precio: 300 }
];

const total = compras.reduce((acumulador, compra) => {
    return acumulador + compra.precio;
}, 0);

console.log(total)