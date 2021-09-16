export const data = [
    {
        id: 0,
        image: "https://picsum.photos/300?random=0",
        author: "A",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 1,
        image: "https://picsum.photos/300?random=1",
        author: "B",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 2,
        image: "https://picsum.photos/300?random=2",
        author: "C",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 3,
        image: "https://picsum.photos/300?random=3",
        author: "D",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 4,
        image: "https://picsum.photos/300?random=4",
        author: "E",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
    {
        id: 5,
        image: "https://picsum.photos/300?random=5",
        author: "F",
        subheader: "Xzun",
        favorite: false,
        likes: getRandom(7000, 2500),
        dislikes: getRandom(500, 50),
    },
];

function getRandom(min, max) {
    return Math.ceil(Math.random() * (max - min) + min);
}
