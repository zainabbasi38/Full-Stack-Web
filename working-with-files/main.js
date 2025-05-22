import fs from "fs"
// fs.writeFile("zain.txt", "Hey, I am zain...", ()=>{
//     console.log("File has been created")
// })

fs.appendFile("zain.txt", "\nI am a full stack web developer", ()=>{
    console.log("File updated")

})
