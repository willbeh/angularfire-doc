import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PathSection, PathService } from 'src/app/services/path.service';
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
  paths:PathSection[] = []
  path = '';
  constructor(private routes: ActivatedRoute, private pathService: PathService) { }

  ngOnInit(): void {
    this.paths = this.pathService.paths;

    this.routes.url.subscribe(urls => {
      this.path = `${environment.path}/assets`
      urls.forEach(url => {
        // this.paths = this.paths.map(path => ({...path, selected: false}));
        this.paths = this.paths.map(path => {
          if(path.key === url.path.replace('.md', '')) {
            return {...path, selected: true}
          } else {
            return path;
          }
        })
        this.path += `/${url.path.replace('.md', '')}`
      })
      this.path += '.md';
    })
  }

}
