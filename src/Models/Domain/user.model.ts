import { IdentifiedEntity } from "./identifiedentity.model";
import { UserType } from "./usertype.model";

export class User extends IdentifiedEntity{
    Name :string;
    Email:string;
    Login:string;
    Password:string;
    RegisterDate:string ;
    UserTypeId:number;
    SuperiorId?:number;
    Superior:User;
    UserType:UserType;
}