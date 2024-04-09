document.getElementById("reviewForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form values
    var author = document.getElementById("author").value;
    var stars = document.getElementById("stars-select").value;
    var review = document.getElementById("review").value;

    var reviewText = '"' + review + '" ' + stars + ' &#9733<br>' + '<span class="author">' + author + '</span>';

    var newReviewHTML = '<div class="review"><p>' + reviewText + '</p></div>';

    var containerHTML = '<div style="margin: 0 auto; width: 80%;">' + newReviewHTML + '</div>';

    var reviewsSection = document.getElementById("reviews");
    var insertBeforeElement = reviewsSection.querySelector(".review");

    if (insertBeforeElement) {
        insertBeforeElement.insertAdjacentHTML('beforebegin', containerHTML);
    } else {
        reviewsSection.insertAdjacentHTML('beforeend', containerHTML);
    }

    document.getElementById("reviewForm").reset();
});
