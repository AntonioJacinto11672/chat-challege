'use client'
import CButton from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import Link from "next/link";
import { useState } from "react";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import { api } from "@/service/api.service";






export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false)


  //console.log("Usera teste", userTeste)

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<FieldValues>({
    defaultValues: {
      email: '',
      hashedPassword: ''
    }
  })

  const router = useRouter()




  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    //setIsLoading(true)
    console.log(data)
    const toastId = toast.loading('Carregando...');

    try {

      // ...



      const result = await api.post("/login", {
        email: data.email,
        hashedPassword: data.hashedPassword
      })


      console.log("Entrou .... >>>> O Result front-end", result)




      if (result?.data) {
        console.log("Mostrando o erro 2", result)
        toast.dismiss(toastId);
        toast.success("Login Feito com Sucesso!")

        return
      }


      toast.success("Login Feito com Sucesso")
      toast.dismiss(toastId)

      router.replace('/')

    } catch (error) {
      console.log("O erro está aqui", error)
      toast.error('Falha ao efetuar o login.')
      toast.dismiss(toastId);
      setIsLoading(false)
    }
  }


  return (
    <>
      <div className="">
        <div className="content-center flex flex-col">

          <Heading title="Log in to your account" center />
        </div>

        <div className=" mx-auto md:w-1/2 lg:w-1/2  sm:w-full my-10 bg-white dark:bg-slate-800 p-16 shadow-lg rounded-lg">

          <CButton outline label="Continue with Google" icon={FcGoogle} small onClick={() => { }} />
          <hr className="bg-slate-300 w-full h-px my-5" />

          <form action="" onSubmit={handleSubmit(onSubmit)}>

            <div className="">

              <div>
                <div className="my-2 block">
                  <Label htmlFor="email1" value="Your email" />
                </div>
                <Controller
                  name="email"
                  control={control}
                  rules={{
                    required: "email is  required!",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Is not valid email"
                    }

                  }}
                  render={({ field }) => <TextInput className="dark:bg-slate-500" type="email" placeholder="exemple@chats.com" {...field}


                    color={`${errors.email && 'failure'}`}
                    helperText={
                      errors.email &&
                      <>

                        <span className="font-medium text-sm">Oops!</span> {errors.email.message}
                      </>
                    }
                  />}
                />

              </div>
              <div>
                <div className="my-2 block">
                  <Label htmlFor="password1" value="Your password" />
                </div>
                <Controller
                  name="hashedPassword"
                  control={control}
                  rules={{
                    required: "Password is  required!",
                  }}
                  render={({ field }) => <TextInput className="" id="hashedPassword1" type="hashedPassword" placeholder="" {...field}


                    color={`${errors.hashedPassword && 'failure'}`}
                    helperText={
                      errors.hashedPassword &&
                      <>

                        <span className="font-medium text-sm">Oops!</span> {errors.hashedPassword.message}
                      </>
                    }
                  />}
                />
              </div>

            </div>

            <div>

              <div className="flex justify-between mb-2 mt-9">
                <div className="flex gap-1 ">
                  <input type="checkbox" name="" id="" className="block focus:text-blue-500 focus:outline-blue-600 focus:border focus:border-blue-600" disabled={isLoading}

                  />
                  <label htmlFor="" className="ml-1 content-center text-sm font-semibold text-black dark:text-gray-600">Remember My Password</label>
                </div>
                <p className="text-xs  text-blue-600 font-semibold  dark:font-medium ">I forgot the password?</p>
              </div>

              <div>
                <button type="submit" className={`flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
                  ${isLoading ? 'cursor-not-allowed' : ''}
                  `}>Log in</button>
              </div>


            </div>

          </form>
        </div>
        <div className="">
          <p className="text-center font-medium text-gray-600">Do you have an account? ? <span className="text-blue-600"><Link href={"/register"}>Sign up</Link></span> </p>
        </div>
      </div>
    </>
  )
}
