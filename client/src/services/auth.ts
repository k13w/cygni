export const singIn = (token: string) => {
    localStorage.setItem('@access-syncloud', token);
}