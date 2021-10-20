function checkInput() {
  var leftInput = document
    .getElementById("leftInput")
    .value.trim()
    .replaceAll("\\s{2,}", " ")
    .split(" ");
  var rightInput = document
    .getElementById("rightInput")
    .value.trim()
    .replaceAll("\\s{2,}", " ")
    .split(" ");

  for (let j = 0; j < leftInput.length; j++) {
    if (leftInput[j] !== rightInput[j]) {
          vueError(rightInput[j], checkTxt(leftInput[j], rightInput[j]));
    }
  }
}

function parseTextToWord(txt) {
  return txt.split(" ");
}

function vueError(str, num) {    
  var incorrect = document.getElementById("return");
  var string = "";
  for (let n = 0; n < str.split("").length; n++) {      
    let a = true;
    for (let m = 0; m < num.length; m++) {
      if (num[m].orderNum == n) {
        a = false;
        string =string+'<i style="color:red;">' + str[n] + "</i>";
      }
    }
    if (a) {
        string =string+'<i style="color:white;">' + str[n] + "</i>";
    }
  } 
  incorrect.innerHTML =incorrect.innerHTML+ '<p style="color:white;">'+string + "</p>";
}



function checkTxt(string1, string2) {
    
  var s1 = string1.split("");
  var s2 = string2.split("");
  var errorLetters = [];
  if (string1.length < string2.length) {
    for (let q = string1.length; q < string2.length; q++) {
      var obj = {
      orderNum: q,
      leatter: s2[q],
    };
    errorLetters.push(obj);
    }
    
  }
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      var obj = {
        orderNum: i,
        leatter: s2[i],
      };
      errorLetters.push(obj  );
    }
  }
  return errorLetters
}


function clearMistakes() {
  // console.log("ishaladi");
  var incorrect = document.getElementById("return");
  incorrect.innerHTML = " "

}