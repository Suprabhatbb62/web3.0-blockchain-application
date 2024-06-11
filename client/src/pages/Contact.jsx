require("dotenv").config();
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const URI = process.env.VITE_APP_URI_API;
function Contact() {

    const [data, setdata] = useState({
        name: "",
        email: "",
        message: ""
    });
    const navigate = useNavigate();

    const event = (e) => {
        const { name, value } = e.target;
        setdata((prevdata) => {
            return ({
                ...prevdata,
                [name]: value,
            });
        });
    }
    const submitmessage = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`${URI}/api/form/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (response.ok) {
                const resdata = await response.json();
                toast.success(resdata.message);
                setdata({ name: "", email: "", message: "" });
                // navigate("/");
            } else {
                const resdata = await response.json();
                toast.error(resdata.message);
            }
        } catch (e) {
            console.log("Send message error");
        }
    }
    return (
        <div className="min-h-screen flex justify-center items-center">
            <div className="p-5 sm:w-96 w-full flex flex-col justify-center items-center blue-glassmorphism">
                <form onSubmit={submitmessage}>
                    <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" type="text" placeholder="Enter name" name="name" value={data.name} onChange={event} />
                    <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" type="text" placeholder="Enter email" name="email" value={data.email} onChange={event} />
                    <input className="my-2 w-full rounded-sm p-2 outline-none bg-transparent text-white border-none text-sm white-glassmorphism" type="text" placeholder="Enter message" name="message" value={data.message} onChange={event} />
                    <div className="h-[1px] w-full bg-gray-400 my-2" />
                    <button
                        type="submit"
                        className="text-white w-full mt-2 border-[1px] p-2 border-[#3d4f7c] hover:bg-[#3d4f7c] rounded-full cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
