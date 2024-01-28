import { atom } from 'jotai';

const loginInfo = atom({
    login: false,
    user: '',
    menuAddress: '/login/signin',
    menuTitle: 'Log In',
});
export { loginInfo }