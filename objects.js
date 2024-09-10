var tutorial = {
  topic: "Javascript",
  trainer: "sp",
  mode: "online",
};

document.write("Topic: " + tutorial.topic);
document.write("<br/> <br/>");
document.write("Trainer: " + tutorial.trainer);
document.write("<br/> <br/>");
document.write("Mode: " + tutorial.mode);
document.write("<br/> <br/>");

//from a for loop
for (var key in tutorial) {
  document.write(key + ":" + tutorial[key]);
  document.write("<br/>");
}
