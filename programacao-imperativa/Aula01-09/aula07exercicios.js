{// Ex 1
// 1
!true
console.log(!true)
// 2
!false
console.log(!false)
// 3
!!false
console.log(!!false)
// 4
!!true
console.log(!!true)
// 5
!1
console.log(!1)
// 6
!!1
console.log(!!1)
// 7
!0
console.log(!0)
// 8
!!0
console.log(!!0)
// 9
!!""
console.log(!!"")
// 10
let x = 5 ;
let y = 9;
x < 10 && x!==5
console.log(x < 10 && x!==5)
x>9 || x===5
console.log(x>9 || x===5)
!(x===y)
console.log(!(x===y))
}
// Ex2
// 1
{let x=10
let y ="a"
y==="b" || x >= 10
console.log(y==="b" || x >= 10)}
// 2
{let x=3
let y=8
!(x == "3" || x === y) && !(y !== 8 && x <= y)
console.log(!(x == "3" || x === y) && !(y !== 8 && x <= y))}
// 3
{let str = ""
let msg = "haha!"
let eBonito = "false"
!((str || msg) && eBonito)
console.log(!((str || msg) && eBonito))
}
