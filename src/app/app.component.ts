import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { hlmH1 } from '@spartan-ng/ui-typography-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HlmButtonDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spartan-ng-ui';
  hlmH1 = hlmH1;
}
