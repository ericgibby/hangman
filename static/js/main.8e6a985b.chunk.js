(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(6),l=a.n(c),o=a(1),s=a(4),i=a(2),m=(a(14),a(7));a(15);var u=function(e){var t=e.usedLetters,a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.split("").map(function(e){var a=e.charCodeAt();return a>=65&&a<=90?t[e]?e:"_":e}).join("")}(e.word,t),n=a.split(" ").map(function(e,t){var a=e.split("").map(function(e,t){return r.a.createElement("span",{key:"Letter-".concat(t),className:"letter"},e)});return r.a.createElement("span",{key:"Word-".concat(t),className:"word"},a)}).reduce(function(e,t,a){return[].concat(Object(m.a)(e),[t,r.a.createElement("span",{key:"Space-".concat(a)},"\xa0")])},[]).slice(0,-1);return a?r.a.createElement("div",{className:"DisplayWord"},n):null};a(16);var d=function(e){var t=e.hidden,a=e.onSubmit,c=Object(n.useState)(""),l=Object(i.a)(c,2),o=l[0],s=l[1];return t?null:r.a.createElement("div",{className:"EnterWord"},r.a.createElement("p",null,"Enter a word or phrase to guess."),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),a&&a(o),s("")}},r.a.createElement("div",{className:"grid-x"},r.a.createElement("div",{className:"cell medium-10 small-12"},r.a.createElement("label",null,r.a.createElement("span",{className:"show-for-sr"},"Enter a word"),r.a.createElement("input",{type:"password",placeholder:"Enter a word",value:o,onChange:function(e){var t=e.target.value.toUpperCase();s(t)}}))),r.a.createElement("div",{className:"cell medium-2 small-12"},r.a.createElement("button",{type:"submit",className:"button primary"},"OK")))))};var v=function(e){var t=e.incorrectCount,a=Math.min(t,6);return r.a.createElement("div",{className:"Gallows"},r.a.createElement("img",{src:"".concat("/hangman","/hangman-").concat(a,".svg"),alt:"Hangman Gallows"}))},E=a(3),p=a.n(E);var f=function(e){var t=e.hidden,a=e.success,n=a?"Congratulations!":"Game Over \ud83d\ude41",c=a?"You won!":null;return t?null:r.a.createElement("div",{className:p()("GameOver","callout",{alert:!a,primary:!!a})},r.a.createElement("h2",null,n),r.a.createElement("p",null,c))},b=(a(17),new Array(26).fill("").map(function(e,t){return String.fromCharCode(65+t)}));var h=function(e){var t=e.disabled,a=e.hidden,n=e.onLetterClick,c=e.usedLetters,l=e.wordLetters,o=function(e){var t=e.target.value;n&&n(t)},s=b.map(function(e,a){return r.a.createElement("button",{key:"LetterButton-".concat(a),className:p()("button",{selected:!!c[e],alert:!!c[e]&&!l[e]}),value:e,onClick:o,disabled:t||!!c[e]},e)});return a?null:r.a.createElement("div",{className:"SelectLetters"},s)},w=6;var g=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)({}),m=Object(i.a)(l,2),E=m[0],p=m[1],b=a.split("").reduce(function(e,t){var a=t.charCodeAt();return a>=65&&a<=90?Object(s.a)({},e,Object(o.a)({},t,!0)):e},{}),g=Object.keys(E).reduce(function(e,t){return e+(b[t]?0:1)},0),N=!!a&&(g===w||Object.keys(b).reduce(function(e,t){return e&&!!E[t]},!0));return r.a.createElement("div",{className:"App"},r.a.createElement("header",null,r.a.createElement("div",{className:"grid-container"},r.a.createElement("ul",{className:"menu align-middle"},r.a.createElement("li",{className:"menu-text"},r.a.createElement("h1",null,"Hangman")),r.a.createElement("li",null,r.a.createElement("button",{className:"button hollow",onClick:function(){c(""),p({})}},"Start Over"))))),r.a.createElement("div",{className:" grid-container"},r.a.createElement("div",{className:"grid-x top-section"},r.a.createElement("div",{className:"cell small-12 align-center"},r.a.createElement(f,{success:N&&g<w,hidden:!N}),r.a.createElement(d,{onSubmit:function(e){return c(e)},hidden:!!a}),r.a.createElement(u,{word:a,usedLetters:E}))),r.a.createElement("div",{className:"grid-x"},r.a.createElement("div",{className:"cell small-12 medium-8 text-center"},r.a.createElement(v,{incorrectCount:g})),r.a.createElement("div",{className:"cell small-12 medium-4"},r.a.createElement(h,{onLetterClick:function(e){return p(Object(s.a)({},E,Object(o.a)({},e,!0)))},usedLetters:E,wordLetters:b,hidden:!a,disabled:N})))))};a(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.8e6a985b.chunk.js.map