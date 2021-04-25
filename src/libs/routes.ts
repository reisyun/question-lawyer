import Question from '@/pages/Question';
import Register from '@/pages/Register';

export const routes = [
  {
    name: 'Question',
    path: '/',
    exact: true,
    component: Question,
  },
  {
    name: 'Register',
    path: '/register',
    exact: true,
    component: Register,
  },
];
