const Input = (props) =>{
    const {type,value,onChange,onClick,name,className} = props
    return (
        <input
        type = {type}
        value = {value}
        onChange = {onChange}
        onClick = {onClick}
        name = {name}
        className = {className}>
        </input>
    )
}
export default Input;