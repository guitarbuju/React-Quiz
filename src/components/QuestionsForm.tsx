import {ChangeEvent, FormEvent, useEffect, useState} from "react"
import { questions } from "@/stuff";
import {Answer, Question} from "@/models/Question.ts"
import Header from "@/components/Header";
import FinalScoreModal, { useFinalScoreModal } from "@/features/questions/components/FinalScoreModal";


const QuestionsForm = () => {
  const finalScoreModal = useFinalScoreModal()
  const [showScoreBtn, setShowScoreBtn] = useState(false)
  const [answerValues, setAnswerValues] = useState<Record<Question['id'], Answer> | undefined>();
  const [totalResult, setTotalResult] = useState(0);
  const numberOfTotalQuestions = questions.length

  // Hide score button when the answers change
  useEffect(() => {
    setShowScoreBtn(false)
  }, [answerValues])

  // Collects all the selected answers into an object
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>, question: Question, answer: Answer) => {
    if (event.target.value === "on") {
      setAnswerValues({
        ...answerValues,
        [question.id]: answer
      });
    }
  };

  // Collects all the answers and submits them to perform total score calculation
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  
    if (!answerValues) return // Set up strategy for all questions being answered  

    const answeredQuestions = Object.keys(answerValues).length
    const hasCompletedAllQuestions = answeredQuestions === numberOfTotalQuestions

  // Perform total score calculation 
    let totalCharge = 0;

    for (const questionId in answerValues) {
      const finalAnswer = answerValues[questionId];
      totalCharge += finalAnswer.charge;
    }
  //Takes care of unanswered question avoidance
    if (hasCompletedAllQuestions) {
      setShowScoreBtn(true)
      setTotalResult(totalCharge);
    } else {
      alert('SORRY YOU NEED TO COMPLETE ANSWERING ALL OF THE QUESTIONS!!!')
    }
  };
  
  //Toggles modal showing results after all question are answered
  const handleShowModal = () => {
    finalScoreModal.openModal({totalResult, answerValues})
    // const modal = document.getElementById("my_modal_2")! as HTMLDialogElement
    // modal.showModal()
  }

  return (
    <div>
      <Header/>
      <form onSubmit={handleSubmit}>
     
        {questions.map((question) => (
          <div key={question.id} className="mb-8">
            <div className="flex gap-2 align-middle justify-start mb-2 text-2xl font-bold text-base-400">
              <span>{question.id}</span>
              <h1>{question.question}</h1>
            </div>

            <ul className="flex gap-2 flex-col">
              {question.answers.map((answer) => (
                <li key={answer.id} className="gap-4 flex">
                  <input
                    name={`question-${question.id}`}
                    type="radio"
                    onChange={(e) => handleRadioChange(e, question, answer)}
                    className="radio radio-accent accent-focus"
                  />
                  <span>{answer.answer}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <button
          type="submit"
          className="btn btn-accent mb-4"
        >
          Submit
        </button>
      </form>
      {answerValues && showScoreBtn ? (
        <div>
          <button
            className="btn btn-info"
            onClick={handleShowModal}
          >
            Check Your Score
          </button>
        </div>
      ) : null}
      <FinalScoreModal />
    </div>
  );
};

export default QuestionsForm;
