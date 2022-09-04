import React from 'react';
import { Input, InputGroup, InputLeftElement, Stack } from '@chakra-ui/react';
import { Search2Icon } from '@chakra-ui/icons';
import { useSearchBox } from 'react-instantsearch-hooks-web';

function CustomSearchBox(props) {
    const { query, refine, clear, isSearchStalled } = useSearchBox(props);

    return (<Stack spacing={3}>
        <InputGroup>
            <InputLeftElement
                pointerEvents='none'
                children={<Search2Icon mt={2} color='gray.300' />}
            /><Input type="text" value={query} onChange={e => refine(e.target.value)} onKeyDown={e => refine(e.target.value)} isDisabled={isSearchStalled} placeholder="Search" size="lg" />
        </InputGroup>
    </Stack>)
}

export default CustomSearchBox;