import { useEffect, useState } from 'react';
import { LinkedinLogo, GithubLogo } from "@phosphor-icons/react"
import { useParams } from 'react-router-dom';
import { api } from '../lib/api';
export function Card() {
  const [userInfo, setUserInfo] = useState(null);
  const { slug } = useParams();



  useEffect(() => {
    async function handleFetchUserInfo() {
      try {
        const response = await api.get(`/user/${slug}`);

        const { name, githubUrl, linkedinUrl, history, imageUrl } = response.data;

        console.log(imageUrl)
        setUserInfo({ name, githubUrl, linkedinUrl, history, imageUrl });
      } catch (error) {
        console.log(error);
      }
    }
    handleFetchUserInfo();
  }, []);

  // if (!userInfo) return <></>

  return (
    <div className="overflow-hidden">
      <h2 className="flex items-center  text-green text-6xl m-20 ">Hello, my name is {userInfo?.name}</h2>
      <div className="bg-gray2 text-gray4 p-10 w-screen flex items-center md:flex-wrap md:flex-col-reverse">
        <div className="">
          <h1 className="text-gray4 text-4xl uppercase">My history</h1>
          <p className="mr-8 mt-8 text-justify"> {userInfo?.history}
          </p>
        </div>
        <img className="md:mb-4 border-2 border-green rounded-md" src={userInfo?.imageUrl} alt="" />
      </div>

      <div className="w-full flex justify-center mt-10 gap-10 ">
        <a href={userInfo?.githubUrl} target="_blank" rel="noopener" className=" w-64 h-12 border-2 border-green text-green flex justify-center items-center gap-2 hover:bg-green hover:text-white focus:bg-green focus:text-white mb-20 rounded-md"> <GithubLogo size="32" /> Github</a>
        <a href={userInfo?.linkedinUrl} target="_blank" rel="noopener" className=" w-64 h-12 border-2 border-green text-green flex justify-center items-center gap-2 hover:bg-green hover:text-white focus:bg-green focus:text-white mb-20 rounded-md"> <LinkedinLogo size="32" /> LinkedIn</a>
      </div>
    </div>
  );
}