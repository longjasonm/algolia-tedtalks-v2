const PrettyTitle = ({ title }) => {
    return String(title)
        .replace(/&apos;/g, '\'')
        .replace(/&quot;/g, '"')
        .replace(/--/g, '—')
        .replace(/&amp;/g, '&')
}

export default PrettyTitle;