import { CommonModule } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  @Input({ required: true }) user!: User;
  @Input({ required: true }) selected!: boolean;

  // id = input.required<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // @Output() select = new EventEmitter();
  select = output<string>();
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // immagePath = computed(() => 'assests/users/' + this.selectedUser().avatar);
  onUserclick() {
    this.select.emit(this.user.id);
    // const randomIndex1 = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex1]);
  }
}
