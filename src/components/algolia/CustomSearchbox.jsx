import React from 'react';
import { Input } from '@chakra-ui/react';
import { useSearchBox } from 'react-instantsearch-hooks-web';

function CustomSearchBox(props) {
    const { query, refine, clear, isSearchStalled } = useSearchBox(props);

    return <Input type="text" value={query} onChange={e => refine(e.target.value)} onKeyDown={e => refine(e.target.value)} isDisabled={isSearchStalled} placeholder="Search" size="lg" />;
}

export default CustomSearchBox;