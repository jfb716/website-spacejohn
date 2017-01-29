import { Component } from '@angular/core';
import { Proposal } from './proposal';

@Component({
  moduleId: module.id,
  selector: 'proposal-list',
  templateUrl: 'proposal-list.component.html'
})

export class ProposalListComponent {
  proposalOne: Proposal = new Proposal(15, 'Abc Company', 'http://test.com', 'Ruby on Rails', 150, 120, 15, 'test@test.com')
  proposalTwo: Proposal = new Proposal(99, 'Xyz Company', 'http://test2.com', 'Javascript', 130, 75, 10, 'test@test.com')
  proposalThree: Proposal = new Proposal(100, '123 Company', 'http://test3.com', 'HTML5', 160, 85, 11, 'test@test.com')

  proposals: Proposal[] = [
    this.proposalOne,
    this.proposalTwo,
    this.proposalThree,
  ]
}
