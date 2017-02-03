"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var DocumentsComponent = (function () {
    function DocumentsComponent() {
        this.pageTitle = "Document Dashboard";
        this.documents = [
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
        ];
    }
    return DocumentsComponent;
}());
DocumentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'documents',
        templateUrl: 'documents.component.html',
        styleUrls: ['documents.component.css']
    })
], DocumentsComponent);
exports.DocumentsComponent = DocumentsComponent;
//# sourceMappingURL=documents.component.js.map