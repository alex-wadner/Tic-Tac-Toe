var stat = {
    totalBoxes: [],
    ohs: [],
    exes: [],
};

function addCheckedBox(val, box, type) {
    val.push(box);
    stat.totalBoxes.push({box, type});
    if (type === "O") {
        outcomes(stat.ohs, type, "O's WIN!", "X's turn")
    } else {
        outcomes(stat.exes, type, "X's WIN!", "O's turn")
    }
};

function outcomes(loc, type, winMess, turnMess) {
    let x = loc.join("");
    if ((x.includes(1) && x.includes(2) && x.includes(3)) || 
        (x.includes(4) && x.includes(5) && x.includes(6)) ||
        (x.includes(7) && x.includes(8) && x.includes(9)) ||
        (x.includes(1) && x.includes(5) && x.includes(9)) ||
        (x.includes(3) && x.includes(5) && x.includes(7)) ||
        (x.includes(1) && x.includes(4) && x.includes(7)) ||
        (x.includes(2) && x.includes(5) && x.includes(8)) ||
        (x.includes(3) && x.includes(6) && x.includes(9))) {
        document.querySelector('h1').innerHTML = winMess;
        document.getElementById(type).innerHTML++
        document.querySelector('h2').innerHTML = "Press 'RESET' to play again";
        return;
    }
    else if (stat.ohs.length === 5) {   // if all squares are full (cannot be more than five O's on the board)
        document.querySelector('h1').innerHTML = "TIED!";
        document.querySelector('h2').innerHTML = "Press 'RESET' to play again";
        return;
    }
    else {
        document.querySelector('h2').innerHTML = turnMess;
    }
};

function handlers() {
    if (event.target.className === "squares") {
        let x = document.getElementById(event.target.id).innerHTML;
        let y = document.querySelector('h1').innerHTML;
        if (y === "O's WIN!" || y === "X's WIN!") {     // prevents further marking if someone wins
            return;
        }
        if (x === "O" || x === "X") {   // to avoid changing a marked X or O
            return;
        }
        else if (stat.totalBoxes.length % 2 === 0) {    // if an even number of marks on the board, place an "O"
            document.getElementById(event.target.id).innerHTML = "O";
            addCheckedBox(stat.ohs, event.target.id, "O")
        } else {              // if an odd number of marks on the board, place an "X"
            document.getElementById(event.target.id).innerHTML = "X";
            addCheckedBox(stat.exes, event.target.id, "X")
        } return;
    };
    if (event.target.className === "clear") {   // clears board, resets game
        for (let i = 1; i < 10; i++) {
            document.getElementById(i).innerHTML = ""
        };
        stat.totalBoxes = [];
        stat.ohs = [];
        stat.exes = [];
        document.querySelector('h2').innerHTML = "O's turn"
        document.querySelector('h1').innerHTML = "TIC TAC TOE"
    };    
}




/*

function outcomes(loc, "mesWin", "mesTurn")
let x = loc.join("");
        if ((x.includes(1) && x.includes(2) && x.includes(3)) || 
            (x.includes(4) && x.includes(5) && x.includes(6)) ||
            (x.includes(7) && x.includes(8) && x.includes(9)) ||
            (x.includes(1) && x.includes(5) && x.includes(9)) ||
            (x.includes(3) && x.includes(5) && x.includes(7)) ||
            (x.includes(1) && x.includes(4) && x.includes(7)) ||
            (x.includes(2) && x.includes(5) && x.includes(8)) ||
            (x.includes(3) && x.includes(6) && x.includes(9))) {
            document.querySelector('h1').innerHTML = mesWin;
            document.querySelector('h2').innerHTML = "Press 'RESET' to play again";
        }
        else if (stat.ohs.length === 5) {
            document.querySelector('h1').innerHTML = "TIED!";
            document.querySelector('h2').innerHTML = "Press 'RESET' to play again";
        }
        else {
            document.querySelector('h2').innerHTML = mesTurn;
        };









var box1 = document.getElementById("1").innerHTML;
var box2 = document.getElementById("2").innerHTML;
var box3 = document.getElementById("3").innerHTML;
var box4 = document.getElementById("4").innerHTML;
var box5 = document.getElementById("5").innerHTML;
var box6 = document.getElementById("6").innerHTML;
var box7 = document.getElementById("7").innerHTML;
var box8 = document.getElementById("8").innerHTML;
var box9 = document.getElementById("9").innerHTML;

function outcomes() {
    var x = checked.join('')
    if (/\1\2\3/g.test(x) 
        // checked.includes("1" && "5" && "9")||
        // checked.includes("1" && "4" && "7")||
        // checked.includes("2" && "5" && "8")||
        // checked.includes("3" && "6" && "9")||
        // checked.includes("4" && "5" && "6")||
        // checked.includes("7" && "8" && "9")
    
    ) {
        console.log("winner")
        return "winner"
    } else {
        console.log("no winner yet");
        return "no winner yet"
    }
}

function boxStatus(unit) {
    //debugger;
    if (unit === "O") {
        return "checked"
    } else {
        return "unchecked"
    }
}

var boxes = [
    box1= {boxNumber: "1", checked: false},
    box2= {boxNumber: 2, checked: false},
    box3= {boxNumber: 3, checked: false},
    box4= {boxNumber: 4, checked: false},
    box5= {boxNumber: 5, checked: false},
    box6= {boxNumber: 6, checked: false},
    box7= {boxNumber: 7, checked: false},
    box8= {boxNumber: 8, checked: false},
    box9= {boxNumber: 9, checked: false}
]

var keys = [/[123]/g, /[456]/g, /[789]/g]

function outcomes() {
    //debugger;
    let x = stat.ohs.join("")
for (let i = 0; i < keys.length; i++) {
        let y = stat.ohs.join("")
        let x = y.match(keys[i]);   
        if (x.join('') === stat.ohs.join('')) { // this line, need to find a way to match
            console.log("winner!")
        } else {
            console.log("no winner");
        }
    }


*/