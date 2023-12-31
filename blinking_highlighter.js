$(document).ready(function () {
    $('.tab_links').click(function () {
        var articleId = $(this).attr('id').replace('-btn', '');
        var article = $('#' + articleId);

        // Temporarily highlight the article
        article.addClass('highlight');

        // Blink the highlight for 1.5 seconds (adjust as needed)
        var interval = setInterval(function () {
            article.toggleClass('highlight');
        }, 150);

        // Remove the highlight and clear the interval after 1.5 seconds
        setTimeout(function () {
            clearInterval(interval);
            article.removeClass('highlight');
        }, 1500);
    });
});
