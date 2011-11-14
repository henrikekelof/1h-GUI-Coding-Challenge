<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 *
 * See http://code.google.com/p/minify/wiki/CustomSource for other ideas
 **/

return array(
    // 'js' => array('//js/file1.js', '//js/file2.js'),
    'main_css' => array(
        '//css/main.css',
        '//less/_mq1.css',
        '//css/desktop.css',
        '//less/_mq-end.css'
    ),
    'main_ie_css' => array(
        '//css/main.css',
        '//css/desktop.css'
    ),
    'main_js' => array(
        '//js/main.js'
    ),
    'head_js' => array(
        '//js/modernizr-2.0.6-min.js',
        '//js/head.js'
    ),
    'head_ie_js' => array(
        '//js/html5.js',
        '//js/modernizr-2.0.6-min.js',
        '//js/head.js'
    )
);