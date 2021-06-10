// import emailjs from 'emailjs-com';
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
    Email.send({
      Host: 'smtp.elasticemail.com',
      Username: 'reisyun7@gmail.com',
      Password: '333DED114BDF5B58E94F6704AD0A3424A9C7',
      To: 'reisyun7@gmail.com',
      From: 'reisyun7@gmail.com',
      Subject: 'This is the subject',
      Body: 'And this is the body',
    }).then(message => alert(message));
    // await emailjs.send('question_tree', 'template_g9sreii', form);
  };

  return { template, sendEmail };
}
