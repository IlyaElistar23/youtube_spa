import { useForm, Controller } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { Input, Button, Radio, Flex, Typography, Form, Image, ConfigProvider } from 'antd'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'
import { useContext, useState } from 'react'
import { AppContext } from '../../context/context'

enum Gender {
    female = 'female',
    male = 'male'
}

type RegData = {
    username: string,
    email: string,
    password: string,
    gender: Gender | string,
    age: number
}

const RegisterPage = () => {

    const [passwordVisible, setPasswordVisible] = useState(false)
    const navigate = useNavigate()
    const theme = useContext(AppContext)

    const { Text } = Typography
    const { Password } = Input
    const { Group } = Radio

    const {
        handleSubmit,
        control,
        formState: {
            errors
        },
        reset
    } = useForm<RegData>({
        mode: 'onBlur',
        defaultValues: {
            username: '',
            email: '',
            password: '',
            gender: '',
            age: 0
        }
    })

    const fetchReg = async (data: RegData): Promise<any> => {
        try {
            const response = await axios.post('https://todo-redev.herokuapp.com/api/users/register', data)
            navigate('/')
            reset()
            console.log(response.data)
        } catch (error: any) {
            console.log(error)
        }
    }

    const onRegister = (data: RegData): void => {
        try {
            fetchReg(data)
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <Form
            style={{
                backgroundColor: theme.bgColor,
                height: '100vh',
                width: '100vw',
                paddingTop: '10vh',
                paddingBottom: '10vh'
            }}>
            <Flex
                vertical
                justify='center'
                align='center'
                style={{
                    backgroundColor: theme.headerColor,
                    borderStyle: 'solid',
                    borderWidth: '1px',
                    borderRadius: '10px',
                    borderColor: '#cacaca',
                    height: '55vh',
                    width: '35vw',
                    margin: '0 32.5vw',
                    padding: '10vh 0'
                }}>
                <Flex vertical justify='center' align='center'>
                    <Image src='../sibdev-logo.png' />
                    <Text style={{ marginTop: '5vh', fontSize: '1.1rem', fontWeight: 'bold', color: theme.textColor }}>Register</Text>
                    <Flex vertical style={{ marginTop: '3vh', width: '22vw' }}>
                        <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>
                            Username:
                        </Text>
                        <Controller
                            name='username'
                            control={control}
                            rules={{
                                required: 'This field is required!',
                            }}
                            render={({ field }) => (
                                <Input
                                    style={{
                                        height: '4vh',
                                        fontSize: '1.1rem',
                                        backgroundColor: theme.headerColor,
                                        color: theme.textColor
                                    }}
                                    placeholder='Enter your username'
                                    {...field}
                                />
                            )}
                        />
                        <Text
                            style={{
                                fontSize: '0.9rem', color: '#35A2EC'
                            }}
                        >
                            {errors.username?.message}
                        </Text>
                    </Flex>
                    <Flex vertical style={{ marginTop: '3vh', width: '22vw' }}>
                        <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>
                            E-mail:
                        </Text>
                        <Controller
                            name='email'
                            control={control}
                            rules={{
                                required: 'This field is required!',
                                pattern: {
                                    value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                                    message: 'Incorrect E-mail'
                                }
                            }}
                            render={({ field }) => (
                                <Input
                                    style={{
                                        height: '4vh',
                                        fontSize: '1.1rem',
                                        backgroundColor: theme.headerColor,
                                        color: theme.textColor
                                    }}
                                    placeholder='Enter your email'
                                    {...field}
                                />
                            )}
                        />
                        <Text
                            style={{
                                fontSize: '0.9rem', color: '#35A2EC'
                            }}
                        >
                            {errors.email?.message}
                        </Text>
                    </Flex>
                    <Flex vertical style={{ marginTop: '2vh', width: '22vw' }}>
                        <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>
                            Password:
                        </Text>
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
                                <Password
                                    style={{
                                        height: '4vh',
                                        fontSize: '1.1rem',
                                        backgroundColor: theme.headerColor,
                                        color: theme.textColor
                                    }}
                                    placeholder='Enter your password'
                                    iconRender={(visible) => visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                    visibilityToggle={{
                                        visible: passwordVisible,
                                        onVisibleChange: setPasswordVisible
                                    }}
                                    {...field}
                                />
                            )}
                        />
                        <Text
                            style={{
                                fontSize: '0.9rem', color: '#35A2EC'
                            }}
                        >
                            {errors.password?.message}
                        </Text>
                    </Flex>
                    <Flex vertical>
                        <Flex justify='center' align='center' style={{ marginTop: '2vh', width: '30vw' }}>
                            <Text style={{ fontSize: '0.9rem', color: '#1717194D', marginRight: '12vw' }}>
                                Gender:
                            </Text>
                            <Controller
                                name='gender'
                                control={control}
                                rules={{
                                    required: 'This field is required!'
                                }}
                                render={({ field }) => (
                                    <ConfigProvider
                                        theme={{
                                            token: {
                                                colorBorder: '#d9d9d9',
                                                colorBgContainer: '#ffffff',
                                                colorText: 'black',
                                                colorBgContainerDisabled: 'black',
                                                colorPrimary: '#35A2EC',
                                            }
                                        }}
                                    >
                                        <Group {...field} style={{
                                            backgroundColor: theme.headerColor,
                                            color: theme.textColor
                                        }}>
                                            <Radio.Button value='male'>Male</Radio.Button>
                                            <Radio.Button value='female'>Female</Radio.Button>
                                        </Group>
                                    </ConfigProvider>
                                )}
                            />
                        </Flex>
                        <Text
                            style={{
                                fontSize: '0.9rem', color: '#35A2EC', marginLeft: '4vw'
                            }}
                        >
                            {errors.gender?.message}
                        </Text>
                    </Flex>
                    <Flex vertical style={{ marginTop: '2vh', width: '22vw' }}>
                        <Text style={{ fontSize: '0.9rem', color: '#1717194D' }}>
                            Age:
                        </Text>
                        <Controller
                            name='age'
                            control={control}
                            rules={{
                                required: 'This field is required!'
                            }}
                            render={({ field }) => (
                                <Input
                                    style={{
                                        height: '4vh',
                                        fontSize: '1.1rem',
                                        backgroundColor: theme.headerColor,
                                        color: theme.textColor
                                    }}
                                    placeholder='Enter your age'
                                    {...field}
                                />
                            )}
                        />
                        <Text
                            style={{
                                fontSize: '0.9rem', color: '#35A2EC'
                            }}
                        >
                            {errors.age?.message}
                        </Text>
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
                                onClick={handleSubmit(onRegister)}
                                style={{
                                    marginTop: '6vh',
                                    height: '4vh',
                                    width: '12vw',
                                    fontSize: '1.1rem'
                                }}>Sign Up</Button>
                        </ConfigProvider>
                    </Flex>
                </Flex>
            </Flex>
            <Flex align='center' justify='center' style={{ marginTop: '7vh' }} vertical>
                <Text style={{ fontSize: '1.1rem', fontWeight: 'bold', color: theme.textColor }}>Already has an account?</Text>
                <Link to='/' style={{ textDecoration: 'underline', color: '#35A2EC', fontSize: '1.1rem', fontWeight: 'bold' }}>Log In</Link>
            </Flex>
        </Form>
    )
}

export default RegisterPage