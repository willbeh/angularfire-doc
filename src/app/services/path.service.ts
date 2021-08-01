import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PathService {
  paths = [
    { section: 'Getting Started', key: 'getting-started', open: false,
      pages: [
        { label: 'Overview', key: 'readme' },
        { label: 'Install', key: 'install-and-setup' },
      ]
    },
    { section: 'Firestore', key: 'firestore', open: false,
      pages: [
        { label: 'Collection', key: 'collection' },
        { label: 'Documents', key: 'documents' },
        { label: 'Offline Data', key: 'offline-data' },
        { label: 'Querying Collections', key: 'querying-collections' },
      ]
    },
  ]
  constructor() {}
}