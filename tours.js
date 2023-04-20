const getReviewsWord = (number) => {
    let word;

    if (number % 10 === 1 && number % 100 !== 11) {
        word = ' отзыв';
    } else if (number % 10 >= 2 && number % 10 <= 4 && (number % 100 < 10 || number % 100 >= 20)) {
        word = ' отзыва';
    } else {
        word = ' отзывов';
    }

    return word;
}


const renderReviewsCount = (c) => {
    const count = document.querySelectorAll(".reviews-count");
    if (count) {
        count.forEach(countItem => {
            countItem.innerHTML = c + getReviewsWord(c);
        })
    }
}

const doAjax = async () => {
    const queryUrl = "/api/getReviews.php";

    let response = await fetch(queryUrl);

    if (response.ok) {
        let json = await response.json();
        if (json?.data?.length > 0) renderReviewsCount(json?.data?.length);
    }
}

document.addEventListener("DOMContentLoaded", doAjax);