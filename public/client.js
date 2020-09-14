// "*LETS KEEP IT DARK MODE*"
//import bubble_Sort from '/bs.js'
// client-side js
// run by the browser each time your view template is loaded
let oldSize = 0;
let newSize = 0;
let oldGridSize = 0;
let newGridSize = 0;
let randArr = [];
let maxHeight = parseFloat(20.0);
let minHeight = parseFloat(2.0);
let timeValue = 0;
let isSorting = false;
let cells;

// var secondTarget = $("#" + firstElement).css("left")
// var firstTarget = $("#" + secondElement).css("left")
// $("#" + firstElement).css("left", firstTarget + "em");
// $("#" + secondElement).css("left", secondTarget + "em");
//   //console.log(secondElement)

function timer(ms) {
 return new Promise(res => setTimeout(res, ms));
}

function skkwapNum(firstElement, secondElement) {
  var swapDone = false;
  var childA = $("#" + firstElement);
  var childB = $("#" + secondElement);
  if (swapDone === false) {
    childA.classList.add("transition");
    childB.classList.add("transition");
    finalChildAStyle.x =
      childA.getBoundingClientRect().left - childB.getBoundingClientRect().left;
    finalChildAStyle.y =
      childB.getBoundingClientRect().top - childA.getBoundingClientRect().top;
    finalChildBStyle.x =
      childB.getBoundingClientRect().left - childA.getBoundingClientRect().left;
    finalChildBStyle.y =
      childA.getBoundingClientRect().top - childB.getBoundingClientRect().top;
    childA.style.transform = `translate(${finalChildAStyle.x}px, ${finalChildAStyle.y}px)`;
    childB.style.transform = `translate(${finalChildBStyle.x}px, ${finalChildBStyle.y}px)`;

    setTimeout(() => {
      document.querySelector(".container").insertBefore(childB, childA);
      childA.classList.remove("transition");
      childB.classList.remove("transition");
      childB.removeAttribute("style");
      childA.removeAttribute("style");
    }, 300);
  }
  swapDone = true;
}

function swap(arr, first_Index, second_Index) {
  var temp = arr[first_Index];
  arr[first_Index] = arr[second_Index];
  arr[second_Index] = temp;
}

function swapNum(firstElement, secondElement, array) {
  $("#" + firstElement).css("height", array[firstElement] + "em");
  $("#" + secondElement).css("height", array[secondElement] + "em");
  //console.log(secondElement)

  //document.getElementById("graph").insertBefore(document.getElementById(secondElement), document.getElementById(firstElement));
}

function swapColor2(firstElement, secondElement, color) {
  $("#" + firstElement).css("background", color);
  $("#" + secondElement).css("background", color);
  //console.log(color)
}

function isTextSelected(input) {
  if (typeof input.selectionStart == "number") {
    return (
      input.selectionStart == 0 && input.selectionEnd == input.value.length
    );
  } else if (typeof document.selection != "undefined") {
    input.focus();
    return document.selection.createRange().text == input.value;
  }
}

async function new_bubble_sort(arr) {
  var len = arr.length, i, j;
  for (i = 0; i < len - 1; i++) {
      for (j = 0; j < len - i - 1; j++) {
          await timer(1000);
          console.log(i,j);
        //incatation
          console.log(arr);
        if (arr[j] > arr[j + 1]) {
          swap(arr, j, j + 1);
          //change 
        }
        //upadate whole array
      }
  }
  return arr;
}


let a = [6,3,8,2,5,8,1];
console.log(new_bubble_sort(a));

function insertionSort(arr) {
  let z = 0;
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    let el = arr[i];
    let j;

    for (j = i - 1; j >= 0 && arr[j] > el; j--) {
      arr[j + 1] = arr[j];
    }
    arr[j + 1] = el;
  }
  return arr;
}
console.log(insertionSort([3, 10, 2, 5, 11, 4, 1]));


//New Try
function Bubble(arr) {
  let z = 0;
  let n = arr.length;
  for (var i = 0; i < n; i++) {
    //console.log(isSorting)

    for (var j = 0; j < n - i - 1; j++) {
      z++;
      (function(j, i) {
        setTimeout(function() {
          swapColor2(parseInt(n - i - 1), parseInt(n - i - 1), "blue");
          swapColor2(parseInt(n - i), parseInt(n - i), "red");

          (function(firstElement, secondElement, color) {
            setTimeout(() => {
              swapColor2(firstElement, secondElement, color);
            }, 10000 / (n * n));
          })(parseInt(j), parseInt(j + 1), "yellow");

          (function(firstElement, secondElement, color) {
            setTimeout(() => {
              if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapNum(j, parseInt(j + 1), arr);
                swapColor2(firstElement, secondElement, color);
              }
            }, 70000 / (n * n));
          })(parseInt(j), parseInt(j + 1), "red");

          (function(firstElement, secondElement, color) {
            setTimeout(() => {
              swapColor2(firstElement, secondElement, color);
            }, 1000 / (n * n));
          })(parseInt(j - 2), parseInt(j - 1), "blue");
        }, (100000 / (n * n)) * z); //OYE // This is better bcoz earlier it was taking lot of time even for 70, Now it will go accordingly
        //setTimeout(swapColor(j, parseInt(j + 1), 'blue'), 100);
      })(j, i);
    }
  }
  
  (function(firstElement, secondElement, color) {
    setTimeout(() => {
      swapColor2(firstElement, secondElement, color);
    }, 49500);
  })(parseInt(0), parseInt(1), "red");
}



// NOW RUN ITrandArr
// ITS THE BIG BRAIN TIME
function bubble_sort_beta(arr) {
  let z = 0;
  let n = arr.length;
  for (var i = 0; i < n; i++) {
    //console.log(isSorting)

    for (var j = 0; j < n - i - 1; j++) {
      z++;
      (function(j, i) {
        setTimeout(function() {
          swapColor2(parseInt(n - i - 1), parseInt(n - i - 1), "blue");
          swapColor2(parseInt(n - i), parseInt(n - i), "red");

          (function(firstElement, secondElement, color) {
            setTimeout(() => {
              swapColor2(firstElement, secondElement, color);
            }, 10000 / (n * n));
          })(parseInt(j), parseInt(j + 1), "yellow");

          (function(firstElement, secondElement, color) {
            setTimeout(() => {
              if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapNum(j, parseInt(j + 1), arr);
                swapColor2(firstElement, secondElement, color);
              }
            }, 70000 / (n * n));
          })(parseInt(j), parseInt(j + 1), "red");

          (function(firstElement, secondElement, color) {
            setTimeout(() => {
              swapColor2(firstElement, secondElement, color);
            }, 1000 / (n * n));
          })(parseInt(j - 2), parseInt(j - 1), "blue");
        }, (100000 / (n * n)) * z); //OYE // This is better bcoz earlier it was taking lot of time even for 70, Now it will go accordingly
        //setTimeout(swapColor(j, parseInt(j + 1), 'blue'), 100);
      })(j, i);
    }
  }

  (function(firstElement, secondElement, color) {
    setTimeout(() => {
      swapColor2(firstElement, secondElement, color);
      
      //ENABLES THE BUTTONS AFTER SORT IS DONE
        to_disable_elems = document.getElementsByClassName("to-disable")
        for(let i =0;i<to_disable_elems.length;i++){
          to_disable_elems[i].style.pointerEvents = "auto";
        }
      document.getElementById("sort").innerHTML = "SORT";
      document.getElementById("sort").style.backgroundColor = "";
      console.log(randArr);
      //
      
    }, 49500);
  })(parseInt(0), parseInt(1), "red");
}

$(document).ready(function() {
  $(".dropdown-submenu a.test").on("click", function(e) {
    $(this)
      .next("ul")
      .toggle();
    e.stopPropagation();
    e.preventDefault();
  });

  $("#graph").html(
    '<div id="fixed" style="height:' +
      parseInt(maxHeight + 1) +
      'em;width:0.4px"></div>'
  );
  generateGraph();
  generateGrid();
  $("#sort").click(function(e) {
    e.preventDefault();
    //Disables the buttons
    to_disable_elems = document.getElementsByClassName("to-disable")
    document.getElementById("sort").innerHTML = "SORTING";
    document.getElementById("sort").style.backgroundColor = "gray";
    for(let i =0;i<to_disable_elems.length;i++){
      to_disable_elems[i].style.pointerEvents =  "none";//style.display = "none";
    }
    //
    console.log(randArr);
    bubble_sort_beta(randArr);
    // bubble_Sort(randArr);
    
    // insertionSort(randArr);

    //bubble_Sort(randArr)
  });
});

function onSelect(selectionDiv) {
  $("#navbarSupportedContent .active").removeClass("active");
  $("#" + selectionDiv).addClass("active");
}

function generateGraph() {
  newSize = $("#size_input").val();
  // console.log(oldSize);
  console.log("a" + newSize);

  if (newSize != oldSize) {
    isSorting = false;
    var index = 0;
    $("#graph").html(
      '<div id="fixed" style="height:' +
        parseInt(maxHeight + 1) +
        'em;width:0.4px"></div>'
    );
    randArr = Array.from({ length: newSize }, () =>
      Math.floor(Math.random() * (maxHeight - minHeight) + minHeight)
    );
    randArr.forEach(element => {
      $("#graph").append(
        '<div class="bar" id="' +
          index++ +
          '" style="height:' +
          element +
          'em"></div>'
      );
    });
    //console.log(randArr)
    oldSize = newSize;
  } else {
    isSorting = true;
  }
}

function changeColor(e) {
  let red = 256;
  let green = 256;
  let blue = 256;

  color = `rgb(${red},${green},${blue})`;
  e.target.style.backgroundColor = "black";
  //colorCount += 0.10;
}
function generateGrid() {
  mainDiv = $("#pathf_graph table");
  newGridSize = $("#gridsize_input").val();
  if (newGridSize != oldGridSize) {
    mainDiv.html("");
    gridSize = newGridSize;
    for (var i = 0; i < gridSize; i++) {
      const rowDiv = document.createElement("tr");
      rowDiv.className = "gridrow";
      for (var j = 0; j < gridSize * 4; j++) {
        const newDiv = document.createElement("td");
        newDiv.className = "grid";
        //newDiv.innerText = i + ' ' + j;
        rowDiv.append(newDiv);
      }
      mainDiv.append(rowDiv);
    }

    oldGridSize = newGridSize;
  }
}

setInterval(() => {
  generateGraph();
  generateGrid();
}, 50);
