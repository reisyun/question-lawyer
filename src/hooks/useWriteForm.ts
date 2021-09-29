// import axios from 'axios';
import { send } from 'emailjs-com';
import { config } from '@/libs/config';
import { useThemeState, useSubjectState } from '@/atoms/questionState';
import { useAnswerState, useFileState, AnswerType } from '@/atoms/answerState';

interface FormData {
  theme: string;
  subject: string;
  answers: AnswerType[];
  phone: string;
  email: string;
  files: File[];
}
const createMailBody = (form: FormData) => {
  const { theme, subject, answers, phone, email, files } = form;

  const answerHTML = answers
    .map(({ q, a }) => {
      const isAnswers = a.split(/&/g);
      return `질문: ${q}<br />답변: ${
        isAnswers.length === 1 ? a : `<li>${isAnswers.join('</li><li>')}</li>`
      }`;
    })
    .join('<br /><br />');

  const mailBody = `
  ${theme !== subject ? `<h3>${theme} | ${subject}</h3>` : `<h3>${theme}</h3>`}
  <strong>연락처: ${phone}</strong><br/>
  ${email && `<strong>이메일: ${email}</strong>`}
  <br />
  <br />
  <div>${answerHTML}</div>
  `;

  return mailBody;
};

export function useWriteForm() {
  const [theme] = useThemeState();
  const [subject] = useSubjectState();
  const [answers] = useAnswerState();
  const [files] = useFileState();

  const sendEmail = async (form: any) => {
    const { phone, email } = form;

    const body = createMailBody({
      theme: theme?.name,
      subject,
      answers,
      phone,
      email,
      files,
    });

    await send(
      config.EMAILJS_SERVICE_ID,
      config.EMAILJS_TEMPLATE_ID,
      {
        phone,
        body,
      },
      config.EMAILJS_USER_ID,
    );
  };

  return sendEmail;
}

// axios.defaults.baseURL = 'https://lawyer-question-tree.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:4000';

// const writeFormData = (form: any) => {
//   const { phone, email, theme, subject, answer } = form;
//   const files = form.files as File[];

//   const fd = new FormData();
//   fd.append('phone', phone);
//   fd.append('email', email);
//   fd.append('theme', theme);
//   fd.append('subject', subject);
//   fd.append('answer', answer);
//   // 리스트 형식으로 formData 담을 수 없음
//   files.map((file: File) => fd.append(`files`, file));

//   return fd;
// };

// const postFormDataToServer = async (data: FormData) => {
//   await axios.post('/send', data);
// };

// await postFormDataToServer(formData).then(console.log).catch(console.error);
