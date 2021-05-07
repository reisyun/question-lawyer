import Info from '@/pages/Info';
import Choice from '@/pages/Choice';
import Question from '@/pages/Question';
import Register from '@/pages/Register';

export const routes = [
  {
    name: 'Info',
    path: '/',
    exact: true,
    component: Question,
  },
  {
    name: 'Choice',
    path: '/question',
    exact: true,
    component: Choice,
  },
  {
    name: 'Question',
    path: '/question/:subject',
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
