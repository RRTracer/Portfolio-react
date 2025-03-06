import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {GetIsRegister} from "../API/AuthCaller.jsx";

const ProtectedRoutes = ({ element: Component, ...rest }) => {
    const navigate = useNavigate();
    const token = localStorage.getItem('authToken');
    const [isValid, setIsValid] = useState(null);
    useEffect(() => {
        if (!token) {
            navigate('/sign')
        }
        const checkToken = async () => {
            try{
                const res = await GetIsRegister(token);
                if (res.status === 200) {
                   setIsValid(true)
                }
            }catch(error){
                console.error(error);
                setIsValid(false)
            }
        }
        checkToken();
    }, [token, navigate]);

    if (isValid) {
        return <Component {...rest} />;
    } else {
        navigate('/sign');
    }

    return null;
};

ProtectedRoutes.propTypes = {
    element: PropTypes.elementType.isRequired,
};

export default ProtectedRoutes;
