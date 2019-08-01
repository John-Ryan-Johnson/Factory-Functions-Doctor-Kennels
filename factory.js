const createDoctorInfo = (name, specialty, address) => {
    return {
      name: name,
      specialty: specialty,
      address: address
    }
}



const bowWowKennels =[]

const createPetRep = (name, breed) => {
    return {
      name: name,
      breed: breed
    }
    
}

bowWowKennels.push(createPetRep("Bobo", "Boxer"))
bowWowKennels.push(createPetRep("Bully", "Bulldog"))
bowWowKennels.push(createPetRep("Mojo", "Jack Russell"))

console.log(bowWowKennels);