import { QuestionMode } from '@app/models/enums';
import type { Question } from '@app/models/interfaces';

export const questions: Question[] = [
	{
		id: 'XWRRGfJGWXmrpK6_Y-Q8j',
		title: 'Question One?',
		config: {
			mode: QuestionMode.SINGLE,
			correctID: 'vF17pQj9wJNKKe7kPSrfH',
			options: [
				{
					id: 'vF17pQj9wJNKKe7kPSrfH',
					title: 'Answer One',
				},
				{
					id: 'CgM35lPyUG3f7Eeno2k-9',
					title: 'Answer Two',
				},
				{
					id: 'ZvOFfSc6nhrruJU-cA3yp',
					title: 'Answer Three',
				},
				{
					id: 'W81mRIytT6QzBEdAZxhE-',
					title: 'Answer Four',
				},
			],
		},
	},
	{
		id: 'yI9o1WZy-AQzvSZ3IuYK6',
		title: 'Question Two?',
		config: {
			mode: QuestionMode.MULTIPLE,
			correctIDs: ['NyNGXBQJ7zk-j6LBzJoZc', 'ABG2uemhLnjGirtf5iWES'],
			options: [
				{
					id: 'NyNGXBQJ7zk-j6LBzJoZc',
					title: 'Answer One',
				},
				{
					id: 'pU75mQV-D5SNg-2mVutX_',
					title: 'Answer Two',
				},
				{
					id: 'ABG2uemhLnjGirtf5iWES',
					title: 'Answer Three',
				},
				{
					id: 'bkFsJ9QnTAfLZ1Bt-5wZp',
					title: 'Answer Four',
				},
			],
		},
	},
	{
		id: 'tEbytaQvVFFuT-1oxm-NP',
		title: 'Question Two?',
		config: {
			mode: QuestionMode.OPEN,
		},
	},
	{
		id: 'p4yaP8W1UNoDtvd9TDd1A',
		title: 'Question Four?',
		config: {
			mode: QuestionMode.SINGLE,
			correctID: 'c-NjcFzOq4clWChYH4NeG',
			options: [
				{
					id: '19K0rVAkSBAwswc5S9w-O',
					title: 'Answer One',
				},
				{
					id: 'c-NjcFzOq4clWChYH4NeG',
					title: 'Answer Two',
				},
				{
					id: 'uEJz3gsuejGcxGdZaCfO-',
					title: 'Answer Three',
				},
				{
					id: '7ETCMkgRL4esTmCvYBf1w-',
					title: 'Answer Four',
				},
			],
		},
	},
	{
		id: 'D4N2RqhjdCeoG_u6jVMQR',
		title: 'Question Five?',
		config: {
			mode: QuestionMode.SINGLE,
			correctID: 'W3VdEEGAM-UweuXi85BLg',
			options: [
				{
					id: '2FflCIEfx5IOoUxx5qylC',
					title: 'Answer One',
				},
				{
					id: 'h1qX87iMD_5sE4sZIbWdI',
					title: 'Answer Two',
				},
				{
					id: 'W3VdEEGAM-UweuXi85BLg',
					title: 'Answer Three',
				},
				{
					id: 'g5nC3hPvq4yQ7M6odW8tC',
					title: 'Answer Four',
				},
			],
		},
	},
];
