import { Box, Image, Badge, Text, Button,  ModalOverlay,
  ModalContent,
  ModalHeader,
  Heading,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Modal, } from '@chakra-ui/react';
import React from 'react';
import { StarIcon } from '@chakra-ui/icons'
import CreditCradForm from '../CreditCradForm';


// import { Container } from './styles';

const BookCards: React.FC = () => {
  // Sample card from Airbnb

function AirbnbExample() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const property = {
    imageUrl: "https://books.google.com.co/books/content?id=Vb9IswEACAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE71YiHPjLbZHx6b91AiJz5VPf47aYIq2N6kfu7Kma3U2SwRQE89O7GLjI0Dr5DDRad8qyCgku7u_iKrkpRobPX4lGYBSCfXQDHwaWEFK_XTFsge_GcEMln3rC_0kcOXDe5Nt5_9c",
    imageAlt: "Rear view of modern home with pool",
    title: "El olvido que seremos",
    author: "Hecto Abad faciolince",
    pages: "328",
    resume: `El 25 de agosto de 1987 Héctor Abad Gómez, médico y activista en pro de los derechos humanos, es asesinado en Medellín por los paramilitares.`,
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
            {property.pages} paginas
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
          <Text>{property.author}</Text>
          <Box as="span" color="gray.600" fontSize="sm">
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
          <Button colorScheme="facebook" size="sm" onClick={onOpen}>Alquilar</Button>
        </Box>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Bienvenido a leelo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box>
              <Heading size="lg" textAlign="center" color="blue.600">Hola!! Todavia no eres un suscriptor</Heading>
              <Text my={5}>Para acceder a nuestros servicios de alquiler de libros, cobramos una suscripción mensual de 21.000 pesos colombianos, esto te dará acceso a alquiler un libro por mes.</Text>
              <Box w="100%">
                <CreditCradForm />
              </Box>
            </Box>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  )
}
  return AirbnbExample();
}

export default BookCards;