<?php
	if ( is_home() && is_front_page() || is_category() ) :
?>
	<?php get_template_part( 'template-parts/post', get_post_type() ); ?>
<?php
	else :
?>
	<article id="post-<?php the_ID(); ?>" class="post">
		<div class="post__content">
			<?php the_content(); ?>
		</div>
	</article>
<?php
	endif;
?>