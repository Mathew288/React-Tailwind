import data from '../../data/Users.json'
import { UserInfo } from './UserInfo';


type UserList = {search:string}
export  function UserList({search}:UserList) {
    const filteredUsers = data.filter(d=>d.username.toLowerCase().includes(search.toLowerCase()))

    return (
        <div className='grid grid-cols-1 gap-4 items-center justify-center
                sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {filteredUsers.map(user=>{
                return <UserInfo username={user.username}
                description={user.description} email={user.email} picture={user.urlImage} key={user.id}></UserInfo>
            })}
        </div>
    )
}
