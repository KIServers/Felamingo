(function( $ ) {
    "use strict";

    jQuery(window).on('frb/frontend/init', function (){
        if ( window.frbFrontend.isEditMode() ) {
            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-blog.default',
                function( $scope ){ 
                    foodmood_parallax_video();
                    foodmood_blog_masonry_init();
                    foodmood_carousel_slick(); 
                }
            );              
            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-products.default',
                function( $scope ){ 
                    foodmood_parallax_video();
                    foodmood_blog_masonry_init();
                    foodmood_isotope();
                    foodmood_carousel_slick();  
                    foodmood_scroll_animation(); 
                }
            );            

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-blog-hero.default',
                function( $scope ){ 
                    foodmood_parallax_video();
                	foodmood_blog_masonry_init();
                	foodmood_carousel_slick(); 
                }
            );            

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-carousel.default',
                function( $scope ){ 
                    foodmood_carousel_slick();  
                }
            );            

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-portfolio.default',
                function( $scope ){ 
                    foodmood_isotope();
                    foodmood_carousel_slick();  
                    foodmood_scroll_animation();
                }
            );            

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-team.default',
                function( $scope ){ 
                    foodmood_isotope();
                	foodmood_carousel_slick();  
                    foodmood_scroll_animation();
                }
            );

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-progress-bar.default',
                function( $scope ){ 
                    foodmood_progress_bars_init();  
                }
            ); 

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-testimonials.default',
                function( $scope ){ 
                	foodmood_carousel_slick();  
                }
            );

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-toggle-accordion.default',
                function( $scope ){ 
                    foodmood_accordion_init();  
                }
            ); 

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-tabs.default',
                function( $scope ){ 
                    foodmood_tabs_init();  
                }
            ); 

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-clients.default',
                function( $scope ){ 
                	foodmood_carousel_slick();  
                }
            );

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-image-layers.default',
                function( $scope ){ 
                	foodmood_img_layers();  
                }
            );

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-video-popup.default',
                function( $scope ){ 
                    foodmood_videobox_init();  
                }
            );            

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-countdown.default',
                function( $scope ){ 
                	foodmood_countdown_init();  
                }
            );

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-time-line-vertical.default',
                function( $scope ){ 
                	foodmood_init_timeline_appear();  
                }
            );

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-striped-services.default',
                function( $scope ){ 
                	foodmood_striped_services_init();  
                }
            );

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-image-comparison.default',
                function( $scope ){ 
                	foodmood_image_comparison();  
                }
            );

            window.frbFrontend.hooks.addAction( 'frontend/element_ready/wgl-counter.default',
                function( $scope ){ 
                	foodmood_counter_init();  
                }
            );
        }
    });

})( jQuery );

