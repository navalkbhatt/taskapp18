import { Component, signal } from '@angular/core';
import { single } from 'rxjs';
import { DUMMY_USERS } from '../dummy-users';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  selectuser = signal(DUMMY_USERS[0]);
}
