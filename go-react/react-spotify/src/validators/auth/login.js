import * as Yup from 'yup'

export default Yup.object().shape({
  email: Yup.string()
    .email('Por favor infome um e-mail válido')
    .required('O campo de e-mail é obrigatório'),
  password: Yup.string()
    .min(4)
    .required('O campo de e-mail é obrigatório')
})
