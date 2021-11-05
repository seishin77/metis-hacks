// ==UserScript==
// @name         helped_navigation
// @namespace    metis.afpa.fr
// @version      0.2
// @description  display the section number in the left navbar
// @author       yannick.kohler@afpa.fr
// @match        https://metis.afpa.fr/*
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.slim.min.js
// @downloadURL https://github.com/seishin77/metis-hacks/raw/master/all/helped_navigation.user.js
// @updateURL   https://github.com/seishin77/metis-hacks/raw/master/all/helped_navigation.meta.js
// ==/UserScript==

/* global jQuery, $ */

(function($){
    'use strict';
    let links = $('nav#coursenavigation .tree_item_text a[title]');
    links.each(function(){
        let link = $(this).attr('title');
        link = link.substring(0, link.indexOf('(')-1);
        $(this).text(link);
    });
})(jQuery.noConflict());
