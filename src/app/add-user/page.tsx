"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function AddUser() {

  const router = useRouter()

  const [form,setForm] = useState({
    name:"",
    email:"",
    role:"User"
  })

  const handleSubmit = async (e:any)=>{
    e.preventDefault()

    await fetch("/api/users",{
      method:"POST",
      body:JSON.stringify(form)
    })

    router.push("/")
  }

  return (

    <div className="p-10 max-w-md">

      <h1 className="text-xl font-bold mb-6">
        Add User
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">

        <input
        placeholder="Name"
        className="border p-2 w-full"
        onChange={(e)=>setForm({...form,name:e.target.value})}
        />

        <input
        placeholder="Email"
        className="border p-2 w-full"
        onChange={(e)=>setForm({...form,email:e.target.value})}
        />

        <select
        className="border p-2 w-full"
        onChange={(e)=>setForm({...form,role:e.target.value})}
        >
          <option>User</option>
          <option>Admin</option>
        </select>

        <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Submit
        </button>

      </form>

    </div>
  )
}