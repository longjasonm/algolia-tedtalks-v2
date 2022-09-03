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
    Skeleton
} from "@chakra-ui/react";
import PrettyDate from "./PrettyDate";

const cleanTitle = (title) => {
    return String(title)
        .replace(/&apos;/g, '\'')
        .replace(/&quot;/g, '"')
}

const CustomHit = ({ hit, sendEvent }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <GridItem pb={6}>
            <LinkBox as={Box}>
                <LinkOverlay onClick={onOpen}>
                    <VStack align="left">
                        <Image src={hit.image} alt={hit.ldJsonData.name} borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })} />
                        <Heading size="md">{cleanTitle(hit.ldJsonData.name)}</Heading>
                        <Text>{hit.author}</Text>
                        <Text>Published in: <PrettyDate date={hit.releaseDate} /></Text>
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
                            {/*<Image src={hit.image} alt={hit.ldJsonData.name} borderRadius={useBreakpointValue({ base: 'md', md: 'xl' })} /> */}

                            <AspectRatio ratio={16 / 9} fallback={Skeleton}>
                                <iframe title={hit.title} src={`https://embed.ted.com/talks/lang/en/${hit.objectID}`} frameBorder="0" scrolling="no" allowFullScreen></iframe>
                            </AspectRatio>

                        </Box>
                        <Text mt={3}>{hit.description}</Text>
                        <Text mt={3}>Published in: <PrettyDate date={hit.releaseDate} /></Text>
                    </ModalBody>

                    {/*<ModalFooter>
                        <Button colorScheme='red'>
                            <Link href={hit.url} isExternal _hover={{ textDecoration: 'none' }}>View this talk</Link>
                        </Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>
        </GridItem >

    );
}

export default CustomHit;