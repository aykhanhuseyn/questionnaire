export class LoginError extends Error {
	name = 'LoginError';
	status = 0;
	constructor(message: string, status: 404 | 401) {
		super(message);
		this.status = status;
	}
}
