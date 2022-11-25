import React from 'react';

function Home() {
    return (
        <div class="pt-10">
            <div class="flex flex-col-reverse md:flex-row text-2xl justify-center">
                <div class="p-10 flex flex-col justify-items-end">
                    <div class="text-violet-700 font-semibold flex justify-end">treavor wills</div>
                    <p class="mt-2 text-slate-700 flex justify-end">full-stack web developer</p>
                </div>
                <div class="sm:shrink-0">
                    <img src={process.env.PUBLIC_URL + '/images/fall.png'} class="h-48 rounded-t-xl md:rounded-tl-none md:rounded-r-xl w-full object-cover md:h-full md:w-48" alt="A nice photo of Treavor"></img>
                </div>
            </div>
        </div>
    );
}

export default Home;