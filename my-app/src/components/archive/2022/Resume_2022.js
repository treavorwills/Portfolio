import React from 'react';
import HeaderPhoto_2022 from './HeaderPhoto_2022';
import NavBar_2022 from "./NavBar_2022";
import Footer_2022 from "./Footer_2022";

export default function Resume_2022() {

    return (
        <div className="flex flex-col">
            <NavBar_2022 />
            <HeaderPhoto_2022></HeaderPhoto_2022>
            <div className="mx-auto">
            <iframe src="https://drive.google.com/file/d/18Hs08orkd8ll2MtqZysQrmS13KSgeVu9/preview" width="640" height="480" allow="autoplay"></iframe>
            </div>
            <Footer_2022 />
        </div>
    );
}
