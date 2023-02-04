const questions =[{
    'que':"which of the following is markup language ?",
     'a': "html",
     'b':"css",
     'c':"javascript",
     'd':"php",
     'correct':"a",

},
{
    'que':'which is styling language ?',
 'a': 'html',
 'b':'css',
 'c':'javascript',
 'd':'php',
 'correct':'b',
},
{
    'que':'which of the following is scripting language?',
 'a': 'html',
 'b':'css',
 'c':'javascript',
 'd':'php',
 'correct':'c',
}
]
let index = 0;
let total=questions.length;
let right=0;
let wrong=0;
const quesBox=document.getElementById("quesBox")
const optionInput=document.querySelectorAll('.options')
const loadQuestion = () => {
   if(index === total){
     return endQuiz()
   }
    reset()
const data=questions[index]
quesBox.innerText=`${index+1}) ${data.que}`;
optionInput[0].nextElementSibling.innerText=data.a;
optionInput[1].nextElementSibling.innerText=data.b;
optionInput[2].nextElementSibling.innerText=data.c;
optionInput[3].nextElementSibling.innerText=data.d;


}
const submitQuiz = () =>{
    const data=questions[index];
    const ans= getAnswer()
    if(ans == data.correct){
        right++;
    }else{
        wrong++;
    }

    index++;
    loadQuestion();
    return;

} 


const getAnswer= () =>{
    let answer;
    optionInput.forEach(
        (input) => {
            if(input.checked){
                answer= input.value;
            
            }
        }

    ) 
    return answer;
}
 const reset = () => {
    optionInput.forEach(
        (input) => {
            input.checked=false
     }
    )
}

const endQuiz =() =>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center"> 
    <h3>thank you for playing</h3>
    <h2> ${right} / ${total} are correct </h2>
</div>
    `
}
loadQuestion();