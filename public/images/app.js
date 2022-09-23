async function getCats() {
const res = await fetch('./catdata.json')
const data = await res.json()

let catdata = data.cats

catdata.map(cat =>{

  console.log(cat.name)
})

catdata.map
}

getCats()














