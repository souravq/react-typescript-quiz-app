import React, { useEffect, useState } from 'react'

type QuestionCardProps={
    questionNumber: number,
    totalQuestions: number,
    question: string,
    answers: string[],
    correctAnswer: string,
    updateScore: any,
}
export const QuestionCard = ({questionNumber,totalQuestions,question,answers,correctAnswer,updateScore}:QuestionCardProps) => {
  
    const [userClickedAns, setUserClickedAns] = useState<string[]>([]);
    const [userClickedRightAns, setUserClickedRightAns] = useState<string[]>([]);
    const [flag, setFlag] = useState(0);

    let buttonHandalor = (data:string)=>{
        //e.preventDefault();
        //let user_ans = (e.target as HTMLInputElement).innerText;
        let user_ans = data;
        if(user_ans!==correctAnswer.trim()){
            setFlag(flag+1);
            setUserClickedAns([...userClickedAns,user_ans]);
        }else{
            if(flag===0){
                console.log("Got 10 Marks");
                updateScore();
            }
            setFlag(flag+1);
            setUserClickedRightAns([...userClickedRightAns,user_ans]);
        
        }
        
    }
    useEffect(()=>{
        setUserClickedAns([]);
        setUserClickedRightAns([]);
        setFlag(0);
    },[question]);

  
    return (
    <div style={{width: "500px", backgroundColor:"lightcyan", margin:"50px auto",padding:"30px"}}>
        <div className="questionNumberDiv">
            <h4>{questionNumber}/{totalQuestions} </h4>
        </div>
        <div dangerouslySetInnerHTML={{__html: question}} style={{fontSize:"25px"}}/>
        
        <div className='answerOptionDiv' style={{marginTop:"10px"}}>
            {
                answers.map((data,index)=>{
                    return(
                            <>
                            {
                                userClickedAns.includes(data)?(
                                    <div key = {index} >
                                        <button onClick={()=>buttonHandalor(data)} dangerouslySetInnerHTML={{__html: data}} style={{color:"white",backgroundColor:"#eb3127", padding:"8px 15px", border:"none", borderRadius:"5px", fontSize:"17px",marginTop:"5px"}}/>
                                    </div>

                                ):( 
                                    userClickedRightAns.includes(data.trim())?(
                                        <div key = {index} >
                                            <button onClick={()=>buttonHandalor(data)} dangerouslySetInnerHTML={{__html: data}} style={{color:"white",backgroundColor:"#6acd83", padding:"8px 15px", border:"none", borderRadius:"5px", fontSize:"17px",marginTop:"5px"}}/>
                                        </div>
    
                                    ):( 
                                        <div key = {index} >
                                            <button onClick={()=>buttonHandalor(data)} dangerouslySetInnerHTML={{__html: data}} style={{color:"black",backgroundColor:"lightgray", padding:"8px 15px", border:"none", borderRadius:"5px", fontSize:"17px", marginTop:"5px"}}/>
                                        </div>
                                    ) 
                                ) 
                            }
                            
                           
                               
                            </>
                                
                                
                            
                    )
                })
            }

        </div>
    </div>
  )
}
