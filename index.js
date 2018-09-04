//takeANumber accepts two parameters--line and persons name.  includes message "Welcome, ${name}. You are number ${line} in line"

function takeANumber (line, name){
  line.push(name);
  return `Welcome, ${name}. You are number ${line.length} in line.`
}

//nowServing accepts current line of people(katzDeliLine) and returns and removes the next individual in line. When line is empty, return "There is nobody waiting to be served!"

function nowServing(line){
  return "Currently serving " + line.shift() + '.'
}

//currentLine accepts line and returns "The line is  currently: 1. name, 2. name, 3. name ... n. name".  If line is empty, returns "The line is currently empty."