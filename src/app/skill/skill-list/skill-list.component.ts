
import { Component, OnInit } from '@angular/core';
import { Skill } from "../skill";
import {Router} from "@angular/router";
import { SkillService} from "../skill.service";
import { BaseListComponent } from '../../base/base-list.component';
import { BaseEntity } from '../../base/base';

@Component({
selector: 'app-skill-list',
templateUrl: './skill-list.component.html',
styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent extends BaseListComponent<Skill>
    implements OnInit {

    constructor(protected skillService: SkillService, protected router: Router) {
        super(skillService, router)
    }
}