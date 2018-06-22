
import { Component, OnInit } from '@angular/core';
import { Pet } from "../pet";
import {Router} from "@angular/router";
import { PetService} from "../pet.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-pet-list',
templateUrl: './pet-list.component.html',
styleUrls: ['./pet-list.component.css']
})
export class PetListComponent extends BaseListComponent<Pet>
    implements OnInit {

    constructor(protected petService: PetService, protected router: Router) {
        super(petService, router)
    }
}