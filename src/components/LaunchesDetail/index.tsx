import React from 'react'
import {useLaunchProfileQuery} from "../../generated/graphql"




export const LaunchProfileContainer = () => {
   
    const {data,error,loading} = useLaunchProfileQuery({ variables: { id: '2' } });

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error</p>

    }

    console.log(data);
    

    return (
        <div>
            <p>{data}</p>
        </div>
    )
}
