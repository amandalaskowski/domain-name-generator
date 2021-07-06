/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let first = ["my", "your", "their"];
  let second = ["crazy", "funny", "stupid"];
  let third = ["sister", "friend", "dog"];
  let fourth = [".com", ".org", ".net"];
  for (let f = 0; f < first.length; f++) {
    for (let s = 0; s < second.length; s++) {
      for (let t = 0; t < third.length; t++) {
        for (let i = 0; i < fourth.length; i++) {
          console.log(first[f] + second[s] + third[t] + fourth[i]);
        }
      }
    }
  }
  console.log("Hello Rigo from the console!");
};
