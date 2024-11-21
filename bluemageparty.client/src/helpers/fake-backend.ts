export { fakeBackend };

function fakeBackend(): void {
  let users: { id: number; username: string; password: string; firstName: string; lastName: string; }[] = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
  let realFetch: typeof window.fetch = window.fetch;
  window.fetch = function (url: string, opts: RequestInit): Promise<Response> {
    return new Promise((resolve, reject) => {
      setTimeout(handleRoute, 500);

      function handleRoute(): void {
        switch (true) {
          case url.endsWith('/users/authenticate') && opts.method === 'POST':
            return authenticate();
          case url.endsWith('/users') && opts.method === 'GET':
            return getUsers();
          default:
            return realFetch(url, opts)
              .then(response => resolve(response))
              .catch(error => reject(error));
        }
      }

      function authenticate(): void {
        const { username, password }: { username: string; password: string; } = body();
        const user = users.find(x => x.username === username && x.password === password);

        if (!user) return error('Username or password is incorrect');

        return ok({
          id: user.id,
          username: user.username,
          firstName: user.firstName,
          lastName: user.lastName,
          token: 'fake-jwt-token'
        });
      }

      function getUsers(): void {
        if (!isAuthenticated()) return unauthorized();
        return ok(users);
      }

      function ok(body: any): void {
        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(body)) });
      }

      function unauthorized(): void {
        resolve({ status: 401, text: () => Promise.resolve(JSON.stringify({ message: 'Unauthorized' })) });
      }

      function error(message: string): void {
        resolve({ status: 400, text: () => Promise.resolve(JSON.stringify({ message })) });
      }

      function isAuthenticated(): boolean {
        return opts.headers && opts.headers['Authorization'] === 'Bearer fake-jwt-token';
      }

      function body(): any {
        return opts.body && JSON.parse(opts.body as string);
      }
    });
  }
}
