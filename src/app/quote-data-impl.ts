
import {Traveler} from "@app/traveler/traveler";

import * as moment from 'moment'; 

import {PlanType} from "@app/enums/planType";
import {CoverageLevel} from "@app/enums/coverageLevel";
//import { QuoteData } from "@app/quoteData/quoteData";

export class QuoteDataImpl /*implements QuoteData*/{
    id: number
    haveCare : boolean
    alreadyDeparted : boolean
    over60 : boolean
    departure : Date
    returnDate : Date
    dobOldest : Date
    planMember : boolean
    groupNumber : number
    idNumber : string
    planType : PlanType
    interestedExtra : boolean
    initialPaymentWithinLast72 : boolean
    coverageLevel : CoverageLevel
    chosenExtra : boolean
    travellingForMedical : boolean
    travellingAgainstAdvice : boolean
    twoOrMoreStrokes : boolean
    icd : boolean
    homeOxygen : boolean
    terminal : boolean
    ninetyDayStable : boolean
    planTotal : number
    trn : number
    traveler : Traveler   []  

    findOldetstAge():number{
        return moment().diff(this.dobOldest, 'years');
    }
        

}