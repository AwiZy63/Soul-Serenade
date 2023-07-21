const instagramCarouselContainer = document.getElementById('instagramCarouselContainer');

const initCarousel = async (images) => {
    instagramCarouselContainer.innerHTML = '';
    for (let i = 0; i < 10; i++) {
        const element = images[0];

        const carouselItem = document.createElement('img');
        carouselItem.src = `./assets/img/carousel/${i}.jpg`;
        carouselItem.setAttribute('alt', element?.alt);

        await instagramCarouselContainer.appendChild(carouselItem);


    }


    $('#instagramCarouselContainer').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 10,
        slidesToScroll: 2,
        arrows: true,
        // Remove text from arrows
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        autoplay: true,
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 2,
                    arrows: false,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                    arrows: true,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: true,
                    infinite: true,
                    dots: false
                }
            },
        ]
    });
}

const images = [{ src: "./assets/img/template.avif", alt: "carousel image" }];

initCarousel(images);
