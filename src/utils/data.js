import axios from "axios";
import { avatars } from "../mockdata/avatars";

export function getImages(count = 20) {
    const imagesList = [];
    for (let i = 0; i < count; i++) {
        imagesList.push(getImage());
    }
    return imagesList;
}

export function getAvatars() {
    return avatars;
}

export async function getQuotes() {
    const { data: quotes } = await axios.get(
        "https://api.quotable.io/quotes?page=" +
            getRandom(1, 30) +
            "minLength=10&maxLength=70"
    );

    const quotesList = [];
    quotes.results.forEach((element) => {
        quotesList.push(element.content);
    });

    return quotesList;
}

export function getRandom(min = 1, max = 1000) {
    return Math.ceil(Math.random() * (max - min) + min);
}

function getImage() {
    return "https://picsum.photos/600?random=" + getRandom(1, 100);
}
