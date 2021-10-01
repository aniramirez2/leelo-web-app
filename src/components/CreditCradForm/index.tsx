import { FormControl, FormLabel, } from '@chakra-ui/form-control';
import { Input,  Flex, Box, Button } from '@chakra-ui/react';
import { useFormik } from 'formik';
import router from 'next/router';
import React from 'react';

const CreditCradForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      cardNumber: '',
      cvc: '',
      validDate: '',
      name: '',
      docType: '',
      docNumber: ''
    },
    onSubmit: (values: any) => {
      router.push('/dashboard');
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box>
        <FormControl w="100%">
          <FormLabel htmlFor="creditCard">Número de la tarjeta</FormLabel>
          <Input
            id="creditCard"
            name="creditCard"
            type="number"
            onChange={formik.handleChange}
            value={formik.values.cardNumber}
          />
        </FormControl>
        <Flex  justifyContent="space-between" my={5}>
          <FormControl w="55%">
            <FormLabel htmlFor="validDate">Fecha de expiración</FormLabel>
            <Input
              id="validDate"
              name="validDate"
              type="date"
              onChange={formik.handleChange}
              value={formik.values.validDate}
            />
          </FormControl>
          <FormControl w="35%">
            <FormLabel htmlFor="cvc">Cód. de seguridad</FormLabel>
            <Input
              id="cvc"
              name="cvc"
              type="cvc"
              onChange={formik.handleChange}
              value={formik.values.cvc}
            />
          </FormControl>
        </Flex>
        <FormControl>
          <FormLabel htmlFor="name">Nombre</FormLabel>
          <Input
            id="name"
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
        </FormControl>
      </Box>
      <Box py={4} float="right">
        <Button type="submit" colorScheme="facebook">Suscribirme</Button>
      </Box>
    </form>
  )
}

export default CreditCradForm;