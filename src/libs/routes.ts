import Info from '@/pages/Info';
import Choice from '@/pages/Choice';
import Question from '@/pages/Question';
import Register from '@/pages/Register';
import Upload from '@/pages/Upload';

export const routes = [
  {
    name: 'Info',
    path: '/',
    exact: true,
    component: Info,
  },
  {
    name: 'Choice',
    path: '/choice',
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
    name: 'Upload',
    path: '/upload',
    exact: true,
    component: Upload,
  },
  {
    name: 'Register',
    path: '/register',
    exact: true,
    component: Register,
  },
];
