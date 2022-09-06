import React from "react";
import { useNumericMenu } from "react-instantsearch-hooks-web";
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


const CustomDurationMenu = ({ attribute, title }) => {
    const { items, refine } = useNumericMenu({
        attribute,
        items: [
            { label: '0-6 minutes', end: 360 },
            { label: '6-12 minutes', start: 360, end: 720 },
            { label: '12-18 minutes', start: 720, end: 1080 },
            { label: '18+ minutes', start: 1080 },
        ],
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
                    <VStack align="left">
                        {items.map((item) => (

                            <Checkbox
                                key={item.label}
                                value={item.label}
                                isChecked={item.isRefined}
                                onChange={() => refine(item.value)}
                            >
                                {item.isRefined ? (<Text as="b">{item.label}</Text>) : (<Text>{item.label}</Text>)}
                            </Checkbox>
                        ))}
                    </VStack>
                </PopoverBody>
            </PopoverContent>
        </Popover>

    );
}

export default CustomDurationMenu;