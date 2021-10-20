export type ButtonProps = {
    text?: string; // O "?" tornará a propriedade opcional
    number?: number;
    numberArray?: Array<number>; //
    stringArray?: Array<string>; //É possível definir arrays de duas formas
    stringArray2?: string[];
    children?: string; //children acessa todo conteúdo dentro das tags, como um elemento filho.
}

export function Button(props: ButtonProps){

    // const text = props.text

    return (
        <button>{props.text}</button>
    )
}

