"use client"

import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [users, setUsers] = useState([])

  const fetchUsers = async () => {
    const res = await fetch("/api/users")
    const data = await res.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const deleteUser = async (id:number) => {
    await fetch(`/api/users/${id}`, { method: "DELETE" })
    fetchUsers()
  }

  return (
    <div className="p-10">

      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold">User Dashboard</h1>

        <Link
          href="/add-user"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Add User
        </Link>
      </div>

      <table className="w-full border">

        <thead className="bg-gray-200">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Created</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {users.map((user:any) => (
            <tr key={user.id} className="border">

              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{new Date(user.createdAt).toDateString()}</td>

              <td className="space-x-3">

                <Link
                  href={`/edit-user/${user.id}`}
                  className="text-blue-500"
                >
                  Edit
                </Link>

                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-500"
                >
                  Delete
                </button>

              </td>
            </tr>
          ))}
        </tbody>

      </table>

    </div>
  )
}