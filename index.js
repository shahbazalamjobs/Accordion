
// index.js

document.addEventListener('DOMContentLoaded', () => {
    const accordItems = document.querySelectorAll('.accord__item');

    accordItems.forEach(item => {
        const header = item.querySelector('.accord__header');

        header.addEventListener('click', () => {
            // Toggle the active class on the clicked item
            item.classList.toggle('active');

            // Close other accordion items
            accordItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });
        })
    });
});