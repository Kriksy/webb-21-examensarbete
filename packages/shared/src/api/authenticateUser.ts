import request from "./request";

interface AuthResponseMessage extends Response {
  token: string;
}

// Authenticates user with username and password
export function authenticateUser({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<AuthResponseMessage> {
  const payload = {
    username,
    password,
  };
  return request({ endpoint: "users/auth", method: "POST", payload: payload });
}
