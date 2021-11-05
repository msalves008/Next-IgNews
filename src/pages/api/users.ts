import { NextApiRequest, NextApiResponse } from "next"

// eslint-disable-next-line import/no-anonymous-default-export
export default(request : NextApiRequest, response : NextApiResponse) =>{
  const users = [
    {id: 1, name: "Matheus"},
    {id: 2, name: "Maria"},
    {id: 3, name: "Pedro"}
  ]
  return response.json(users)
}