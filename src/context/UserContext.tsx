import { ReactNode, createContext, useState } from "react";
import { User } from '../types/User'

interface UserContextType {
    user: User;
    setUser: React.Dispatch<React.SetStateAction<User>>;

}

export const UserContext = createContext<UserContextType>({
    user: {},
    setUser: () => { },
});

type UserProviderProps = {
    children: ReactNode
}

export function UserContextProvider({ children }: UserProviderProps) {
    const [user, setUser] = useState<User>({});

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}
