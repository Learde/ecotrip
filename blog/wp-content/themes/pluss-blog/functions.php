<?php
function pluss_scripts() {
	wp_enqueue_style( 'pluss-style', '/../styles/main.min.css');
	wp_enqueue_style( 'eco-style', '/assets/style.css');
	wp_enqueue_style( 'eco-blog', '/assets/styles.css' );

	wp_enqueue_script( 'pluss-main', '/../js/main.min.js', array(), _S_VERSION, true );

	wp_enqueue_script( 'pluss-vendor', '/../js/vendor.min.js', array(), _S_VERSION, true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'pluss_scripts' );
add_theme_support( 'post-thumbnails' );
add_theme_support( 'title-tag' );
add_filter( 'excerpt_length', function(){
	return 20;
} );
?>