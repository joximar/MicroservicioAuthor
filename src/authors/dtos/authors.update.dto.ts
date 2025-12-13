import { PartialType } from "@nestjs/mapped-types";
import { AuthorsCreateDTO } from "./authors.create.dto";
import { IsNumber } from "class-validator";


export class AuthorsUpdateDTO extends PartialType(AuthorsCreateDTO){

        @IsNumber()
        id: number;
}