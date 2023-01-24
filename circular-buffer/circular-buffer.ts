class CircularBuffer<T extends any = any> {
	#size = 0;
	#head = 0;
	#tail = -1;
	#queue: T[] = [];

	constructor(length: number) {
		this.#queue.length = length;
		this.#queue.fill(null as T);
	}

	write(element: T) {
		if (this.#isFull()) {
			throw new BufferFullError();
		}

		this.#tailUp();
		this.#sizeUp();
		this.#queue[this.#tail] = element;
		if (this.#head == this.#tail) {
			this.#headUp();
		}
		return this;
	}

	forceWrite(element: T) {
		this.#tailUp();
		this.#sizeUp();
		this.#queue[this.#tail] = element;
		if (this.#head == this.#tail) {
			this.#headUp();
		}
		return this;
	}

	read() {
		if (this.#isEmpty()) {
			throw new BufferEmptyError();
		}
		return this.#queue[this.#head];
	}

	pop() {
		if (this.#isEmpty()) {
			throw new BufferEmptyError();
		}
		const element = this.#queue[this.#head];

		this.#headUp();
		this.#sizeDown();

		return element;
	}

	clear() {
		this.#queue.length = 0;
		this.#size = 0;
		this.#head = 0;
		this.#tail = -1;
		return this;
	}

	#sizeUp() {
		this.#size = Math.min(this.#queue.length, this.#size + 1);
		return this.#size;
	}
	#sizeDown() {
		this.#size = Math.max(0, this.#size - 1);
		return this.#size;
	}
	#isEmpty() {
		return this.#size == 0;
	}
	#isFull() {
		return this.#size == this.#queue.length;
	}
	#headUp() {
		this.#head = (this.#head + 1) % this.#queue.length;
	}
	#tailUp() {
		this.#tail = (this.#tail + 1) % this.#queue.length;
	}
}

export default CircularBuffer;

export class BufferFullError extends Error {
	constructor() {
		super('Buffer is full!');
		this.name = 'BufferFullError';
	}
}

export class BufferEmptyError extends Error {
	constructor() {
		super('Buffer is empty!');
		this.name = 'BufferEmptyError';
	}
}
