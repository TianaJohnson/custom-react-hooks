import { useState } from "react";

export const useToggle = (initial) => {
    const [isToggled, setToggle] = useState(false);
    return [isToggle, setToggle];

}