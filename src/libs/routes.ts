import Home from '@/pages/Home';
import Question from '@/pages/Question';
import Register from '@/pages/Register';

export const routes = [
  {
    name: 'Home',
    path: '/',
    exact: true,
    component: Home,
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
