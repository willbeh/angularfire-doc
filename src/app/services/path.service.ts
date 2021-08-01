import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PathService {
  paths: PathSection[] = [
    { section: 'Getting Started', key: 'getting-started', selected: false,
      pages: [
        { label: 'Overview', key: 'readme', selected: false, },
        { label: 'Install and Setup', key: 'install-and-setup', selected: false, },
        { label: 'Windows 10 CLI', key: 'install-angular-cli-windows10', selected: false, },
        { label: 'Version 4 Upgrade', key: 'version-4-upgrade', selected: false, },
        { label: 'Version 5 Upgrade', key: 'version-5-upgrade', selected: false, },
        { label: 'Version 6 Upgrade', key: 'version-6-upgrade', selected: false, },
      ]
    },
    { section: 'Analytics', key: 'analytics', selected: false,
      pages: [
        { label: 'Getting Started', key: 'getting-started', selected: false, },
      ]
    },
    { section: 'Auth', key: 'auth', selected: false,
      pages: [
        { label: 'Getting Started', key: 'getting-started', selected: false, },
        { label: 'Router Guards', key: 'router-guards', selected: false, },
      ]
    },
    { section: 'Deploy', key: 'deploy', selected: false,
      pages: [
        { label: 'Getting Started', key: 'getting-started', selected: false, },
      ]
    },
    { section: 'Emulators', key: 'emulators', selected: false,
      pages: [
        { label: 'Getting Started', key: 'emulators', selected: false, },
      ]
    },
    { section: 'Firestore', key: 'firestore', selected: false,
      pages: [
        { label: 'Documents', key: 'documents', selected: false, },
        { label: 'Collections', key: 'collections', selected: false, },
        { label: 'Offline Data', key: 'offline-data', selected: false, },
        { label: 'Querying Collections', key: 'querying-collections', selected: false, },
      ]
    },
    { section: 'Functions', key: 'functions', selected: false,
      pages: [
        { label: 'Getting Started', key: 'functions', selected: false, },
      ]
    },
    { section: 'Ionic', key: 'ionic', selected: false,
      pages: [
        { label: 'Authentication', key: 'authentication', selected: false, },
        { label: 'CLI', key: 'cli', selected: false, },
        { label: 'V2', key: 'v2', selected: false, },
        { label: 'V3', key: 'v3', selected: false, },
      ]
    },
    { section: 'Messaging', key: 'messaging', selected: false,
      pages: [
        { label: 'Getting Started', key: 'messaging', selected: false, },
      ]
    },
    { section: 'Performance', key: 'performance', selected: false,
      pages: [
        { label: 'Getting Started', key: 'getting-started', selected: false, },
      ]
    },
    { section: 'Remote Config', key: 'remote-config', selected: false,
      pages: [
        { label: 'Getting Started', key: 'getting-started', selected: false, },
      ]
    },
    { section: 'Realtime Database', key: 'rtdb', selected: false,
      pages: [
        { label: 'Lists', key: 'lists', selected: false, },
        { label: 'Objects', key: 'objects', selected: false, },
        { label: 'Querying List', key: 'querying-list', selected: false, },
      ]
    },
    { section: 'Storage', key: 'storage', selected: false,
      pages: [
        { label: 'Getting Started', key: 'storage', selected: false, },
      ]
    },
    { section: 'Universal', key: 'universal', selected: false,
      pages: [
        { label: 'Getting Started', key: 'getting-started', selected: false, },
        { label: 'Cloud Functions', key: 'cloud-functions', selected: false, },
        { label: 'Prerending', key: 'prerendering', selected: false, },
      ]
    },
  ]
  constructor() {}
}

export interface PathSection {
  section: string,
  key: string,
  selected: boolean,
  pages: PathPage[]
}

export interface PathPage {
  label: string,
  key: string,
  selected: boolean
}