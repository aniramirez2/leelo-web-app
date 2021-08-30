import React from 'react';
import { useFormik } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box
} from "@chakra-ui/react"

const Signup: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      pass: '',
    },
    onSubmit: (values: any) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
      <FormControl>
        <FormLabel htmlFor="user">Email</FormLabel>
        <Input
          id="user"
          name="user"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="phone">Telefono</FormLabel>
        <Input
          id="phone"
          name="phone"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.phone}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="address">Dirección</FormLabel>
        <Input
          id="address"
          name="address"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.address}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="passwords">Contraseña</FormLabel>
        <Input
          id="pass"
          name="pass"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.pass}
        />
      </FormControl>
      <Box py={4} float="right">
        <Button type="submit" colorScheme="facebook">Registrarse</Button>
      </Box>
    </form>
  )
}

export default Signup;
