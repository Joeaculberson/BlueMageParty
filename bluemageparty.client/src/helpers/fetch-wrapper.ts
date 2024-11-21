import { useAuthStore } from '@/stores';

export const fetchWrapper: { get: (url: string, body?: any) => Promise<any>, post: (url: string, body?: any) => Promise<any>, put: (url: string, body?: any) => Promise<any>, delete: (url: string, body?: any) => Promise<any> } = {
  get: request('GET'),
  post: request('POST'),
  put: request('PUT'),
  delete: request('DELETE')
};

function request(method: string) {
  return (url: string, body?: any): Promise<any> => {
    const requestOptions: { method: string, headers: { [key: string]: string }, body?: string } = {
      method,
      headers: authHeader(url)
    };
    if (body) {
      requestOptions.headers['Content-Type'] = 'application/json';
      requestOptions.body = JSON.stringify(body);
    }
    return fetch(url, requestOptions).then(handleResponse);
  }
}

// helper functions

function authHeader(url: string): { [key: string]: string } {
  const { user } = useAuthStore();
  const isLoggedIn: boolean = !!user?.token;
  const isApiUrl: boolean = url.startsWith(import.meta.env.VITE_API_URL);
  if (isLoggedIn && isApiUrl) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
}

function handleResponse(response: Response): Promise<any> {
  return response.text().then(text => {
    const data: any = text && JSON.parse(text);

    if (!response.ok) {
      const { user, logout } = useAuthStore();
      if ([401, 403].includes(response.status) && user) {
        logout();
      }

      const error: string = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
