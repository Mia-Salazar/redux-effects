import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.models';
import { loadUser } from 'src/app/store/actions/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  id: string;
  user: User;

  constructor(private router: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getParams();
    this.getUser();
  }

  getParams(){
    this.router.params.subscribe(params => {
      console.log(params)
      this.id = params.id;
    })
  }

  getUser(){
    this.store.dispatch(loadUser({id: this.id}));
    this.store.select('user').subscribe(
      user =>{
        this.user = user;
      }
    )
  }

}
