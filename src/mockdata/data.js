import axios from "axios";
import { avatars } from "./avatars";
import { getRandom } from "../utils/functions";

export async function fetchData() {
    const avatar = avatars;
    const images = getImages();
    const quotes = await getQuotes();

    const newCardList = [];
    for (let i = 0; i < 18; i++) {
        const { first_name, last_name, url } = avatar[getRandom(0, 49)];

        newCardList.push({
            id: i,
            author: first_name,
            subheader: last_name,
            avatar: url,
            image: images[i],
            favorite: false,
            likes: getRandom(7000, 2500),
            dislikes: getRandom(500, 50),
            quote: quotes[i],
        });
    }

    return newCardList;
}

function getImages(count = 20) {
    const imagesList = [];
    for (let i = 0; i < count; i++) {
        imagesList.push(getImage());
    }
    return imagesList;
}

function getImage() {
    return "https://picsum.photos/600?random=" + getRandom(1, 100);
}

async function getQuotes() {
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
