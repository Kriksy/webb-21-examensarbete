const BACKEND_URL = process.env.REACT_APP_API_URL

interface AuthResponseMessage extends Response {
    token: string;
}
export interface IRequest {
    endpoint: string;
    method: string;
    payload?: any;
    authenticated?: boolean;
}

export function request({
    endpoint,
    method,
    payload,
    authenticated = true
}: IRequest): Promise<any> {
    const url = `${BACKEND_URL}/${endpoint}`;
    let headers = {
        "Content-Type": "application/json",
    }
    if (authenticated) {
        headers = getAuthHeaders()
    }
    const fetchOptions: {
        method: string,
        headers: any,
        body?: string
    } = {
        method: method,
        headers: headers,
    }
    if (method !== "GET") {
        fetchOptions.body = JSON.stringify(payload)
    }
    return fetch(url, fetchOptions).then((res) => {
        if (res.ok) {
            return res.json();
        } else {
            return res.text().then((text) => {
                throw new Error(text);
            });
        }
    });
}

interface AuthResponseMessage extends Response {
    success: boolean
    data: {
        token: string;
    }
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
    return request({
        endpoint: "api/authenticate",
        method: "POST",
        payload: payload,
        authenticated: false
    });
}

// Authenticates user with username and password
export function getMe(): Promise<{
    data: {
        id: string
        username: string
    }
}> {
    return request({
        endpoint: "api/me",
        method: "GET",
        payload: {},
    });
}

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
    return request({
        endpoint: "api/register",
        method: "POST",
        payload: payload,
    });
}

function getToken(): string {
    return localStorage.getItem("user") as string
}

function isLoggedIn() {
    return getToken().length > 0
}

export function getAuthHeaders() {
    const headers = {
        "Content-Type": "application/json",
        Authorization: "Bearer " + getToken(),
    }
    return headers
}

export function fetchPosts(query: any) {
    const url = `${process.env.REACT_APP_API_URL}/api/posts?` + new URLSearchParams(query)
    return fetch(url, {
        method: 'GET',
        headers: {
            "Content-Type": "application/json",
        },
    }).then(res => {
        return res.json()
    })
}

export const api = {
    getMe,
    authenticateUser,
    signUpUser,
    getToken,
}

export default api