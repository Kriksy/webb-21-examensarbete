import request from "./request";

export interface SignupResponseMessage extends Response {
  message: string;
}

// Create a new user via sign up
export function signUpUser({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<SignupResponseMessage> {
  const payload = {
    username: username,
    password: password,
  };
  return request({ endpoint: "users", method: "POST", payload: payload });
}
