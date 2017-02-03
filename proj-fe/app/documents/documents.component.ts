import { Component } from '@angular/core';
import { Document } from './document';

@Component({
  moduleId: module.id,
  selector: 'documents',
  templateUrl: 'documents.component.html',
  styleUrls: ['documents.component.css']
})

export class DocumentsComponent {
  pageTitle: string = "Document Dashboard"
  documents: Document[] = [
    {
      title: 'My First Doc',
      description: 'Placeholder Description',
      file_url: 'http://google.com',
      updated_at: '01/29/2017',
      image_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Mistakes-to-avoid-when-hiring-freelancers.jpg/1280px-Mistakes-to-avoid-when-hiring-freelancers.jpg',
    },
    {
      title: 'My Second Doc',
      description: 'Placeholder Description',
      file_url: 'http://google.com',
      updated_at: '01/29/2017',
      image_url: 'https://cdn.pixabay.com/photo/2015/01/21/14/14/freelancer-606762_960_720.jpg',
    },
    {
      title: 'My Third Doc',
      description: 'Placeholder Description',
      file_url: 'http://google.com',
      updated_at: '01/29/2017',
      image_url: 'https://cdn.pixabay.com/photo/2014/12/22/19/59/macbook-577758_960_720.jpg',
    }
  ]
}
