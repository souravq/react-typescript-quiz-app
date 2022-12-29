import React from 'react'

type UserEnumProps = {status:"waiting" | "success" | "pending"};
export const UserEnum = ({status}: UserEnumProps) => {
    if(status==="pending"){
        return (
            <div>
                <div>{status}</div>
                Data is Loading!!!
            </div>
        )
    }else if(status==="success"){
        return (
            <div>
                <div>{status}</div>
                Data is Successfully Loaded!!!
            </div>
        )

    }else{
        return (
            <div>
                <div>{status}</div>
                Data not Loaded!!!
            </div>
            
          )

    }
  
}
