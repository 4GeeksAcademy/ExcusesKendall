import "bootstrap";
import "./style.css";


window.onload = function () {
  //write your code here
  let who = ['Firulais', 'Mama Coco', 'Trump', 'Pocoyo'];
  let action = ['golpeo', 'se meo', 'salto', 'desconecto'];
  let what = ['el wifi', 'mi casa', 'mi perro'];
  let when = ['ayer en la tarde', 'en enero', 'cuando iba al baño', 'cuando vi a jesus', 'porque me pegaron'];


  function getRandomElement (list) {
    return list[Math.floor(Math.random()*list.length)]
  }


  function getExcuse () {
    let excuse =
      getRandomElement(who) +" "+
      getRandomElement(action) +" "+
      getRandomElement(what) +" "+
      getRandomElement(when);
      
    document.getElementById('excuse').innerHTML = excuse;
  }


  getExcuse();


  document.getElementById("button").addEventListener("click", getExcuse);

};

