import { Image, Typography, Input, Button, Flex, ConfigProvider } from 'antd'
import axios from 'axios'
import { useForm, Controller } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useContext } from 'react'
import { AppContext } from '../../context/context'

type AuthData = {
    email: string,
    password: string
}

const LoginPage = (): JSX.Element => {

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
                    <Text style={{ marginTop: '5vh', fontSize: '1.1rem', fontWeight: 'bold', color: theme.textColor }}>Login</Text>
                </Flex>
                <Flex vertical style={{ marginTop: '4%', width: '22vw' }}>
                    <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>E-mail</Text>
                    <Controller
                        name='email'
                        control={control}
                        rules={{
                            required: 'This field is required!',
                            pattern: {
                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                message: 'Incorrect E-mail!'
                            }
                        }}
                        render={({ field }) => (
                            <Input style={{
                                height: '4vh',
                                fontSize: '1.1rem',
                                backgroundColor: theme.headerColor,
                                color: theme.textColor
                            }} {...field} placeholder='Enter your email' />
                        )}
                    />
                    <Text>{errors.email?.message}</Text>
                </Flex>
                <Flex vertical style={{ marginTop: '4%', width: '22vw' }}>
                    <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>Password</Text>
                    <Controller
                        name='password'
                        control={control}
                        rules={{
                            required: 'This field is required!',
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,}$/,
                                message: 'Password must be at least 8 symbol length, includes 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol!'
                            }
                        }}
                        render={({ field }) => (
                            <Password style={{
                                height: '4vh',
                                fontSize: '1.1rem',
                                backgroundColor: theme.headerColor,
                                color: theme.textColor
                            }} {...field} placeholder='Enter your password' />
                        )}
                    />
                    <Text>{errors.password?.message}</Text>
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
                        <Button
                            onClick={handleSubmit(onLogin)}
                            style={{
                                marginTop: '6vh',
                                height: '4vh',
                                width: '8vw',
                                fontSize: '1.1rem'
                            }}>Log In</Button>
                    </ConfigProvider>
                </Flex>
            </Flex>
            <Flex vertical align='center' justify='center' style={{ marginTop: '7vh' }}>
                <Text style={{ fontSize: '1.1rem', fontWeight: 'bold', color: theme.textColor }}>Don't has an account?</Text>
                <Link to='/register' style={{ fontSize: '1.1rem', fontWeight: 'bold', textDecoration: 'underline', color: '#35A2EC' }}>Sign Up</Link>
            </Flex>
        </form>
    )
}

export default LoginPage