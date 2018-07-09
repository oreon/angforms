import { BaseEntity } from "../base/base";






export  interface Trip extends BaseEntity{
firstName : string
lastName : string
haveCare : boolean
alreadyDeparted : boolean
over60 : boolean
departure : Date
returnDate : Date
}

