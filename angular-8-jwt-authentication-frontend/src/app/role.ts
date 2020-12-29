import {User} from './user';
import {Menu} from './menu';

export class Role {
  id: number;
  name: string;
  menus: Menu[];
  isChecked: false;
}
