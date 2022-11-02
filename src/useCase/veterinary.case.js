import { veterinary } from '../models/veterinary.js'

const createVet = async (vet) => {
    const { name, adress, schedulDay, schedulTime } = vet
    return veterinary.create({ name, adress, schedulDay, schedulTime })
}
const update = (id, newUpdate) => veterinary.findByIdAndUpdate(id, newUpdate, {new : true})


export{
    createVet,
    update
}