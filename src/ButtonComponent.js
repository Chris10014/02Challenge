const ButtonComponent = ({ buttonText, ressource, setRessource }) => {

    return (
        <button
            className={ buttonText === ressource ? "selected" : null }    
            type="button"
            onClick={() => setRessource(buttonText)}
        >
            {buttonText}
        </button>
    )    
}

export default ButtonComponent