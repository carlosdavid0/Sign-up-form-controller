import { Button as ButtonNativeBase, IButtonProps, Text } from 'native-base'

type props = IButtonProps & {
    title: string
}

export default function Button({ ...rest }: props) {
    return (
        <ButtonNativeBase 
        w={'full'}
        h={16}
        _pressed={{
            bgColor: 'darkBlue.800'

        }}
        bgColor={'darkBlue.600'}
        borderRadius={8}
        {...rest}
        >
            <Text color={'light.300'}>{rest.title}</Text>
        </ButtonNativeBase>
    )
}