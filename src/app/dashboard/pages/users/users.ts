import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UsersService } from '@services/users.service';
import { Title } from '@shared/title/title';

@Component({
  selector: 'app-users',
  imports: [Title, RouterLink],
  templateUrl: './users.html',
})
export default class Users {
  public usersService = inject(UsersService);
}
