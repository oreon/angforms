import { BaseEntity } from "../base/base";

import {PetType} from "@app/petType/petType";
import {Skill} from "@app/skill/skill";



import {Status} from "@app/enums/status";


export  interface Pet extends BaseEntity{
name : string
price : number
type : PetType   ;
parentType : PetType   ;
dob : Date
weight : number
neutered : Boolean
description : string
status : Status
skills : Skill   []  ;
}

