import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html'
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'Placeholder Description',
      file_url: 'http://google.com',
      updated_at: '01/29/2017',
      image_url: 'http://google.com',
    },
    {
      title: 'My Second Doc',
      description: 'Placeholder Description',
      file_url: 'http://google.com',
      updated_at: '01/29/2017',
      image_url: 'http://google.com',
    },
    {
      title: 'My Third Doc',
      description: 'Placeholder Description',
      file_url: 'http://google.com',
      updated_at: '01/29/2017',
      image_url: 'http://google.com',
    }
  ]
}
