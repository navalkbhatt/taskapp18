import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { CommonModule } from '@angular/common';
import { UsertaskComponent } from './usertask/usertask.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    UserComponent,
    UserComponent,
    CommonModule,
    UsertaskComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  onSelectUser(id: string) {
    this.selectedUserId = id;
    console.log(`selected user id ${id} `);
  }
  title = 'amazonapp';
  users = DUMMY_USERS;
  selectedUserId!: string;
  get selectedUser() {
    return DUMMY_USERS.find((user) => user.id == this.selectedUserId);
  }
}
