import React from "react";

const PrettyTitle = ({ title }) => {
    return String(title)
        .replace(/&apos;/g, '\'')
        .replace(/&quot;/g, '"')
        .replace(/--/g, '—')
}

export default PrettyTitle;