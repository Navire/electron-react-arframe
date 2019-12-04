const express = require('express');
const hid = require('hid');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());

const data = Buffer.alloc(7);
const devices = hid.enumerate(
	5730, // vid
	24291, // pid
);

const device = devices.length === 0 ? null : hid.open_path(devices[0].path);

const result = [[6], [6], [6]];

const updateResult = (resp, index, end) => {
	for (let i = 0; i <= end; i++) {
		result[index][i] = resp[index].data[i] ? resp[index].data[i] : result[index][i];
	}
};

if (device) {
	setInterval(() => {
		const bytes = hid.read(device, data);
		const resp = [{ data: {} }, { data: {} }, { data: {} }];
		switch (data[0]) {
			case 1:
				resp[0].data = data.filter((item, index) => index !== 0);
				updateResult(resp, 0, 5);
				break;
			case 2:
				resp[1].data = data.filter((item, index) => index !== 0);
				updateResult(resp, 1, 5);
				break;
			default:
				resp[2].data = data.filter((item, index) => index !== 0);
				updateResult(resp, 2, 2);
		}
	}, 1000);
}

app.get('/api/blocks', (req, res) => {
	res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
	res.send(result[0].concat(result[1]).concat(result[2]));
});

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Listening on port ${port}`));
