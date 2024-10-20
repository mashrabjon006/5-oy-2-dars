// _________________________________masalalr_______________________
1
function a(arr) {
    arr.filter(function (word) {
        return word.length >= 5
    })
        .map(function (word) {
            return word[0].toUpperCase() + word.slice(1)
        })
}

const word = ['ass', 'bananana', 'olma', 'gisol', 'anor', 'hurmo']
console.log(a(word))
2
function std(students) {

    var student = students.find(function (s) {
        return s.age > 20

    })
    return student.name.toUpperCase()
}
var students = [
    { name: 'Ali', age: 19 },
    { name: 'Bekzod', age: 21 },
    { name: 'Sarvar', age: 22 }
]

console.log(std(students))

3.
function mahsulot(products) {
    var res = 0

    products.forEach(function (arr) {
        if (arr.price > 10000) {
            res += arr.narxi
        }
    })

    return res
}

var products = [
    {
        name: 'laptop',
        narxi: 15000,
        name: 'phone',
        narxi: 8000,
        name: 'tv',
        narxi: 12000,
        name: 'smartwatch',
        narxi: 5000
    }
]
console.log(mahsulot(products))

// 4.

// 5.
// 6.
function ar(q) {
    var a = q.filter(function(j) {
        return salary >= 2000
    })

    var b = a.map(function(j) {
        return j * 1.1
    })

    var c = 0
    b.forEach(function(j) {
        c += j
    })

    return c
}

var arr = [1500, 2500, 1800, 2200, 3000]
console.log( ar(arr))

// 7.
function stu(students) {
    var brnc = students.find(function(student) {
        return student.baho >= 80
    })

    if (brnc) {
        console.log("1 talava ", brnc.ism, ", Yosh: ", brnc.yosh);
    } else {
        console.log("80 balldan yuqorisi yo ");
    }

    var bb = students.filter(function(student) {
            return student.baho >= 80
        })
        var s =students.map(function(student) {
            return student.ism.toUpperCase()
        })

    return bb
}

var students = [
    { ism: "ali", 
    yosh: 20, 
    baho: 85 ,
     ism: "gani", 
    yosh: 21, 
    baho: 70,
     ism: "baho", 
    yosh: 22, 
    baho: 90,
     ism: "boltavoy", 
    yosh: 19, 
    baho: 75,
}]
console.log( stu(students))


// ___________________2-toplam misolar__________________
1
function kota(str) {
    return str.toUpperCase()
}

var res = "salom dunyo"
console.log(kota(res))
2
// 3
function jav(str) {
    return str.split("JavaScript").join("JS");
}

var inputString = "JavaScript jkfbnqdbqwkj  JavaScript dmkndkejwq JavaScript.";
console.log(jav(inputString))

// 4.
function rever(str) {
    return str.split(" ").reverse().join(" ")
}

var inputString = "ksjafnfb kha jkafnjf"
console.log(rever(inputString))
