import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { BsFillEnvelopeFill } from "react-icons/bs";

function Footer() {
    return (
        <div class="bg-violet-200 fixed bottom-0 right-0 left-0 flex flex-col pt-2 rounded-md m-2">
            <div class="flex flex-wrap justify-center">
                <a class="mx-3" href='https://www.linkedin.com/in/treavorwills/' target="_blank">
                    <FaLinkedin size="3em" color="black" title="Linkedin icon link to Treavor's Linkedin profile" />
                </a>
                <a class="mx-3" href='https://github.com/treavorwills' target="_blank">
                    <FaGithub size="3em" color="black" title="Github icon link to Treavor's Github profile" />
                </a>
                <a class="mx-3" href='https://github.com/treavorwills' target="_blank">
                    <BsFillEnvelopeFill size="3em" color="black" title="Envelop icon link to email Treavor" />
                </a>
            </div>
            <div class="flex justify-center flex-wrap">
                <p class="">Created and Designed by Treavor Wills | 2022</p>
            </div>
        </div>
    );
}

export default Footer;