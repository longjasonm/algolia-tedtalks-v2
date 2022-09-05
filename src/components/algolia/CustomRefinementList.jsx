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
    VStack
} from "@chakra-ui/react";

const CustomRefinementList = ({ attribute, title, searchable }) => {
    const { items, refine, searchForItems } = useRefinementList({
        attribute,
    });

    return (
        <Popover placement="bottom-start">
            <PopoverTrigger>
                <Button borderRadius="md" colorScheme="red" variant="outline">
                    {title}
                </Button>

            </PopoverTrigger>
            <PopoverContent>
                <PopoverBody>
                    {searchable && (<Input my={3} placeholder={(`Search for ${title}`)} onChange={e => searchForItems(e.target.value)} />)}

                    <CheckboxGroup>
                        <VStack align="left">
                            {items.map((item) => (

                                <Checkbox
                                    key={item.label}
                                    value={item.label}
                                    isChecked={item.isRefined}
                                    onChange={() => refine(item.value)}
                                >
                                    {item.isRefined ? (<Text as="b">{item.label} ({item.count})</Text>) : (<Text>{item.label} ({item.count})</Text>)}
                                </Checkbox>
                            ))}
                        </VStack>
                    </CheckboxGroup>
                </PopoverBody>
            </PopoverContent>
        </Popover>

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