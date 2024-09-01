import Cookies from 'js-cookie';
import { redirect } from "next/navigation";
const handleLogout = () => {
    /* Clear Cookeas */
    Cookies.remove('token', { path: '/' });
    Cookies.remove('user', { path: '/' });
    redirect('/login');
};