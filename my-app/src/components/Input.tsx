import { Input as InputNativeBase, Icon, IInputProps, Box } from "native-base";
import { THEME } from "../theme";
import { SignIn, Lock } from 'phosphor-react-native';

type Props = IInputProps & {
    icon_name: string;
};

const iconMapping: Record<string, React.ReactNode> = {
    signIn: <SignIn color={THEME.colors.gray[300]}/>,
    pass: <Lock color={THEME.colors.gray[300]}  />,
};

export function Input({ icon_name, ...rest }: Props) {
    const selectedIcon = iconMapping[icon_name] || <SignIn color={THEME.colors.gray[300]} />;

    return (
        <InputNativeBase
            {...rest}
            rounded={"full"}
            w={"full"}
            h={14}
            bg={"transparent"}
            borderColor={THEME.colors.gray[200]}
            marginBottom={5}
            fontSize={"md"}
            fontFamily={"body"}
            paddingRight={7}
            _focus={{
                bg:"transparent",
                borderColor: THEME.colors.red[200]
            }}
            leftElement={
                <Box marginLeft={3}>
                    {selectedIcon}
                </Box>
            }
        />
    );
}
