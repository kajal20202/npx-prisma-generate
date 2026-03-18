"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export default function EditUser({params}:any){

 const router = useRouter()

 const [form,setForm] = useState({
   name:"",
   email:"",
   role:"User"
 })

 useEffect(()=>{
   fetch(`/api/users`)
   .then(res=>res.json())
   .then(data=>{
     const user = data.find((u:any)=>u.id==params.id)
     setForm(user)
   })
 },[])

 const updateUser = async(e:any)=>{
   e.preventDefault()

   await fetch(`/api/users/${params.id}`,{
     method:"PUT",
     body:JSON.stringify(form)
   })

   router.push("/")
 }

 return(
  <div className="p-10 max-w-md">

   <h1 className="text-xl font-bold mb-6">
   Edit User
   </h1>

   <form onSubmit={updateUser} className="space-y-4">

   <input
   value={form.name}
   className="border p-2 w-full"
   onChange={(e)=>setForm({...form,name:e.target.value})}
   />

   <input
   value={form.email}
   className="border p-2 w-full"
   onChange={(e)=>setForm({...form,email:e.target.value})}
   />

   <select
   value={form.role}
   className="border p-2 w-full"
   onChange={(e)=>setForm({...form,role:e.target.value})}
   >
     <option>User</option>
     <option>Admin</option>
   </select>

   <button className="bg-green-500 text-white px-4 py-2 rounded">
     Update
   </button>

   </form>

  </div>
 )
}