import emailjs from 'emailjs-com';
import { useThemeState, useSubjectState, useAnswerFormState } from '@/atoms/questionState';

export function useWriteForm() {
  const [theme] = useThemeState();
  const [subject] = useSubjectState();
  const [answerForm] = useAnswerFormState();

  const answer = answerForm
    .map(
      ({ q, a }) => `
질문: ${q}
<br />
답변: ${a}
`,
    )
    .join('<br /><br />');

  const template = {
    theme,
    subject,
    answer,
  };

  const sendEmail = async (form: any) => {
    await emailjs.send('question_tree', 'template_g9sreii', form);
  };

  return { template, sendEmail };
}
