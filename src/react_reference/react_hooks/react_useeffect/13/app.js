import React from 'react';
import useFetch from './usefetch';

export default function CustomApp() {

    const [isLoading,apiData,serverError] = useFetch('https://jsonplaceholder.typicode.com/posts');

    return(
        <div>
            <h2>Api Data</h2>
            {isLoading && <span>Loading....</span>}
            {!isLoading && serverError ? (
                <span>Error in fetching data..</span>
            ) : (
                <span>{JSON.stringify(apiData)}</span>
            )}

        </div>
    )

}


