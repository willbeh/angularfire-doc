import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PathSection, PathService } from 'src/app/services/path.service';

@Component({
  selector: 'app-p404',
  template: `
    <app-page-layout [paths]="paths">
<div class="bg-white min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
  <div class="max-w-max mx-auto">
    <main class="sm:flex">
      <p class="text-4xl font-extrabold text-indigo-600 sm:text-5xl">404</p>
      <div class="sm:ml-6">
        <div class="sm:border-l sm:border-gray-200 sm:pl-6">
          <h1 class="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">Page not found</h1>
          <p class="mt-1 text-base text-gray-500">Select a page at the navigator</p>
        </div>
      </div>
    </main>
  </div>
</div>

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
  }

}
