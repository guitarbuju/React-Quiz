import { ModalBase } from "@/features/modal/components";
import { useModal } from "@/features/modal/hooks";
import { Answer } from "@/models/Question";

export interface FinalScoreModalPayload {
  totalResult: number;
  answerValues?: Record<number, Answer>;
}

const FinalScoreModal = () => {
  const modal = useFinalScoreModal();
  if (!modal?.data) return null

  const { totalResult, answerValues } = modal.data;

  return (
    <ModalBase id={FINAL_SCORE_MODAL_ID}>
      <ModalBase.Title>Your score is :{totalResult}</ModalBase.Title>

      {answerValues ? (
        <ModalBase.Body>
          <ul>
            {Object.entries(answerValues).map(([questionId, answer]) => (
              <li
                key={questionId}
                className={answer.charge ? "bg-yellow-400" : ""}
              >
                Question {questionId}: Carga={answer.charge}
              </li>
            ))}
          </ul>
        </ModalBase.Body>
      ) : null}

      <ModalBase.Footer>
        <ModalBase.Button>Aceptar</ModalBase.Button>
      </ModalBase.Footer>
    </ModalBase>
  );
};

export const useFinalScoreModal = () =>
  useModal<FinalScoreModalPayload>({ id: FINAL_SCORE_MODAL_ID });

export const FINAL_SCORE_MODAL_ID = "final-score";

export default FinalScoreModal;
