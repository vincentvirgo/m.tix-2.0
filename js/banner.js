// Define getPositionX globally
function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', () => {

    function addDragFunctionality(container, innerContainer, dots, itemCount) {
        let isDragging = false;
        let startPos = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let animationID = 0;
        let currentIndex = 0;

        container.addEventListener('mousedown', touchStart);
        container.addEventListener('mouseup', touchEnd);
        container.addEventListener('mouseleave', touchEnd);
        container.addEventListener('mousemove', touchMove);

        container.addEventListener('touchstart', touchStart);
        container.addEventListener('touchend', touchEnd);
        container.addEventListener('touchmove', touchMove);

        function touchStart(event) {
            isDragging = true;
            startPos = getPositionX(event);
            animationID = requestAnimationFrame(animation);
            container.classList.add('grabbing');
        }

        function touchEnd() {
            isDragging = false;
            cancelAnimationFrame(animationID);
            container.classList.remove('grabbing');
            const movedBy = currentTranslate - prevTranslate;

            if (movedBy < -100 && currentIndex < itemCount - 1) currentIndex += 1;
            if (movedBy > 100 && currentIndex > 0) currentIndex -= 1;

            setPositionByIndex();
            updateDots();
        }

        function touchMove(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
                setSliderPosition();
            }
        }

        function animation() {
            setSliderPosition();
            if (isDragging) requestAnimationFrame(animation);
        }

        function setSliderPosition() {
            innerContainer.style.transform = `translateX(${currentTranslate}px)`;
        }

        function setPositionByIndex() {
            currentTranslate = currentIndex * -container.clientWidth;
            prevTranslate = currentTranslate;
            setSliderPosition();
        }

        function updateDots() {
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        function showSlide(index) {
            if (index >= itemCount) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = itemCount - 1;
            } else {
                currentIndex = index;
            }
            setPositionByIndex();
            updateDots();
        }

        showSlide(currentIndex); // Initial setup

        // Return innerContainer to use in main function
        return { showSlide };
    }
    let currentIndex = 0;   

    // Banner Manual Scroll
    const bannerContainer = document.querySelector('.banner-carousel');
    const bannerInner = document.querySelector('.banner-inner');
    const bannerDots = Array.from(document.querySelectorAll('.dot'));
    const bannerItemCount = bannerDots.length;
    

    const { showSlide } = addDragFunctionality(bannerContainer, bannerInner, bannerDots, bannerItemCount);

    // Scroll Navigation for Banner Carousel
    let isScrolling = false;
    bannerContainer.addEventListener('wheel', (event) => {
        if (!isScrolling) {
            isScrolling = true;
            setTimeout(() => {
                if (event.deltaY < 0) {
                    showSlide(currentIndex - 1);
                } else {
                    showSlide(currentIndex + 1);
                }
                isScrolling = false;
            }, 5000); // Adjust delay as needed to prevent rapid scrolling
        }
    });

    // Automatic Slide Transition
    let slideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);

    // Pause on hover
    bannerContainer.addEventListener('mouseenter', () => clearInterval(slideInterval));
    bannerContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(() => showSlide(currentIndex + 1), 5000);
    });

    // Keyboard navigation
    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowLeft') {
            showSlide(currentIndex - 1);
        } else if (event.key === 'ArrowRight') {
            showSlide(currentIndex + 1);
        }
    });
});
