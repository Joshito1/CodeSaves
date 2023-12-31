// Modal
$(document).ready(function () {
    // Image modal
    var modal = document.getElementById('imageModal');
    var modalImg = document.getElementById('enlargedImg');
    var captionText = document.getElementById('caption');

    // Open modal when clicking on a gallery image
    $('.gallery_img').click(function () {
        modal.style.display = 'block';
        modalImg.src = $(this).attr('src');
        captionText.innerHTML = $(this).siblings('.gallery_info').text();
    });

    // Close modal when clicking on the close button
    $('.close').click(function () {
        modal.style.display = 'none';
    });

    // Close modal when clicking outside the modal
    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
});
