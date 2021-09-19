import React, { useContext } from 'react';
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

const Login: React.FC = () => {
  const router = useRouter()
  const { singIn } = useContext(AuthContext) 
  const formik = useFormik({
    initialValues: {
      email: '',
      pass: '',
    },
    onSubmit: (values: any) => {
      router.push('/dashboard');
      singIn()
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
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
    </form>
  )
}

export default Login;
