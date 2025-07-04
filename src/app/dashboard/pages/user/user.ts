import { Component, computed, inject } from '@angular/core';

import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';

import { UsersService } from '@services/users.service';
import { Title } from '@shared/title/title';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user',
  imports: [Title],
  template: `
    <app-title [title]="titleLabel()" />

    @if( user() ) {
    <section>
      <img [srcset]="user()!.avatar" [alt]="user()!.first_name" />

      <div>
        <h3>{{ user()?.first_name }} {{ user()?.last_name }}</h3>
        <p>{{ user()?.email }}</p>
      </div>
    </section>

    } @else {
    <p>Loading information</p>
    }
  `,
})
export default class UserC {
  private route = inject(ActivatedRoute);
  private usersService = inject(UsersService);

  // public user = signal<User| undefined>(undefined);
  public user = toSignal(
    this.route.params.pipe(
      switchMap(({ id }) => this.usersService.getUserById(id))
    )
  );

  public titleLabel = computed(() => {
    if (this.user()) {
      return `User Information: ${this.user()?.first_name} ${
        this.user()?.last_name
      } `;
    }

    return 'User Information';
  });

  // constructor() {
  //   this.route.params.subscribe(params => {
  //     console.log({params});
  //   })
  // }
}
