import React from 'react';

export default function Resume() {

    return (
        <div class="flex flex-col mx-auto mt-5 pb-20">
            <div class="mx-auto flex mb-5">
                <img src={process.env.PUBLIC_URL + '/images/fall.png'} class="h-48 rounded-full w-full object-cover h-20 w-20"></img>
                <div class="flex justify-center bg-violet-50 my-auto">
                    <p class="text-4xl font-bold text-slate-800">Treavor Wills</p>
                </div>
            </div>
            <div class="mx-auto">
                <iframe src="https://drive.google.com/file/d/1F7RhIAIzLFN91HUsElVM5TQtI6nFoWx0/preview" width="640" height="640" allow="autoplay"></iframe>
            </div>
        </div>
    );
}
