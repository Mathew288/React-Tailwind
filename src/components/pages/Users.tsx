import { useState } from "react";
import { Search } from "../user/UserForm";
import { UserList } from "../user/UserList";

export default function Users() {

    const [search, setSearch] = useState('');

    return (
        <div>
            <Search placeholder='Search by user' onSearch={setSearch} />
            <UserList search={search} />
        </div>
    )
}
