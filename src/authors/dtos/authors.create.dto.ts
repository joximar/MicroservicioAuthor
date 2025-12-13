import { IsBoolean, IsNumber, IsString } from "class-validator"

export class AuthorsCreateDTO {


    @IsString()
    name:string

    @IsString()
    country:string


    @IsBoolean()
    isActive:boolean


}