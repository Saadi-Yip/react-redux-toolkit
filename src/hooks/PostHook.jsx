import { useState } from 'react';

function UsePostData(url) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const postData = async (data) => {
        setIsLoading(true);
        setError(null);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Failed to post data');
            }
            const result = await response.json();
            return result;
        } catch (error) {
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, error, postData };

}

export default UsePostData;