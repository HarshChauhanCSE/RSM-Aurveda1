/*==================================================
        RSM AYURVEDA
        SWIPER SLIDERS
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=================================
        TESTIMONIAL SLIDER
    =================================*/

    const testimonialSlider = document.querySelector(".testimonial-slider");

    if (testimonialSlider) {

        new Swiper(".testimonial-slider", {

            loop: true,

            speed: 800,

            spaceBetween: 30,

            autoplay: {

                delay: 3500,

                disableOnInteraction: false,

            },

            pagination: {

                el: ".swiper-pagination",

                clickable: true,

            },

            navigation: {

                nextEl: ".swiper-button-next",

                prevEl: ".swiper-button-prev",

            },

            breakpoints: {

                0: {

                    slidesPerView: 1

                },

                768: {

                    slidesPerView: 2

                },

                1200: {

                    slidesPerView: 3

                }

            }

        });

    }


    /*=================================
        SUCCESS STORY SLIDER
    =================================*/

    const successSlider = document.querySelector(".success-slider");

    if (successSlider) {

        new Swiper(".success-slider", {

            loop: true,

            speed: 900,

            autoplay: {

                delay: 4000,

                disableOnInteraction: false,

            },

            pagination: {

                el: ".success-pagination",

                clickable: true,

            },

            breakpoints: {

                0: {

                    slidesPerView: 1

                },

                768: {

                    slidesPerView: 2

                }

            }

        });

    }


    /*=================================
        PRODUCT SLIDER
    =================================*/

    const productSlider = document.querySelector(".product-slider");

    if (productSlider) {

        new Swiper(".product-slider", {

            loop: true,

            speed: 700,

            spaceBetween: 25,

            autoplay: {

                delay: 3000,

                disableOnInteraction: false,

            },

            breakpoints: {

                0: {

                    slidesPerView: 1

                },

                768: {

                    slidesPerView: 2

                },

                1200: {

                    slidesPerView: 4

                }

            }

        });

    }

});