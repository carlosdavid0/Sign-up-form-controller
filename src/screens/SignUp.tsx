import { Heading, VStack, Center } from "native-base";

import { FormData } from "../types/FormData";
import Button from "../components/Button";

import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { useForm, Controller } from 'react-hook-form'
import { Input } from "../components/Input";



const schema = yup.object().shape({
    name:  yup.string().required('Nome obrigatório'),
    email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    senha: yup.string().required('Senha obrigatória').min(6, 'No mínimo 6 caracteres'),
    confirmarSenha: yup.string().required('Confirmação de senha obrigatória').oneOf([yup.ref('senha'), null], 'As senhas não coincidem')
})

export default function SignUp() {

    const { control, handleSubmit, formState: {errors} } = useForm<FormData>({
        resolver: yupResolver(schema)
    })

    function handlerSignIn(data: FormData) {
        console.log(data)


    }

    return (
        <VStack bgColor={"darkBlue.900"} flex={1} px={10}>

            <Center>
                <Heading my={24} fontSize='2xl' color='light.300'>
                    Crie sua conta
                </Heading>

                <Controller 
               
                control={control} 
                name='name' 
                render={({ field: { onChange } }) => {
                    return <Input placeholder="Nome" onChangeText={onChange} messageError={errors.name?.message} />
                }} />

                <Controller
                control={control} 
                name='email' 
                render={({ field: { onChange } }) => {
                    return <Input placeholder="E-mail" onChangeText={onChange} messageError={errors.email?.message} />
                }} />

                <Controller 
                control={control} 
                name='senha' 
                render={({ field: { onChange } }) => {
                    return <Input placeholder="Senha" secureTextEntry onChangeText={onChange} messageError={errors.senha?.message} />
                }} />


                <Controller 
                control={control} 
                name='confirmarSenha' 
                render={({ field: { onChange } }) => {
                    return <Input placeholder="Confirmar Senha" secureTextEntry onChangeText={onChange} messageError={errors.confirmarSenha?.message} />
                }} />









                <Button title="Cadastrar" onPress={handleSubmit(handlerSignIn)} />
            </Center>
        </VStack>
    );
}


