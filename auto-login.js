// ==UserScript==
// @name         放送大学 ポータル オートログイン
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       You
// @match        https://www.wakaba.ouj.ac.jp/portal/
// @match        https://sso.ouj.ac.jp/cas/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

;(function () {
  "use strict"
  document.querySelector("a.btn_login").click()
})()
