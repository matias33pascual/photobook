import React, { useRef, useState } from "react";

interface Person {
    firstName: string;
    lastName: string;
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (name: string) => void;
    obj?: Person;
    handleChange: () => void;
}

interface Something {
    text: string;
}

const TSTest: React.FC<Props> = ({ text, obj, handleChange }) => {
    const [count, setCount] = useState<number>(0);
    const [objTest, setObjTest] = useState<{ name?: string }>({});
    const [anotherText, setAnotherText] = useState<Something>({
        text: "un texto",
    });

    const inputRef = useRef<HTMLInputElement>(null);
    const divRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={divRef}>
            <input ref={inputRef} onChange={handleChange} />
            {text}
            {obj && obj.firstName + " " + obj.lastName}
        </div>
    );
};

export default TSTest;
