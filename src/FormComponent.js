import Button from "./ButtonComponent";

const FormComponent = ({ ressource, setRessource }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <Button
                buttonText="users"
                ressource={ressource}
                setRessource={setRessource}
            />
            <Button
                buttonText="posts"
                ressource={ressource}
                setRessource={setRessource}
            />
            <Button
                buttonText="comments"
                ressource={ressource}
                setRessource={setRessource}
            />
        </form>
    )
}

export default FormComponent;