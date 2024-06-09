import { Image, Typography, Input, Button, Flex, ConfigProvider } from 'antd'
import { useForm, Controller } from 'react-hook-form'

const LoginPage = (): JSX.Element => {
    const { Text } = Typography
    const { Password } = Input

    const {
        handleSubmit,
        control,
        formState: {
            errors
        },
        reset
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: ''
        }
    })

    return (
        <form style={{
            backgroundColor: '#FAFAFA',
            height: '66%',
            width: '100%',
            paddingTop: '9.5%',
            paddingBottom: '9.5%'
        }}>
            <Flex vertical justify='center' align='center' style={{
                backgroundColor: 'white',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '10px',
                borderColor: '#cacaca',
                height: '66%',
                width: '35%',
                margin: '0 30%',
                padding: '3% 0'
            }}>
                <Flex vertical justify='center' align='center'>
                    <Image src='../sibdev-logo.png' style={{ marginTop: '10%' }} />
                    <Text style={{ marginTop: '8%', fontSize: '100%', fontWeight: 'bold' }}>Вход</Text>
                </Flex>
                <Flex vertical style={{ marginTop: '4%', width: '64%' }}>
                    <Text style={{ fontSize: '89%', color: '#1717194D' }}>Логин</Text>
                    <Controller
                        name='email'
                        control={control}
                        rules={{
                            required: 'Поле обязательно для заполнения!',
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                message: 'Некорректный формат E-mail'
                            }
                        }}
                        render={({ field }) => (
                            <Input style={{
                                height: '9%',
                                fontSize: '111%'
                            }} {...field} />
                        )}
                    />
                </Flex>
                <Flex vertical style={{ marginTop: '4%', width: '64%' }}>
                    <Text style={{ fontSize: '89%', color: '#1717194D' }}>Пароль</Text>
                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: 'Поле обязательно для заполнения',
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
                                message: 'Пароль должен быть длиной не менее 8 символов, из которых 1 заглавная буква, 1 прописная, 1 число и 1 символ'
                            }
                        }}
                        render={({ field }) => (
                            <Password style={{
                                height: '9%',
                                width: '100%'
                            }} {...field} />
                        )}
                    />
                </Flex>
                <Flex>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultColor: 'white',
                                    defaultBg: '#35A2EC',
                                    defaultBorderColor: 'white',
                                    defaultHoverBorderColor: '#35A2EC',
                                    defaultHoverColor: '#35A2EC'
                                }
                            }
                        }}
                    >
                        <Button style={{
                            marginTop: '40%',
                            height: '10%',
                            width: '100%',
                            fontSize: '111%'
                        }}>Войти</Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
        </form>
    )
}

export default LoginPage