import React from "react";

const CleanTitle = ({ title }) => {
    return String(title)
        .replace(/&apos;/g, '\'')
        .replace(/&quot;/g, '"')
}

export default CleanTitle;