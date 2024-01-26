import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/modules/users/interfaces/users';

export const getUsersList = createAction(
  '[usersList] Get Users List',
  props<{ usersList: User[] }>()
);
export const getUserDetails = createAction(
  '[userDetails] Get User Details',
  props<{ userDetails: User }>()
);

export const changeView = createAction(
  '[usersListView] Change Users List View',
  props<{ view: string }>()
);
