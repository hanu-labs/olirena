import Home from './views/Home';
import Turnos from './views/Turnos';
import Donde from './views/Donde';

const routes = [
  {
    path: '/',
    exact: true,
    title: 'Inicio',
    component: Home,
  },
  // {
  //   path: '/turnos',
  //   title: 'Reservá tu turno',
  //   component: Turnos,
  // },
  {
    path: '/donde',
    title: 'Como llegar',
    component: Donde,
  }
]
export default routes;
