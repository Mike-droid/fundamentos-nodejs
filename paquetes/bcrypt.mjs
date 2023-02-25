import bcrypt from "bcrypt"

const password = 'myCoolPassword!'

bcrypt.hash(password, 5, (error, hash) => {
  console.log(hash)

  bcrypt.compare(password, hash, (error, result) => {
    console.log(result)
  })
})
