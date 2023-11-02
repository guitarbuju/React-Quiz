import React from 'react'

const Modal = () => {
  return (
    <div>
    <button
      className="btn btn-info"
      onClick={handleShowModal}
    >
      Check Your Score
    </button>
    <dialog id="my_modal_2" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">
          Your score is :{totalResult}
        </h3>
        <ul>
          {Object.entries(answerValues).map(([questionId, answer]) => (
            <li key={questionId} className={answer.charge ? 'bg-yellow-400': ''}>
              Question {questionId}: Carga={answer.charge}
            </li>
          ))}
        </ul>

        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  </div>
) : null}
</div>
  )
}

export default Modal