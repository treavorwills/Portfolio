import React from 'react';
import Footer_2022 from "./Footer_2022";
import NavBar_2022 from "./NavBar_2022";

function Home_2022() {
    return (
        <>
        <div className="navigation-2022">
        <NavBar_2022 />
      </div>
        <div className="pt-10">
            <div className="flex flex-col-reverse md:flex-row text-2xl justify-center">
                <div className="p-10 flex flex-col justify-items-end">
                    <div className="text-violet-700 font-semibold flex justify-end">treavor wills</div>
                    <p className="mt-2 text-slate-700 flex justify-end">full-stack web developer</p>
                </div>
                <div className="sm:shrink-0">
                    <img src={process.env.PUBLIC_URL + '/images/fall.png'} className="h-48 rounded-t-xl md:rounded-tl-none md:rounded-r-xl w-full object-cover md:h-full md:w-48" alt="A nice photo of Treavor"></img>
                </div>
            </div>
        </div>
        <div className="footer">
        <Footer_2022 />
      </div>
        </>
    );
}

export default Home_2022;