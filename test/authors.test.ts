import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices"
import { firstValueFrom } from "rxjs";

const main = async () => {
    const client : ClientProxy = ClientProxyFactory.create({
        transport:Transport.TCP,
        options:{
            host:'localhost',
            port:8080
        }
    });

    try {

        ///crear
        // const create = await firstValueFrom(client.send(
        //     {cmd:'authors.create'},
        //     {name: "Ricardo Palma", country:"Peru", isActive:true}));
        // console.log("CREADO: ",create)

    //     //actualizar
        // const update = await firstValueFrom(client.send(
        //     {cmd:'authors.update'},
        //     {id:3, name:"Julio Ribeyro", country:"Peru", isActive:false}));
        // console.log("ACTUALIZADO: ",update)

    //    //eliminar
        const delet = await firstValueFrom(client.send(
            {cmd:'authors.delete'},
            {id:8}));
        console.log("ELIMINADO: ",delet)


    //     //buscar

        // const search = await firstValueFrom(client.send(
        //     {cmd: 'authors.findOne'},
        //     {id:3}));
        // console.log("ID BUSCADO ES : "
        //     ,search)

       
        const lista = await firstValueFrom(client.send({cmd: 'authors.findAll'},{}))
        console.log(lista)


    }catch (error) {
        console.log(error)
    }finally {
        console.log('cerrando la conexion')
        client.close()
    }
}

main()