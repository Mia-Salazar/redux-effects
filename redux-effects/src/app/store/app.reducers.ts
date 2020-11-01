import { ActionReducerMap } from '@ngrx/store';
import * as user from './reducers/reducers';

export interface AppState {
    users: user.State
}

export const appReducers: ActionReducerMap<AppState> = {
    users: user.userReducers
}