import React from 'react'


const UserCard = () => {

    const updateCount = React.useRef(0)
    const [enable, setEnable] = React.useState(true);

    React.useEffect(() => {
        updateCount.current += 1;
    }, [enable]);

    React.useEffect(() => {
        updateCount.current += 1;
    }, [updateCount.current]);

    console.log(updateCount.current)

    return ( 
        <div>
            <h2>Pepe</h2>
            <button
                className={enable? 'enabled' : 'disabled'}
                onClick={() => setEnable((current) => !current)}>

                    {enable? 'Disable' :  'Enable'}

            </button>
        </div>
     );
}
 
export default UserCard;