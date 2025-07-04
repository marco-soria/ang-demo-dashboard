import { Component, signal } from '@angular/core';

import { Title } from '@shared/title/title';

type Grade = 'A' | 'B' | 'F';

@Component({
  standalone: true,
  imports: [Title],
  templateUrl: './control-flow.html',
  styles: ``,
})
export default class ControlFlow {
  public showContent = signal(false);
  public grade = signal<Grade>('A');

  public frameworks = signal(['Angular', 'Vue', 'Svelte', 'Qwik', 'React']);
  public frameworks2 = signal([]);

  public toggleContent() {
    this.showContent.update((value) => !value);
  }
}
