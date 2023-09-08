import React from 'react'

function Basepage(props) {
    return (
        <main class="flex-1 container mx-auto py-6 lg:py-8">
            <div class="container px-6 lg:px-12 py-6 lg:py-8">
                <div class="w-full md:w-3/4 lg:w-10/12">
                    <div class="flex flex-col">
                        <h1 class="text-3xl lg:text-4xl font-bold font-sans mb-4 ml-2 lg:ml-4">
                            <var>{props.title}</var>
                        </h1>
                        <div class="flex flex-col space-y-3 lg:space-y-4">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Basepage