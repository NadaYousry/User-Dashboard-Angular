import { createReducer, on } from '@ngrx/store';
import { changeView, getUserDetails, getUsersList } from './user.actions';
import { UsersStoreType } from 'src/app/modules/users/interfaces/users';

export const initialState: UsersStoreType = {
  usersList: [],
  userDetails: { id: 0, first_name: '', last_name: '', avatar: '', email: '' },
  view: 'grid',
};

export const usersReducer = createReducer(
  initialState,
  on(getUsersList, (state, action) => {
    return {
      ...state,
      usersList: action.usersList,
    };
  }),

  on(getUserDetails, (state, action) => {
    return {
      ...state,
      userDetails: action.userDetails,
    };
  }),

  on(changeView, (state, action) => {
    return {
      ...state,
      view: action.view,
    };
  })
);
