import React, { useContext, useState } from 'react';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box
} from "@chakra-ui/react"
import { useFormik } from 'formik';
import { AuthContext } from '../../contexts/AuthContext';
import {useRouter} from 'next/router';
import { useSession } from 'next-auth/react';
import { signIn } from "next-auth/react"

const Login: React.FC = () => {
  const router = useRouter()
  const { data: session, status } = useSession();
  const { singIn } = useContext(AuthContext) 
  const formik = useFormik({
    initialValues: {
      email: '',
      pass: '',
    },
    onSubmit: (values: any) => {
      singIn().then(() => {
        console.log("user logged", )
      })
      
    },
  });
  if(status === "authenticated") {
    router.push('/dashboard')
  }
  return (
    <form onSubmit={formik.handleSubmit}>
      <Box py={4} w="100%" >
        <Button w="100%" onClick={() => signIn()} type="submit" colorScheme="red">Entrar Con Google</Button>
      </Box>
      {/*
      <FormControl>
        <FormLabel htmlFor="user">Email de Usuario</FormLabel>
        <Input
          id="user"
          name="user"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="passwords">Contraseña</FormLabel>
        <Input
          id="pass"
          name="pass"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.pass}
        />
      </FormControl>
      <Box py={4} float="right">
        <Button type="submit" colorScheme="facebook">Entrar</Button>
      </Box>
      */}
    </form>
  )
}

export default Login;
