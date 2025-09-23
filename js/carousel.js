document.addEventListener('DOMContentLoaded', () => {
    // Common function for touch and mouse events
    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    // Generic function to add drag functionality to an element
    function addDragFunctionality(container, innerContainer, itemCount) {
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
        }

        function touchMove(event) {
            if (isDragging) {
                const currentPosition = getPositionX(event);
                currentTranslate = prevTranslate + currentPosition - startPos;
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

        function showSlide(index) {
            if (index >= itemCount) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = itemCount - 1;
            } else {
                currentIndex = index;
            }
            setPositionByIndex();
        }

        showSlide(currentIndex);
    }

    // Banner Manual Scroll

    // Carousel Manual Scroll
    const carouselContainer = document.querySelector('.carousel');
    const carouselInner = document.querySelector('.carousel-inner');
    const movieItems = document.querySelectorAll('.movie').length;

    addDragFunctionality(carouselContainer, carouselInner, movieItems);
});
