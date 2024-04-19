let quiz =document.getElementById("quiz")
let questionEl =document.getElementById("question")
let boton =document.getElementById("boton_iniciacion")
let encabezado =document.getElementById("seccion_encabezado")
let quizData=[
            { 
                numero:"1", 
            pregunta:"Когда была принята Международная Конвенция о грузовой марке?",
            a:"1968 r",
            b:"1966 г",
            c:"1973 r",
          
            correct:"b",
            },
            { numero:"2",
                pregunta: "2.	На какие типы судов разделены в Конвенции все суда?",
            a:"Наливные и сухогрузные",
             b:"Универсальные и специализированные",
            c:"А и В",
            correct:"c",
             },
            { numero:"3",
            pregunta:  "3.	Запас плавучести это: ",
            a:"Объем водонепроницаемого корпуса выше ватерлинии." ,
            b:"График зависимости водоизмещения от осадки.",
            c:"Высота надводного борта",
            correct:"a",
            },
            {numero:"4",
             pregunta:  "4.	Какое выражение для уравнения плавучести верно?",
             a:"M = Σm,. О " ,
             b:" М = pV.",
             c:" M = mg.",
             d:" M = PINGA",
             correct:"b",
            },
            { numero:"5",
                pregunta:  " 5.Какие формулы называются метацентрическими формулами остойчивости?",
                a:"M. = AlSine, M. = AlSiny",
                b:"M = AhSine, M, = AhSiny",
                c:"м. = ∆rSin0, M = ∆RSiny",
                correct:"b",
            },
            {numero:"6",
             pregunta:  " 6.	Какое определение теоремы Эйлера верно: ",
             a:"Ось равнообъемных наклонений при бесконечно малых углах наклонения проходит через центр тяжести судна. ",
             b:" Ось равнообъемных наклонений при бесконечно малых углах наклонения проходит через центр тяжести подводной части судна.",
             c:"Ось равнообъемных наклонений при бесконечно малых углах наклонения проходит через центр тяжести площади действующей ватерлинии. ",
             correct:"c",
            },
            {numero:"7",
             pregunta:" 7	Как влияют на остойчивость добывающего судна запрессованные танки двойного дна?",
             a:" Улучшают остойчивость.",
            b:"Ухудшают остойчивость. ",
            c:"Остается без изменения.",
            correct:"a",
            },
            {numero:"8",
             pregunta:  "8	Какие требования к остойчивости морских судов длиной более 105 м верны? ",
             a:"h≥ 0,05M, max ≥ 0,25м, 0max ≥35 °, 0зак ≥ 60 °. ",
            b:"h≥ 0,15 м,lmax ≥ 0,20м, 0max ≥ 30 ,0зак ≥60º",
            c:"h≥ 0,10м, lmах≥ 0,25м, 0max ≥25 °, 0зак ≥50º. ",
            correct:"b",
            numero:"9",},
             {pregunta:  " 9. Какие сухогрузные суда должны иметь деление на отсеки в соответствии с Правилами Российского Морского Регистра Судоходства?  ",
             a:"Все, независимо от назначения и размеров.",
            b:"Длиной более 50 м",
            c:"Длиной более 100 м.",
            correct:"a",},
            {numero:"10",
            pregunta:  " 10 Каковы допустимые значения угла крена при затоплении части отсеков судна до спрямления? ",
            a:"≤12°",
           b:"≤20°",
           c:"≤24°",
           correct:"b",

            },
            {
                numero:"11",
                pregunta:  "11	На каком расстоянии от отверстий в переборках, палубах и бортах должна проходить аварийная ватерлиния судна? ",
                a:"≥0,05м.",
               b:"≥ 0,3м.",
               c:"≥ 0,5м",
               correct:"b",
            },{
                numero:"12",
                pregunta:  "12	Основополагающий принцип при выборе мероприятий по спрямлению аварийного судна и восстановлению его остойчивости? ",
                a:"Любой ценой..",
               b:"Минимальное расходование запаса плавучести. ",
               c:"Увеличение запаса плавучести.",
               correct:"c",
            },
            {
                numero:"13",
                pregunta:  " 13	Длина волны это:  ",
                a:"Расстояние между подошвой и вершиной волны. ",
               b:"Расстояние между двумя смежными одноименными точками волнового профиля.",
               c:" Расстояние, на которое перемещается за одну секунду какая- либо точка профиля.",
               correct:"b",
            },
            {numero:"14",
            pregunta:  " 14	По какой диаграмме можно выбрать скорость и курс для уменьшения качки?. ",
            a:"Фирсова.",
           b:"Ремеза.",
           c:"Мастушкина.",
           correct:"b",

            },{
                numero:"15",
                pregunta:  " 15	 По какому из этих критериев не проверяют общую продольную прочность?",
                a:"По критерию усталости.",
               b:"По предельному состоянию на срез.",
               c:"По максимальной стрелке прогиба.",
               correct:"c",
            },
            {
                numero:"16",
                pregunta:  " 16	Какой из перечисленных документов используется на судах для контроля прочности? ",
                a:"Таблица контроля прочности.",
               b:"Диаграмма контроля прочности.",
               c:" Формулы для расчета напряжений в конструкциях корпуса.",
               correct:"b",
            },
            {
                numero:"13",
                pregunta:  " 13	Длина волны это:  ",
                a:"Расстояние между подошвой и вершиной волны. ",
               b:"Расстояние между двумя смежными одноименными точками волнового профиля.",
               c:" Расстояние, на которое перемещается за одну секунду какая- либо точка профиля.",
               correct:"b",
            },
            {

            }
            
            
            
            
        

    
];
const answerEls=document.querySelectorAll(".answer")
let labels=document.querySelectorAll(".labels")
let a_text =document.getElementById("a_text")
let b_text =document.getElementById("b_text")
let c_text =document.getElementById("c_text")

const submitBtn =document.getElementById("submite")
let currentQuiz = 0 
let score =0
let scoreS=0
let current
let preguntasFalladas =[]
quiz.style.display="none"
boton.addEventListener("click",empezar)
let r = document.getElementById("botoncito")
let seccionBoton=document.getElementById("boton")
seccionBoton.style.display="none"
let venganza=document.getElementById("repetir")
 let html
  
function empezar()
{
    encabezado.style.display="none"
    
    quiz.style.display="flex"
   
    
    loadQuiz()
}
function loadQuiz()
  { 
        deseleccionar()
        const currentQuizData =quizData[currentQuiz]
        questionEl.innerText=currentQuizData.pregunta
        a_text.innerText=currentQuizData.a
        b_text.innerText=currentQuizData.b
        c_text.innerText=currentQuizData.c
       
        
        
   }
function  deseleccionar()
    {
        answerEls.forEach(answerEl => answerEl.checked = false)
    }
function seleccionado()
    {
        let answer
        answerEls.forEach( answerEl =>
            {
                    if(answerEl.checked)
                    {
                    answer = answerEl.id
                    }
                    
            })
            return answer
            
    }
  
    
submitBtn.addEventListener("click",() => 
        {  
             const answer=seleccionado()
                if(answer)
                {
                     if  (answer === quizData[currentQuiz].correct)
                          { 
                            
                            score ++
                            currentQuiz ++
                            }
                            else 
                            { 
                                alert("Двойка правильная" + " " + quizData[currentQuiz].correct)
                                preguntasFalladas.push(quizData[currentQuiz])
                                currentQuiz ++
                            }
                            console.log(preguntasFalladas)
                 }
                     if(currentQuiz < quizData.length)
                        {
                          loadQuiz()
                        }
                        
                     else{
                        quiz.innerHTML= `<h2>Tu respondiste ${score}/${quizData.length} respuestas correctas</h2>
                        <button onclick="location.reload()">Reload</button>
                        `
                        seccionBoton.style.display="flex"
                        }      
        })
        seccionBoton.addEventListener("click",otraVez)