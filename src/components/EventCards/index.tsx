import { Box, Image, Badge, Text, Button, Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  ModalCloseButton,
  Flex,
  useDisclosure, } from '@chakra-ui/react';
import React from 'react';
import { StarIcon } from '@chakra-ui/icons'
import CreditCradForm from '../CreditCradForm';

// import { Container } from './styles';

const EventCards: React.FC = () => {
  // Sample card from Airbnb

function AirbnbExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const property = {
    imageUrl: "https://img1.wsimg.com/isteam/ip/184b797a-3167-46c7-80f7-f10f3bf61938/WhatsApp%20Image%202021-09-18%20at%206.11.34%20PM.jpeg/:/rs=w:1160,h:870",
    imageAlt: "Rear view of modern home with pool",
    title: "Club de lectura belen",
    responsible: "Leelo",
    places: "30",
    available: "28",
    resume: `Trascendemos la relación entre lector y escritor, buscando temas comunes para llevar al plano social a través del dialogo yla discusión colectiva`,
    reviewCount: 34,
    rating: 4,
  }

  return (
    <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <Image margin="auto" src={property.imageUrl} alt={property.imageAlt} />

      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Badge borderRadius="full" px="2" colorScheme="teal">
            New
          </Badge>
          <Box
            color="gray.500"
            fontWeight="semibold"
            letterSpacing="wide"
            fontSize="xs"
            textTransform="uppercase"
            ml="2"
          >
            {property.places} cupos &bull; {property.available} disponibles
          </Box>
        </Box>

        <Box
          mt="1"
          fontWeight="semibold"
          as="h4"
          lineHeight="tight"
          isTruncated
        >
          {property.title}
        </Box>

        <Box>
          <Text>{property.responsible}</Text>
          <Box as="span" color="gray.600" fontSize="sm" >
            {property.resume}
          </Box>
        </Box>

        <Box d="flex" mt="2" alignItems="center" justifyContent="space-between">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon
                key={i}
                color={i < property.rating ? "teal.500" : "gray.300"}
              />
            ))}
          <Box as="span" ml="2" color="gray.600" fontSize="sm">
            {property.reviewCount} reviews
          </Box>
          <Button colorScheme="facebook" size="sm" onClick={onOpen}>Participar</Button>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bienvenido a leelo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading size="lg" textAlign="center" color="blue.600">Hola!! Gracias por querer hacer parte de nuestra comunidad</Heading>
              <Text my={5}>Recuerda que nuestros eventos son totalmente gratis, sinembargo para que puedas participar activamente de nuestros clubs de lectura te recomendamos que te suscribas a leelo para tener acceso a la biblioteca colectiva que te permite alquilar un libro mensualmente</Text>
              
              <Flex justifyContent="space-between" my={5}>
                <Button colorScheme="facebook" variant="ghost">Entrar sin el libro</Button>
                <Button colorScheme="facebook" >Entrar y suscribirme</Button>
              </Flex>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
  return AirbnbExample();
}

export default EventCards;