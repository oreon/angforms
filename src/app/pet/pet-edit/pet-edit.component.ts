
import { Component, OnInit } from '@angular/core';

import { Pet} from "../pet";
import { PetService} from "../pet.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';


@Component({
selector: 'app-pet-edit',
templateUrl: './pet-edit.component.html',
styleUrls: ['./pet-edit.component.css']
})
export class PetEditComponent extends BaseEditComponent<Pet> implements OnInit {
    pet: Pet;
    errorMessage: string;

    constructor(protected petService: PetService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(petService, route, router, 'pets')
    }

}