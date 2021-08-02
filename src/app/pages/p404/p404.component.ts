import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PathSection, PathService } from 'src/app/services/path.service';

@Component({
  selector: 'app-p404',
  template: `
    <app-page-layout [paths]="paths">
    </app-page-layout>
  `,
  styles: [
  ]
})
export class P404Component implements OnInit {
  paths:PathSection[] = []

  constructor(private pathService: PathService, private title: Title) { }

  ngOnInit(): void {
    this.paths = this.pathService.paths;
    this.title.setTitle('Page Not Found - AngularFire Docs')
  }

}
