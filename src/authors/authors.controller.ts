import { Controller, ParseIntPipe } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthorsCreateDTO } from './dtos/authors.create.dto';
import { AuthorsUpdateDTO } from './dtos/authors.update.dto';

@Controller('authors')
export class AuthorsController {

    constructor( private readonly service:AuthorsService){}


    //devuelve la lista
    @MessagePattern({cmd : 'authors.findAll'})
    findAll(){
        return this.service.findAll();
    }


    //devuelve busqueda
    @MessagePattern({cmd: 'authors.findOne'})
    findOne(@Payload('id', ParseIntPipe) id: number){
        return this.service.findOne(id)
    }

    //crear autor
    @MessagePattern({cmd : 'authors.create'})
    create(@Payload() authorsCreateDTO: AuthorsCreateDTO){
        return this.service.create(authorsCreateDTO)
    }

    //actualiza el autor
    @MessagePattern({cmd:'authors.update'})
    update(@Payload() authorsupdateDTO : AuthorsUpdateDTO){
        return this.service.update(+authorsupdateDTO.id, authorsupdateDTO)
    }

    //eliminar el autor

    @MessagePattern({cmd : 'authors.delete'})
    delete(@Payload('id', ParseIntPipe) id: number){
        return this.service.delete(id)
    }
}
