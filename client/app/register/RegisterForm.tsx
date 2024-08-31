'use client'
import Button from "@/app/components/Button";
import InputField from "@/app/components/FlowbiteComponets/InputField";
import InputPhone from "@/app/components/FlowbiteComponets/InputPhone";

import Heading from "@/app/components/Heading";
import MySelectInput from "@/app/inputs/MySelectInput";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { AiOutlineGoogle } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import UserService from "../../api/services/user.service";



const userService = new UserService();


export default function RegisterForm() {
    const [isLoading, setIsLoading] = useState(false)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: '',
            phoneNumber: '',
            birthDate: '',
            gender: ''
        }


    })

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        toast.success("Criar Utilizador")
        setIsLoading(false)
        console.log(data)


        console.log("Clicou")
        try {
            const result = await userService.createClient(data.email, data.password, data.phoneNumber)

            console.log(result)

            toast.success('Account created')
            setIsLoading(true)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className="">

                <div className="content-center flex flex-col">
                    <img className="h-[100px]   my-2 object-contain"
                        src="/logo/NEtFarma.png"
                        alt="Your Company" />
                    <Heading title="Criar uma conta" center />
                </div>

                <div className="mx-auto md:w-10/12 lg:w-10/12 sm:w-full my-10 bg-white p-14 shadow-lg rounded-lg">

                    <Button outline label="Continuar com a Google" icon={AiOutlineGoogle} small onClick={() => { }} />
                    <hr className="bg-slate-300 w-full h-px my-5" />

                    {/* Formulaários para registar */}
                    <form action="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="block lg:grid lg:grid-cols-2 gap-2 ">
                            <div>
                                <InputField
                                    id="name"
                                    label="Nome"
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    message={errors.name?.message}
                                />
                            </div>
                            <div>
                                <InputField
                                    id="email"
                                    label="Email"
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    message={errors.email?.message}
                                />
                            </div>

                        </div>

                        <div className="block lg:grid lg:grid-cols-3 gap-2 ">
                            <div>
                                <InputPhone
                                    type="text"
                                    id="phoneNumber"
                                    label="Número do Telefone"
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    message={errors.phoneNumber?.message}
                                />
                            </div>
                            <div>
                                <InputField
                                    type="date"
                                    id="birthDate"
                                    label="Aniversário"
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    message={errors.birthDate?.message}
                                />
                            </div>

                            <div className="">
                                <MySelectInput id="gender" register={register} required errors={errors} label="Genero">
                                    <option value="M">Masculino</option>
                                    <option value="M">Femenino</option>
                                </MySelectInput>
                            </div>

                        </div>

                        <div className="block lg:grid lg:grid-cols-2 gap-2 ">
                            <div>
                                <InputField
                                    id="password"
                                    label="Palavra-Passe"
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    message={errors.email?.message}
                                />
                            </div>
                            <div>
                                <InputField
                                    id="passwordVerify"
                                    label="Repita a Palavra-passe"
                                    disabled={isLoading}
                                    register={register}
                                    errors={errors}
                                    required
                                    message={errors.email?.message}
                                />
                            </div>

                        </div>


                        <div>

                            <div className="flex justify-between my-2">
                                <div className="flex gap-1 ">
                                    <input type="checkbox" name="" id="" className="block focus:text-blue-500 focus:outline-blue-600 focus:border focus:border-blue-600" />
                                    <label htmlFor="" className="ml-1 content-center text-sm font-semibold text-black">Concordo com os termos</label>
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
