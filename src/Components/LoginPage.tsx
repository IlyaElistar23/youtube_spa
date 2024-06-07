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
            height: '520px',
            width: '1440px',
            paddingTop: '140px',
            paddingBottom: '140px'
        }}>
            <Flex vertical justify='center' align='center' style={{
                backgroundColor: 'white',
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '10px',
                borderColor: '#cacaca',
                height: '520px',
                width: '510px',
                margin: '0px 465px'
            }}>
                <Flex vertical justify='center' align='center'>
                    <Image src='../sibdev-logo.png' style={{ marginTop: '40px' }} />
                    <Text style={{ marginTop: '32px', fontSize: '18px', lineHeight: '28px', fontWeight: 'bold' }}>Вход</Text>
                </Flex>
                <Flex vertical style={{ marginTop: '20px', width: '334px' }}>
                    <Text style={{ fontSize: '16px', color: '#1717194D' }}>Логин</Text>
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
                                height: '48px',
                                fontSize: '20px'
                            }} {...field} />
                        )}
                    />
                </Flex>
                <Flex vertical style={{ marginTop: '20px', width: '334px' }}>
                    <Text style={{ fontSize: '16px', color: '#1717194D' }}>Пароль</Text>
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
                                height: '48px',
                                width: '334px'
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
                            marginTop: '40px',
                            height: '52px',
                            width: '176px',
                            fontSize: '20px'
                        }}>Войти</Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
        </form>
    )
}

export default LoginPage