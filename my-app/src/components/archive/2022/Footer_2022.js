import React from 'react';
import { FaGithub, FaLinkedin, FaFileAlt } from 'react-icons/fa';
import { BsFillEnvelopeFill } from "react-icons/bs";

function Footer_2022() {
    return (
        <div className="bg-emerald-500 fixed bottom-0 right-0 left-0 flex flex-col pt-2 rounded-md m-2">
            <div className="flex flex-wrap justify-center">
                <a className="mx-3" href='https://www.linkedin.com/in/treavorwills/' target="_blank">
                    <FaLinkedin size="3em" color="black" title="Linkedin icon link to Treavor's Linkedin profile" />
                </a>
                <a className="mx-3" href='https://github.com/treavorwills' target="_blank">
                    <FaGithub size="3em" color="black" title="Github icon link to Treavor's Github profile" />
                </a>
                <a className="mx-3" href='https://drive.google.com/file/d/1F7RhIAIzLFN91HUsElVM5TQtI6nFoWx0/view?usp=sharing' target="_blank">
                    <FaFileAlt size="3em" color="black" title="Envelop icon link to email Treavor" />
                </a>
            </div>
            <div className="flex justify-center flex-wrap">
                <p className="">Created and Designed by Treavor Wills | 2022</p>
            </div>
        </div>
    );
}

export default Footer_2022;