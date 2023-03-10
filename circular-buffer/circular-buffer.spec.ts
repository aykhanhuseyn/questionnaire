import CircularBuffer, {
	BufferFullError,
	BufferEmptyError,
} from './circular-buffer';

describe('CircularBuffer', () => {
	test('reading empty buffer should fail', () => {
		const buffer = new CircularBuffer(1);
		expect(() => buffer.read()).toThrow(BufferEmptyError);
	});

	test('can read an item just written', () => {
		const buffer = new CircularBuffer(1);
		buffer.write('1');
		expect(buffer.read()).toBe('1');
	});

	test('adding to full buffer should fail', () => {
		const buffer = new CircularBuffer(2);
		buffer.write('1');
		buffer.write('2');
		expect(() => buffer.write('3')).toThrow(BufferFullError);
	});

	test('can force write', () => {
		const buffer = new CircularBuffer(2);
		buffer.write('1');
		buffer.write('2');
		buffer.forceWrite('3');
		buffer.pop();
		expect(buffer.pop()).toBe('3');
	});
});
