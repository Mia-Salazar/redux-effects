import { createReducer, on } from '@ngrx/store';
import { loadUser, loadUserSucessfully, loadUserWithErrors } from '../actions/actions';
import { User } from '../../models/user.models';

export interface UserState {
    user: User;
    loaded: boolean;
    loading: boolean;
    error: any;
    id: string;
}

export const initialUserState: UserState = {
    id: null,
    user: [],
    loaded: false,
    loading: false,
    error: null,
}

const _singleUserReducers = createReducer(initialUserState,
    on(loadUser, (state, {id}) => ({...state, loading: true, id: id})),
    on(loadUserSucessfully, (state, {user} )=> ({...state, loaded: true, loading: false, user: {...user}})),
    on(loadUserWithErrors, (state, {payload} )=> ({...state, loaded: false, loading: false, error: {
        url: payload.url,
        name: payload.name,
        message: payload.message
        }
    }))
);

export function singleUserReducers(state, action) {
    return _singleUserReducers(state, action);
}