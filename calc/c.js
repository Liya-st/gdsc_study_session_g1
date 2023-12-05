let Result = document.getElementById('result')
let Current = 0
function append1(number){
  Current += number
  Result.value = Current

}function append2(operator){
  Current += operator
  Result.value = Current
}function clear(){
  Current = 0
  Result.value =0
}function calculate(){
let result = eval(Current)
Result.value = result
Current = result.toString()
}

