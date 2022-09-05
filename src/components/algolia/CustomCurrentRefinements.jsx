import React from "react";
import { useCurrentRefinements } from "react-instantsearch-hooks-web";
import { Box, Button, HStack, CloseButton } from "@chakra-ui/react";

const CustomCurrentRefinements = () => {
    const { items, canRefine, refine } = useCurrentRefinements();

    return (
        <HStack spacing={3} mt={3}>
            {items.map((item) => (
                <Button key={item.value}>
                    {item.refinements.map((refinement) => (
                        <CloseButton onClick={() => refine(refinement.value)}></CloseButton>
                    ))}
                </Button>
            ))}
        </HStack>
    );
}

export default CustomCurrentRefinements;