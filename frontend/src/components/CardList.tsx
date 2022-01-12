import React, { useEffect, useState } from "react"
import { instance } from "../apiClient"

export interface USER {
  id?: number
  name: string
  username: string
  email: string
  address: {
    street: string
    suite: string
    city: string
    zipcode: string
    geo: {
      lat: string
      lng: string
    }
  }
  phone: string
  website: string
  company: {
    name: string
    catchPhrase: string
    bs: string
  }
}

const CardList: React.FC = () => {
  const [users, setUsers] = useState<USER[]>([])
  useEffect(() => {
    instance.get("users").then((res) => {
      setUsers(res.data)
    })
  }, [])
  return <div>this is card list.</div>
}

export default CardList
