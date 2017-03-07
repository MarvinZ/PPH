export class LoginResponse {
    constructor(
    public ResponseStatus:ResponseStatus,
   public  ResponseAgentInfo:ResponseAgentInfo
    ){}

}

export class  ResponseStatus { //shared accross all methods of the API
        constructor(
  public  Status: string,
  public  ResponseMethod: string,
 public   ResultDateTime: string
     ){}
}


export class  ResponseAgentInfo {
        constructor(
 public   Agent:string,
 public   IdAgent: number
     ){}
}