
import { Component, OnInit } from '@angular/core';

import { Skill} from "../skill";
import { SkillService} from "../skill.service";
import {ActivatedRoute, Router} from "@angular/router";
import { BaseEditComponent } from '../../base/base-edit.component';


@Component({
selector: 'app-skill-edit',
templateUrl: './skill-edit.component.html',
styleUrls: ['./skill-edit.component.css']
})
export class SkillEditComponent extends BaseEditComponent<Skill> implements OnInit {
    skill: Skill;
    errorMessage: string;

    constructor(protected skillService: SkillService,
    protected route: ActivatedRoute,
    protected router: Router) {
    super(skillService, route, router, 'skills')
    }

}