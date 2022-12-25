import React from "react";

export default function HeaderPhoto() {
    return (
        <div class="mx-auto flex mt-10 mb-5">
            <img src={process.env.PUBLIC_URL + '/images/fall.png'} class="h-48 rounded-full w-full object-cover h-20 w-20"></img>
            <div class="flex justify-center bg-violet-50 my-auto mx-5">
                <p class="text-4xl font-bold text-slate-800">Treavor Wills</p>
            </div>
        </div>
    );
}