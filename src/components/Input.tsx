import { Input as NativeBaseInput, IInputProps, FormControl } from 'native-base'


type props = IInputProps & {
    messageError?: string | null
}
export function Input({ messageError = null, isInvalid,...rest }: props) {
    const invalid = !!messageError || isInvalid
    return (
        <FormControl mb={4} isInvalid={invalid}>
            <NativeBaseInput
                fontSize={'md'}
                color='light.300'
                h={16}
                isInvalid={invalid}
                _focus={{
                    borderColor: 'darkBlue.500',
                    borderWidth: 1,
                    bgColor: 'transparent',
                }}
                _invalid={{
                    borderColor: 'red.500',
                }}
                {...rest}
            />
            <FormControl.ErrorMessage color='red.500'>
                {messageError}
            </FormControl.ErrorMessage>
        </FormControl>
    )
}