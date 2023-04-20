const doAjax = async () => {
    const queryUrl = "/api/getReviews.php";

    let response = await fetch(queryUrl);

    if (response.ok) {
        let json = await response.json();
        if (json?.data?.length > 0) renderReviews(json.data);
    }
}

const renderReviews = (reviews) => {
    const container = document.querySelector("#reviews");
    reviews.forEach(review => {
        const div = document.createElement("div");
        div.classList.add("mb-16");
        const header = document.createElement("div");
        header.classList.add("flex");
        header.classList.add("flex-row");
        header.classList.add("mb-photo");
        div.append(header);

        const desc = document.createElement("p");

        desc.classList.add("sm:leading-extra2-loose");
        desc.classList.add("sm:text-lg-sm");
        desc.classList.add("text-base");
        desc.classList.add("leading-extra-loose");
        desc.classList.add("mb-6");
        desc.append(review.description);

        div.append(desc);

        const imageUrl = review.url ?? "https://i.postimg.cc/qvxr34kC/user0.png";
        const image = document.createElement("div");
        image.classList.add("w-19");
        image.classList.add("h-19");
        image.style.backgroundImage = `url('${imageUrl}')`;
        image.classList.add("bg-cover");
        image.classList.add("bg-center");
        image.classList.add("rounded-full");
        image.classList.add("mr-6");
        header.append(image);

        const nameBlock = document.createElement("div");
        nameBlock.classList.add("flex");
        nameBlock.classList.add("flex-col");
        nameBlock.classList.add("justify-center");

        const name = document.createElement("p");
        name.classList.add("sm:text-2xl");
        name.classList.add("font-bold");
        name.classList.add("text-lg");
        name.classList.add("mb-2");
        name.append(review.name);
        nameBlock.append(name);

        const date = document.createElement("p");
        date.classList.add("sm:text-2xl");
        date.classList.add("text-lg");
        nameBlock.append(date);

        header.append(nameBlock);

        container.append(div);
    });
}

document.addEventListener("DOMContentLoaded", doAjax);