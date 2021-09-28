export function removeEmptyKeys(list) {
    return Object.keys(list)
        .filter((k) => list[k] != null)
        .reduce((a, k) => ({ ...a, [k]: list[k] }), {});
}

export function getRandom(min = 1, max = 1000) {
    return Math.ceil(Math.random() * (max - min) + min);
}
