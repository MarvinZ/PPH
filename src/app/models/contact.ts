export interface IContact {
  name: string
  email: string
  phone: number
  message: string
}

export class ContactusResponse{
  constructor(
    public Status:string,
    public ResponseMethod: string,
    public ResultDateTime: string
  ){}
}