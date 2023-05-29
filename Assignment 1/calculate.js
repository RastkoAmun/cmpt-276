//------------- Query Selectors -------------------------
const grade_max = document.getElementById('max');
const grade_a_plus = document.getElementById('a_plus');
const grade_a = document.getElementById('a');
const grade_a_minus = document.getElementById('a_minus');
const grade_b_plus = document.getElementById('b_plus');
const grade_b = document.getElementById('b');
const grade_b_minus = document.getElementById('b_minus');
const grade_c_plus = document.getElementById('c_plus');
const grade_c = document.getElementById('c');
const grade_c_minus = document.getElementById('c_minus');
const grade_d = document.getElementById('d');
const grade_f = document.getElementById('f');

const result_a_plus = document.getElementById('result_a_plus');
const result_a = document.getElementById('result_a');
const result_a_minus = document.getElementById('result_a_minus');
const result_b_plus = document.getElementById('result_b_plus');
const result_b = document.getElementById('result_b');
const result_b_minus = document.getElementById('result_b_minus');
const result_c_plus = document.getElementById('result_c_plus');
const result_c = document.getElementById('result_c');
const result_c_minus = document.getElementById('result_c_minus');
const result_d = document.getElementById('result_d');
const result_f = document.getElementById('result_f');

const new_grade_input = document.getElementById('new_grade_input');
const submit_btn = document.getElementById('submit_btn')

let max_value = Number(max.value);
let a_plus_value = Number(a_plus.value);
let a_value = Number(a.value);
let a_minus_value = Number(a_minus.value);
let b_plus_value = Number(b_plus.value);
let b_value = Number(b.value);
let b_minus_value = Number(b_minus.value);
let c_plus_value = Number(c_plus.value);
let c_value = Number(c.value);
let c_minus_value = Number(c_minus.value);
let d_value = Number(d.value);
let f_value = Number(f.value);

let grades = [65.95, 56.98, 78.62, 96.1, 90.3, 72.24, 92.34, 60.00, 81.43, 86.22, 88.33, 9.03, 49.93, 52.34, 53.11, 50.10, 88.88, 55.32, 55.69, 61.68, 70.44, 70.54, 90.0, 71.11, 80.01];

// ------------------ Event Listeners ---------------------
//MAX Grade
grade_max.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_max.blur();
})
grade_max.addEventListener('blur', () => {
  let userInput = Number(grade_max.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_max.value = max_value;
  }
  else if(userInput <= a_plus_value || userInput > 100){
    alert('INVALID INPUT: Range mismatch')
    grade_max.value = max_value;
  }
  else{
    max_value = userInput;
    calculate(grades);
  }
})

//A+
grade_a_plus.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_a_plus.blur();
})
grade_a_plus.addEventListener('blur', () => {
  let userInput = Number(grade_a_plus.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_a_plus.value = a_plus_value;
  }
  else if(userInput <= a_value || userInput >= max_value){
    alert('INVALID INPUT: Range mismatch')
    grade_a_plus.value = a_plus_value;
  }
  else{
    a_plus_value = userInput;
    calculate(grades);
  }
})

//A
grade_a.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_a.blur();
})
grade_a.addEventListener('blur', () => {
  let userInput = Number(grade_a.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_a.value = a_value;
  }
  else if(userInput <= a_minus_value || userInput >= a_plus_value){
    alert('INVALID INPUT: Range mismatch')
    grade_a.value = a_value;
  }
  else{
    a_value = userInput;
    calculate(grades);
  }
})

//A-
grade_a_minus.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_a_minus.blur();
})
grade_a_minus.addEventListener('blur', () => {
  let userInput = Number(grade_a_minus.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_a_minus.value = a_minus_value;
  }
  else if(userInput <= b_plus_value || userInput >= a_value){
    alert('INVALID INPUT: Range mismatch')
    grade_a_minus.value = a_minus_value;
  }
  else{
    a_minus_value = userInput;
    calculate(grades);
  }
})

//B+
grade_b_plus.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_b_plus.blur();
})
grade_b_plus.addEventListener('blur', () => {
  let userInput = Number(grade_b_plus.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_b_plus.value = b_plus_value;
  }
  else if(userInput <= b_value || userInput >= a_minus_value){
    alert('INVALID INPUT: Range mismatch')
    grade_b_plus.value = b_plus_value;
  }
  else{
    b_plus_value = userInput;
  }
})

//B
grade_b.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_b.blur();
})
grade_b.addEventListener('blur', () => {
  let userInput = Number(grade_b.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_b.value = b_value;
  }
  else if(userInput <= b_minus_value || userInput >= b_plus_value){
    alert('INVALID INPUT: Range mismatch')
    grade_b.value = b_value;
  }
  else{
    b_value = userInput;
  }
})

//B-
grade_b_minus.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_b_minus.blur();
})
grade_b_minus.addEventListener('blur', () => {
  let userInput = Number(grade_b_minus.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_b_minus.value = b_minus_value;
  }
  else if(userInput <= c_plus_value || userInput >= b_value){
    alert('INVALID INPUT: Range mismatch')
    grade_b_minus.value = b_minus_value;
  }
  else{
    b_minus_value = userInput;
  }
})

//C+
grade_c_plus.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_c_plus.blur();
})
grade_c_plus.addEventListener('blur', () => {
  let userInput = Number(grade_c_plus.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_c_plus.value = c_plus_value;
  }
  else if(userInput <= c_value || userInput >= b_minus_value){
    alert('INVALID INPUT: Range mismatch')
    grade_c_plus.value = c_plus_value;
  }
  else{
    c_plus_value = userInput;
  }
})

//C
grade_c.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_c.blur();
})
grade_c.addEventListener('blur', () => {
  let userInput = Number(grade_c.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_c.value = c_value;
  }
  else if(userInput <= c_minus_value || userInput >= c_plus_value){
    alert('INVALID INPUT: Range mismatch')
    grade_c.value = c_value;
  }
  else{
    c_value = userInput;
  }
})

//C-
grade_c_minus.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_c_minus.blur();
})
grade_c_minus.addEventListener('blur', () => {
  let userInput = Number(grade_c_minus.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_c_minus.value = c_minus_value;
  }
  else if(userInput <= d_value || userInput >= c_value){
    alert('INVALID INPUT: Range mismatch')
    grade_c_minus.value = c_minus_value;
  }
  else{
    c_minus_value = userInput;
  }
})

//D
grade_d.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_d.blur();
})
grade_d.addEventListener('blur', () => {
  let userInput = Number(grade_d.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_d.value = d_value;
  }
  else if(userInput <= f_value || userInput >= c_minus_value){
    alert('INVALID INPUT: Range mismatch')
    grade_d.value = d_value;
  }
  else{
    d_value = userInput;
  }
})

//F
grade_f.addEventListener('keypress', (e) => {
  if(e.key === "Enter") grade_f.blur();
})
grade_f.addEventListener('blur', () => {
  let userInput = Number(grade_f.value);
  if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_f.value = f_value;
  }
  else if(userInput < 0 || userInput >= d_value){
    alert('INVALID INPUT: Range mismatch')
    grade_f.value = f_value;
  }
  else{
    f_value = userInput;
  }
})

submit_btn.addEventListener('click', () => {
  let new_grade = Number(new_grade_input.value)
  if(isNaN(new_grade)){
    alert('INVALID INPUT: You must enter a number');
    new_grade_input.value = ''
  }else if(new_grade < 0 || new_grade > 100){
    alert('INVALID INPUT: Out of range');
    new_grade_input.value = ''
  }else{
    grades.push(new_grade);
    new_grade_input.value = ''
    calculate(grades);
  } 
})
new_grade_input.addEventListener('keypress', (e) => {
  if(e.key === 'Enter'){
    let new_grade = Number(new_grade_input.value)
    if(isNaN(new_grade)){
      alert('INVALID INPUT: You must enter a number');
      new_grade_input.value = ''
    }else if(new_grade < 0 || new_grade > 100){
      alert('INVALID INPUT: Out of range');
      new_grade_input.value = ''
    }else{
      grades.push(new_grade);
      new_grade_input.value = ''
      calculate(grades);
    } 
  }
})

calculate(grades);


// ---------------- Functions --------------------
function calculate(grades){
  reserInnerHTML();
  grades.forEach(grade => {
    checkGrade(grade);
  });
}

function checkGrade(grade) {
  if(grade >= grade_a_plus.value && grade <= grade_max.value){
    result_a_plus.innerHTML += 'O';
  }
  else if(grade >= grade_a.value && grade < grade_a_plus.value){
    result_a.innerHTML += 'O';
  }
  else if(grade >= grade_a_minus.value && grade < grade_a.value){
    result_a_minus.innerHTML += 'O';
  }
  else if(grade >= grade_b_plus.value && grade < grade_a_minus.value){
    result_b_plus.innerHTML += 'O';
  }
  else if(grade >= grade_b.value && grade < grade_b_plus.value){
    result_b.innerHTML += 'O';
  }
  else if(grade >= grade_b_minus.value && grade < grade_b.value){
    result_b_minus.innerHTML += 'O';
  }
  else if(grade >= grade_c_plus.value && grade < grade_b_minus.value){
    result_c_plus.innerHTML += 'O';
  }
  else if(grade >= grade_c.value && grade < grade_c_plus.value){
    result_c.innerHTML += 'O';
  }
  else if(grade >= grade_c_minus.value && grade < grade_c.value){
    result_c_minus.innerHTML += 'O';
  }
  else if(grade >= grade_d.value && grade < grade_c_minus.value){
    result_d.innerHTML += 'O';
  }
  else{
    result_f.innerHTML += 'O';
  }
}

function reserInnerHTML(){
  result_a_plus.innerHTML = '';
  result_a.innerHTML = '';
  result_a_minus.innerHTML = '';
  result_b_plus.innerHTML = '';
  result_b.innerHTML = '';
  result_b_minus.innerHTML = '';
  result_c_plus.innerHTML = '';
  result_c.innerHTML = '';
  result_c_minus.innerHTML = '';
  result_d.innerHTML = '';
  result_f.innerHTML = '';
}



