import { Button as ButtonNativeBase, IButtonProps, Text } from "native-base";
import { THEME } from "../theme";

type Props = IButtonProps & {
    title: string;
}


export function Button({ title, ...rest } : Props){
    
    return(
        <ButtonNativeBase {...rest}
            w={"full"}
            marginBottom={8}
            h={14}
            bg={THEME.colors.red[500]}
            rounded="full"
            _pressed={{
                    bg: THEME.colors.red[300]
                }}
        >
            <Text 
                color={THEME.colors.white}
                fontFamily={"heading"}
                fontSize={"xl"}    
            >
                {title.toUpperCase()}
            </Text>
        </ButtonNativeBase>
    )
}
