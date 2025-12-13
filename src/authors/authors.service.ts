import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthorsCreateDTO } from './dtos/authors.create.dto';
import { AuthorsUpdateDTO } from './dtos/authors.update.dto';

@Injectable()
export class AuthorsService {

    constructor(private readonly pisma:PrismaService){};


    //CREAR
    create(authosCreateDTO : AuthorsCreateDTO){
        return this.pisma.author.create({
            data:authosCreateDTO
        })
    }


    //LISTAR
    findAll(){
        return this.pisma.author.findMany();
    }


    //BUSCAR

    async findOne(id:number){
        const author = await this.pisma.author.findUnique({where: {id}});

        if(!author){
            throw new NotFoundException(`Autor con ID ${id} no encontrado`);
        }

        return author;
    }


    //ACTUALIZAR
    async update(id:number, authorsUpdateDTO: AuthorsUpdateDTO){
        await this.findOne(id);

        const author = await this.pisma.author.update({
            where: {id}, 
            data:authorsUpdateDTO
        });

        return author;
    }

    //ELIMINAR

    async delete(id: number){
        await this.findOne(id);

        const author= await this.pisma.author.delete({
            where:{id}
        });

        return author
    }
}