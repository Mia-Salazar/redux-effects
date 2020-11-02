import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.models';
import { UsersService } from 'src/app/services/users.service';
import { loadUsers } from 'src/app/store/actions/actions';
import { AppState } from 'src/app/store/app.reducers';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  userList: User[];
  constructor(private usersService: UsersService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    // this.usersService.getUsers().subscribe(
    //   r =>{
    //     this.userList = r;
    //     console.log(this.userList)
    //   } 
    // )
    this.store.dispatch(loadUsers());
    this.store.select('users').subscribe(users =>{
      this.userList = users.users;
      console.log(users, 'html');
    });
  }

}
