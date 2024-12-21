/* fetch("./papka/students.json")
.then(Response => {
    if(!Response.ok){
        console.log("ERROR")
    }
    return Response.json()
})
.then(data => {
    let dataJson = JSON.stringify(data)
    console.log(dataJson)
    try{
        let dateObject = JSON.parse(dataJson)
        let nameStudents = document.createElement("h1")
        let years = document.createElement("h2")
        years.textContent = dateObject.age
        let kursov = document.createElement("h2")
        kursov.textContent = dateObject.kurs
        nameStudents.textContent = dateObject.name
        let photoStudents = document.createElement("img")
        photoStudents.src = dateObject.photo
        let box = document.createElement("div")
        box.classList.add("width")
        document.body.appendChild(box)
        box.appendChild(photoStudents)
        box.appendChild(nameStudents)
        box.appendChild(kursov)
        box.appendChild(years)
        console.log(dateObject)
    } catch(error){
        console.error("error")
    }
})

let object = {
    name: "Mia",
    age: "48"
}
let addJson = JSON.stringify(object)
console.log(addJson) */

