import React from 'react'
import {useLaunchesInfoQuery} from "../../generated/graphql";

export const LaunchesInfoContainer = () => {
    
    const {data,error,loading} = useLaunchesInfoQuery()

    if(loading){
        return <p>Loading...</p>
    }
    if(error){
        return <p>Error</p>

    }

    console.log(data);
    

    return (
        <div>
            <p>LaunchesInfoContainer</p>
        </div>
    )
}
