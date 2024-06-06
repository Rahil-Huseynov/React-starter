interface Paragraph {
    name: string
}

export const Paragraph : React.FC <Paragraph> = (props) => {

    const {name} = props
    
    return (
        <>
            <p>{name}</p>
        </>
    )
}
