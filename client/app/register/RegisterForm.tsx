'use client'
import Button from "@/app/components/Button";
import Heading from "@/app/components/Heading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Controller, FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { Label, TextInput } from "flowbite-react";
import Error from "next/error";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie';


export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false)
    const [userData, setuserData] = useState<User>()

    const router = useRouter()
    const {
        register,
        handleSubmit,
        control,
        getValues,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            nickName: '',
            email: '',
            password: '',
        }


    })

    const passwordMatch = (value: any) => {
        const password_confirm = getValues("password")
        //console.log("Entrou mesmo", value, password_confirm)


        return value == password_confirm || "As Senhas Não Coincidem"
    }

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        const toastId = toast.loading("loanding...")
        setIsLoading(false)
        console.log(data)

        if (!data) {
            toast.remove("All field are missing")
        }

        setuserData({
            name: data.name + ' ' + data.nickName,
            email: data.email,
            image: null,
            hashedPassword: data.password,
        })

        if (!userData) {

        } else {
            if (userData.name || userData.hashedPassword || userData.email) {
                toast.remove("Has field empty")
            }
        }
        try {
            const response = await fetch('http://localhost:8000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: userData?.name,
                    email: userData?.email,
                    image: userData?.image,
                    hashedPassword: userData?.hashedPassword
                }),
            });

            

            if (!response.ok) {
                const errorData = await response.json();
                console.log("Aqui esta o error", errorData.message)
                toast.error(errorData.message)
                toast.dismiss(toastId)
                throw new Error(errorData.message || 'Something went wrong');

            }

            const data = await response.json();
            // Handle successful login

            //console.log(data)


            if (data && data.user && data.token) {
                // Armazenando o token em um cookie
                Cookies.set('token', data.token, {
                    expires: 1, // expira em 1 dia
                    secure: process.env.NODE_ENV === 'production', // usar secure em produção
                    sameSite: 'strict', // proteger contra CSRF
                    path: '/', // disponível para todo o site
                });


                Cookies.set('user', JSON.stringify({
                    id: data.user.id,
                    name: data.user.name,
                    email: data.user.email
                }), {
                    expires: 1,
                    secure: process.env.NODE_ENV === 'production',
                    sameSite: 'strict',
                    path: '/',
                });


            }
            toast.dismiss(toastId)
            router.replace("/")
            toast.success('Register whith successful!'); // Success message

        } catch (error: any) {
            toast.dismiss(toastId)
            console.log(" Chegou não está a mostrar nada", error.message)
            if (error.message)
                toast.error(error.message); // Display error message as a toast
        }
    }
    return (
        <>
            <div className="">


                <div className=" flex     justify-center pt-5 mb-0 items-center ">
                    <Heading title="Criar uma conta" center />
                </div>
                <div className="mx-auto md:w-10/12 lg:w-10/12 sm:w-full my-5 bg-white dark:bg-slate-800 p-14 shadow-lg rounded-lg">

                    <Button outline label="Continuar com a Google" icon={AiOutlineGoogle} small onClick={() => { }} />
                    <hr className="bg-slate-300  w-full h-px my-5" />

                    {/* Formulaários para registar */}
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        {/* block lg:grid lg:grid-cols-2 gap-2 */}
                        <div className=" block lg:grid lg:grid-cols-2 gap-2">

                            <div className="">
                                <div className="my-2 block">
                                    <Label htmlFor="name" value="Your Name" />
                                </div>
                                <Controller
                                    name="name"
                                    control={control}
                                    rules={{
                                        required: "Campo Obrigatório",
                                        minLength: {
                                            value: 3,
                                            message: "Nome deve ter Pelomenos Três Caracteres"
                                        },
                                        pattern: {
                                            value: /^[A-ZÀ-ÖØ-Þ][a-zà-öø-ÿ]+$/,
                                            message: "Somente letras, sem espaço, número ou caracteres especial"
                                        }

                                    }}
                                    render={({ field }) => <TextInput className="dark:bg-slate-500" type="text" placeholder="name" {...field}


                                        color={`${errors.name ? 'failure' : 'gray'}`}
                                        helperText={
                                            errors.name &&
                                            <>

                                                <span className="font-medium text-sm">Oops!</span> {errors.name.message}
                                            </>
                                        }
                                    />}
                                />

                            </div>

                            <div className="">
                                <div className="my-2 block">
                                    <Label htmlFor="nickName" value="Your nick Name" />
                                </div>
                                <Controller
                                    name="nickName"
                                    control={control}
                                    rules={{
                                        required: "Campo Obrigatório",


                                    }}
                                    render={({ field }) => <TextInput className="dark:bg-slate-500" type="text" placeholder="name" {...field}


                                        color={`${errors.nickName ? 'failure' : 'gray'}`}
                                        helperText={
                                            errors.nickName &&
                                            <>

                                                <span className="font-medium text-sm">Oops!</span> {errors.nickName.message}
                                            </>
                                        }
                                    />}
                                />

                            </div>

                        </div>

                        <div className="grid grid-cols-1">
                            <div className="">
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

                                        autoComplete="off"
                                        color={`${errors.email ? 'failure' : 'gray'}`}
                                        helperText={
                                            errors.email &&
                                            <>

                                                <span className="font-medium text-sm">Oops!</span> {errors.email.message}
                                            </>
                                        }
                                    />}
                                />

                            </div>

                        </div>

                        <div className=" block lg:grid lg:grid-cols-2 gap-2">


                            <div className="">
                                <div className="my-2 block">
                                    <Label htmlFor="password1" value="Your password" />
                                </div>
                                <Controller
                                    name="password"
                                    control={control}
                                    rules={{
                                        required: "password is  required!",


                                    }}
                                    render={({ field }) => <TextInput className="dark:bg-slate-500" type="password" placeholder="password" {...field}


                                        color={`${errors.password ? 'failure' : 'gray'}`}
                                        helperText={
                                            errors.password &&
                                            <>

                                                <span className="font-medium text-sm">Oops!</span> {errors.password.message}
                                            </>
                                        }
                                    />}
                                />

                            </div>


                            <div className="">
                                <div className="my-2 block">
                                    <Label htmlFor="password_confirm" value="Your conform password" />
                                </div>
                                <Controller
                                    name="password_confirm"
                                    control={control}
                                    rules={{
                                        required: "password confirm is  required!",
                                        validate: passwordMatch,
                                    }}
                                    render={({ field }) => <TextInput className="dark:bg-slate-500" type="password" placeholder="password" {...field}


                                        color={`${errors.password_confirm ? 'failure' : 'gray'}`}
                                        helperText={
                                            errors.password_confirm &&
                                            <>

                                                <span className="font-medium text-sm">Oops!</span> {errors.password_confirm.message}
                                            </>
                                        }
                                    />}
                                />

                            </div>


                        </div>

                        <div>

                            <div className="flex justify-between mb-2 mt-5">
                                <div className="flex gap-1 ">
                                    <input type="checkbox" name="" id="" className="block focus:text-blue-500 focus:outline-blue-600 focus:border focus:border-blue-600" />
                                    <label htmlFor="" className="ml-1 content-center text-sm font-semibold text-black dark:text-gray-500">Concordo com os termos</label>
                                </div>
                                <p className="text-xs  text-blue-600 font-semibold ">politica e privacidade!</p>
                            </div>

                            <div>
                                <button type="submit"
                                    className={`flex w-full justify-center rounded-md bg-blue-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600
                                 ${isLoading ? 'cursor-not-allowed' : ''}
                                `}>
                                    Registar</button>
                            </div>


                        </div>


                    </form>

                </div>
                <div className="">
                    <p className="text-center font-medium text-gray-600 ">Tens uma conta? <span className="text-blue-600"><Link href={"/login"}>Entrar</Link></span>   </p>
                </div>
            </div>
        </>
    )
}
