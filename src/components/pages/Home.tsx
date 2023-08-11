export default function Home() {
    return (
        <div className="h-screen w-100% flex flex-col items-center">
            <main className="flex flex-col bg-bg-programming 
            h-fit w-[90%] bg-center bg-cover rounded-xl justify-center p-11">
                <h1 className="font-extrabold text-white text-center text-3xl mt-5 [text-shadow:2px 2px #000]">Home</h1>
                <div className="m-6 backdrop-filter backdrop-blur-sm bg-white/30 p-5 rounded-lg shadow-2xl shadow-black">
                    <p className="text-gray-900 text-center">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum id necessitatibus beatae quia voluptate similique nostrum fugiat laboriosam assumenda esse error adipisci, architecto sapiente consequatur placeat earum inventore veniam suscipit.
                    </p>

                </div>

            </main>
        </div>

    )
}
