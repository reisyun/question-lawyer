import Info from '@/pages/Info';
import Theme from '@/pages/Theme';
import Subject from '@/pages/Subject';
import Question from '@/pages/Question';
import Register from '@/pages/Register';
import Upload from '@/pages/Upload';
import NotFound from '@/pages/NotFound';

export const routes = [
  {
    name: 'Info',
    path: '/',
    exact: true,
    component: Info,
  },
  {
    name: 'Theme',
    path: '/theme',
    exact: true,
    component: Theme,
  },
  {
    name: 'Subject',
    path: '/subject',
    exact: true,
    component: Subject,
  },
  {
    name: 'Question',
    path: '/question',
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
  {
    name: 'NotFound',
    path: '*',
    exact: false,
    component: NotFound,
  },
];
