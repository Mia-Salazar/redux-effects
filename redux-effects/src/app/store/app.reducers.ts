import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './reducers/reducers';

export interface AppState {
    users: reducers.State,
    user: reducers.UserState
}

export const appReducers: ActionReducerMap<AppState> = {
    users: reducers.userReducers,
    user: reducers.singleUserReducers
}