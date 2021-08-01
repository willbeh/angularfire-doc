import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { MarkdownService } from 'ngx-markdown';
import { PathSection, PathService } from 'src/app/services/path.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  template: `
  <app-page-layout [paths]="paths">
    <markdown [src]="filepath"></markdown>
  </app-page-layout>
  `,
  styles: []
})
export class HomeComponent implements OnInit {
  paths:PathSection[] = []
  filepath = '';
  constructor(private routes: ActivatedRoute, private pathService: PathService, private title: Title, private markdownService: MarkdownService) { }

  ngOnInit(): void {
    this.paths = this.pathService.paths;
    let shortpath = '';
    let pageName = ''

    this.routes.url.subscribe(urls => {
      this.filepath = `${environment.path}/assets`

      if(urls[1]) {
        shortpath = `${urls[0].path}/${urls[1].path}/`
        this.paths = this.paths.map(path => {
          if(path.key === urls[1].path) {
            pageName = path.section
            path.pages = path.pages.map(page => {
              if(urls[2] && page.key === urls[2].path.replace('.md', '')) {
                pageName += ` - ${page.label}`
                return {...page, selected: true}
              } else {
                return {...page, selected: false}
              }
            })
            this.title.setTitle(`${pageName} - AngularFire Docs`)
            return {...path, selected: true}
          } else {
            path.pages = path.pages.map(page => ({...page, selected: false}))
            return {...path, selected: false}
          }
        })
      }

      urls.forEach(url => {
        const currentPath = url.path.replace('.md', '')
        this.filepath += `/${currentPath}`
      })
      this.filepath += '.md';
    })

    this.markdownService.renderer.link = (href, title, text) => {
      if(href) {
        if(href.startsWith('http')) {
          return `<a href="${href}" target="_blank">${text}</a>` 
        } else if(!href.includes('docs/')) {
          return `<a href="${environment.path}/${shortpath}${href.replace('.md', '')}">${text}</a>` 
        }else {
          return `<a href="${environment.path}/${href.replace('.md', '')}">${text}</a>` 
        }
      } else {
        return text
      }
      
        
    };
  }

}
