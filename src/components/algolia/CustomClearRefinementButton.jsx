import React from "react";
import { useClearRefinements } from "react-instantsearch-hooks-web";
import { Button } from "@chakra-ui/react";

const CustomClearRefinementButton = () => {
    const { refine } = useClearRefinements();

    return (
        <Button colorScheme='red' variant='ghost' onClick={() => refine()}>Clear Filters</Button>
    );
}

export default CustomClearRefinementButton;