const Button = ({ text, onSelect }) => {
    return (
        <button
            onClick={() => onSelect()}
        >
            {text}
        </button>
    )
}

export default Button