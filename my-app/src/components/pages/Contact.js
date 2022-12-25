import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import HeaderPhoto from '../HeaderPhoto';


function Contact() {

  // Creating state variables for email, message and name
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [showModal, setShowModal] = useState(false);


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'user') {
      setUser(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // validate email
    if (!validateEmail(email) || !user || !message) {
      // invalid or missing email
      validateEmail(email) ? setFormMessage('Please include your name and a message.') : setFormMessage('Please include a valid email address with your name and a message.')
      return;
    }

    setShowModal(true);

    setUser('');
    setMessage('');
    setEmail('');
    setFormMessage('');
  };

  return (
    <div class="flex flex-col">
      <HeaderPhoto></HeaderPhoto>
      {/* Form */}
      <section class="text-gray-700">
        <div class="container px-5 p-10 mx-auto">
          <div class="flex flex-col text-center w-full mb-10">
            <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              If you'd like to reach me quickly, please email me at <a class="text-indigo-500">treavor.wills@gmail.com</a>
            </h1>
            <br></br>
            <h2 class="sm:text-3xl text-2xl font-medium title-font text-gray-900"> Thanks for visiting!</h2>
            <p class="text-red-600">{formMessage}</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto pt-2 border-t border-slate-300">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input value={user} name="user" type="user" onChange={handleInputChange} placeholder="Jo Nathan"
                    class="w-full rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
              </div>
              <div class="p-2 w-1/2">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input value={email} name="email" placeholder="email@something.com" type="email" onChange={handleInputChange}
                    class="w-full rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
              </div>
              <div class="p-2 w-full">
                  <label
                    for="message"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea value={message} name="message" type="message" onChange={handleInputChange} class="w-full rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" placeholder='Send jokes, job leads, or opportunities to learn and improve!'
                  ></textarea>
              </div>
              <div class="p-2 mb-2 w-full">
                <button type="button" onClick={handleFormSubmit} class="flex mx-auto text-white bg-emerald-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>

              </div>
              <div class="p-2 w-full border-t border-slate-300 text-center">
                <p class="leading-normal my-5">
                  <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank">
                    Salt Lake City, UT
                  </a>
                </p>

              </div>
            </div>
          </div>
        </div>
      </section>
      {/* End Form */}

      {/* Modal */}
      {showModal ? (
        <div class="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 bg-emerald-400/10">
          <div class="rounded-lg shadow-lg flex flex-col w-full bg-violet-50 p-5 m-10">
            <p class="flex justify-center text-2xl md:text-3xl font=semibold">Thanks, {user}!</p>
            <p class="flex justify-center m-5">Your message was not sent, but functionality is coming soon!</p>
              <button type="button" onClick={() => setShowModal(false)} class="flex mx-auto text-white hover:bg-indigo-900 border-0 py-2 px-8 focus:outline-none bg-indigo-600 rounded text-lg">
                  Close
                </button>
          </div>
        </div>
      ) : null}
      {/* End Modal */}
    </div>
  );
}

export default Contact;