import bcrypt from 'bcrypt'
const usuarios = [ {
        nombre: 'Esperanza',
        email: 'esperanza@gmail.com',
        birthdate: '2024-11-08',
        confirmado: 1,
        password: bcrypt.hashSync('password', 10),
        image: '.jpg'
    }
]

export default usuarios