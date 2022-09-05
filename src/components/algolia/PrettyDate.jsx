import React from "react";
import { Box } from "@chakra-ui/react";

const PrettyDate = ({ date, props }) => {
    const prettyDate = new Date(date * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        //day: 'numeric',
    });
    return `${prettyDate}`
}

export default PrettyDate;