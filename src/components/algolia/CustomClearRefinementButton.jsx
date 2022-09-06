import { React } from "react";
import { useClearRefinements } from "react-instantsearch-hooks-web";
import { Button } from "@chakra-ui/react";

const CustomClearRefinementButton = () => {
    const { canRefine, refine } = useClearRefinements();

    return canRefine && (<Button m={2} colorScheme='red' variant='ghost' onClick={() => {
        refine()
    }}>Clear Filters</Button>)
};


export default CustomClearRefinementButton;