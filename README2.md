===RESTAURAR TODOS LOS PAQUETES===

npm install

======INSTALAR PRISMA DENTRO DE TU PROYECTO YA REALIZADO==

npm install prisma --save-dev
npm install @prisma/client

======INSTALANDO PRISMA CLI ======

npx prisma

===========GENERAR EL CLIENTE DE PRISMA============

npx prisma generate

============para MongoDB=============
npx prisma db push

==========ejecutar o lanzar el proyecto===========
npm run start:dev

============para realizar las pruebas==========

npx ts-node test/users.test.ts

esto te enviara los tcp de: ejemplos

users.findAll
cmd: 'authors.findAll'
{}


users.create:
  cmd: 'authors.create'


{
  "name": "Ricardo Palma",
  "country": "Peru",
  "isActive": true
}



users.update
cmd: 'authors.update'

{
  "id": 3,
  "name": "Julio Ribeyro",
  "country": "Peru",
  "isActive": false
}


users.findOne
cmd: 'authors.findOne'

{
  "id BUSCADO ES ": 3
}


users.delete
cmd: 'authors.delete'

{
  "ELIMINADO :" 8
}



