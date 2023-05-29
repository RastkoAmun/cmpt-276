console.log(grade_max);
console.log(grade_a_plus);
console.log(grade_a);
console.log(grade_a_minus);
console.log(grade_b_plus);
console.log(grade_b);
console.log(grade_b_minus);
console.log(grade_c_plus);
console.log(grade_c);
console.log(grade_c_minus);
console.log(grade_d);
console.log(grade_f);

if(isNaN(userInput)){
    alert('INVALID INPUT: You must enter a number')
    grade_a_plus.value = a_plus_value;
  }
  else if(userInput <= a_value || userInput > max_value){
    alert('INVALID INPUT: Range mismatch')
    grade_a_plus.value = a_plus_value;
  }
  else{
    a_plus_value = userInput;
  }


  function checkIfValid(input, obj, obj_value, low, high){
    console.log('Im here')
    if(isNaN(input)){
      alert('INVALID INPUT: You must enter a number')
      return false;
    }
    else if(input <= low || input > high){
      alert('INVALID INPUT: Range mismatch')
      return false;
    }
    else{
      return true;
    }
  }