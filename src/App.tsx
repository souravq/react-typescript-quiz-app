import React, { useState } from 'react';
import './App.css';
import { QuestionCard } from './components/QuestionCard';

function App() {

  const [loading, setLoading] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(10);
  const [question, setQuestion] = useState<any[]>([]);
  const [answers, setAnswers] = useState([]);
  const [userAnswer, setUserAnswer] = useState("");
  const [gameOver, setGameOver] = useState("");

  const [correctAnswer, setCorrectAnswer] =  useState<any>([]);
  //console.log(correctAnswer);

  const [quizStartLoading, setQuizStartLoading] = useState(true);

  const [index, setIndex] = useState(0);

  const [score, setScore] = useState(0);

  const updateScore = ()=>{
    setScore(score+10);
    console.log("Enter");
  }

  const startQuiz = async() => {
    setLoading(true);
    setQuizStartLoading(false);
    setIndex(0);
    setCorrectAnswer([]);
    setScore(0);

    let data = await fetch("https://opentdb.com/api.php?amount=10&category=18&type=multiple");
    let data_data = await data.json();
    let result_data = data_data.results;
    console.log(result_data);
    const question_arr: any = [];
    const answer_arr: any = [];

    function shuffle(array:any) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    }
    result_data.map((single_data:any)=>{
      question_arr.push(single_data.question);
     
      const answer_data = [...single_data.incorrect_answers];
       answer_data.push(single_data.correct_answer);
       const shuffledArr = shuffle([...answer_data]);
       answer_arr.push(shuffledArr);
       //console.log(single_data.correct_answer);
      //correctAnswer.push(single_data.correct_answer);
      setCorrectAnswer((correctAnswer:any)=>[...correctAnswer,single_data.correct_answer]);
      //setMyArray(oldArray => [...oldArray, newElement]);
      //console.log(correctAnswer);
      
    })
    //console.log(correctAnswer);
    setAnswers(answer_arr);
    //console.log(answers);
    setQuestion(question_arr);
    setLoading(false);
  }
  const checkAnswer = (e : React.MouseEvent<HTMLButtonElement>) =>{

  }
  const nextQuestion = () =>{
    setIndex(index+1);
  }
  return (
    <div className="App" style={{marginTop:"50px"}}>
      <h1>Typescript Quiz App</h1>
      <button onClick={startQuiz} style={{color:"white",backgroundColor:"#bf4ce9", padding:"10px", border:"none", borderRadius:"5px", fontSize:"20px"}}>Start Quiz</button>
      {
        quizStartLoading?<div><br/>Quiz Loading !!!"</div>:
        <div>
             <h2 style={{width:"200px", backgroundColor:"lightgreen", margin:"10px auto", padding:"10px", borderRadius:"8px"}}>Score: {score} </h2> 
            {
              loading?"Questions Loading !!!":
              <>
                <QuestionCard questionNumber={index+1} totalQuestions={10}
                question={question[index]}
                answers={answers[index]} 
                correctAnswer={correctAnswer[index]}
                updateScore = {updateScore}
                />
              </>
            }
            
            <div>
              <br/>
              {
                index<9? <button onClick={nextQuestion} style={{color:"white",backgroundColor:"#2597b4", padding:"8px", border:"none", borderRadius:"5px", fontSize:"17px"}}>Next Question</button>:""
              }
              
            </div>
        </div>
      }
     
      
      
    </div>
  );
}

export default App;
