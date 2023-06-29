import React, { useState } from 'react'
import Questions from '../Quizes/Questions'
import quizData from '../../staticData/data'

function Home() {

const [questions, setQuestions] = useState(quizData)


  return (
   <main>
   


<div className='container'>
   <h3> Quiz master <br/> app</h3> 
   <section>
{
questions.map((question) =>{

    return(
<Questions   key={question.id}{...question}/>

    )
} )




}








   </section>
</div>





   </main>
  )
}

export default Home
