import React ,{memo} from 'react'

function Child() {
    console.log("component re render");
    
    return (
        <div>
            <h1>demo hook child</h1>
        </div>
    )
}
export default memo(Child);