import React from "react";

export default function HeaderPhoto_2022() {
    return (
        <div className="mx-auto flex mt-10 mb-5">
            <img src={process.env.PUBLIC_URL + '/images/fall.png'} className="h-48 rounded-full w-full object-cover h-20 w-20"></img>
            <div className="flex justify-center bg-violet-50 my-auto mx-5">
                <p className="text-4xl font-bold text-slate-800">Treavor Wills</p>
            </div>
        </div>
    );
}