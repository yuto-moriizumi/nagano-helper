(()=>{"use strict";var e=function(){function e(){this.BUTTON_STYLE="\n  .nagano-button {\n    position:fixed;\n    left:10px;\n    top:10px;\n    padding:10px;\n    z-index: 999;\n}\n  ";var e=document.createElement("button");e.onclick=this.createTables,e.innerText="テーブルにする！",e.classList.add("nagano-button"),document.body.appendChild(e),this.addStyleTag(this.BUTTON_STYLE)}return e.prototype.addStyleTag=function(e){var t=document.createElement("style");t.innerHTML=e,document.getElementsByTagName("head")[0].appendChild(t)},e.prototype.createTables=function(){Array.from(document.getElementsByClassName("type_tweet")).forEach((function(e){for(var t=e.getElementsByClassName("twitter_logo")[0].getAttribute("href"),n=Array.from(e.getElementsByClassName("list_photo")).map((function(e){return e.getElementsByTagName("img")[0].src})),a=e.getElementsByClassName("tweet")[0],r=Array.from(a.childNodes).map((function(e){return"A"===e.nodeName?"":e.textContent})).join(""),o=document.createElement("table"),d=0;d<n.length;d++){var l=document.createElement("tr"),i=document.createElement("td");i.innerText=t,l.appendChild(i);var c=document.createElement("td");c.innerText=(d+1).toString(),l.appendChild(c);var m=document.createElement("td");m.innerText=n[d],l.appendChild(m);var s=document.createElement("td");s.innerText=r,l.appendChild(s),o.appendChild(l)}e.appendChild(o)}))},e}();try{new e}catch(e){console.log(e)}})();