
export interface User {
    picture?: string;
    username?: string;
    description?: string;
    email?: string;
}

export interface SearchProps {
    placeholder?: string;
    onSearch: (value: string) => void;
}

export enum Colors {
    red = "bg-red-600 hover:bg-red-700",
    green = "bg-green-600 hover:bg-green-700",
    purple = "bg-purple-600 hover:bg-purple-700",
    sky = "bg-sky-600 hover:bg-sky-700",
    orange = "bg-orange-600 hover:bg-orange-700"

}

export type ButtonsType = {
    children?: string;
    color?: Colors.green;
    className?: string;  // Opcional si quieres permitir que los componentes se usen sin ella
    // ...y cualquier otra prop que quieras pasar
}
