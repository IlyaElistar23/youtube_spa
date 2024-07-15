import { Image, Typography, Input, Button, Flex, ConfigProvider } from 'antd'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useContext, FC } from 'react'
import { AppContext } from '../../context/context'
import { LoginPageText } from '../../context/context'

type AuthData = {
    email: string,
    password: string
}

type LoginPropsType = {
    language: LoginPageText
}

const LoginPage: FC<LoginPropsType> = ({ language }) => {

    const navigate = useNavigate()
    const theme = useContext(AppContext)

    const { Text } = Typography
    const { Password } = Input

    const {
        handleSubmit,
        control,
        formState: {
            errors
        },
        reset
    } = useForm<AuthData>({
        mode: 'onBlur',
        defaultValues: {
            email: '',
            password: ''
        }
    })

    const fetchAuth = async (data: AuthData): Promise<any> => {
        try {
            const response = await axios.post('https://todo-redev.herokuapp.com/api/auth/login', data)
            if ('data' in response && 'token' in response.data) {
                localStorage.setItem('token', response.data.token)
                navigate('/search')
                reset()
            } else {
                navigate('/')
            }
            console.log(response);
        } catch (error: any) {
            console.log(error);
        }
    }

    const onLogin = (data: AuthData): any => {
        try {
            fetchAuth(data)
        } catch (error: any) {
            console.log(error);
        }
    }

    return (
        <form
            style={{
                backgroundColor: theme.bgColor,
                height: '60vh',
                width: '100vw',
                paddingTop: '20vh',
                paddingBottom: '20vh'
            }}>
            <Flex vertical justify='center' align='center' style={{
                backgroundColor: theme.headerColor,
                borderStyle: 'solid',
                borderWidth: '1px',
                borderRadius: '10px',
                borderColor: '#cacaca',
                height: '45vh',
                width: '35vw',
                margin: '0 32.5vw',
                padding: '10vh 0'
            }}>
                <Flex vertical justify='center' align='center'>
                    <Image src='../sibdev-logo.png' />
                    <Text style={{ marginTop: '5vh', fontSize: '1.1rem', fontWeight: 'bold', color: theme.textColor }}>{language.headTitle}</Text>
                </Flex>
                <Flex vertical style={{ marginTop: '4%', width: '22vw' }}>
                    <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor }}>{language.mailTitle}</Text>
                    <Controller
                        name='email'
                        control={control}
                        rules={{
                            required: language.errorEmpty,
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                message: language.mailErrorIncorrect || ''
                            }
                        }}
                        render={({ field }) => (
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Input: {
                                            colorTextPlaceholder: theme.subTitleColor
                                        }
                                    }
                                }}
                            >
                                <Input style={{
                                    height: '4vh',
                                    fontSize: '1.1rem',
                                    backgroundColor: theme.headerColor,
                                    color: theme.textColor
                                }} {...field} placeholder={language.mailPlaceholder} />
                            </ConfigProvider>
                        )}
                    />
                    <Text style={{
                        fontSize: '1rem',
                        paddingTop: '0.5vh',
                        color: theme.errorsColor
                    }}>{errors.email?.message}</Text>
                </Flex>
                <Flex vertical style={{ marginTop: '4%', width: '22vw' }}>
                    <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor }}>{language.passwordTitle}</Text>
                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: language.errorEmpty,
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
                                message: language.passwordErrorIncorrect || ''
                            }
                        }}
                        render={({ field }) => (
                            <ConfigProvider
                                theme={{
                                    components: {
                                        Input: {
                                            colorTextPlaceholder: theme.subTitleColor
                                        }
                                    },
                                    token: {
                                        colorIcon: theme.subTitleColor,
                                        colorIconHover: theme.bgColor
                                    }
                                }}
                            >
                                <Password style={{
                                    height: '4vh',
                                    fontSize: '1.1rem',
                                    backgroundColor: theme.headerColor,
                                    color: theme.textColor
                                }} {...field} placeholder={language.passwordPlaceholder} />
                            </ConfigProvider>
                        )}
                    />
                    <Text style={{
                        fontSize: '1rem',
                        paddingTop: '0.5vh',
                        color: theme.errorsColor
                    }}>{errors.password?.message}</Text>
                </Flex>
                <Flex>
                    <ConfigProvider
                        theme={{
                            components: {
                                Button: {
                                    defaultColor: theme.searchButtonDefaultTextColor,
                                    defaultBg: theme.searchButtonDefaultBgColor,
                                    defaultBorderColor: theme.searchButtonDefaultBorderColor,
                                    defaultHoverBorderColor: theme.searchButtonActiveBorderColor,
                                    defaultHoverColor: theme.searchButtonActiveTextColor,
                                    defaultHoverBg: theme.searchButtonActiveBgColor
                                }
                            }
                        }}
                    >
                        <Button
                            onClick={handleSubmit(onLogin)}
                            style={{
                                marginTop: '6vh',
                                height: '4vh',
                                width: '8vw',
                                fontSize: '1.1rem'
                            }}>{language.button}</Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
            <Flex vertical align='center' justify='center' style={{ marginTop: '7vh' }}>
                <Text style={{ fontSize: '1.1rem', fontWeight: 'bold', color: theme.textColor }}>{language.footerText}</Text>
                <Link to='/register' style={{ fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'underline', color: '#35A2EC' }}>{language.footerLink}</Link>
            </Flex>
        </form>
    )
}

export default LoginPage