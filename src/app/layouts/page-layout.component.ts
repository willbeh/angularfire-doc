import { Component, Input, OnInit } from '@angular/core';
import { PathSection } from '../services/path.service';

@Component({
  selector: 'app-page-layout',
  template: `
    <!-- This example requires Tailwind CSS v2.0+ -->
<div class="h-screen flex overflow-hidden bg-white">
  <!-- Off-canvas menu for mobile, show/hide based on off-canvas menu state. -->
  <div *ngIf="isOpen" class="fixed inset-0 flex z-40 md:hidden" role="dialog" aria-modal="true">
    <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    -->
    <div class="fixed inset-0 bg-gray-600 bg-opacity-75" aria-hidden="true"></div>

    <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    -->
    <div class="relative flex-1 flex flex-col max-w-xs w-full bg-white">
      <!--
        Close button, show/hide based on off-canvas menu state.

        Entering: "ease-in-out duration-300"
          From: "opacity-0"
          To: "opacity-100"
        Leaving: "ease-in-out duration-300"
          From: "opacity-100"
          To: "opacity-0"
      -->
      <div class="absolute top-0 right-0 -mr-12 pt-2">
        <button (click)="toggle()" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
          <span class="sr-only">Close sidebar</span>
          <!-- Heroicon name: outline/x -->
          <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div class="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
        <!-- <div class="flex-shrink-0 flex items-center px-4">
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
        </div> -->
        <nav class="mt-5 px-2 space-y-1">
          <app-sidebar-layout [paths]="paths"></app-sidebar-layout>
        </nav>
      </div>
      <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
        <a href="#" class="flex-shrink-0 group block">
          <div class="flex items-center">
            <div class="ml-3">
              <p class="text-base font-medium text-gray-700 group-hover:text-gray-900">
                willbeh
              </p>
            </div>
          </div>
        </a>
      </div>
    </div>

    <div class="flex-shrink-0 w-14">
      <!-- Force sidebar to shrink to fit close icon -->
    </div>
  </div>

  <!-- Static sidebar for desktop -->
  <div class="hidden md:flex md:flex-shrink-0">
    <div class="flex flex-col w-64">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div class="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
        <div class="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
          <!-- <div class="flex items-center flex-shrink-0 px-4">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg" alt="Workflow">
          </div> -->
          <nav class="mt-5 flex-1 px-2 bg-white space-y-1">
            <app-sidebar-layout [paths]="paths"></app-sidebar-layout>
          </nav>
        </div>
        <div class="flex-shrink-0 flex border-t border-gray-200 p-4">
          <a href="#" class="flex-shrink-0 w-full group block">
            <div class="flex items-center">
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                  BWL
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col w-0 flex-1 overflow-hidden">
    <div class="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
      <button (click)="toggle()" class="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
        <span class="sr-only">Open sidebar</span>
        <!-- Heroicon name: outline/menu -->
        <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
    <main class="flex-1 relative z-0 overflow-y-auto focus:outline-none">
      <div class="p-4">
        <ng-content></ng-content>
      </div>
    </main>
  </div>
</div>

  `,
  styles: [
  ]
})
export class PageLayoutComponent implements OnInit {
  @Input() paths:PathSection[] = [];

  isOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.isOpen = !this.isOpen;
  }

}
