import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-about',
  template: `
    <p>
      about works!
    </p>
    <markdown [src]="path"></markdown>
  `,
  styles: [
  ]
})
export class AboutComponent implements OnInit {
  path = `${environment.path}/assets/docs/install-and-setup.md`

  constructor() { }

  ngOnInit(): void {
  }

}
