// ==UserScript==
// @name         Editer_parcours_navbar
// @namespace    metis.afpa.fr
// @version      0.1
// @description  display Editer button in the navbar (Formateurs only)
// @author       yannick.kohler@afpa.fr
// @match        https://metis.afpa.fr/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.slim.min.js
// ==/UserScript==

/* global jQuery, $ */

// barbarian method ;)

(function($){
    'use strict';
    let formulaire = $('#page-header>div>div>div>div.d-flex:first form').parents('div.d-block');
    let menu = $('#instance-1-action > div.box.py-3.block_tree_box ul:first ul:last:parent').parents('ul').first();
    formulaire.clone().appendTo(menu);
})(jQuery.noConflict());
