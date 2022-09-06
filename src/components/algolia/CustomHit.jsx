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
    HStack,
} from "@chakra-ui/react";
import PrettyDate from "./PrettyDate";
import { PrettyTime } from "./PrettyTime";
import PrettyTitle from "./PrettyTitle";
import RelatedContent from "./RelatedContent";

const OverlayOne = () => (
    <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px)'
    />
)

const CustomHit = ({ hit, sendEvent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)


    return (
        <LinkBox cursor="pointer" >
            <GridItem pb={6} boxShadow="sm" background="white" transition="all 0.2s ease-in-out" _hover={{ "boxShadow": "2xl", "transition": "all 0.2s ease-in-out", "transform": "scale(1.03)" }} borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })} h="full">
                <LinkOverlay onClick={() => {
                    setOverlay(<OverlayOne />)
                    onOpen()
                }}>
                    <VStack align="left">
                        <Box position="relative">
                            <Image src={hit.image} alt={hit.ldJsonData.name} borderTopRadius={useBreakpointValue({ base: 'md', md: 'xl' })} />
                            <Box position="absolute" bottom={0} right={0} m={2}>{hit.duration && (<Badge colorScheme="gray" borderRadius="md" px="1.5" py="0.5" fontSize="0.6em" fontWeight="bold"><PrettyTime time={hit.duration} /></Badge>)}</Box>
                        </Box>
                        <Box p={3}>
                            <Text fontFamily={'Georgia, serif'} fontStyle="italic" fontSize="0.8rem">{hit.author}</Text>
                            <Heading size="md" fontWeight="700" letterSpacing=""><PrettyTitle title={hit.ldJsonData.name} /></Heading>
                            <Text fontSize="0.8rem" mt={2}><PrettyDate date={hit.releaseDate} /></Text>
                        </Box>
                    </VStack>
                </LinkOverlay>
            </GridItem>

            <Modal isCentered isOpen={isOpen} size={useBreakpointValue({ base: 'xl', md: '2xl', lg: '3xl' })} onClose={onClose} scrollBehavior={['outside', 'inside']}>
                {overlay}
                <ModalContent>
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
        </LinkBox>

    );
}

export default CustomHit;