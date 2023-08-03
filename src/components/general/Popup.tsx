import { FC, ReactElement } from 'react';

type PopupProps = {
    title: string;
    content: string | ReactElement;
    isVisible: boolean;
    handleClose: () => void;
}

const Popup: FC<PopupProps> = ({title, content, isVisible, handleClose}) => {
    if (!isVisible) {
        return null;
    }

    return (
        <div className='fixed z-10 inset-0 flex items-center justify-center'>
            <div className='absolute inset-0 bg-gray-500 opacity-75'></div>
            <div className='p-4 bg-white rounded-lg shadow-md w-full max-w-md z-50'>
                <h3 className='text-lg leading-6 font-medium text-gray-900'>
                    {title}
                </h3>
                <div className='mt-2'>
                    {typeof content === "string" ? <p>{content}</p> : content}
                </div>
                <div className='mt-4'>
                    <button onClick={handleClose} type='button' className='inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm'>
                        Cerrar
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Popup;
