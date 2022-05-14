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
import axios from "axios"

const Signup: React.FC = () => {
  const router = useRouter()
  
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      pass: '',
      birthday: '',
      city: '',
    },
    onSubmit: async (values: any) => {      
      try {
        const response = await axios.post(`http://aws-leelo-alb-services-799188184.us-east-1.elb.amazonaws.com/accounts/api/v1/users`, {
          firstName: formik.values.name,
          lastName: formik.values.lastName,
          email: formik.values.email,
          birthdate: formik.values.birthday,
          phone: formik.values.phone,
          password: formik.values.pass,
          address: {
            street: formik.values.address,
            city: formik.values.city,
            country: "Colombia"
          },
          enabled: true,
          createdDate: new Date(),
        });
      console.log("response", response);
      alert("tu registro fue creado con exito")
      } catch (err) {
        console.log("error", err);
        alert("No pudimos crear tu registro, por favor intenta mas tarde")
      }
    },
  });

  return (
    <>
      <form onSubmit={formik.handleSubmit} >
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
        <FormLabel htmlFor="name" mt={2}>Apellidos</FormLabel>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
        </FormControl>

        <FormControl>
        <FormLabel htmlFor="birthdate" mt={2}>Fecha de nacimiento</FormLabel>
          <Input
            id="birthday"
            name="birthday"
            type="date"
            onChange={formik.handleChange}
            value={formik.values.birthday}
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="email"  mt={2}>Email</FormLabel>
          <Input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="phone"  mt={2}>Telefono</FormLabel>
          <Input
            id="phone"
            name="phone"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="city"  mt={2}>Ciudad</FormLabel>
          <Input
            id="city"
            name="city"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.city}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="address"  mt={2}>Dirección</FormLabel>
          <Input
            id="address"
            name="address"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.address}
          />
        </FormControl>
        <FormControl>
          <FormLabel htmlFor="passwords"  mt={2}>Contraseña</FormLabel>
          <Input
            id="pass"
            name="pass"
            type="password"
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
