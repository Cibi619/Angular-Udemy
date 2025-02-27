import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  userName: string | undefined;
  userId: string | undefined;
  selectedUserId?: string;

  onSelectUser(id: string) {
    console.log('ID of selected user: ', id);
    const user = this.users.find((user) => user.id === id);
    this.userName = user?.name;
    this.userId = user?.id;
    this.selectedUserId = user?.id;
  }
}
