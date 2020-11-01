import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.models';

export const loadUsers = createAction(
    'loadUsers');

export const loadUsersSucessfully = createAction(
    'loadUsersSucessfully',
    props<{users: User[]}>()
);

export const loadUsersWithErrors = createAction(
    'loadUsersWithErrors',
    props<{payload: any}>()
);