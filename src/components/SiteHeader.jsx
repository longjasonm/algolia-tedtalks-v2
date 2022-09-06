import React from "react";
import { Box, HStack, Heading, Center, Flex } from "@chakra-ui/react";
import { Logo } from "./Logo";
import Autocomplete from './algolia/Autocomplete.tsx';
import algoliasearch from 'algoliasearch/lite';
const searchClient = algoliasearch('JINA8T7GLB', 'cccd3ff2b3aaa504c5028daee311d2ea');

const SiteHeader = () => {
    return (
        <Flex w="100%" align="center" flexDirection={["column", "row"]} p={3} borderBottom="1px" borderColor="gray.300" background="white" >
            <HStack flex={4} flexDirection={["column", "row"]}>
                <Center w="200px" py={3} px={6}>
                    <Logo />
                </Center>
                <Center>
                    <Heading size={["md", "lg", "xl"]} fontWeight="100">Ideas worth spreading</Heading>
                </Center>
            </HStack>
            <Box flex={2} width="100%" mt={[4, null]}>
                <Autocomplete
                    searchClient={searchClient}
                    placeholder="Search for talks..."
                    detachedMediaQuery="none"
                    openOnFocus />
            </Box>
        </Flex>
    );
};

export default SiteHeader;