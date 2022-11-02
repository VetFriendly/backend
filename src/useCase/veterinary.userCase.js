import { veterinaryUser } from '../models/veterinary.user.js'
import * as veterinaryCase from './veterinary.case.js'
import bcrypt from '../libs/bcrypt.js'

//const getAll = () => veterinaryUser.find({})

const create = async (veterinariy, vet) => {
    const { firstName, lastName, email, identification, password } = veterinariy
    const UserFound = await veterinaryUser.findOne({email})
    if(UserFound) throw new Error('This User already exist!')

    // create vet
    const newVet = await veterinaryCase.createVet({ ...vet })

    // Encriptar el password
    const encryptedPassword = await bcrypt.hash(password)

    return veterinaryUser.create( { ...veterinariy, password: encryptedPassword, vet:newVet.id } )
}

const update = async (id, data) => {
    const { imageProfile, nacionality, biography, vetId, vet } = data
    if(id === data.id){
        const vetUpdate = await veterinaryCase.update( vetId, vet)
        const updateInfo = veterinaryUser.findByIdAndUpdate(id, { imageProfile:imageProfile, nacionality:nacionality, biography:biography }, { new:true }).populate( 'vet' )
        return updateInfo
    }else{
        throw new Error('This User Not Mach!')
    }
}

const getById = (idUser) => veterinaryUser.findById(idUser)

const deleteById = (idUser) => veterinaryUser.findByIdAndDelete(idUser)


export {
    create,
    update,
    deleteById,
    getById
}