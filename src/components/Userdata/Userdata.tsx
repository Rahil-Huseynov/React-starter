interface Userdata {
    name: string
}

export const Userdata : React.FC <Userdata> = (props) => {

    const {name} = props
    
    return (
        <>
            <p>{name}</p>
        </>
    )
}
