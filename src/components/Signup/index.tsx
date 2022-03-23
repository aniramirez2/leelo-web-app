import React from 'react';
import { useFormik } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box
} from "@chakra-ui/react"
import { useRouter } from 'next/router';
import { signIn } from "next-auth/react"

const Signup: React.FC = () => {
  const router = useRouter()
  
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      pass: '',
    },
    onSubmit: (values: any) => {
      //router.push('/dashboard');
    },
  });

  return (
    <>
      <Box py={4} w="100%" >
        <Button w="100%" onClick={() => signIn()} type="submit" colorScheme="red">Registrarse Con Google</Button>
      </Box>
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
    </>
  )
}

export default Signup;
