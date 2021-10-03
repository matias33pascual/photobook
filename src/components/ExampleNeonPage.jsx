import React from "react";
import queryString from "query-string";

const ExampleNeonPage = ({ location }) => {
    const { name, lastName } = queryString.parse(location.search);
    console.log(location);

    return <h1>Example Neon Page of {name + " " + lastName}</h1>;
};

export default ExampleNeonPage;
