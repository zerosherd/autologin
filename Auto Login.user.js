// ==UserScript==
// @name         Auto Login
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  try to take over the world!
// @author       ZeroSherd
// @match        http://172.16.30.33/*
// @match        http://172.16.30.45/*
// @grant        none
// @require      http://code.jquery.com/jquery-3.x-git.min.js
/* globals jQuery, $, waitForKeyElements */

// ==/UserScript==

window.onload=function autorun() {
if ( $("input[name=DDDDD]").length > 0 ) {
    $("input[name=DDDDD]").val("182017583");
    $("input[name=upass]").val("07300016");
    $("input[name=network]").prop("checked","true");
    $("input[name=0MKKey]").eq(1).click();
    window.close();
   }else{
   window.close();
 }
};