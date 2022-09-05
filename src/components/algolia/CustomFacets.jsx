import React from "react";
import { HStack } from "@chakra-ui/react";
import CustomRefinementList from "./CustomRefinementList";
import CustomClearRefinementButton from "./CustomClearRefinementButton";

const CustomFacets = (props) => {
    <HStack spacing={1} align="left">
        <CustomRefinementList attribute={'keywords'} title="Keywords" searchable={true} />
        <CustomClearRefinementButton />
    </HStack>
}

export default CustomFacets;
