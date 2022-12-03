import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';


function Contact() {

  // Creating state variables for email, message and name
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');
  const [formMessage, setFormMessage] = useState('');


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

    alert(`Thanks for your message, ${user}!`);

    setUser('');
    setMessage('');
    setEmail('');
    setFormMessage('');
  };

  return (
    <div>
      <section class="text-gray-700 body-font relative">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-col text-center w-full mb-12">
            <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Contact Me
            </h1>
            <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
              I appreciate jokes, job leads, and opportunities to learn and improve!
            </p>
            <p class="text-red-600 mt-2">{formMessage}</p>
          </div>
          <div class="lg:w-1/2 md:w-2/3 mx-auto">
            <div class="flex flex-wrap -m-2">
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label for="name" class="leading-7 text-sm text-gray-600">
                    Name
                  </label>
                  <input value={user} name="user" type="user" onChange={handleInputChange} placeholder="Jo Nathan"
                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-1/2">
                <div class="relative">
                  <label
                    for="email"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Email
                  </label>
                  <input value={email} name="email" placeholder="email@something.com" type="email" onChange={handleInputChange}
                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div class="p-2 w-full">
                <div class="relative">
                  <label
                    for="message"
                    class="leading-7 text-sm text-gray-600"
                  >
                    Message
                  </label>
                  <textarea value={message} name="message" type="message" onChange={handleInputChange}
                    class="w-full bg-gray-100 rounded border border-gray-300 focus:border-indigo-500 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div class="p-2 w-full">
                <button type="button" onClick={handleFormSubmit} class="flex mx-auto text-white bg-emerald-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Send
                </button>

              </div>
              <div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a class="text-indigo-500">treav.wills@gmail.com</a>
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
    </div>
  );
}

export default Contact;