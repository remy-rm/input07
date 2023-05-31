import { skills } from "./skills.models";

export class devlopers{
    constructor(
        public lastName:string,
        public firstName:string,
        public age :number,
        public bio :string,
        public skills:skills[]){}
}