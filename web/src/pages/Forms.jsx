import React, { useState } from 'react';
import { QrCode } from "@phosphor-icons/react"
import { useForm } from "react-hook-form";
import { QRCodeComponent } from '../components/QrCodeGenerator';
import { api } from '../lib/api';

const GITHUB_DEFAULT_URL = "https://github.com";
export function Forms() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [qrCodeData, setQrCodeData] = useState(null);


  async function handleSubmitForm({
    name,
    githubUrl,
    linkedinUrl,
    history
  }) {
    if (!name || !githubUrl || !linkedinUrl || !history) {
      alert('Please fill in all information!');
      return;
    }
    try {
      const response = await api.post('/user', {
        name,
        githubUrl,
        linkedinUrl,
        history
      });
      const { url, imageUrl } = response.data;

      setQrCodeData({
        url, imageUrl
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <header className="h-48 flex flex-row justify-between items-center text-6xl text-gray4 m-10">
        <h1 className="">QR Code Image Generator </h1>
        <QrCode size="120" />
      </header>
      <form className="" onSubmit={handleSubmit(handleSubmitForm)} >
        <div className="flex flex-row m-10 md:flex-col ">
          <div className="text-4xl text-gray5 basis-1/4 bg-green flex justify-center items-center bg-green lg:rounded-l-lg md:rounded-t-lg md:p-4">Name:</div>
          <input
            placeholder="Write your name..."
            className="bg-gray5 border-2 border-gray5 hover:border-green basis-3/4 text-gray3 p-5 text-2xl focus:outline-0 focus:border-green lg:rounded-r-lg md:rounded-b-lg"
            {...register("name")}
          ></input>
        </div>

        <div className="flex flex-row m-10 md:flex-col">
          <div className="text-4xl text-gray5 basis-1/4 bg-green flex justify-center items-center bg-green lg:rounded-l-lg md:rounded-t-lg md:p-4">Github:</div>
          <input
            placeholder="Write your Github URL..."
            className="bg-gray5 border-2 border-gray5 hover:border-green basis-3/4 text-gray3 p-5 text-2xl focus:outline-0 focus:border-green lg:rounded-r-lg md:rounded-b-lg"
            {...register("githubUrl")}
          ></input>
        </div>

        <div className="flex flex-row m-10 md:flex-col">
          <div className="text-4xl text-gray5 basis-1/4 bg-green flex justify-center items-center bg-green lg:rounded-l-lg md:rounded-t-lg md:p-4">LinkedIn:</div>
          <input
            placeholder="Write your LinkedIn URL..."
            className="bg-gray5 border-2 border-gray5 hover:border-green basis-3/4 text-gray3 p-5 text-2xl focus:outline-0 focus:border-green lg:rounded-r-lg md:rounded-b-lg"
            {...register("linkedinUrl")}
          ></input>
        </div>

        <div className="flex flex-row m-10  md:flex-col">
          <div className="text-4xl text-gray5 basis-1/4 bg-green flex justify-center items-center bg-green h-20 lg:rounded-l-lg md:rounded-t-lg lg:w-1/4 md:p-4">History:</div>
          <textarea
            minlength="100"
            placeholder="Tell me more about yourself..."
            className="bg-gray5 border-2 border-gray5 hover:border-green text-gray3 p-5 text-2xl focus:outline-0 focus:border-green h-40 lg:w-3/4 lg:rounded-md md:rounded-b-lg resize-none"
            {...register("history")}
          ></textarea>
        </div>


        <div className="w-full grid justify-center justify-items-center mb-20 ">
          <button
            className=" w-64 h-12 border-2 border-green text-green flex justify-center items-center gap-2 hover:bg-green hover:text-white focus:bg-green focus:text-white mb-20 rounded-md"
            type="submit"
          ><QrCode size="32" /> Generate Image</button>


          {
            qrCodeData && <QRCodeComponent data={qrCodeData} />
          }
        </div>
      </form>
    </div>

  );
}