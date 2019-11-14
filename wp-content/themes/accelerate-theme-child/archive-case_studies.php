<?php
/**
 * The template for displaying the case studies archive
 *
 * *
 *
 * @package WordPress
 * @subpackage Accelerate Marketing
 * @since Accelerate Marketing 2.0
 */

 get_header(); ?>

 	<div id="primary" class="site-content sidebar">
 		<div class="main-content" role="main">
 			<?php while (have_posts()) : the_post();
 	      $services = get_field('services');
 	      $site_link = get_field('site_link');
 	      $image_1 = get_field('image_1');
 				$size = "full";
       ?>

 				<article class="case-study">
 					<aside class="case-study-sidebar">
 						<h2><?php the_title(); ?></h2>
 						<h4><?php echo $services; ?></h4>
 						<?php the_excerpt(); ?>
 						<p class="read-more-link">
 							<a href="<?php the_permalink(); ?>">View Project &rsaquo;</a>
 						</p>
 					</aside>
 				</article>

 				<div class="case-study-images">
 					<?php if($image_1) {
 						echo wp_get_attachment_image( $image_1, $size );
 					}?>
 				</div><!-- end case-study-images -->
 			<?php endwhile; // end of the loop.?>
 		</div><!-- .main-content -->
 	</div><!-- #primary -->

 <?php get_footer(); ?>
