const bro = document.getElementById("nice")
const btn1 = document.getElementById('button1')
const btn2 = document.getElementById('button2')
const btn3 = document.getElementById('button3')
const btn4 = document.getElementById('button4')
const btn5 = document.getElementById('button5')
const btn6 = document.getElementById('button6')
const btn7 = document.getElementById('button7')
const btn8 = document.getElementById('button8')
const btn9 = document.getElementById('button9')
const btn0 = document.getElementById('button0')
const btnadd = document.getElementById('button+')
const btnsub = document.getElementById('button-')
const btnmulti = document.getElementById('buttonmulti')
const btndiv = document.getElementById('buttondiv')
const btnc = document.getElementById('buttonc')
const btndel = document.getElementById('buttondel')
const btnrun = document.getElementById('buttonrun')
const btnsqr = document.getElementById('buttonsqr')
const btncube = document.getElementById('buttoncube')
const btnsqrt = document.getElementById('buttonsqrt')
const btncbrt = document.getElementById('buttoncbrt')
const btnpi = document.getElementById('buttonpi')
const btne = document.getElementById('buttone')
const btnlog = document.getElementById('buttonlog')

const result = document.getElementById("res")
const output = document.getElementById("outp")
let num1 = []
const num2 = []
let main = []

btn1.onclick = function(e) {
    num1.push(1)
    main.push(1)
    result.innerText = num1.join("")
}

btn2.onclick = function(e) {
    num1.push(2)
    main.push(2)
    result.innerText = num1.join("")
}

btn3.onclick = function(e) {
    num1.push(3)
    main.push(3)
    result.innerText = num1.join("")
}

btn4.onclick = function(e) {
    num1.push(4)
    main.push(4)
    result.innerText = num1.join("")
}

btn5.onclick = function(e) {
    num1.push(5)
    main.push(5)
    result.innerText = num1.join("")
}

btn6.onclick = function(e) {
    num1.push(6)
    main.push(6)
    result.innerText = num1.join("")
}

btn7.onclick = function(e) {
    num1.push(7)
    main.push(7)
    result.innerText = num1.join("")
}

btn8.onclick = function(e) {
    num1.push(8)
    main.push(8)
    result.innerText = num1.join("")
}

btn9.onclick = function(e) {
    num1.push(9)
    main.push(9)
    result.innerText = num1.join("")
}

btn0.onclick = function(e) {
    num1.push(0)
    main.push(0)
    result.innerText = num1.join("")
}


btnadd.onclick = function(e) {
    num1.push(" + ")
    main.push("+")
    result.innerText = num1.join("")
}


btnsub.onclick = function(e) {
    num1.push(" - ")
    main.push("-")
    result.innerText = num1.join("")
}


btnmulti.onclick = function(e) {
    num1.push(" × ")
    main.push("*")
    result.innerText = num1.join("")
}

btndiv.onclick = function(e) {
    num1.push(" ÷ ")
    main.push("/")
    result.innerText = num1.join("")
}

btnc.onclick = function(e) {
    num1 = []
    main = []
    output.innerText = 0
    result.innerText = 0
}

btndel.onclick = function(e) {
    num1.pop()
    main.pop()
    result.innerText = num1.join("")
}

btnsqr.onclick = function(e) {
    let sqr = main.join("") * main.join("")

    result.innerText = (main + "²")
    output.innerText = sqr


    num1 = []
    num1.push(sqr)

    main = []
    main.push(sqr)
}

btncube.onclick = function(e) {
    let cube = main.join("") * main.join("") * main.join("")

    result.innerText = (main + "³")
    output.innerText = cube


    num1 = []
    num1.push(cube)

    main = []
    main.push(cube)

}

btnsqrt.onclick = function(e) {
    let sqrt = Math.sqrt(num1)

    result.innerText = ("√" + main)

    num1 = []
    num1.push(sqrt)

    main = []
    main.push(sqrt)


    output.innerText = sqrt
}

btncbrt.onclick = function(e) {
    let cbrt = Math.cbrt(num1)

    result.innerText = ("")

    num1 = []
    num1.push(cbrt)

    main = []
    main.push(cbrt)

    output.innerText = cbrt
}

btnpi.onclick = function(e) {
    main.push(Math.PI)
    num1.push(Math.PI)

    result.innerText = num1.join("")

}

btne.onclick = function(e) {
    main.push(Math.E)
    num1.push(Math.E)

    result.innerText = num1.join("")
}

btnlog.onclick = function(e) {
    let log = Math.log(main)

    main.push(log)
    num1.push(log)

    output.innerText = log

}

btnrun.onclick = function(e) {
    //console.log(calc(num1))
    output.innerText = eval(main.join(""))
    let ans = eval(main.join(""))
    num1 = []
    num1.push(ans)

    main = []
    main.push(ans)
}



console.log(num1.join(""))

// calculation = num1.split(" ")
// if calculation

// function calc(array) {
//     let whole = array.join("")
//     let split = whole.split(' ')
//         //console.log(split)

//     for (var i = 0; i < array.length; i++) {
//         if (i == '+') {
//             console.log('nice')
//             return eval(`${array[0]} + ${array[2]}`)
//         }
//     }
// }
//calc(num1)
alert('nice dude')
    // console.log(bro)

// console.log(Math.sqrt(2))
console.log(Math.log(2))

output.innerText = "0"
result.innerText = "0"