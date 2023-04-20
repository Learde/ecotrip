<?php
get_header();
?>
<?php if ( is_home() && is_front_page() ) : ?>
<section style="position: relative;" class="blog-page">
<?php else : ?>
<section style="position: relative;" class="blog-page blog-page--post">
<?php endif; ?>
<?php
    if ( is_home() && is_front_page() || is_category()
    ) :
?>
    <header class="bg-center pt-18" style="background-color: #191919; padding-bottom: 10rem;">
<?php else : ?>
    <header class="bg-center pt-18" style="background-color: #191919;">
<?php endif; ?>
        <div class="container relative mx-auto">
            <nav class="flex flex-row items-start mb-48">
                <a href="/" class="flex flex-row">
                    <img src="/blog/assets/images/logo.svg" class="sm:w-[2.7rem] w-[2.5rem] h-auto self-end mb-1"
                        alt="Экскурсии и походы в Сочи. Ecomap" />
                    <span class="uppercase font-bold text-[0.65rem] ml-4 leading-relaxed">
                        <span class="text-lg"> Экотрип </span>
                        <br />
                        Походы Сочи
                    </span>
                </a>
                <a href="/pvd/" class="sm:hidden ml-auto uppercase font-bold text-lg pt-1">
                    Походы
                </a>
                <a href="/canyoning/" class="sm:hidden ml-14 uppercase font-bold text-lg pt-1">
                    Каньонинг
                </a>
                <a href="/speleo/" class="sm:hidden ml-14 uppercase font-bold text-lg pt-1">
                    Спелеотуризм
                </a>
                <a href="/blog/" class="sm:hidden ml-14 uppercase font-bold text-lg pt-1">
                    Блог
                </a>
                <a href="/faq/" class="sm:hidden ml-14 uppercase font-bold text-lg pt-1">
                    Вопросы
                </a>

                <input id="toggle" type="checkbox" class="hidden" />

                <label for="toggle" class="sm:block hidden hamburger">
                    <div class="top-bun"></div>
                    <div class="meat"></div>
                    <div class="bottom-bun"></div>
                </label>

                <div class="sm:flex nav hidden flex-col gap-y-4 pr-16 justify-center text-right">
                    <a href="/" class="uppercase font-bold text-2.25xl leading-7 py-4 text-primary-green">
                        Главная
                    </a>
                    <a href="/pvd/" class="uppercase font-bold text-2.25xl leading-7 py-4">
                        Походы
                    </a>
                    <a href="/canyoning/" class="uppercase font-bold text-2.25xl leading-7 py-4">
                        Каньонинг
                    </a>
                    <a href="/speleo/" class="uppercase font-bold text-2.25xl leading-7 py-4">
                        Спелеотуризм
                    </a>
                    <a href="/blog/" class="uppercase font-bold text-2.25xl leading-7 py-4">
                        Блог
                    </a>
                    <a href="/faq/" class="uppercase font-bold text-2.25xl leading-7 py-4">
                        Вопросы
                    </a>
                    <div class="text-2.25xl leading-7 font-bold absolute bottom-[2rem] right-[4rem]">
                        <a class="mb-9 block" href="tel:879996550090">+7 999 655 00 90</a>
                        <div class="flex flex-row justify-end">
                            <a class="block mr-8" href="https://vk.com/ecotripsochi" target="_blank">
                                <img class="w-12 h-12 relative top-2" src="/blog/assets/images/vk.svg"
                                    alt="Ecotrip Вконтакте">
                            </a>
                            <a href="https://t.me/ecotripsochi" target="_blank">
                                <img class="w-10 h-10" src="/blog/assets/images/tg.svg" alt="Ecotrip Телеграм">
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <?php
              if ( is_home() && is_front_page() || is_category()
              ) :
            ?>
              <h1 class="extra:text-4.5xl sm:text-5xl font-bold text-7.5xl tracking-wider uppercase leading-tight mb-20">
              Блог, знакомящий <br>с природой Сочи
            </h1>

            <div
                class="sm:hidden flex flex-row items-center uppercase font-bold text-base absolute right-12 top-1/2 rotate-90 origin-top-right translate-y-86">
                Подпишись
                <div class="w-48 h-[1px] bg-white mx-5"></div>
                <a href="https://t.me/ecotripsochi" target="_blank">
                    <img src="/blog/assets/images/tg.svg" class="w-4 h-auto mr-5 -rotate-90" />
                </a>
                <a href="https://vk.com/ecotripsochi" target="_blank">
                    <img src="/blog/assets/images/vk.svg" class="w-4 h-auto -rotate-90" />
                </a>
            </div>
            <?php else : ?>
                <div class="blog-page__categories" style="margin-bottom: 20px;">
                    <ul>
                        <?php
                            foreach( get_the_category() as $category ) {
                                echo '<li class="cat-item"><a href="' . esc_url( get_category_link( $category->term_id ) ) . '">' . esc_html( $category->name ) . '</a></li>';
                            }
                        ?>
                    </ul>
                </div>
                <?php
					the_title( '<h1 class="extra:text-4.5xl sm:text-5xl font-bold text-7.5xl tracking-wider uppercase leading-tight">', '</h1>' );
				?>
            <?php
            endif;
            ?>
        </div>
    </header>
  <div class="blog-page__content container">
    <?php
      if ( is_home() && is_front_page() || is_category() ) :
    ?>
      <?php if (is_home() && is_front_page()) : ?>
      <div class="blog-page__categories blog-page__categories--home">
      <?php else : ?>
      <div class="blog-page__categories">
      <?php endif; ?>
        <ul><?php wp_list_categories(array(title_li => '', show_option_none => '', show_option_all => 'Все статьи')); ?></ul>
      </div>
      <div class="blog-page__posts" id="main">
    <?php else : ?>
      <div class="blog-page__post-page">
    <?php
    endif;
    ?>
    
    <?php
      $paged = ( get_query_var('page') ) ? get_query_var('page') : 1;
      $query_args = array(
        'post_type' => 'post',
        'paged' => $paged
      );

      $the_query = new WP_Query( $query_args );
    ?>
    <?php
        /* Start the Loop */
        while ( have_posts() ) :
          the_post();

          /*
          * Include the Post-Type-specific template for the content.
          * If you want to override this in a child theme, then include a file
          * called content-___.php (where ___ is the Post Type name) and that will be used instead.
          */
          get_template_part( 'template-parts/content', get_post_type() );

        endwhile;
	?>
    <?php wp_reset_postdata(); ?>

    </div>
  </div>
</section>
<section style="background-color: #000; padding: 50px 0;">
    <div class="container">
        <h4
            class="sm:mb-heading sm:text-subh sm:right-0 sm:leading-relaxed font-bold text-3xl mb-12 relative right-8">
            <span class="sm:hidden">—</span> Другие статьи, которые могут быть вам интересны
        </h4>
        <div class="recent-posts">
            <?php 
            // the query
            $the_query = new WP_Query( array(
                'posts_per_page' => 4,
            )); 
            ?>

            <?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>

                <?php get_template_part( 'template-parts/post', get_post_type() ); ?>    

            <?php endwhile; ?>
            <?php wp_reset_postdata(); ?>

        </div>
    </div>
</section>

<?php
get_footer();
?>
