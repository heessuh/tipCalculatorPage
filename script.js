function calculate() {
  //get the input values from html
  const check = document.getElementById("check").value
  const people = document.getElementById("people").value
  const tip = document.getElementById("tip").value
  //verify datatype of input...should be strings
  console.log(typeof check)

  //save the data to local storage
  localStorage.setItem("check", check)
  localStorage.setItem("people", people)
  localStorage.setItem("tip", tip)

  //get values from local storage and convert to numbers
  const savedCheck = Number(localStorage.getItem("check"))
  const savedPeople = Number(localStorage.getItem("people"))
  const savedTip = Number(localStorage.getItem("tip"))

  //verify that the retrieved data have been converted to numbers
  console.log(typeof savedCheck)

  //calculate
  const result = (savedCheck + (savedCheck * savedTip) / 100) / savedPeople

  //display result to two decimal places
  document.getElementById("result").value = result.toFixed(2)
}
function reset() {
  //clear input elements
  document.getElementById("check").value = ""
  document.getElementById("people").value = ""
  document.getElementById("tip").value = ""
  document.getElementById("result").value = ""

  //clear local storage
  localStorage.removeItem("check")
  localStorage.removeItem("people")
  localStorage.removeItem("tip")
}
calculate()
reset()
