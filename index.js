function summFun() {
  let sum = 0
  return function sumFun(x) {
    sum += x
    console.log(sum)
  }
}

const sum1 = summFun()
sum1(3)
sum1(5)
sum1(20)
