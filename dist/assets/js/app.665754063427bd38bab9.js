!function(e){function t(t){for(var o,a,l=t[0],s=t[1],u=t[2],f=0,p=[];f<l.length;f++)a=l[f],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);for(c&&c(t);p.length;)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,l=1;l<n.length;l++){var s=n[l];0!==r[s]&&(o=!1)}o&&(i.splice(t--,1),e=a(a.s=n[0]))}return e}var o={},r={0:0},i=[];function a(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=o,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)a.d(n,o,function(t){return e[t]}.bind(null,o));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var l=window.webpackJsonp=window.webpackJsonp||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var c=s;i.push([533,1]),n()}({1454:function(e,t,n){var o=n(1455);"string"==typeof o&&(o=[[e.i,o,""]]);var r={insert:"head",singleton:!1};n(1456)(o,r);o.locals&&(e.exports=o.locals)},1455:function(e,t,n){},533:function(e,t,n){"use strict";n.r(t);var o=n(98),r=n.n(o);n(1454);function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),l(this,s(t).call(this,{key:"preload",pack:{files:[{type:"image",key:"logo",url:"assets/img/logo.png"}]}}))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(t,e),n=t,(o=[{key:"init",value:function(){}},{key:"preload",value:function(){document.body.style.height=window.innerHeight+"px";var e=this.add.graphics(),t=this.cameras.main.width,n=this.cameras.main.height,o=this.add.graphics();o.fillStyle(16777215,.8),o.fillRect(800,510,320,50);var r=this.make.text({x:t/2+20,y:n/2-5,text:"Loading...",style:{font:"GLI-Light",fontSize:"20px",fill:"#000000"}});this.add.image(t/2,400,"logo"),r.setOrigin(.5,.5);var i=this.make.text({x:t/2-80,y:n/2-5,text:"0%",style:{font:"GLI-Light",fontSize:"18px",fill:"#000000"}});i.setOrigin(.5,.5);var a=this.make.text({x:t/2,y:n/2+50,text:"",style:{font:"GLI-Light",fontSize:"18px",fill:"#000000"}});a.setOrigin(.5,.5),this.load.on("progress",(function(t){i.setText(parseInt(100*t)+"%"),e.clear(),e.fillStyle(0,1),e.fillRect(800,510,320*t,50)})),this.load.on("fileprogress",(function(e){a.setText("Loading asset: "+e.key)})),this.load.on("complete",(function(){e.destroy(),o.destroy(),r.destroy(),i.destroy(),a.destroy()})),this.load.pack("pack","assets/pack/pack.json")}},{key:"create",value:function(){this.scene.start("first")}}])&&a(n.prototype,o),r&&a(n,r),t}(r.a.Scene),f=new r.a.Game({title:"Киви",width:1600,height:900,type:r.a.CANVAS,parent:"game-container",physics:{default:"arcade"},multiTexture:!0,clearBeforeRender:!1,transparent:!1,backgroundColor:"#000",scale:{mode:r.a.Scale.FIT,autoCenter:r.a.Scale.CENTER_BOTH}});f.scene.add("Boot",c,!0),window.innerWidth<window.innerHeight&&(document.getElementById("pause-game").style.display="flex"),window.onresize=function(e){document.body.style.height=window.innerHeight+"px",document.getElementById("all-html").style.height=window.innerHeight+"px",window.innerWidth<window.innerHeight?(document.getElementById("pause-game").style.display="flex",f&&f.scene.pause("game")):(document.getElementById("pause-game").style.display="none",f&&f.scene.resume("game"))}}});