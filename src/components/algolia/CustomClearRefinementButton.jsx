import { React, setState } from "react";
import { useClearRefinements } from "react-instantsearch-hooks-web";
import { Button } from "@chakra-ui/react";

function unclickAllCheckboxes() {
    const checkboxes = document.querySelectorAll('.chakra-checkbox__control')
    checkboxes.forEach((checkbox) => {
        if (checkbox.hasChildNodes())
            checkbox.innerHTML = ''
    });
}

const CustomClearRefinementButton = () => {
    const { canRefine, refine } = useClearRefinements();

    return canRefine && (<Button colorScheme='red' variant='ghost' onClick={() => {
        refine()
        setState({ refinements: false })
    }}>Clear Filters</Button>)
};


export default CustomClearRefinementButton;