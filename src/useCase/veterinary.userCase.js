import { veterinaryUser } from '../models/veterinary.user.js'
import bcrypt from '../libs/bcrypt.js'

//const getAll = () => veterinaryUser.find({})

const create = async (veterinariy, vet) => {
    // modificar
    const { firstName, lastName, email, identification, password } = veterinariy

    const UserFound = await veterinaryUser.findOne({email})

    if(UserFound) throw new Error('This User already exist!')

    // Encriptar el password
    const encryptedPassword = await bcrypt.hash(password)

    return veterinaryUser.create( {...veterinariy, password: encryptedPassword} )
}

const update = (idUser, updatedUser) => veterinaryUser.findByIdAndUpdate(idUser, updatedUser, {new:true})

const getById = (idUser) => veterinaryUser.findById(idUser)

const deleteById = (idUser) => veterinaryUser.findByIdAndDelete(idUser)


export {
    create,
    update,
    deleteById,
    getById
}