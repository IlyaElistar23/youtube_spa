import { Input, Button, Radio, Flex, Typography, Form, Image, ConfigProvider } from 'antd'
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons'

import { useForm, Controller } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import { useContext, useState, FC } from 'react'
import axios from 'axios'

import { AppContext } from '../../context/context'
import { RegisterPageText } from '../../context/context'


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

type RegisterPropsType = {
    language: RegisterPageText,
    messageApi: any,
    contextHolder: any,
    message: any
}

const RegisterPage: FC<RegisterPropsType> = ({ language, messageApi, contextHolder, message }) => {

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

    const onRegisterMessage = () => {
        messageApi
            .open({
                type: 'Loading',
                content: language.message.registerContent,
                duration: 2.5,
            })
            .then(() => message.success(language.message.registerSuccess, 2.5))
    }

    const onErrorRegister = () => {
        messageApi
            .open({
                type: 'loading',
                content: language.message.registerContent,
                duration: 2.5
            })
            .then(() => message.error(language.message.registerError, 2.5))
            .then(() => message.warning(language.message.registerHelp, 2.5))
    }

    const fetchReg = async (data: RegData): Promise<any> => {
        try {
            const response = await axios.post(`${process.env.REACT_APP_URL_REGISTER}/api/users/register`, data)
            await onRegisterMessage()
            navigate('/')
            reset()
            console.log(response.data)
        } catch (error: any) {
            console.log(error)
            await onErrorRegister()
        }
    }

    const onRegister = (data: RegData): void => {
        try {
            fetchReg(data)
            onRegisterMessage()
        } catch (error: any) {
            console.log(error)
        }
    }

    return (
        <>
            {contextHolder}
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
                        <Text style={{ marginTop: '3vh', fontSize: '1.1rem', fontWeight: 'bold', color: theme.textColor }}>{language.headTitle}</Text>
                        <Flex vertical style={{ marginTop: '2vh', width: '22vw' }}>
                            <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor }}>
                                {language.usernameTitle}
                            </Text>
                            <Controller
                                name='username'
                                control={control}
                                rules={{
                                    required: language.errorEmpty,
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
                                        <Input
                                            style={{
                                                height: '4vh',
                                                fontSize: '1.1rem',
                                                backgroundColor: theme.headerColor,
                                                color: theme.textColor
                                            }}
                                            placeholder={language.usernamePlaceholder}
                                            {...field}
                                        />
                                    </ConfigProvider>
                                )}
                            />
                            <Text
                                style={{
                                    fontSize: '0.9rem',
                                    color: errors.username?.message ? theme.errorsColor : theme.headerColor,
                                    paddingTop: '0.5vh'
                                }}
                            >
                                {errors.username?.message || 'Success'}
                            </Text>
                        </Flex>
                        <Flex vertical style={{ marginTop: '1vh', width: '22vw' }}>
                            <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor }}>
                                {language.mailTitle}
                            </Text>
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
                                        <Input
                                            style={{
                                                height: '4vh',
                                                fontSize: '1.1rem',
                                                backgroundColor: theme.headerColor,
                                                color: theme.textColor
                                            }}
                                            placeholder={language.mailPlaceholder}
                                            {...field}
                                        />
                                    </ConfigProvider>
                                )}
                            />
                            <Text
                                style={{
                                    fontSize: '0.9rem',
                                    color: errors.email?.message ? theme.errorsColor : theme.headerColor,
                                    paddingTop: '0.5vh'
                                }}
                            >
                                {errors.email?.message || 'Success'}
                            </Text>
                        </Flex>
                        <Flex vertical style={{ marginTop: '1vh', width: '22vw' }}>
                            <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor }}>
                                {language.passwordTitle}
                            </Text>
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
                                                colorIconHover: theme.searchButtonActiveBgColor
                                            }
                                        }}
                                    >
                                        <Password
                                            style={{
                                                height: '4vh',
                                                fontSize: '1.1rem',
                                                backgroundColor: theme.headerColor,
                                                color: theme.textColor
                                            }}
                                            placeholder={language.passwordPlaceholder}
                                            iconRender={(visible) => visible ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                            visibilityToggle={{
                                                visible: passwordVisible,
                                                onVisibleChange: setPasswordVisible
                                            }}
                                            {...field}
                                        />
                                    </ConfigProvider>
                                )}
                            />
                            <Text
                                style={{
                                    fontSize: '0.9rem',
                                    color: errors.password?.message ? theme.errorsColor : theme.headerColor,
                                    paddingTop: '0.5vh'
                                }}
                            >
                                {errors.password?.message || 'Success'}
                            </Text>
                        </Flex>
                        <Flex vertical>
                            <Flex justify='center' align='center' style={{ marginTop: '1vh', width: '30vw' }}>
                                <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor, marginRight: '12vw' }}>
                                    {language.genderTitle}
                                </Text>
                                <Controller
                                    name='gender'
                                    control={control}
                                    rules={{
                                        required: language.errorEmpty
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
                                            <ConfigProvider
                                                theme={{
                                                    components: {
                                                        Radio: {
                                                            buttonColor: theme.searchButtonDefaultTextColor,
                                                            buttonBg: theme.searchButtonDefaultBgColor,
                                                        }
                                                    }
                                                }}
                                            >
                                                <Group {...field} style={{
                                                    backgroundColor: theme.headerColor,
                                                    color: theme.textColor
                                                }}>
                                                    <Radio.Button value='male'>{language.gender1}</Radio.Button>
                                                    <Radio.Button value='female'>{language.gender2}</Radio.Button>
                                                </Group>
                                            </ConfigProvider>
                                        </ConfigProvider>
                                    )}
                                />
                            </Flex>
                            <Text
                                style={{
                                    fontSize: '0.9rem',
                                    color: errors.gender?.message ? theme.errorsColor : theme.headerColor,
                                    marginLeft: '4vw',
                                    paddingTop: '0.5vh'
                                }}
                            >
                                {errors.gender?.message || 'Success'}
                            </Text>
                        </Flex>
                        <Flex vertical style={{ marginTop: '1vh', width: '22vw' }}>
                            <Text style={{ fontSize: '0.9rem', color: theme.subTitleColor }}>
                                {language.ageTitle}
                            </Text>
                            <Controller
                                name='age'
                                control={control}
                                rules={{
                                    required: language.errorEmpty
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
                                        <Input
                                            style={{
                                                height: '4vh',
                                                fontSize: '1.1rem',
                                                backgroundColor: theme.headerColor,
                                                color: theme.textColor
                                            }}
                                            placeholder={language.agePlaceholder}
                                            {...field}
                                        />
                                    </ConfigProvider>
                                )}
                            />
                            <Text
                                style={{
                                    fontSize: '0.9rem',
                                    color: errors.age?.message ? theme.errorsColor : theme.headerColor,
                                    paddingTop: '0.5vh'
                                }}
                            >
                                {errors.age?.message || 'Success'}
                            </Text>
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
                                    onClick={handleSubmit(onRegister)}
                                    style={{
                                        marginTop: '2vh',
                                        height: '4vh',
                                        width: '12vw',
                                        fontSize: '1.1rem'
                                    }}>{language.button}</Button>
                            </ConfigProvider>
                        </Flex>
                    </Flex>
                </Flex>
                <Flex align='center' justify='center' style={{ marginTop: '7vh' }} vertical>
                    <Text style={{ fontSize: '1.1rem', fontWeight: 'bold', color: theme.textColor }}>{language.footerText}</Text>
                    <Link to='/' style={{ textDecoration: 'underline', color: theme.headerButtonColor, fontSize: '1.1rem', fontWeight: 'bold' }}>{language.footerLink}</Link>
                </Flex>
            </Form>
        </>
    )
}

export default RegisterPage