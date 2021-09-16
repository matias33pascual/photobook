export const data = [
    {
        id: 0,
        image: "https://picsum.photos/300?random=0",
        author: "Mat",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 1,
        image: "https://picsum.photos/300?random=1",
        author: "Mat",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 2,
        image: "https://picsum.photos/300?random=2",
        author: "Mat",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 3,
        image: "https://picsum.photos/300?random=3",
        author: "Mat",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 4,
        image: "https://picsum.photos/300?random=4",
        author: "Mat",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 5,
        image: "https://picsum.photos/300?random=5",
        author: "Mat",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
];

function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
