import React from "react";
import {
    Box, GridItem, Image, LinkBox, Text, VStack, Heading, LightMode, LinkOverlay, useBreakpointValue, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Link,
    Badge,
    AspectRatio,
    Skeleton,
    Divider
} from "@chakra-ui/react";
import PrettyDate from "./PrettyDate";
import CleanTitle from "./CleanTitle";
import RelatedContent from "./RelatedContent";


const CustomHit = ({ hit, sendEvent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <GridItem pb={6}>
            <LinkBox as={Box}>
                <LinkOverlay onClick={onOpen}>
                    <VStack align="left">
                        <Image src={hit.image} alt={hit.ldJsonData.name} borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })} />
                        <Heading size="md"><CleanTitle title={hit.ldJsonData.name} /></Heading>
                        <Text>{hit.author}</Text>
                        <PrettyDate date={hit.releaseDate} />
                    </VStack>
                </LinkOverlay>
            </LinkBox>
            <Modal isOpen={isOpen} size={useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' })} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    {/*<ModalHeader>{hit.title}</ModalHeader> */}
                    <ModalCloseButton />
                    <ModalBody pt={12} pb={6}>
                        <Box position="relative">
                            <AspectRatio ratio={16 / 9} fallback={Skeleton}>
                                <iframe title={hit.title} src={`https://embed.ted.com/talks/lang/en/${hit.objectID}`} frameBorder="0" scrolling="no" allowFullScreen></iframe>
                            </AspectRatio>
                        </Box>
                        <Text mt={3}>{hit.description}</Text>
                        <Text mt={3} mb={6}>
                            Publish Date: <PrettyDate date={hit.releaseDate} />
                        </Text>
                        <Divider />
                        <RelatedContent currentObjectID={hit.objectID} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </GridItem >

    );
}

export default CustomHit;