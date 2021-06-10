import emailjs from 'emailjs-com';
import { useThemeState, useSubjectState } from '@/atoms/questionState';
import { useAnswerState } from '@/atoms/answerState';

export function useWriteForm() {
  const [theme] = useThemeState();
  const [subject] = useSubjectState();
  const [answerForm] = useAnswerState();

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
    theme: theme.name,
    subject,
    answer,
  };

  const sendEmail = async (form: any) => {
    await emailjs.send('question_tree', 'template_g9sreii', form);
  };

  return { template, sendEmail };
}
