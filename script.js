document.addEventListener("DOMContentLoaded", function () {
    const headings = document.getElementsByClassName('font-weight-bold');

    for (let i = 0; i < headings.length; i++) {
        headings[i].addEventListener('mouseover', function () {
            this.style.color = "Black";
        });

        headings[i].addEventListener('mouseout', function () {
            this.style.color = "white";
        });
    }
});
