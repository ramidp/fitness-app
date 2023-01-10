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
            ex6: '(Lateral) Barra Espalda Agarre Triceps',
            ex7: '(Completa) Dominadas sin peso',
            ex8: '(Completa) Dominadas con peso',
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
            ex7: 'Romanian Deadlift (RDL)',
        }
    },
    {
        id: 8,
        name: 'Trapecios',
        exercises: {
            ex1: 'High Pull',
            ex2: 'Encogimiento con Mancuernas',
            ex3: 'Remo al cuello',
        }
    },
    {
        id: 9,
        name: 'Aductores',
        exercises: {
            ex1: 'Zancada lateral',
            ex2: 'Sentadilla Sumo',
            ex3: 'Levantamiento de talón suizo',
        }
    },
    {
        id: 10,
        name: 'Abductores',
        exercises: {
            ex1: 'Sentadillas laterales',
            ex2: 'Plank con Tijera',
            ex3: 'Estiramamiento lateral con resistencia',
        }
    },
    {
        id: 11,
        name: 'Gemelos',
        exercises: {
            ex1: 'Elevacion de Gemelos',
            ex2: 'Sentadillas con Salto',
            ex3: 'Zancadas con Salto',
            ex4: 'Elevacion de Talones',
        }
    },
    {
        id: 12,
        name: 'Gluteos / Cadera',
        exercises: {
            ex1: 'Sentadilla con una sola pierna',
            ex2: 'Hip Thrusts',
            ex3: 'Puente elevado de Gluteos',
            ex4: 'Monster walk con banda de resistencia',
        }
    },
]


export default musculos