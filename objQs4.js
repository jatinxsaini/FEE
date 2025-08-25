let movie = {
    title: "Inception",
    year: 2010,
    rating: 8.8
}

let str = JSON.stringify(movie)
console.log(str);

let new1 = JSON.parse(str)
console.log(new1)
console.log(new1.title)

