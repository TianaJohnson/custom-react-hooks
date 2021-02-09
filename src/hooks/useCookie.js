import Cookies from 'js-cookie';

const useCookies = ({ key }) => {
    const getCookie = () => Cookies.get(key);
    const setCookie = () => Cookies.set(key, value);
}