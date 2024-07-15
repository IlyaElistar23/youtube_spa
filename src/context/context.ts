import { createContext } from 'react'

export type LoginPageText = {
    headTitle?: string,
    mailTitle?: string,
    mailPlaceholder?: string,
    errorEmpty?: string,
    mailErrorIncorrect?: string,
    passwordTitle?: string,
    passwordErrorIncorrect?: string,
    passwordPlaceholder?: string,
    button?: string,
    footerText?: string,
    footerLink?: string
}

export type RegisterPageText = {
    headTitle?: string,
    usernameTitle?: string,
    usernamePlaceholder?: string,
    mailTitle?: string,
    mailErrorIncorrect?: string,
    mailPlaceholder?: string,
    passwordTitle?: string,
    passwordErrorIncorrect?: string,
    passwordPlaceholder?: string,
    errorEmpty?: string,
    genderTitle?: string,
    gender1?: string,
    gender2?: string,
    ageTitle?: string,
    agePlaceholder?: string,
    button?: string,
    footerText?: string,
    footerLink?: string
}

export type HeaderText = {
    search?: string,
    favorites?: string,
    logout?: string
}

export type SearchPageText = {
    title?: string,
    placeholder?: string,
    button?: string,
    videoInfo?: string,
    countInfo?: string,
}

export type FavoritesPageText = {
    title?: string,
}

export type SortParametrs = string[]

export type ModalWindowText = {
    headTitle?: string,
    requestTitle?: string,
    nameTitle?: string,
    sortTitle?: string,
    sortParametrs?: SortParametrs,
    amountTitle?: string,
    button1?: string,
    button2?: string
}

export type ThemeContextType = {
    textColor?: string,
    bgColor?: string,
    headerColor?: string,
    headerButtonColor?: string,
    placeholderColor?: string,
    defaultBorderColor?: string,
    subTitleColor?: string,
    searchButtonDefaultTextColor?: string,
    searchButtonDefaultBgColor?: string,
    searchButtonDefaultBorderColor?: string,
    searchButtonActiveTextColor?: string,
    searchButtonActiveBgColor?: string,
    searchButtonActiveBorderColor?: string
}

export type LanguageContextType = {
    login?: LoginPageText,
    register?: RegisterPageText,
    header?: HeaderText,
    search?: SearchPageText,
    favotires?: FavoritesPageText
    modal?: ModalWindowText
}

const context: ThemeContextType = {}

export const AppContext = createContext(context)