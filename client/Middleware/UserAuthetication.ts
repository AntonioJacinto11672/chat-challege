import { GetServerSideProps } from 'next';
import Cookies from 'Cookies';

export const getServerSideProps: GetServerSideProps = async (context) => {
    const cookies = new Cookies(context.req, context.res);
    const token = cookies.get('token');

    if (!token) {
        return {
            redirect: {
                destination: '/login',
                permanent: false,
            },
        };
    }

    // Verifique o token, por exemplo, fazendo uma chamada à API ou verificando o JWT
    // Se o token não for válido, redirecione para o login

    return {
        props: {}, // se o token for válido, renderiza a página normalmente
    };
};

const ProtectedPage = () => {
    return <div>Esta é uma página protegida </div>;
};

export default ProtectedPage;
