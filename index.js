/* function removeObj(){
    localStorage.clear()
}
removeObj() */
/* function addObj(key, obj){
    let objJson = JSON.stringify(obj)
    localStorage.setItem(key, objJson)
}
let object2 = {
    name: "asdj",
    age: 1230192
}
let abjecttt = {
    aas:"sakdla"
}


addObj("key", abjecttt)
addObj("key2", object2)

let newObj = localStorage.getItem("key")

let newObj1 = JSON.parse(newObj)

console.log(abjecttt) */

/* function addArr(){
    let arr = []
    for (let i = 0; i < localStorage.length; i++) {
        arr.push(localStorage.key(i))
    }
    return arr
}
console.log(addArr()) */

/* let area = document.createElement("textarea")
document.body.appendChild(area)

area.addEventListener("input", function(){
    localStorage.setItem("keyy", area.value)
})
area.value = localStorage.getItem("keyy") */

/* let nameIn = document.createElement("input")
nameIn.placeholder = "Name"
let emailIn = document.createElement("input")
emailIn.placeholder = "Email"
document.body.appendChild(nameIn)
document.body.appendChild(emailIn)

nameIn.addEventListener("input", function(){
    localStorage.setItem("keyName", nameIn.value)
})
emailIn.addEventListener("input", function(){
    localStorage.setItem("keyEmail", emailIn.value)
})
nameIn.value = localStorage.getItem("keyName")
emailIn.value = localStorage.getItem("keyEmail") */

























/* let batonStone = document.createElement("button")
batonStone.textContent = "Камень"
let batonPaper = document.createElement("button")
batonPaper.textContent = "Лист"
let batonSucciours = document.createElement("button")
batonSucciours.textContent = "Ножницы"

let stoneString = document.createElement("h1")
let paperString = document.createElement("h1")
let succioursString = document.createElement("h1")

let win = "Победа"
let loose = "Поражение"
let draw = "Ничья"

stoneString.textContent = "Камень"
paperString.textContent = "Лист"
succioursString.textContent = "Ножницы"

let batonReturn = document.createElement("button")
batonReturn.textContent = "Заново"

batonReturn.addEventListener("click", function(){
    localStorage.clear()
})

document.body.append(batonReturn)

document.body.append(batonStone)
document.body.append(batonPaper)
document.body.append(batonSucciours)

function addPaper(keyPaper, paper){
    let paperJSON = JSON.stringify(paper)
    localStorage.setItem(keyPaper, paperJSON)
}
function addStone(keyStone, stone){
    let stoneJSON = JSON.stringify(stone)
    localStorage.setItem(keyStone, stoneJSON)
}
function addSucciours(keySucciours, succiours){
    let succioursJSON = JSON.stringify(succiours)
    localStorage.setItem(keySucciours, succioursJSON)
}

function addWin(keyWin, win){
    let winJSON = JSON.stringify(win)
    localStorage.setItem(keyWin, winJSON)
}
function addLoose(keyLoose, loose){
    let looseJSON = JSON.stringify(loose)
    localStorage.setItem(keyLoose, looseJSON)
}
function addDraw(keyDraw, draw){
    let drawJSON = JSON.stringify(draw)
    localStorage.setItem(keyDraw, drawJSON)
}

batonPaper.addEventListener("click", function(){
    let paperStr = "Лист"
    addPaper("keyPaper", paperStr)
    let paper = document.createElement("h1")
    paper.textContent = "Лист"
    document.body.append(paper)

    let stoneChild = document.body.appendChild(stoneString)
    let paperChild = document.body.appendChild(paperStringString)
    let succioursChild = document.body.appendChild(paperStringString)

    let randomItem = [paperChild, stoneChild, succioursChild]

    for(let i = 0; i < randomItem.length; i++){
        Math.random(randomItem[i] * randomItem.length)
    }

    if(paperStr === paperString){
        alert(draw)
        addDraw("keyDraw", draw)
    }
    else if(paperStr === stoneString){
        alert(win)
        addWin("keyWIn", win)
    } else {
        alert()
        addLoose("keyLoose", loose)
    }
})
batonStone.addEventListener("click", function(){
    let stoneStr = "Камень"
    addStone("keyStone", stoneStr)
    let stone = document.createElement("h1")
    stone.textContent = "Камень"
    document.body.append(stone)

    let stoneChild = document.body.appendChild(stoneString)
    let paperChild = document.body.appendChild(paperStringString)
    let succioursChild = document.body.appendChild(paperStringString)

    let randomItem = [paperChild, stoneChild, succioursChild]

    for(let i = 0; i < randomItem.length; i++){
        let result = Math.random(randomItem[i] * randomItem.length)
        console.log(result)
    }
})
batonSucciours.addEventListener("click", function(){
    let succioursStr = "Ножницы"
    addSucciours("keysucciours", succioursStr)
    let succiours = document.createElement("h1")
    succiours.textContent = "Ножницы"
    document.body.append(succiours)

    let stoneChild = document.body.appendChild(stoneString)
    let paperChild = document.body.appendChild(paperStringString)
    let succioursChild = document.body.appendChild(paperStringString)

    let randomItem = [paperChild, stoneChild, succioursChild]

    for(let i = 0; i < randomItem.length; i++){
        Math.random(randomItem[i] * randomItem.length)
    }
}) */








/* _______________________________________________________________________________________________ */




/* let addGood = document.createElement("button")
let removeGood = document.createElement("button")
let addGoodSc = document.createElement("button")
let removeGoodSc = document.createElement("button")
let removeAll = document.createElement("button")
removeAll.textContent = "Удалить все"
addGood.textContent = "Добавить в корзину"
removeGood.textContent = "Убрать с корзины"
addGoodSc.textContent = "Добавить в корзину"
removeGoodSc.textContent = "Убрать с корзины"
document.body.append(addGood)
document.body.append(removeGood)
document.body.append(addGoodSc)
document.body.append(removeGoodSc)
document.body.append(removeAll)

let item = "Банан"
let itemSc = "Баклажан"

function addGoods(keyGood, good){
    let goodJSON = JSON.stringify(good)
    localStorage.setItem(keyGood, goodJSON)
}

addGood.addEventListener("click", function(){
    alert("Товар добавлен")
    addGoods("keyGood", item)
})
removeGood.addEventListener("click", function(){
    alert("Товар убран")
    localStorage.removeItem("keyGood")
})

addGoodSc.addEventListener("click", function(){
    alert("Товар добавлен")
    addGoods("keyGoodSc", itemSc)
})
removeGoodSc.addEventListener("click", function(){
    alert("Товар убран")
    localStorage.removeItem("keyGoodSc")
})
removeAll.addEventListener("click", function(){
    localStorage.clear()
}) */


/* _______________________________________________________________________________________________ */















/* setTimeout(() => {
    console.log("Hi!")
}, 2000) */

/* let num = 0

setInterval(() => {
    num++;
    document.body.textContent = num
}, 1000) */


/* let num = 10
let baton = document.createElement("button")
baton.textContent = "Жми жми"
document.body.append(baton)

baton.addEventListener("click", function(){
    let inter = setInterval(() => {
        num--;
        document.body.textContent = num
        if(num <= 0){
            clearInterval(inter)
            alert("Время вышло")
        }
    }, 1000)
}) */


    /* let block = document.createElement("button")
    block.textContent = "Жми жми"
    document.body.append(block)

    setInterval(() => {
        let randomColor
        let color = ["#000", "#ff0000", "#0066ff"]
        for(let i = 0; i < color.length; i++){
            randomColor = color[Math.floor(Math.random() * color.length)]
        }
        block.style.backgroundColor = randomColor
        console.log("Kmasdkaj")
    }, 300) */


    /* let inpt = document.createElement("input")
    let text = document.createElement("p")
    inpt.placeholder = "Пиши сюда..."
    document.body.append(inpt)

    setInterval(() => {
        text.textContent = inpt.value
        document.body.appendChild(text)
    }, 3000)
 */






    /* let str = 0

    let inter = setInterval(() => {
        str++
        console.log("message")
        if(str >= 5){
            clearInterval(inter)
        }
    }, 1000) */




    /* let baton = document.createElement("button")
    baton.textContent = "===>>>"
    baton.className = "buton"
    document.body.append(baton)

    setInterval(() => {
        baton.classList.add("move")
    }, 2000) */


    /* let baton = document.createElement("button")
    baton.textContent = "Жим жим"
    baton.className = "buton"
    document.body.append(baton)
    let num = 0
   
    setInterval(() => {
        baton.addEventListener("click", function(){
        num++
        console.log(num)            
    })
    }, 1000) */


    /* let teeext = document.createElement("p")
    let inpt = document.createElement("input")
    document.body.append(inpt)

    inpt.addEventListener("input", function(){
        let teeextNum = parseInt(teeext)
        let num = teeextNum
        teeext.textContent = inpt.value
        document.body.appendChild(teeext)
        if(num === teeextNum){
            let inter = setInterval(() => {
                num--;
                document.body.textContent = num
                if(num <= 0){
                    clearInterval(inter)
                    alert("!!!!!")
                }
            }, 1000)
        }
    }) */

    
        /* setInterval(() => {
            document.body.textContent = new Date()
        }, 1000) */

        /* setInterval(() => {
            document.body.textContent = Date.now()
        }, 100) */


        /* setInterval(() => {
            let data = new Date(99, 3, 5, 19, 13, 0, 1)
            document.body.textContent = data.toLocaleString()
        }, 1000) */

        /* function daty(){
            let data = new Date()
            return document.body.textContent = data
        }
        daty() */

        /* function daty(year){
            return year.getFullYear()
        }
        let data = new Date("2015-11-1")
        console.log(daty(data)) */

        /* function daty(month){
            return month.getMonth() + 1
        }
        let data = new Date("2015-10-1")
        console.log(daty(data)) */ 

        /* function daty(day){
            return day.getDay() + 1
        }
        function datyy(month){
            return month.getMonth() + 1
        }
        let data = new Date("2015-11-1")
        console.log(daty(data)) 
        console.log(datyy(data)) */ 


        /* function getDay(day){
            const bigDay = day.getDay()
            if(bigDay === 0 || bigDay === 6){
                alert("Weekend")
            } else {
                alert("Go work!")
            }
            return bigDay
        }

        let dada = new Date("2024-11-5")
        console.log(getDay(dada)) */

        /* let inpt = document.createElement("input")
        document.body.append(inpt)
        let btn = document.createElement("button")
        btn.textContent = "Жми жми"
        document.body.append(btn)

        btn.addEventListener("click", function getDayAgo(date, days){
            let anDate = new Date(date)
            let daysV = days.value
            anDate.setDate(date.getDate() - daysV)
            return anDate.getDate()
            inpt.innerHTML = `${getDayAgo(date, days)}`
        }) */

            /* document.getElementById("task03Btn").addEventListener("click", function () {
                let date = new Date() - 24 * 60 * 60 * 1000 * document.getElementById("daysAgo").value;
                document.getElementById("task03Result").innerHTML = new Date(date);
              }); */

        /* function getDayAgo(date, days){
            let anDate = new Date(date)
            anDate.setDate(anDate.getDay() + days)
            return anDate.getDate()
        }
        let date = new Date(2023, 1, 5)
        console.log(getDayAgo(date, 5)) */

        /* function getYearOld(date, sdDate){
            date = new Date()
            let result = date - sdDate
            let result2 = result.getYear()
            return result2
        }
        console.log(getYearOld(2024-11-9, 2011-1-3)) */


        /* let arr = new Promise((resolve, reject) => {
            setTimeout(() => {
                if(2 === 3){
                    resolve("We expect it")
                } else {
                    reject("ERROR")
                }
            }, 2000)
        })
        .then(value => {
            console.log(value)
        }) 
        .catch(error => {
            console.log(error)
        }) */

        /* let arry = [2, 4, 6, 111]   
        
        function getNum(arr){
            let variable = new Promise((resolve, reject) => {
                setTimeout(() => {
                    let perem = arr.every(number => number % 2 === 0)
                    if(perem){
                        resolve("We expect that")
                    } else {
                        reject("ERROR")
                    }
                }, 2000)
            })
            return variable
        }
        getNum(arry)
            .then(value => {
                console.log(value)
            })
            .catch(error => {
                console.log(error)
            })  */    

            
            /* function getPic(picture){
                let variable = new Promise((resolve, reject) => {
                        let img = document.createElement("img")
                        img.src = picture
                        img.onload = () => resolve(img)
                        img.onerror = () => reject("ERROR")
                })
                return variable
            }
            getPic("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAOQOXpz3-LzbrnJJkZnn5jejcz7HPJyAkw&s")
            .then(value => {
                document.body.appendChild(value)
            })
            .catch(error => {
                console.log(error)
            }) */





                /* fetch("https://jsonplaceholder.typicode.com/posts", {
                    method:"GET"
                })
                .then((Response) => {
                    if(!Response.ok){
                        console.log("ERROR")
                    }
                    return Response.json()
                })
                .then((value) => {
                    console.log(value)
                })
                .catch((error) => {
                    console.log(error)
                }) */

                    /* fetch("https://api.github.com/users", {
                        method:"GET"
                    })
                    .then((Response) => {
                        if(!Response.ok){
                            console.log("ERROR")
                        }
                        return Response.json()
                    })
                    .then(value => {
                        value.forEach(element => {
                            let follow = document.createElement("img")
                            let foto = document.createElement("img")
                            let variable = document.createElement("h1")
                            variable.textContent = element.login
                            variable.style.textTransform = "capitalize"
                            foto.src = element.avatar_url
                            follow.src = element.followers_url
                            foto.style.width = "300px"
                            document.body.appendChild(variable)
                            document.body.appendChild(foto)
                        })
                        console.log(value)
                    })
                    .catch(error => {
                        console.log(error)
                    }) */

                        /* fetch("https://restcountries.com/v3.1/all", {
                            method:"GET"
                        })
                        .then(Response => {
                            if(!Response.ok){
                                console.log("ERROR")
                            }
                            return Response.json()
                        })
                        .then(value => {
                            console.log(value)
                            value.forEach(element => {
                                let populationCountry = document.createElement("h3")
                                let photoFlag = document.createElement("img")
                                let nameCapital = document.createElement("h2")
                                let nameCountry = document.createElement("h1")
                                populationCountry.textContent = element.population
                                photoFlag.src = element.flags.png
                                nameCapital.textContent = element.capital
                                nameCountry.textContent = element.altSpellings
                                document.body.appendChild(nameCountry)
                                document.body.appendChild(nameCapital)
                                document.body.appendChild(photoFlag)
                                document.body.appendChild(populationCountry)
                            });
                        })
                        .catch(error => {
                            console.log(error)
                        }) */
                        /* Имя стран
                        Столицы
                        Флаг
                        Население */

                        let logo = document.querySelector(".logo")
                        let logoRain = document.querySelector('.logoRain')
                        let boxInfo = document.querySelector(".weather__info")
                        let btn = document.querySelector(".btn")
                        let inpt = document.querySelector(".inpt")
                        let btnSend = document.querySelector(".btnSend")
                        let btnDel = document.querySelector(".btnDel")

                        let commentName = document.querySelector(".inptName")
                        let commentText = document.querySelector(".inptComment")
                        let resultComment = document.querySelector(".resultComment")

                        btnSend.addEventListener("click", function(){
                            let commentTextV = commentText.value
                            let commentNameV = commentName.value
                            if(commentNameV === "" || commentTextV === ""){
                                alert("Заполните поля")
                            } else {
                                localStorage.setItem("keyName", commentNameV)
                                let saveName = localStorage.getItem("keyName")
                                localStorage.setItem("keyComment", commentTextV)
                                let saveComment = localStorage.getItem("keyComment")
                                let li2 = document.createElement("li")
                                li2.textContent = saveComment
                                let li1 = document.createElement("li")
                                li1.textContent = saveName
                                resultComment.classList.add("resultComm")
                                resultComment.appendChild(li1)
                                resultComment.appendChild(li2)
                            }  
                        })
                        
                        btnDel.addEventListener("click", function(){
                            localStorage.clear()
                            resultComment.classList.remove("resultComm") 
                        })

                        btn.addEventListener("click", function(){
                            boxInfo.classList.add("hov")
                            let inptV = inpt.value
                            let keyyApi = "9bf4a899c70c462ca53b77ead23c057e"
                            fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inptV}&appid=${keyyApi}`, {
                                method:"GET"
                            })
                            .then(Response => {
                                if(!Response.ok){
                                    console.log("ERROR")
                                }
                                return Response.json()
                            })
                            .then(value => {
                                console.log(value)
                                let rain = document.createElement("h1")
                                let clouds = document.createElement("h1")
                                let nameCountry = document.createElement("h1")
                                let nameCity = document.createElement("h2")
                                let tempratureCity = document.createElement("h2")
                                let feelsLikeCity = document.createElement("h2")
                                let tempMinCity = document.createElement("h2")
                                let tempMaxCity = document.createElement("h2")
                                let humidityCity = document.createElement("h2")
                                nameCountry.classList.add("nameCountryClass")
                                nameCity.classList.add("nameCountryClass")
                                tempratureCity.classList.add("nameCountryClass")
                                feelsLikeCity.classList.add("nameCountryClass")
                                tempMinCity.classList.add("nameCountryClass")
                                tempMaxCity.classList.add("nameCountryClass")
                                humidityCity.classList.add("nameCountryClass")

                                clouds.textContent = value.clouds.all
                                rain.textContent = value.weather.main

                                nameCountry.textContent = value.sys.country
                                nameCity.textContent = value.name

                                let arr = value.main.temp
                                let tempZero = Math.round(arr - 273)
                                tempratureCity.textContent = `Temp: ${tempZero}°C`

                                let arr2 = value.main.feels_like
                                let tempZero2 = Math.round(arr2 - 273)
                                feelsLikeCity.textContent = `Feels like: ${tempZero2}`


                                let arr3 = value.main.temp_min
                                let tempZero3 = Math.round(arr3 - 273)
                                let arr4 = value.main.temp_max
                                let tempZero4 = Math.round(arr4 - 273)
                                tempMinCity.textContent = `MinTemp: ${tempZero3}°C`
                                tempMaxCity.textContent = `MaxTemp: ${tempZero4}°C`

                                humidityCity.textContent = `Humidity: ${value.main.humidity}`

                                if(value.clouds.all > 50){
                                    logo.classList.add("changeLogo")
                                } else {
                                    logo.classList.remove("changeLogo")
                                }


                                boxInfo.appendChild(rain)
                                boxInfo.appendChild(clouds)
                                boxInfo.appendChild(nameCountry) 
                                boxInfo.appendChild(nameCity) 
                                boxInfo.appendChild(tempratureCity)
                                boxInfo.appendChild(feelsLikeCity)
                                boxInfo.appendChild(tempMaxCity)
                                boxInfo.appendChild(tempMinCity)
                                boxInfo.appendChild(humidityCity)
                            })
                            .catch(error => {
                                console.log(error)
                            })
                        }) 