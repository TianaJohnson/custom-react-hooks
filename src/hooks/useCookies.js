import Cookies from 'js-cookie';

export const useCookies = ({ key }) => {
    const getCookie = () => Cookies.get(key);
    const setCookie = value => Cookies.set(key, value);

    return [ getCookie,setCookie ];
}