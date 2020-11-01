import { createReducer, on } from '@ngrx/store';
import { loadUsers, loadUsersSucessfully, loadUsersWithErrors } from '../actions/actions';
import { User } from '../../models/user.models';

export interface State {
    user: User[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const initialState: State = {
    user: [],
    loaded: false,
    loading: false,
    error: null,
}

const _userReducers = createReducer(initialState,
    on(loadUsers, state => ({...state, loading: true})),
    on(loadUsersSucessfully, (state, {users} )=> ({...state, loaded: true, loading: false, users: [...users]})),
    on(loadUsersWithErrors, (state, {payload} )=> ({...state, loaded: false, loading: false, error: payload}))
);

export function userReducers(state, action) {
    return _userReducers(state, action);
}