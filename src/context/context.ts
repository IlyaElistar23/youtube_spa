import { createContext } from 'react'

export type PopConfirmType = {
    title: string,
    description: string,
    okText: string,
    cancelText: string
}

export type LoginMessageType = {
    loginContent: string,
    loginSuccess: string,
    loginError: string
}

export type RegisterMessageType = {
    registerContent: string,
    registerSuccess: string,
    registerError: string,
    registerHelp: string
}

export type FavoriteItemMessageType = {
    popconfirm: PopConfirmType,
    cancelMessage: string,
    confirmMessage: string
}

export type LoginPageText = {
    headTitle: string,
    mailTitle: string,
    mailPlaceholder: string,
    errorEmpty: string,
    mailErrorIncorrect: string,
    passwordTitle: string,
    passwordErrorIncorrect: string,
    passwordPlaceholder: string,
    button: string,
    footerText: string,
    footerLink: string,
    message: LoginMessageType,
}

export type RegisterPageText = {
    headTitle: string,
    usernameTitle: string,
    usernamePlaceholder: string,
    mailTitle: string,
    mailErrorIncorrect: string,
    mailPlaceholder: string,
    passwordTitle: string,
    passwordErrorIncorrect: string,
    passwordPlaceholder: string,
    errorEmpty: string,
    genderTitle: string,
    gender1: string,
    gender2: string,
    ageTitle: string,
    agePlaceholder: string,
    button: string,
    footerText: string,
    footerLink: string,
    message: RegisterMessageType
}

export type HeaderText = {
    search: string,
    favorites: string,
    logout: string,
    langTooltipText: string,
    themeTooltipText: string
}

export type SearchPageText = {
    title: string,
    placeholder: string,
    button: string,
    videoInfo: string,
    countText: string,
    countInfo: string,
    message: string
}

export type FavoritesPageText = {
    title: string,
    emptyButton: string,
    emptyDescription: string,
    favoriteItem: FavoriteItemMessageType
}

export type SortParametrs = string[]

export type ModalWindowText = {
    headTitle: string,
    requestTitle: string,
    nameTitle: string,
    sortTitle: string,
    sortParametrs: SortParametrs,
    amountTitle: string,
    button1: string,
    button2: string,
    namePlaceholder: string,
    addMessage: string,
    editMessage: string,
    cancelMessage: string,
    emptyField: string
}


export type ThemeContextType = {
    textColor?: string,
    bgColor?: string,
    headerColor?: string,
    headerButtonColor?: string,
    placeholderColor?: string,
    defaultBorderColor?: string,
    subTitleColor?: string,
    errorsColor?: string,
    searchButtonDefaultTextColor?: string,
    searchButtonDefaultBgColor?: string,
    searchButtonDefaultBorderColor?: string,
    searchButtonActiveTextColor?: string,
    searchButtonActiveBgColor?: string,
    searchButtonActiveBorderColor?: string
}

export type LanguageContextType = {
    login: LoginPageText,
    register: RegisterPageText,
    header: HeaderText,
    search: SearchPageText,
    favotires: FavoritesPageText
    modal: ModalWindowText,
}

const context: ThemeContextType = {}

export const AppContext = createContext(context)