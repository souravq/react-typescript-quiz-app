import React from 'react'

type Userprops = {
    // name:string; 
    // age: number;
    // isRegistered: boolean;
    // lang: string[];
    // user: {
    //     name: string;
    //     age: number;
    //     isRegistered: boolean;
    //     lang: string[];
    // }
    // users: {
    //     name: string;
    //     age: number;
    //     isRegistered: boolean;
    // }[]
    users: ({
        id: number;
        name: string;
        age: number;
        isRegistered: boolean;
        lang: string[];
    } | {
        id: number;
        name: string;
        age: number;
        isRegistered: boolean;
        lang?: undefined;
    })[]
};

  

const User = ({ users }: Userprops) => {
    console.log(users);
    
  return (
    <>
     {
        users.map((data,index)=>{
            return(
                    <div style={{border:"2px solid tomato", textAlign:"center"}} key={index}>
                        <h1>{data.name}</h1>
                        <h2>{data.age}</h2>
                        <h4>{data.isRegistered}</h4>
                        <p>{data.lang}</p>
                    </div>
                
            )

        })
    }
    </>
    
  )
}

export default User