<?php 
/*
Plugin Name: ALT Lab DIH Grapher shortcode
Plugin URI:  https://github.com/
Description: For making the gravity form display forms
Version:     1.0
Author:      ALT Lab
Author URI:  http://altlab.vcu.edu
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Domain Path: /languages
Text Domain: my-toolset

*/
defined( 'ABSPATH' ) or die( 'No script kiddies please!' );


add_action('wp_enqueue_scripts', 'prefix_load_scripts');

function prefix_load_scripts() {                           
    $deps = array('jquery');
    $version= '1.0'; 
    $in_footer = true;    
    wp_enqueue_script('dih-grapher-main-js', plugin_dir_url( __FILE__) . 'js/dih-grapher-main.js', $deps, $version, $in_footer); 
    wp_enqueue_style( 'dih-grapher-main-css', plugin_dir_url( __FILE__) . 'css/dih-grapher-main.css');
}


function dih_grapher_sc( $atts ) {
	$a = shortcode_atts( array(
		'scores' => '1,2,3,4,5',
	), $atts );
    $graphs = '';
    $lefts = ['Direct Communication','Monochronic','Low Power Distance','Individualism','Task Focus'];
    $rights = ['Indirect Communication','Polychronic','High Power Distance','Collectivism','Relationship Focus'];
    $scores = explode(",", $a['scores']);
    foreach ($scores as $key => $score) {
	   $graphs .= graph_builder($score, $lefts[$key], $rights[$key]);
	}
	
	return $graphs;
}
add_shortcode( 'dih-graph', 'dih_grapher_sc' );

function graph_builder($score, $left, $right){
	return '<div class="slider-container">
<div class="slide-label left">'.$left.'</div>
<div class="slide-label right">'.$right.'</div>
<p><input type="range" min="0" max="100" value="'.$score.'" class="slider" id="directness">
</p></div>';

}
