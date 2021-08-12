
//This section allows the pledge to be personlised according to information that you entered
var displayScript = document.getElementById("scriptReturned");
var scriptBtn = document.getElementById("scriptBtn");
var pledgeSigned = document.getElementById("pledgeSigned")

if (scriptBtn) {
  scriptBtn.addEventListener("click", generateScript);
}

function generateScript(){
  var name = document.getElementById("name").value;
  var ideas = document.getElementById("ideas").value;
  
  displayScript.innerHTML= "I, " + name + ", give my pledge to help protect all members of the population by promoting vaccinations. I will: " + ideas + " . I will do this because I understand this is the best way to ensure the maximum amount of people have lives free of complications from viruses, bacterial infections or toxins.";
  
  //it also prints the date when you made the pledge
  const d = new Date();
  var date = d.getDate();
  var month = d.getMonth() + 1;
  var year = d.getFullYear();

  pledgeSigned.innerHTML= "This pledge was created on " + date + "/" + month + "/" + year + "."

  window.scrollBy(0, 100);
}
