import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathService } from 'src/app/services/path.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  template: `
  <app-page-layout [paths]="paths">
    <markdown [src]="path"></markdown>
  </app-page-layout>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  paths:any[] = []
  path = '';
  constructor(private routes: ActivatedRoute, private pathService: PathService) { }

  ngOnInit(): void {
    this.paths = this.pathService.paths;
    this.routes.paramMap.subscribe(routes => {
      // console.log(routes);
    })

    this.routes.url.subscribe(urls => {
      this.path = `${environment.path}/assets/docs`
      urls.forEach(url => {
        console.log('url', url.path)
        this.path += `/${url.path}`
      })
      this.path += '.md';
      console.log(this.path)
    })

    console.log(this.routes.snapshot.url)
  }

}
