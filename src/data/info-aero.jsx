// Aca van los objetos que se van a mapear sobre Ejercicios y Musculos que 
// luego se actualizan en la calculadora. Es decir, que si yo elijo Biceps, solo me muestre
// Los ejercicios de Biceps

const aeroex = [
    {   
        id: 0,
        name: 'Sin Aerobico Seleccionado',
        exercises: {
            ex1: 'Selecciona un Ejer Aerobico',
                }
         },
    {   
        id: 1,
        name: 'Saltar Soga',
        exercises: {
            ex1: 'HIIT',
            ex2: 'Bajo',
            ex3: 'Moderado',
            ex4: 'Alto',
                }
         },
    {   
        id: 2,
        name: 'Cinta',
        exercises: {
            ex1: 'HIIT',
            ex2: 'Bajo (3-4.6km/h)',
            ex3: 'Medio (6.1-8km/h)',
            ex4: 'Alto (8.1-11km/h)',
                }
         },
    {   
        id: 3,
        name: 'Functional',
        exercises: {
            ex1: 'HIIT',
            ex2: 'Burpees',
            ex3: 'Bajo',
            ex4: 'Medio',
            ex5: 'Alto',
                }
         },
    {   
        id: 4,
        name: 'ABS',
        exercises: {
            ex1: 'HIIT',
            ex2: 'Bajo',
            ex3: 'Medio',
            ex4: 'Alto',
                }
         },
]


export default aeroex