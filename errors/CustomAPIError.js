//class hai isliye pehla letter capital

class CustomAPIError extends Error{
  constructor(message,statusCode){
    super(message); //
    this.statusCode=statusCode;
  }
}

export default CustomAPIError;