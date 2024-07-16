import { ThemeContextType, LanguageContextType } from "./context";

export const engLanguage: LanguageContextType = {
    login: {
        headTitle: 'Login',
        errorEmpty: 'This field is required!',
        mailTitle: 'E-mail',
        mailErrorIncorrect: 'Incorrect E-mail!',
        mailPlaceholder: 'Enter your E-mail',
        passwordTitle: 'Password',
        passwordErrorIncorrect: "Password must be at least 8 symbol length, includes 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol!",
        passwordPlaceholder: 'Enter your password',
        button: 'Log In',
        footerText: "Don't has an account?",
        footerLink: 'Sign Up',
        message: {
            loginContent: 'Loading...',
            loginSuccess: 'Successful login!',
        }
    },
    register: {
        headTitle: 'Register',
        errorEmpty: 'This field is required!',
        usernameTitle: 'Username',
        usernamePlaceholder: 'Enter your username',
        mailTitle: 'E-mail',
        mailErrorIncorrect: 'Incorrect E-mail!',
        mailPlaceholder: 'Enter your E-mail: example@ex.com',
        passwordTitle: 'Password',
        passwordErrorIncorrect: 'Password must be at least 8 symbol length, includes 1 uppercase letter, 1 lowercase letter, 1 number and 1 symbol!',
        passwordPlaceholder: 'Enter your password: Example!1',
        genderTitle: 'Gender',
        gender1: 'Male',
        gender2: 'Female',
        ageTitle: 'Age',
        agePlaceholder: 'Enter your age',
        button: 'Sign Up',
        footerText: 'Already has an account?',
        footerLink: 'Log In',
        message: {
            registerContent: 'Loading...',
            registerSuccess: 'Successful registration!'
        }
    },
    header: {
        search: 'Search',
        favorites: 'Favorites',
        logout: 'Log Out',
        langTooltipText: 'Switch language',
        themeTooltipText: 'Switch theme'
    },
    search: {
        title: 'Search Videos',
        placeholder: 'What do you want to see?',
        button: 'Search',
        videoInfo: 'Videos on request: ',
        countText: 'Search results',
        countInfo: 'videos',
        message: 'Add request in input!'
    },
    favotires: {
        title: 'Favorites',
        emptyButton: 'Create now',
        emptyDescription: 'No data',
        favoriteItem: {
            popconfirm: {
                title: 'Deleting',
                description: 'Are you sure about deleting this favorite request?',
                okText: 'Yes',
                cancelText: 'No'
            },
            cancelMessage: 'Deleting has canceled',
            confirmMessage: 'has deleted'
        }
    },
    modal: {
        headTitle: 'Save request',
        requestTitle: 'Request',
        nameTitle: 'Name',
        sortTitle: 'Sort by',
        sortParametrs: ['Create date', 'Rating', 'Relevance', 'Video title', 'Video count on channel', 'View count'],
        amountTitle: 'Maximum amount of requests',
        button1: "Don't save",
        button2: 'Save request',
        namePlaceholder: 'Add name of request',
        addMessage: 'has added',
        editMessage: 'has changed',
        cancelMessage: 'Cancel editing'
    },


}

export const ruLanguage: LanguageContextType = {
    login: {
        headTitle: 'Вход',
        errorEmpty: 'Поле обязательно для заполнения!',
        mailTitle: 'E-mail',
        mailErrorIncorrect: 'Некорректный формат E-mail!',
        mailPlaceholder: 'Введите ваш E-mail',
        passwordTitle: 'Пароль',
        passwordErrorIncorrect: 'Пароль должен содержать по крайней мере 8 символов, включать 1 заглавную букву, 1 прописную букву, 1 число и 1 специальный символ!',
        passwordPlaceholder: 'Введите ваш пароль',
        button: 'Войти',
        footerText: "Нет аккаунта?",
        footerLink: 'Зарегистрироваться',
        message: {
            loginContent: 'Подождите...',
            loginSuccess: 'Вы успешно вошли!',
        }
    },
    register: {
        headTitle: 'Регистрация',
        errorEmpty: 'Поле обязательно для заполнения!',
        usernameTitle: 'Имя пользователя',
        usernamePlaceholder: 'Введите имя пользователя',
        mailTitle: 'E-mail',
        mailErrorIncorrect: 'Некорректный формат E-mail!',
        mailPlaceholder: 'Введите ваш E-mail',
        passwordTitle: 'Пароль',
        passwordErrorIncorrect: 'Пароль должен содержать по крайней мере 8 символов, включать 1 заглавную букву, 1 прописную букву, 1 число и 1 специальный символ!',
        passwordPlaceholder: 'Введите ваш пароль',
        genderTitle: 'Пол',
        gender1: 'Мужской',
        gender2: 'Женский',
        ageTitle: 'Возраст',
        agePlaceholder: 'Введите ваш возраст',
        button: 'Зарегистрироваться',
        footerText: 'Уже есть аккаунт?',
        footerLink: 'Войти',
        message: {
            registerContent: 'Подождите...',
            registerSuccess: 'Вы успешно зарегистрировались!'
        }
    },
    header: {
        search: 'Поиск',
        favorites: 'Избранное',
        logout: 'Выйти',
        langTooltipText: 'Переключить язык',
        themeTooltipText: 'Изменить тему'
    },
    search: {
        title: 'Поиск видео',
        placeholder: 'Что хотите посмотреть?',
        button: 'Поиск',
        videoInfo: 'Видео по запросу: ',
        countText: 'Количество результатов запроса',
        countInfo: 'видео',
        message: 'Введите запрос в поле ввода!'
    },
    favotires: {
        title: 'Избранное',
        emptyButton: 'Добавить',
        emptyDescription: 'Нет данных',
        favoriteItem: {
            popconfirm: {
                title: 'Удаление',
                description: 'Вы уверены, что хотите удалить данный избранный запрос?',
                okText: 'Да',
                cancelText: 'Нет'
            },
            cancelMessage: 'Удаление отменено',
            confirmMessage: 'удален'
        }
    },
    modal: {
        headTitle: 'Сохранить запрос',
        requestTitle: 'Запрос',
        nameTitle: 'Название',
        sortTitle: 'Сортировать',
        sortParametrs: ['По дате создания', 'По рейтингу', 'По релевантности', 'По названию', 'По количеству заруженных видео на канале', 'По количеству просмотров'],
        amountTitle: 'Максимальное количество',
        button1: "Не сохранять",
        button2: 'Сохранить',
        namePlaceholder: 'Укажите название',
        addMessage: 'добавлен',
        editMessage: 'изменен',
        cancelMessage: 'Изменение отменено'
    },

}

export const lightTheme: ThemeContextType = {
    textColor: 'black',
    bgColor: '#FAFAFA',
    headerColor: 'white',
    placeholderColor: '#00000040',
    defaultBorderColor: '#d9d9d9',
    subTitleColor: '#1717194D',
    headerButtonColor: '#35A2EC',
    errorsColor: '#7a2020',
    searchButtonDefaultTextColor: '#FAFAFA',
    searchButtonDefaultBorderColor: '#35A2EC',
    searchButtonDefaultBgColor: '#35A2EC',
    searchButtonActiveTextColor: '#35A2EC',
    searchButtonActiveBorderColor: '#35A2EC',
    searchButtonActiveBgColor: '#FAFAFA'
}

export const darkTheme: ThemeContextType = {
    textColor: 'white',
    bgColor: '#1d1d1d',
    headerColor: '#3a3a3a',
    placeholderColor: '#ffffff40',
    defaultBorderColor: '#353535',
    subTitleColor: '#bbbbbb',
    headerButtonColor: '#4bb7ff',
    errorsColor: '#d84b4b',
    searchButtonDefaultTextColor: '#35A2EC',
    searchButtonDefaultBorderColor: '#FAFAFA',
    searchButtonDefaultBgColor: '#FAFAFA',
    searchButtonActiveTextColor: '#FAFAFA',
    searchButtonActiveBorderColor: '#FAFAFA',
    searchButtonActiveBgColor: '#35A2EC'
}