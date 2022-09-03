import React from "react";

const PrettyDate = ({ date }) => {
    const prettyDate = new Date(date * 1000).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        //day: 'numeric',
    });
    return <>{prettyDate}</>;
}

export default PrettyDate;