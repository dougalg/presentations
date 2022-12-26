export interface AddPizzaButtonProps {
    addPizza: () => void;
};

export const AddPizzaButton = (props: AddPizzaButtonProps): React.ReactElement => {
    return <button onClick={props.addPizza}>
        Add Pizza
    </button>;
}