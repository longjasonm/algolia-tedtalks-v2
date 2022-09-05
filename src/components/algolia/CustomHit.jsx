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
    Divider,
    HStack
} from "@chakra-ui/react";
import PrettyDate from "./PrettyDate";
import { PrettyTime } from "./PrettyTime";
import PrettyTitle from "./PrettyTitle";
import RelatedContent from "./RelatedContent";


const CustomHit = ({ hit, sendEvent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <GridItem pb={6}>
            <LinkBox as={Box} cursor="pointer" borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })}>
                <LinkOverlay onClick={onOpen}>
                    <VStack align="left" spacing={2}>
                        <Image src={hit.image} alt={hit.ldJsonData.name} borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })} />
                        <Text fontFamily={'Georgia, serif'} fontStyle="italic" fontSize="0.8rem">{hit.author}</Text>
                        <Heading size="md" fontWeight="700" letterSpacing=""><PrettyTitle title={hit.ldJsonData.name} /></Heading>
                        <Text fontSize="0.8rem"><b>Posted </b><PrettyDate date={hit.releaseDate} /></Text>
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
                        <HStack spacing={3} mt={3} mb={6}>

                            <Text><b>Posted: </b><PrettyDate ml={3} date={hit.releaseDate} /></Text>
                            <Text><b>Duration: </b><PrettyTime ml={3} time={hit.duration} /></Text>

                        </HStack>

                        <Divider />
                        <RelatedContent currentObjectID={hit.objectID} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </GridItem >

    );
}

export default CustomHit;