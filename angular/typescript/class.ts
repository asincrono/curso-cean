interface If1 {
  name: string
  age: number
  extra: number
  ultra: number
}

class Cls1 {
  name: string
  age: number
  extra: number
  ultra: number
}

class Cls2 {
  name: string
  age: number
}

let c1: Cls1 = new Cls1()

console.log(c1)

let c2: Cls2 = c1

console.log(c2)

let c3: If1 = c1