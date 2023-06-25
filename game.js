
let run=0;
let friends = 3;
let sA = document.getElementById("sixAudio");
let llA = document.getElementById("llAudio");
let lBA = document.getElementById("lBAudio");
let cA = document.getElementById("cAudio");
let stA = document.getElementById("123Audio");
let sAvalue = true;
let llAvalue = true;
let lBAvalue = true;
let cAvalue = true;
let stAvalue = true;
generateGrid();

function audio(){
  if(sAvalue && llAvalue && lBAvalue && cAvalue){
    sAvalue = false;
    llAvalue = false;
    lBAvalue = false;
    cAvalue = false;
    stAvalue = false;
    document.getElementById("toggleAudio").innerHTML = "Turn on Audio";
  }
  else{
    sAvalue = true;
    llAvalue = true;
    lBAvalue = true;
    cAvalue = true;
    stAvalue = true;
    document.getElementById("toggleAudio").innerHTML = "Turn off Audio";
  }
}

function changeTheme(){
  var theme = document.getElementsByTagName("link")[0];
  if(theme.getAttribute("href") == "game1.css"){
    theme.setAttribute("href","game2.css");
  }
  else theme.setAttribute("href","game1.css");
}

function quitGame(){
  document.getElementById("quit").style.display = "block";
}

function closeQuitGame(){
  document.getElementById("quit").style.display = "none";
}



function gameOver(){
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("finalScore").innerHTML=run;
}

function gameStart(){
  document.getElementById("gameOver").style.display = "none";
}

function lostLifeline(){
  if(llAvalue){
    llA.play();
  }
  document.getElementById("lostLifeline").style.display = "block";
  setTimeout(()=>{
    const life_line = document.getElementById("lostLifeline");
    life_line.style.display = 'none';
  },1200);
}

function scoredFour(){
  document.getElementById("four").style.display = "block";
  setTimeout(()=>{
    const four = document.getElementById("four");
    four.style.display = 'none';
  },1000);
}

function scoredSix(){
  document.getElementById("six").style.display = "block";
  setTimeout(()=>{
    const six = document.getElementById("six");
    six.style.display = 'none';
  },1500);
}



function settingFinal(){
  document.getElementById("finalSetting").style.display = "block";
}

function closeSettingFinal(){
  document.getElementById("finalSetting").style.display = "none";
}

function game(){
  var x = document.getElementById("dimension").value;
  var y = document.getElementById("player1").value;
  if(x<6 || x>10 || y==""){
    window.alert("The inputs are not valid. 'Dimension' should be a number from 6 to 10(both inclusive). Write player's name in 'Player' field");
  }
  else{
    document.getElementById("menu").style.display = "none";
    document.getElementById("forms").style.display = "none";
    var name1 = document.getElementById("player1").value
    document.getElementById("wish").innerHTML = "All the best " + name1 + " !";
    setTimeout(()=>{
    const wish = document.getElementById("wish");
    wish.style.display = 'none';
    },500)
    setTimeout(() => {
      document.getElementById("scores").style.display = "flex";
    }, 500);
    setTimeout(() => {
      document.getElementById("downI").style.display = "block";
    }, 500);
    document.getElementsByClassName("but").addEventListener("click", generateGrid());
  }
  
}

function instructions(){
  const nirdesh = document.getElementById("instructions");
  nirdesh.style.display = "block";
  window.alert("Click anywhere on the screen to close the instructions");
}

function closeinst(){
  document.getElementById("instructions").style.display = "none";
}

function generateGrid() {
  //generate grid
  sAvalue = true;
  llAvalue = true;
  lBAvalue = true;
  cAvalue = true;
  stAvalue = true;
  document.getElementById("toggleAudio").innerHTML = "Turn off Audio"; 
  const gridSize  = document.getElementById("dimension").value;
  const score = document.getElementById("score");
  const lifelines = document.getElementById("lifelines");
  var grid = document.getElementById("grid");
  grid.innerHTML="";
  score.innerHTML = 0;
  lifelines.innerHTML = 3;
  run=0;
  friends=3;
  for (var i=0; i<gridSize; i++) {
    row = grid.insertRow(i);
    for (var j=0; j<gridSize; j++) {
      cell = row.insertCell(j);
      console.log("hello1");
      cell.onclick = function() { clickCell(this); };
      var fielder = document.createAttribute("data-fielder");  
      var bomb = document.createAttribute("data-bomb");
      var fours = document.createAttribute("chars");
      var sixes = document.createAttribute("chheh");
      var twos = document.createAttribute("dos");
      fielder.value = "false";  
      bomb.value = "false";
      fours.value = "false";
      sixes.value = "false";
      twos.value = "false";     
      cell.setAttributeNode(fielder);
      cell.setAttributeNode(bomb);
      cell.setAttributeNode(fours);
      cell.setAttributeNode(sixes);
      cell.setAttributeNode(twos);
    }
  }
  addFielders();
  addBomb();
  add4s();
  add6s();
  add2s();
}

function addFielders(){
  const gridSize  = document.getElementById("dimension").value;
  //Add fielders randomly
  var z = Math.floor((gridSize*gridSize*23)/100);
  
  console.log(z);
  for (var i=0; i<z; i++) {
    var row = Math.floor(Math.random() * gridSize);
    var col = Math.floor(Math.random() * gridSize);
    var cell = grid.rows[row].cells[col];
    cell.setAttribute("data-fielder","true");
  }
}

function addBomb(){
  const gridSize  = document.getElementById("dimension").value;
    for(var i=0;i<(gridSize-4);i++){
        var row = Math.floor(Math.random()*gridSize);
        var col = Math.floor(Math.random()*gridSize);
        var cell = grid.rows[row].cells[col];
        if(cell.getAttribute("data-fielder")=="true"){
            i=i-1;
            continue;
        }
        else{
            cell.setAttribute("data-bomb","true");
        }
    }
}

function add4s(){
  const gridSize  = document.getElementById("dimension").value;
  for(var i=0;i<((gridSize*gridSize)-10)/10;i++){
    var row = Math.floor(Math.random()*gridSize);
    var col = Math.floor(Math.random()*gridSize);
    var cell = grid.rows[row].cells[col];
    if(cell.getAttribute("data-fielder")=="true"){
      i=i-1;
      continue;
      cAvalue = true;
      stAvalue = true;
    }
    else if(cell.getAttribute("data-bomb")=="true"){
      i=i-1;
      continue;
    }
    else{
      cell.setAttribute("chars", "true");
    }
  }
}

function add6s(){
  const gridSize  = document.getElementById("dimension").value;
  for(var i=0;i<((gridSize*gridSize)-10)/10;i++){
    var row = Math.floor(Math.random()*gridSize);
    var col = Math.floor(Math.random()*gridSize);
    var cell = grid.rows[row].cells[col];
    if(cell.getAttribute("data-fielder")=="true"){
      i=i-1;
      continue;
    }
    else if(cell.getAttribute("data-bomb")=="true"){
      i=i-1;
      continue;
    }
    else if(cell.getAttribute("chars")=="true"){
      i=i-1;
      continue;
    }
    else{
      cell.setAttribute("chheh", "true");
    }
  }
}

function add2s(){
  const gridSize  = document.getElementById("dimension").value;
  for(var i=0;i<(gridSize*gridSize)/3;i++){
    var row = Math.floor(Math.random()*gridSize);
    var col = Math.floor(Math.random()*gridSize);
    var cell = grid.rows[row].cells[col];
    if(cell.getAttribute("data-fielder")=="true"){
      i=i-1;
      continue;
    }
    else if(cell.getAttribute("data-bomb")=="true"){
      i=i-1;
      continue;
    }
    else if(cell.getAttribute("chars")=="true"){
      i=i-1;
      continue;
    }
    else if(cell.getAttribute("dos")=="true"){
      i=i-1;
      continue;
    }
    else{
      cell.setAttribute("dos", "true");
    }
  }
}

function revealFielders() {
  const gridSize  = document.getElementById("dimension").value;
    //Highlight all fielders in red
    for (var i=0; i<gridSize; i++) {
      for(var j=0; j<gridSize; j++) {
        var cell = grid.rows[i].cells[j];
        if (cell.getAttribute("data-fielder")=="true") cell.className="fielder";
      }
    }
}

function revealBomb(){
  const gridSize  = document.getElementById("dimension").value;
    for (var i=0; i<gridSize; i++) {
      for(var j=0; j<gridSize; j++) {
        var cell = grid.rows[i].cells[j];
        if (cell.getAttribute("data-bomb")=="true") cell.className="bomb";
      }
    }
}

function clickCell(cell) {
  //Check if the end-user clicked on a mine
  if (cell.getAttribute("data-fielder")=="true") {
    if(friends==0){
      revealFielders();
      gameOver();
    }
    else{
      cell.className = "fielder";
      friends--;
      lostLifeline();
      document.getElementById("lifelines").innerHTML = friends;
    }
  }
  else if(cell.getAttribute("data-bomb")=="true"){
    if(lBAvalue){
      lBA.play();
    }
    revealBomb();
    gameOver();
  } 
  else if(cell.getAttribute("chars")=="true"){
    if(cAvalue){
      cA.play();
    }
    cell.innerHTML=4;
    cell.className="chars";
    run=run+4;
    document.getElementById("score").innerHTML = run;
    scoredFour();
  }
  else if(cell.getAttribute("chheh")=="true"){
    if(sAvalue){
      sA.play();
    }
    cell.innerHTML=6;
    cell.className="chheh";
    run=run+6;
    document.getElementById("score").innerHTML = run;
    scoredSix();
  }
  else if(cell.getAttribute("dos")=="true"){
    if(stAvalue){
      stA.play();
    }
    cell.innerHTML=2;
    cell.className="clicked";
    run=run+2;
    document.getElementById("score").innerHTML = run;
  }
  else {
    if(stAvalue){
      stA.play();
    }
    cell.className="clicked";
    cell.innerHTML=1;
    run++;
    document.getElementById("score").innerHTML = run;
  }
}
