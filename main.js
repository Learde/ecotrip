import VanillaCalendar from "@uvarov.frontend/vanilla-calendar";
import '@uvarov.frontend/vanilla-calendar/build/vanilla-calendar.min.css';
import '@uvarov.frontend/vanilla-calendar/build/themes/light.min.css';

const startBooking = document.querySelectorAll("#start-booking");
if (startBooking) {
    startBooking.forEach(elem => {
        elem.addEventListener("click", () => {
            document.querySelector("#booking").classList.remove("hidden");
        })
    })
}

const stopBooking = document.querySelector("#stop-booking")

if (stopBooking) {
    stopBooking.addEventListener("click", () => {
        document.querySelector("#booking").classList.add("hidden");
    })
}

const validatePhone = (phone) => {
    return String(phone)
        .toLowerCase()
        .match(
            /^[\d\+][\d\(\)\ -]{4,24}\d$/
        );
};

const today = new Date();
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
let currentDate = tomorrow.toISOString().split('T')[0];

const calendar = new VanillaCalendar('#calendar', {
    settings: {
        visibility: {
            theme: 'light',
        },
        lang: "ru",
        selected: {
            dates: [tomorrow.toISOString().split('T')[0]],
        },
    },
    date: {
        min: today.toISOString().split('T')[0],
    },
    actions: {
        clickDay(event, dates) {
            currentDate = dates[0];
        },
    },
});
calendar.init();

const peopleDec = document.querySelector("#people-dec");
if (peopleDec) {
    peopleDec.addEventListener("click", () => {
        const count = document.querySelector("#people");
        if (count.innerHTML > 1) {
            count.innerHTML = +count.innerHTML - 1;
        }
    })
}

const peopleInc = document.querySelector("#people-inc");
if (peopleInc) {
    peopleInc.addEventListener("click", () => {
        const count = document.querySelector("#people");
        count.innerHTML = +count.innerHTML + 1;
    })
}

const bookBtn = document.querySelector("#book-btn");
if (bookBtn) {
    bookBtn.addEventListener("click", async () => {

        if (!validatePhone(document.querySelector("#book-phone").value)) {
            document.querySelector("#book-error").classList.remove("hidden");
            return;
        } else {
            document.querySelector("#book-error").classList.add("hidden");
        }

        document.querySelector("#book-ok").classList.remove("hidden");

        let contactType = "";
        if (document.getElementById('contact-type1').checked) {
            contactType = "Напишите в WhatsApp";
        } else if (document.getElementById('contact-type2').checked) {
            contactType = "Напишите в Телеграм";
        } else if (document.getElementById('contact-type3').checked) {
            contactType = "Позвоните";
        }

        const obj = {
            date: currentDate,
            count: document.querySelector("#people").innerHTML,
            phone: document.querySelector("#book-phone").value,
            contactType,
            address: document.querySelector("#book-address").value,
            tour: document.querySelector("#book-tour").dataset.title
        };

        const queryUrl = "/api/book.php";

        await fetch(queryUrl, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(obj)
        });
    });
}

const SM_BREAKPOINT = 690;

const galleryInit = () => {
    const galleries = [...document.querySelectorAll(".gallery")];
    const translateValues = {};
    galleries.forEach((gallery) => {
        gallery.style.transform = "translateX(0) translateY(0)";
        const galleryId = [...gallery.classList].find((cls) => {
            return cls.includes("gallery") && cls !== "gallery" && cls !== "gallery_vert";
        });
        translateValues[galleryId] = 0;
        const countChildren = gallery.children.length;
        // let sizeY = gallery.children[0].offsetHeight;
        // let sizeX = gallery.children[0].offsetWidth;
        let isVert = [...gallery.classList].includes("gallery_vert");
        const leftArray = document.querySelector(`.${galleryId}-left`);
        const rightArray = document.querySelector(`.${galleryId}-right`);

        addEventListener("resize", () => {
            // sizeY = gallery.children[0].offsetHeight;
            // sizeX = gallery.children[0].offsetWidth;
            if (isVert) {
                if (window.innerWidth <= SM_BREAKPOINT)
                    gallery.style.transform = `translateX(${translateValues[galleryId] * 100}%) translateY(0)`;
                else
                    gallery.style.transform = `translateX(0) translateY(${translateValues[galleryId] * 100}%)`;
            }
        });

        leftArray.onclick = () => {
            if (isVert && window.innerWidth > SM_BREAKPOINT) {
                translateValues[galleryId] = (++translateValues[galleryId] % countChildren);
                if (translateValues[galleryId] > 0) translateValues[galleryId] = -(countChildren - 1);
                gallery.style.transform = `translateX(0) translateY(${translateValues[galleryId] * 100}%)`;
            } else {
                translateValues[galleryId] = (++translateValues[galleryId] % countChildren);
                if (translateValues[galleryId] > 0) translateValues[galleryId] = -(countChildren - 1);
                gallery.style.transform = `translateX(${translateValues[galleryId] * 100}%) translateY(0)`;
            }
        };
        rightArray.onclick = () => {
            if (isVert && window.innerWidth > SM_BREAKPOINT) {
                translateValues[galleryId] = (--translateValues[galleryId] % countChildren);
                gallery.style.transform = `translateX(0) translateY(${translateValues[galleryId] * 100}%)`;
            } else {
                translateValues[galleryId] = (--translateValues[galleryId] % countChildren);
                gallery.style.transform = `translateX(${translateValues[galleryId] * 100}%) translateY(0)`;
            }
        };
    })
}

const galleryInit2 = () => {
    const galleries = [...document.querySelectorAll(".gallery2")];
    const translateValues = {};
    galleries.forEach((gallery) => {
        gallery.style.transform = "translateX(0) translateY(0)";
        const galleryId = [...gallery.classList].find((cls) => {
            return cls.includes("gallery2") && cls !== "gallery2";
        });
        translateValues[galleryId] = 0;
        const countChildren = gallery.children.length;

        const leftArray = document.querySelector(`.${galleryId}-left`);
        const rightArray = document.querySelector(`.${galleryId}-right`);

        addEventListener("resize", () => {
            if (window.innerWidth <= SM_BREAKPOINT)
                gallery.style.transform = `translateX(${translateValues[galleryId] * 100}%) translateY(0)`;
            else
                gallery.style.transform = `translateY(0) translateX(${translateValues[galleryId] * 66.666}%)`;

        });

        leftArray.onclick = () => {
            if (window.innerWidth > SM_BREAKPOINT) {
                translateValues[galleryId] = (++translateValues[galleryId] % Math.ceil(countChildren / 6));
                if (translateValues[galleryId] > 0) translateValues[galleryId] = -(Math.ceil(countChildren / 6) - 1);
                gallery.style.transform = `translateY(0) translateX(${translateValues[galleryId] * 66.666}%)`;
            } else {
                translateValues[galleryId] = (++translateValues[galleryId] % Math.ceil(countChildren / 6));
                if (translateValues[galleryId] > 0) translateValues[galleryId] = -(Math.ceil(countChildren / 6) - 1);
                gallery.style.transform = `translateX(${translateValues[galleryId] * 100}%) translateY(0)`;
            }
        };
        rightArray.onclick = () => {
            if (window.innerWidth > SM_BREAKPOINT) {
                translateValues[galleryId] = (--translateValues[galleryId] % Math.ceil(countChildren / 6));
                gallery.style.transform = `translateY(0) translateX(${translateValues[galleryId] * 66.666}%)`;
            } else {
                translateValues[galleryId] = (--translateValues[galleryId] % Math.ceil(countChildren / 6));
                gallery.style.transform = `translateX(${translateValues[galleryId] * 100}%) translateY(0)`;
            }
        };
    })
}
document.addEventListener("DOMContentLoaded", galleryInit);
document.addEventListener("DOMContentLoaded", galleryInit2);

const fetchPhone = async (phone) => {
    const queryUrl = "/api/fastMail.php";

    const obj = {
        phone
    };

    await fetch(queryUrl, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(obj)
    });
}

const sendFastMail = () => {
    const phone = document.querySelector("#fast-mail")?.value;
    if (validatePhone(phone)) {
        fetchPhone(phone);
        document.querySelector("#fast-mail").value = "Скоро позвоним!";
    }
};

const fastInput = document.querySelector("#fast-mail");
const fastButton = document.querySelector("#fast-mail-btn");
if (fastButton) {
    fastButton.addEventListener("click", sendFastMail);
}
if (fastInput) {
    fastInput.addEventListener('keydown', function (e) {
        if (e.keyCode === 13) {
            sendFastMail();
        }
    });
}