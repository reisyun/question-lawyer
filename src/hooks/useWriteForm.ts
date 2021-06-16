import emailjs from 'emailjs-com';
import { config } from '@/libs/config';
import { useThemeState, useSubjectState } from '@/atoms/questionState';
import { useAnswerState, useFileState } from '@/atoms/answerState';

const toBase64 = (file: File) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

export function useWriteForm() {
  const [theme] = useThemeState();
  const [subject] = useSubjectState();
  const [answerForm] = useAnswerState();
  const [file] = useFileState();
  const files = file.map(f => toBase64(f));

  const answer = answerForm
    .map(
      ({ q, a }) => `
질문: ${q}
<br />
답변: ${a || 'skip'}
`,
    )
    .join('<br /><br />');

  const template = {
    theme: theme?.name,
    subject,
    answer,
  };

  const sendEmail = async (form: any) => {
    const body = `
<h3>${theme?.name} | ${subject}</h3>
<strong>연락처: ${form.phone}</strong><br/>
<strong>이메일: ${form.email}</strong>
<br />
<br />
<div>${answer}</div>
`;

    await emailjs.send(config.EMAILJS_SERVICE_ID, config.EMAILJS_TEMPLATE_ID, {
      body,
      phone: form.phone,
    });
  };

  return { template, sendEmail };
}
