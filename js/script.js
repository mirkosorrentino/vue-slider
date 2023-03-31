const { createApp } = Vue;

createApp ({
    data(){
        return {
            activeImage: 0,
            autoplay: null,
            slides: [
                {
                    images: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                }, 
                {
                    images: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                }, 
                {
                    images: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                }, 
                {
                    images: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                }, 
                {
                    images: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
                
            ],
        };
    },
    mounted() {
        this.autoplay = setInterval(this.showNext, 1000)
    },

    methods: {
        showNext() {
            if (this.activeImage < this.slides.length - 1) {
              this.activeImage++; 
            } else {
                this.activeImage = 0;
            }
        },

        showPrev() {
            if(this.activeImage > 0) {
                this.activeImage--
            } else {
                this.activeImage = this.slides.length - 1
            }
        },

        handleThumbClick(indexToShow) {
            this.activeImage = indexToShow;
        },

        stopAutoplay () {
            clearInterval(this.autoplay)
        },

        startAutoplay(){
            this.autoplay = setInterval(this.showNext, 1000)
        }
    },
}).mount("#app")
