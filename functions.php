<?php


// slick slider

function enqueue_slick_slider() {
    wp_enqueue_style('slick-slider-css', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css');
	wp_enqueue_style('your-theme-css', 'theme-css-url');
    wp_enqueue_script('slick-slider-js', 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), '1.8.1', true);
	 wp_enqueue_script('your-custom-js', 'your-custom-js-url', array('jquery'), '1.0.0', true);
}
add_action('wp_enqueue_scripts', 'enqueue_slick_slider');