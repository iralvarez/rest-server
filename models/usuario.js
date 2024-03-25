const {Schema, model} = require('mongoose');

const UsuarioSchema = Schema({

        nombre:{
               type: String,
               required: [true, 'El nombre es obligaorio']
        },
        correo:{
              type: String,
              required: [true, 'El correo es obligaorio'],
              unique: true
        },
          password:{
               type: String,
               required: [true, 'El pass es obligaorio'],
               unique: true
         } ,
         img:{
            type: String,
        },
         rol:{
                type: String,
                required: [true, 'El rol es obligaorio'],
                enum: ['ADMIN_ROLE','USER_ROLE']
        },
        estado:{
            type: Boolean,
            default: true
        },
        google:{
            type: Boolean,
            default: true
        },
});


module.exports= model('Usuario', UsuarioSchema);



/*{
    nombre: 'asdas',
    correo: 'adas@sdfsdf.com',
    img: 'asddasd',
    rol: 'asdsadasd',
    estado: false,
    google: false
}*/
