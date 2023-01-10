// ==UserScript==
// @name         放送大学 オンライン授業 成績計算
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description
// @author       You
// @match        https://online.ouj.ac.jp/grade/report/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net
// @grant        none
// ==/UserScript==

;(function () {
  "use strict"
  console.log(1)
  const rows = document.querySelectorAll("tr")
  const filteredRows = Array.from(rows).filter((row) => {
    const aTag = row.querySelector("a")
    return (
      aTag && aTag.innerText.includes("小テスト") && row.innerText.includes("%")
    )
  })
  const percentages = filteredRows.map((row) =>
    parseFloat(row.innerText.match(/\d+\.\d+/)[0])
  )

  const sum = percentages.reduce((total, num) => total + num, 0)
  const avg = sum / percentages.length

  console.log(avg)
  document.querySelector("h2").innerHTML += avg + "%"
})()
