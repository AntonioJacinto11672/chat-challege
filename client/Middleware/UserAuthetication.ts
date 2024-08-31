import { GetServerSideProps } from 'next';
import cookies from 'js-cookie';

export const getServerSideProps: GetServerSideProps = async (context) => {
    
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

