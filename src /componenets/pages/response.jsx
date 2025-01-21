import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Response() {
    const navigate = useNavigate();

    useEffect(() => {
        // Redirect to home page after 3 seconds
        const timeout = setTimeout(() => {
            navigate('/');  
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div>
            <h1>Thanks!</h1>
            <p>
                Danielle will respond to your message as soon as she can! You will now be redirected to main page
            </p>
        </div>
    );
}