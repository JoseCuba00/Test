let quiz =document.getElementById("quiz")

let questions =document.getElementById("preguntas_test")

let boton =document.getElementById("boton_iniciacion_1")
let encabezado =document.getElementById("seccion_encabezado_1")
let encabezado_2 =document.getElementById("seccion_encabezado_2")
let boton_2 =document.getElementById("boton_iniciacion_2")
questionEl = document.getElementById("quiz")
answerEls = document.getElementById("preguntas_test")

quiz.style.display="none"

let quizData=[
            { 
                numero:"1", 
            pregunta:"Когда была принята Международная Конвенция о грузовой марке?",
            respuestas:{
                1:"1968 r",
                2:"1966 г",
                3:"1973 r",},
          
            correct:"2",
            },
            { numero:"2",
            pregunta: "2.	На какие типы судов разделены в Конвенции все суда?",
            respuestas:{
                1:"Наливные и сухогрузные",
                2:"Универсальные и специализированные",
                3:"А и В"},
            correct:"3",
             },
            { numero:"3",
            pregunta:  "3.	Запас плавучести это: ",
            respuestas:{1:"Объем водонепроницаемого корпуса выше ватерлинии." ,
            2:"График зависимости водоизмещения от осадки.",
            3:"Высота надводного борта",},
            correct:"1",
            },
            {numero:"4",
             pregunta:  "4.	Какое выражение для уравнения плавучести верно?",
             respuestas:{1:"M = Σm,. О " ,
             2:" М = pV.",
             3:" M = mg.",},

             correct:"2",
            },
            { numero:"5",
                pregunta:  " 5.Какие формулы называются метацентрическими формулами остойчивости?",
                respuestas:{1:"M. = AlSine, M. = AlSiny",
                2:"M = AhSine, M, = AhSiny",
                3:"м. = ∆rSin0, M = ∆RSiny",},
                correct:"2"
            },
            {numero:"6",
             pregunta:  " 6.	Какое определение теоремы Эйлера верно: ",
             respuestas:{1:"Ось равнообъемных наклонений при бесконечно малых углах наклонения проходит через центр тяжести судна. ",
             2:" Ось равнообъемных наклонений при бесконечно малых углах наклонения проходит через центр тяжести подводной части судна.",
             3:"Ось равнообъемных наклонений при бесконечно малых углах наклонения проходит через центр тяжести площади действующей ватерлинии. "},
             correct:"3",
            },
            {numero:"7",
             pregunta:" 7	Как влияют на остойчивость добывающего судна запрессованные танки двойного дна?",
             respuestas:{1:" Улучшают остойчивость.",
            2:"Ухудшают остойчивость. ",
            3:"Остается без изменения."},
            correct:"1",
            },
            {numero:"8",
             pregunta:  "8	Какие требования к остойчивости морских судов длиной более 105 м верны? ",
             respuestas:{1:"h≥ 0,05M, max ≥ 0,25м, 0max ≥35 °, 0зак ≥ 60 °. ",
            2:"h≥ 0,15 м,lmax ≥ 0,20м, 0max ≥ 30 ,0зак ≥60º",
            3:"h≥ 0,10м, lmах≥ 0,25м, 0max ≥25 °, 0зак ≥50º. "},
            correct:"2",
            numero:"9",},
             {pregunta:  " 9. Какие сухогрузные суда должны иметь деление на отсеки в соответствии с Правилами Российского Морского Регистра Судоходства?  ",
             respuestas:{1:"Все, независимо от назначения и размеров.",
            2:"Длиной более 50 м",
            3:"Длиной более 100 м."},
            correct:"1",},
            {numero:"10",
            pregunta:  " 10 Каковы допустимые значения угла крена при затоплении части отсеков судна до спрямления? ",
            respuestas:{1:"≤12°",
           2:"≤20°",
           3:"≤24°"},
           correct:"2",

            },
            {
                numero:"11",
                pregunta:  "11	На каком расстоянии от отверстий в переборках, палубах и бортах должна проходить аварийная ватерлиния судна? ",
                respuestas:{1:"≥0,05м.",
               2:"≥ 0,3м.",
               3:"≥ 0,5м"},
               correct:"2",
            },{
                numero:"12",
                pregunta:  "12	Основополагающий принцип при выборе мероприятий по спрямлению аварийного судна и восстановлению его остойчивости? ",
                respuestas:{1:"Любой ценой..",
               2:"Минимальное расходование запаса плавучести. ",
               3:"Увеличение запаса плавучести."},
               correct:"3",
            },
            {
                numero:"13",
                pregunta:  " 13	Длина волны это:  ",
                respuestas:{1:"Расстояние между подошвой и вершиной волны. ",
               2:"Расстояние между двумя смежными одноименными точками волнового профиля.",
               3:" Расстояние, на которое перемещается за одну секунду какая- либо точка профиля."},
               correct:"2",
            },
            {numero:"14",
            pregunta:  " 14	По какой диаграмме можно выбрать скорость и курс для уменьшения качки?. ",
            respuestas:{ 1:"Фирсова.",
           2:"Ремеза.",
           3:"Мастушкина."},
           correct:"2",

            },{
                numero:"15",
                pregunta:  " 15	 По какому из этих критериев не проверяют общую продольную прочность?",
                respuestas:{1:"По критерию усталости.",
               2:"По предельному состоянию на срез.",
               3:"По максимальной стрелке прогиба."},
               correct:"3",
            },
            {
                numero:"16",
                pregunta:  " 16	Какой из перечисленных документов используется на судах для контроля прочности? ",
                respuestas:{1:"Таблица контроля прочности.",
               2:"Диаграмма контроля прочности.",
               3:" Формулы для расчета напряжений в конструкциях корпуса."},
               correct:"2",
            },
                
        

    
];
let quizData_2=[
    { 
        numero:"1", 
    pregunta:"Назначение грузовой марки?",
    respuestas:{1:"Ограничение максимальной осадки с целью достижения максимальной грузоподъемности.",
    2:"Обеспечение минимально- допустимой высоты надводного борта с целью обеспечения приемлемых мореходных качеств.",
    3:"Обеспечение безопасности мореплавания за счет назначения судну минимально- допустимого запаса плавучести, выраженного через высоту надводного борта."},
    correct:"3",
    },
    { numero:"2",
    pregunta: "2.	Период освидетельствования по поводу грузовой марки? ",
    respuestas:{1:"2 года.",
     2:"5 лет.",
    3:"3 года."},
    correct:"3",
     },
    { numero:"3",
    pregunta:  "3.	Можно ли изменить величину базисного надводного борта судов типа В?",
    respuestas:{1:"Нельзя ни при каких обстоятельствах. " ,
    2:"Можно в сторону увеличения.",
    3:"Можно увеличивать или уменьшать в зависимости от конструктивных особенностей судна."},
    correct:"3",
    },
    {numero:"4",
    pregunta:  "4. Как в судовых условиях могут быть найдены координаты центра тяжести судна?",
    respuestas:{1:"По КЭТЧ." ,
     2:"Расчетом.",
     3:"По масштабу Бонжана."},
     correct:"2",
    },
    { numero:"5",
    pregunta:  " 5.Динамическая остойчивость какого судна удовлетворяет требованиям РМРС? ",
    respuestas:{1:" K = 0.",
        2:"K≥1",
        3:"К< 1."},
        correct:"2",
    },
    {numero:"6",
    pregunta:  " 6.	Когда МОЖНО пользоваться метацентрической формулой остойчивости м=MhSine",
    respuestas:{1:"Для любых углов крена. ",
     2:" До угла максимума диаграммы статической остойчивости.",
     3:"В пределах линейности диаграммы статической остойчивости"},
     correct:"3",
    },
    {numero:"7",
    pregunta:" 7	7. Почему остойчивость судна на подошве волны повышается? ",
    respuestas:{1:" Вследствие входа в воду более полных носовых и кормовых обводов.",
    2:"Вследствие выхода из воды более полных носовых и кормовых обводов.",
    3:"Вследствие разворота судна лагом к волне."},
    correct:"1",
    },
    {numero:"8",
    pregunta:  "8	 Высота волны это:",
    respuestas:{1:"Расстояние между подошвой и вершиной волны.",
    2:"Расстояние между двумя смежными одноименными точками волнового профиля.",
    3:"Расстояние, на которое перемещается за одну секунду какая- либо точка профиля. "},
    correct:"1",
    numero:"9",},
     {pregunta:  " 9. При каких курсовых углах судно не испытывает бортовой качки",

     respuestas:{1:"90 - 270",
    2:"0 - 180",
    3:"90- 180"},
    correct:"2",},
    {numero:"10",
    pregunta:  " 10 К какой категории относится отсек со свобод забортной водо",
    respuestas:{1:"I категории.",
   2:"II категории",
   3:"III категории"},
   correct:"2",

    },
    {
        numero:"11",
        pregunta:  "11	Каковы допустимые значения угла кре- после спрямления?",
        respuestas:{1:"<= 10",
       2:"≤12",
       3:"≤20 "},
       correct:"2",
    },{
        numero:"12",
        pregunta:  "12	 Какое значение величины метацентрической высоты и судна?",
        respuestas:{1:" h >= 0,05M",
       2:"h >= 0,15M",
       3:"h >= 0"},
       correct:"1",
    },
    {
        numero:"13",
        pregunta:  " 13	Какова правильная последовательность действий при борьбе саварийном судне? •  ",
        respuestas:{1:"Восстановление спрямление судна. остойчивости, прекращение поступления воды ",
       2:"Спрямление судна, прекращение поступления воды, восстановление остойчивости.",
       3:"Прекращение поступления воды, восстановление остойчивости, спрямлени судна. "},
       correct:"c",
    },
    {numero:"14",
    pregunta:  " 14	 Какой критерий положен в основу контроля общей прочности судна? ",
    respuestas:{1:"Продольный изгибающий момент от всех статей нагрузки судив М",
   2:"Продольный изгибающий момент от всех статей нагрузки суди расположенный в корму от миделя-М.",
   3:"Продольный изгибающий момент от всех статей нагрузки судия, расположенный в нос от миделя М. "},
   correct:"1",

    },{
        numero:"15",
        pregunta:  " 15	 Какой из перечисленных документов используется на судах для контрол прочности?",
        respuestas:{1:"Таблица контроля прочности.",
       2:"Диаграмма контроля прочности",
       3:"Формулы для расчета напряжений в конструкциях корпуса."},
       correct:"2",
    },
    {
        numero:"16",
        pregunta:  " 16	 Какие меры максимально улучшают остойчивость?",
        respuestas:{1:"Перемещение груза из твиндеков в трюма.",
       2:"• Перемещение груза из трюмов на палубу.",
       3:"  Распрессовка максимального количества"},
       correct:"1",
    },
   

    
    
    
    



]
console.log(quizData)

let labels=document.querySelectorAll(".labels")




let currentQuiz = 0 
let score = 0
let scoreS = 0

let preguntasFalladas = []


boton.addEventListener("click",function(){
    empezar(quizData)
})
boton_2.addEventListener("click",function(){
    empezar(quizData_2)
})

let r = document.getElementById("botoncito")
let seccionBoton=document.getElementById("boton")
seccionBoton.style.display="none"
let venganza=document.getElementById("repetir")

  
function empezar(data)
{   console.log(data)
    quizData = data
    encabezado.style.display="none"
    encabezado_2.style.display="none"
    
    quiz.style.display="flex"
    
    loadQuiz()
}

function loadQuiz()
  { 
    quiz.innerHTML=""
        const currentQuizData = quizData[currentQuiz]
        
        const pregunta = `<h3>${currentQuizData.pregunta}</h3>`;
        questionEl.innerHTML += pregunta;

        let dictionary = currentQuizData.respuestas;
        console.log(dictionary)
        let answersArray = Object.entries(dictionary);

    // Función para barajar el array de respuestas de forma aleatoria
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    answersArray = shuffleArray(answersArray);

    answersArray.forEach(([key, value], index) => {
        const respuesta = `
        <div class="quiz-answer">
        <input type="radio" name="question" id="${key}"></input>
                           <label  for="${key}">${value}</label>
                           </div>
                           `;
        quiz.innerHTML += respuesta;
    });
    const botonSubmit = document.createElement('button');
    botonSubmit.innerText = 'Enviar';
    quiz.appendChild(botonSubmit);
    botonSubmit.addEventListener("click",Check)
           
   }
function Check(){
    console.log("boton presionado")
    const respuestas_seleccionadas = document.querySelectorAll('input[type="radio"]:checked');
    let respuesta_seleccionada = null;
    respuestas_seleccionadas.forEach((radio) => {
        respuesta_seleccionada = parseInt(radio.id);
    });
    console.log(respuesta_seleccionada);
    if (respuesta_seleccionada === parseInt(quizData[currentQuiz].correct)) {
        
            score ++
            currentQuiz ++
            
    } else { 
        alert("Двойка правильная:" + " " + quizData[currentQuiz]['respuestas'][parseInt(quizData[currentQuiz].correct)]) 
        preguntasFalladas.push(quizData[currentQuiz])
        currentQuiz ++
    }
    if(currentQuiz < quizData.length)
                        {
                          loadQuiz()
                        }
                        
                     else{
                        quiz.innerHTML= `<h2>Tu respondiste ${score}/${quizData.length} respuestas correctas</h2>
                        <button onclick="location.reload()">Reload</button>
                        `

                        }
}

        