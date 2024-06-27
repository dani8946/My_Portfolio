import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Contact = () => {
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    const validateForm = (formData) => {
        const errors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.get("name")) {
            errors.name = "Name can't be blank";
        }

        const email = formData.get("email");
        if (!email) {
            errors.email = "Email can't be blank";
        } else if (!emailRegex.test(email)) {
            errors.email = "Invalid email format";
        }

        if (!formData.get("message")) {
            errors.message = "Message can't be blank";
        }

        return errors;
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);

        const errors = validateForm(formData);
        setTouched({
            name: true,
            email: true,
            message: true
        });

        if (Object.keys(errors).length > 0) {
            setErrors(errors);
            return;
        }

        formData.append("access_key", "80bd826a-4217-4889-b9e1-1f85f523e7a7");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        }).then((res) => res.json());

        if (res.success) {
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully",
                icon: "success"
            });
        }
    };

    const handleBlur = (e) => {
        setTouched({
            ...touched,
            [e.target.name]: true
        });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setTouched({
            ...touched,
            [name]: true
        });

        setErrors((prevErrors) => {
            const newErrors = { ...prevErrors };
            if (name === 'email') {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!value) {
                    newErrors.email = "Email can't be blank";
                } else if (!emailRegex.test(value)) {
                    newErrors.email = "Invalid email format";
                } else {
                    delete newErrors.email;
                }
            } else {
                if (!value) {
                    newErrors[name] = `${name.charAt(0).toUpperCase() + name.slice(1)} can't be blank`;
                } else {
                    delete newErrors[name];
                }
            }
            return newErrors;
        });
    };

    return (
        <div className="max-w-[1200px] mx-auto sm:py-20 p-5" id="contact">
            <div className="text-center">
                <h2 className="text-4xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    Contact Me
                </h2>
            </div>
            <div className="max-w-[800px] mx-auto">
                <div className="mt-6 bg-[#161616] rounded-xl">
                    <div className="p-10">
                        <form onSubmit={onSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-4">
                                <div>
                                    <div className="mt-2.5 relative input-box">
                                        <input 
                                            type="text" 
                                            name="name" 
                                            placeholder="Your Name"
                                            className="bg-[#161616] w-full px-4 py-4 text-white placeholder-gray-400
                                            border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 field"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {touched.name && errors.name && <div className="error-txt text-red-600">{errors.name}</div>}
                                    </div>
                                </div>
                                <div>
                                    <div className="mt-2.5 relative input-box">
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="Your Email"
                                            className="bg-[#161616] w-full px-4 py-4 text-white placeholder-gray-400
                                            border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 field"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        />
                                        {touched.email && errors.email && <div className="error-txt-email text-red-600">{errors.email}</div>}
                                    </div>
                                </div>
                                <div className="sm:col-span-2 input-box">
                                    <div className="mt-2.5">
                                        <textarea 
                                            name="message" 
                                            placeholder="Your Message"
                                            className="bg-[#161616] w-full px-4 py-4 text-white placeholder-gray-400
                                            border border-gray-700 rounded-md focus:outline-none focus:border-pink-600 field-message" 
                                            rows="5"
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                        ></textarea>
                                        {touched.message && errors.message && <div className="error-txt text-red-600">{errors.message}</div>}
                                    </div>
                                </div>
                                <div className="sm:col-span-2">
                                    <button type="submit" className="text-xl w-full p-4 mt-2 font-semibold text-white 
                                    rounded-md bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
