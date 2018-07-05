import { BaseEntity } from "../base/base";




import {Gender} from "@app/enums/gender";
import {Relation} from "@app/enums/relation";


export  interface Traveler extends BaseEntity{
firstName : string
lastName : string
gender : Gender
dob : Date
relationship : Relation
}

