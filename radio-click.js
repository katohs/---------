// ==UserScript==
// @name         放送大学 オンライン授業 テスト ラジオボタン
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       You
// @match        https://online.ouj.ac.jp/mod/quiz/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

;(function () {
  "use strict"
  var radioButtons = document.querySelectorAll('input[type="radio"]')
  var submitButton = document.querySelector(
    'input[type="submit"][value="次のページ"]'
  )

  // Add a click event listener to each radio button
  radioButtons.forEach(function (radioButton) {
    radioButton.addEventListener("click", function () {
      // When a radio button is clicked, trigger the submit button
      submitButton.click()
    })
  })
})()
