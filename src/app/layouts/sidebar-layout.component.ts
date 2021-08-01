import { Component, Input, OnInit } from '@angular/core';
import { PathSection } from '../services/path.service';

@Component({
  selector: 'app-sidebar-layout',
  template: `
      <div *ngFor="let nav of paths" class="space-y-1">
        <!-- Current: "bg-gray-100 text-gray-900", Default: "bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900" -->
        <button (click)="toggle(nav)" type="button" class="bg-white text-gray-600 hover:bg-gray-50 hover:text-gray-900 group w-full flex items-center pl-2 pr-1 py-2 text-left text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500" aria-controls="sub-menu-1" aria-expanded="false">
          <span class="flex-1">
            {{ nav.section }}
          </span>
          <!-- Expanded: "text-gray-400 rotate-90", Collapsed: "text-gray-300" -->
          <svg
            [ngClass] = "[nav.selected ? 'text-gray-400 rotate-90': 'text-gray-300',
              'ml-3 flex-shrink-0 h-5 w-5 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150']"
            viewBox="0 0 20 20" aria-hidden="true">
            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
          </svg>
        </button>
        <div *ngIf="nav.selected" class="space-y-1" id="sub-menu-1">
          <a *ngFor="let page of nav.pages" [routerLink]="['', 'docs', nav.key, page.key]" href="#" 
            [ngClass] = "[page.selected? 'bg-gray-100': '', 
            'group w-full flex items-center pl-11 pr-2 py-2 text-sm font-medium text-gray-600 rounded-md hover:text-gray-900 hover:bg-gray-50']">
            {{ page.label }}
          </a>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class SidebarLayoutComponent implements OnInit {
  @Input() paths:PathSection[] = [];

  constructor() { }

  ngOnInit(): void {}

  toggle(path: PathSection) {
    this.paths.forEach(p => {
      if(p.key == path.key) {
        p.selected = !p.selected
      }
    })
  }

}
