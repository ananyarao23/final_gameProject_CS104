
let run=0;
let friends = 3;
let sA = document.getElementById("sixAudio");
let llA = document.getElementById("llAudio");
let lBA = document.getElementById("lBAudio");
let cA = document.getElementById("cAudio");

generateGrid();

function quitGame(){
  document.getElementById("quit").style.display = "block";
}

function closeQuitGame(){
  document.getElementById("quit").style.display = "none";
}

function audio(){
  x.play();
}

function gameOver(){
  document.getElementById("gameOver").style.display = "block";
  document.getElementById("finalScore").innerHTML=run;
}

function gameStart(){
  document.getElementById("gameOver").style.display = "none";
}

function lostLifeline(){
  llA.play();
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

function takename(){
  var a = document.getElementById("players").value
  document.getElementById("forms").style.display = "none";
 if (a==1){
  document.getElementById("pl1").style.display = "block";
  document.getElementById("go").style.display = "block";
 }
 if (a==2){
  document.getElementById("pl1").style.display = "block";
  document.getElementById("pl2").style.display = "block";
  document.getElementById("go").style.display = "block";
 }
}

function settingFinal(){
  document.getElementById("finalSetting").style.display = "block";
}

function closeSettingFinal(){
  document.getElementById("finalSetting").style.display = "none";
}

function game(){
  document.getElementById("menu").style.display = "none";
  document.getElementById("start").style.display = "none";
  b = document.getElementById("players").value
  if (b==1){
    var name1 = document.getElementById("player1").value
    document.getElementById("wish").innerHTML = "All the best " + name1 + " !"
  }
  if (b==2){
    var name1 = document.getElementById("player1").value
    var name2 = document.getElementById("player2").value
    document.getElementById("wish").innerHTML = "All the best " + name1 + " and " + name2 + " !"
  }
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
  for (var i=0; i<11; i++) {
    console.log("hi")
    var row = Math.floor(Math.random() * gridSize);
    var col = Math.floor(Math.random() * gridSize);
    var cell = grid.rows[row].cells[col];
    cell.setAttribute("data-fielder","true");
    
  }
}

function addBomb(){
  const gridSize  = document.getElementById("dimension").value;
    for(var i=0;i<(gridSize*gridSize/10);i++){
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
    lBA.play();
    revealBomb();
    gameOver();
  } 
  else if(cell.getAttribute("chars")=="true"){
    cA.play();
    cell.innerHTML=4;
    cell.className="chars";
    run=run+4;
    document.getElementById("score").innerHTML = run;
    scoredFour();
  }
  else if(cell.getAttribute("chheh")=="true"){
    sA.play();
    cell.innerHTML=6;
    cell.className="chheh";
    run=run+6;
    document.getElementById("score").innerHTML = run;
    scoredSix();
  }
  else if(cell.getAttribute("dos")=="true"){
    cell.innerHTML=2;
    cell.className="clicked";
    run=run+2;
    document.getElementById("score").innerHTML = run;
  }
  else {
    cell.className="clicked";
    cell.innerHTML=1;
    run++;
    document.getElementById("score").innerHTML = run;
  }
}
