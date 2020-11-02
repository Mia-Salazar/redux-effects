import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType }from '@ngrx/effects';
import { mergeMap, tap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers, loadUsersSucessfully, loadUsersWithErrors } from '../actions/actions';

@Injectable()

export class userEffects {
    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ){}

    loadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType(loadUsers),
            tap(data => console.log('effect',data)),
            mergeMap(
                () => this.usersService.getUsers().pipe(
                    tap(data => console.log('effect user', data)),
                    map(users => loadUsersSucessfully({users: users})),
                    catchError(err => of(loadUsersWithErrors({payload: err})))
                )
            )
        )
    )
}