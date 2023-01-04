// Aca van los objetos que se van a mapear sobre Ejercicios y Musculos que 
// luego se actualizan en la calculadora. Es decir, que si yo elijo Biceps, solo me muestre
// Los ejercicios de Biceps

const musculos = [
    {   
        id: 0,
        name: 'Sin Musculo Seleccionado',
        exercises: {
            ex1: 'Selecciona un Musculo',
                }
         },
    {   
        id: 1,
        name: 'Biceps',
        exercises: {
            ex1: 'Curl',
            ex2: 'Martillo',
            ex3: 'Barra Recta',
            ex4: 'Polea Soga Agarre en V',
            ex5: 'Mancuerna Mozo',
            ex6: 'Pull Ups'
                }
         },
    {   
        id: 2,
        name: 'Triceps',
        exercises: {
            ex1: 'Bench Frances',
            ex2: 'Polea Soga',
            ex3: 'Extensiones Colgado',
            ex4: 'Fondos sin Peso',
            ex5: 'Fondos con Peso',
            ex6: 'Banco Plano Close-Grip',
                }
    },
    {
        id: 3,
        name: 'Cuadriceps',
        exercises: {
            ex1: 'Banco Extensiones',
                }
    },
    {   
        id: 4,
        name: 'Espalda',
        exercises: {
            ex1: '(Baja) Peso Muerto',
            ex2: '(Baja) Peso Muerto con Mancuernas',
            ex3: '(Lateral) Row',
            ex4: '(Lateral) Polea Soga',
            ex5: '(Lateral) Polea con Barra',
            ex6: '(Completa) Dominadas sin peso',
            ex7: '(Completa) Dominadas con peso',
                }
    },
    {   
        id: 5,
        name: 'Pecho',
        exercises: {
            ex1: '(Bajo) Banco Declinado',
            ex2: '(Bajo) Declinado con Mancuernas',
            ex3: '(Medio) Banco Plano',
            ex4: '(Medio) Plano con Mancuernas',
            ex5: '(Medio) Polea desde Arriba',
            ex6: '(Alto) Banco Inclinado',
            ex7: '(Alto) Inclinado con Mancuernas',
            ex8: '(Alto) Polea desde Abajo',
        }
    },
    {
        id: 6,
        name: 'Hombros',
        exercises: {
            ex1: 'Overhead',
            ex2: 'Arnold Press',
            ex3: 'Laterales con Polea',
            ex4: 'Laterales con Mancuernas',
            ex6: 'Frontales Mancuernas',
            ex7: 'Frontales Polea',
            ex8: 'Pajaros',
            ex9: 'Posteriores con Polea',
        }
    },
    
    {
        id: 7,
        name: 'Piernas',
        exercises: {
            ex1: 'Sentadilla',
            ex2: 'Prensa',
            ex3: 'Estocadas hacia atrás',
            ex4: 'Estocadas hacia adelante',
            ex5: 'Hip Thrusts',
            ex6: 'Gemelos/Calves',
            ex7: 'Romanian Deadlift (RDL)',
        }
    },
    {
        id: 8,
        name: 'Trapecios',
        exercises: {
            ex1: 'High Pull',
        }
    },
]


export default musculos