import React from "react";
import { useRefinementList } from "react-instantsearch-hooks-web";
import {
    Box, Select, Checkbox, CheckboxGroup, Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Input,
    Button,
    Text,
    VStack,
    StatHelpText
} from "@chakra-ui/react";

const refinementSelected = (items) => {

}

const CustomRefinementList = ({ attribute, title, searchable }) => {
    const { items, refine, searchForItems } = useRefinementList({
        attribute,
    });

    return (
        <Popover placement="bottom">
            <PopoverTrigger>
                <Button m={2} borderRadius="md" colorScheme="red" variant="outline">
                    {title}
                </Button>
            </PopoverTrigger>
            <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton display={['block', 'none']} />
                <PopoverHeader display={['block', 'none']} textAlign="center" fontStyle="italic" color="gray.400">Tap to apply filters</PopoverHeader>
                <PopoverBody p={[null, 2, 4]}>

                    {searchable && (<Box my={2}><Input placeholder={(`Search for ${title}`)} onChange={e => searchForItems(e.target.value)} /></Box>)}
                    <VStack align="left">
                        {items.map((item) => (

                            <Checkbox
                                key={item.label}
                                value={item.label}
                                isChecked={item.isRefined}
                                onChange={() => {
                                    refine(item.value)
                                }}
                            >
                                <Text fontWeight={item.isRefined ? 'bold' : ''}>{item.label} ({item.count})</Text>
                            </Checkbox>
                        ))}
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover >

    );
}

export default CustomRefinementList;

/* 
<div>
            <input
                type="search"
                placeholder="Search"
                onChange={(event) => searchForItems(event.currentTarget.value)}
            />
            <ul>
                {items.map((item) => (
                    <li key={item.value}>
                        <label>
                            <input
                                type="checkbox"
                                checked={item.isRefined}
                                onChange={(event) =>
                                    refine(item.value, event.currentTarget.checked)
                                }
                            />
                            {item.label} ({item.count})
                        </label>
                    </li>
                ))}
            </ul>
        </div>
        */