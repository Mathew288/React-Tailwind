import styled from 'styled-components';
import { User } from '../../types/User';
import '/src/index.css'
import { ButtonForm } from './UserForm';

const CardUserInfo = styled.div``;
const Username = styled.h2``;
const Picture = styled.img``;
const UserDescription = styled.p``;
const UserEmail = styled.span``;

export const UserInfo: React.FC<User> = ({ picture, username, description, email }) => {
    return (
        <CardUserInfo className='max-w-[300px] min-h-[390px] mx-auto flex flex-col bg-shamrock-200
        p-7 shadow-xl shadow-black/50 rounded-3xl overflow-hidden justify-between'>

            <div>

                <div className='flex flex-col items-center justify-center'>
                    <Picture src={picture} className='m-2 rounded-full h-16 w-16'></Picture>
                    <div className="flex flex-col items-center">
                        <Username className='text-shamrock-800 font-extrabold tracking-wide'>{username}</Username>
                        <UserEmail className='text-sm text-center text-shamrock-700 mb-2 whitespace-nowrap'>
                            {email}
                        </UserEmail>

                    </div>
                </div>

                <UserDescription className='text-gray-800 text-center tracking-tight text-sm'>{description}</UserDescription>
                
            </div>

            <div>
            <div className="flex items-center justify-center">
                    <ButtonForm className="bg-shamrock-500">Enviar mensaje</ButtonForm>
                    <ButtonForm className='bg-shamrock-500'>Ver usuario</ButtonForm>

                </div>
            </div>
        </CardUserInfo>
    )
}
