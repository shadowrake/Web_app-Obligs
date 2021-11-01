import { useEffect, useState } from 'react'
import axios from 'axios'


const Quiz = () => {
    const [quiz, setQuiz] = useState([])
    const [error, setError] = useState(null)
    const [question, setQuestion] = useState('')



    const handleQuestionChange = (event) => {
        setQuestion(event.target.value)
    }

    const createQuiz = async () => {

        try {

            const response = await axios.post('/api/quiz', { question })

            if(response?.data?.success){
            setQuiz(response.data.data)

            }
        }catch(err){

            console.log(err?.response?.data?.error)

        }
    }

    const getQuizzes = async () => {
        try {

          const response = await axios.get('/api/quiz')

          if (response?.data?.success) {

            setQuiz(response.data.data)
          }
        } catch (error) {

          console.log(error?.response?.data)
        }
      }

    const handlesubmit = async (event) => {
        
        event.preventDefault()

        await createQuiz();

    };

    if(error) {
        return <p>Noe gikk galt: {error}</p>
    }

    useEffect(() => {
        getQuizzes()
      }, [])

  return (
    <main>
        <h1>Quiz</h1>
        <form onSubmit={handlesubmit}>

            <input
            id="question"
            type = "text"
            name = "question"
            value = {question}
            onChange = {handleQuestionChange}
            />
            <button type = "submit">Send</button>
        </form>
        <section>
            {JSON.stringify(quiz)}
        </section>
    </main>
  )
}

export default Quiz
