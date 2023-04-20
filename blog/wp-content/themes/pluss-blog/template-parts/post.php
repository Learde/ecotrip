<div class="post">
    <a href="<?php esc_url(the_permalink()) ?>" rel="bookmark" id="post-<?php the_ID(); ?>">
        <div class="post__img post-thumbnail thumbnail-home rounded-md" style="background-image:url('<?php the_post_thumbnail_url( 'large' );?>')"></div>

        <div class="post__preview">
            <?php
                the_title( '<h3 class="post__title mb-4 font-bold text-xl">', '</h3>' );
            ?>
        </div>
    </a>
</div>