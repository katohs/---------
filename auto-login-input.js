// ==UserScript==
// @name         放送大学 ポータル オートログイン自動入力
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       You
// @match        https://sso.ouj.ac.jp/cas/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

;(function () {
  "use strict"

  document.getElementById("username").value = USER_NAME
  document.getElementById("password").value = PASSWORD
  document.querySelector("input.btn-submit").click()
})()
