import axios from 'axios';
import { useThemeState, useSubjectState } from '@/atoms/questionState';
import { useAnswerState, useFileState } from '@/atoms/answerState';

axios.defaults.baseURL = 'https://lawyer-question-tree.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4000';

const writeFormData = (form: any) => {
  const { phone, email, theme, subject, answer } = form;
  const files = form.files as File[];

  const fd = new FormData();
  fd.append('phone', phone);
  fd.append('email', email);
  fd.append('theme', theme);
  fd.append('subject', subject);
  fd.append('answer', answer);
  // 리스트 형식으로 formData 담을 수 없음
  files.map((file: File) => fd.append(`files`, file));

  return fd;
};

const postFormDataToServer = async (data: FormData) => {
  await axios.post('/send', data);
};

export function useWriteForm() {
  const [theme] = useThemeState();
  const [subject] = useSubjectState();
  const [answerForm] = useAnswerState();
  const [files] = useFileState();

  const answerHTML = answerForm
    .map(({ q, a }) => `질문: ${q}<br />답변: ${a || 'skip'}`)
    .join('<br /><br />');

  const sendEmail = async (form: any) => {
    const { phone, email } = form;

    const formData = writeFormData({
      theme: theme?.name,
      subject,
      answer: answerHTML,
      phone,
      email,
      files,
    });

    // eslint-disable-next-line no-console
    await postFormDataToServer(formData).then(console.log).catch(console.error);
  };

  return sendEmail;
}
