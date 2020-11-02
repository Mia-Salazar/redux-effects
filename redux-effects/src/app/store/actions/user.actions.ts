import { createAction, props } from '@ngrx/store';
import { User } from '../../models/user.models';

export const loadUser = createAction(
    'loadUser',
    props<{id: string}>()
);

export const loadUserSucessfully = createAction(
    'loadUserSucessfully',
    props<{user: User}>()
);

export const loadUserWithErrors = createAction(
    'loadUserWithErrors',
    props<{payload: any}>()
);