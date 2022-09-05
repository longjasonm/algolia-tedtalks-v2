import React from "react";
import { Box } from "@chakra-ui/react";

export function PrettyTime({ time, props }) {

    const h = Math.floor(time / 3600).toString().padStart(2, '0'),
        m = Math.floor(time % 3600 / 60).toString().padStart(2, '0'),
        s = Math.floor(time % 60).toString().padStart(2, '0');


    if (h === '00') {
        return `${m}:${s}`;
    } else {
        return `${h}:${m}:${s}`;
    }
};