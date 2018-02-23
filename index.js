
   
   xhr = new XMLHttpRequest();
   xhr.open("GET",'https://api.myjson.com/bins/19tk39', false);
   xhr.send();
   console.log(xhr.status)
   data = JSON.parse(xhr.response);
   console.log(data)
   
   
   console.log (data.Youtube.Most_Watched.Name)
   
   console.log(data.Youtube.Most_Watched.link)
   
   var newH1 = document.createElement("H1");
  newH1.appendChild(document.createTextNode(String(data.Youtube.Most_Watched.Name)));
  document.body.appendChild(newH1);

     var newP = document.createElement("p");
  newP.appendChild(document.createTextNode(String(data.Youtube.Most_Watched.link)));
  document.body.appendChild(newP);
