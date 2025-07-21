// DigiPay Backend (Node.js with Express)

const express = require('express'); const cors = require('cors'); const bodyParser = require('body-parser'); const axios = require('axios'); require('dotenv').config();

const app = express(); const PORT = process.env.PORT || 5000;

// Middleware app.use(cors()); app.use(bodyParser.json());

const LIPIA_API = process.env.BASE_URL || 'https://lipia-api.kreativelabske.com/api'; const API_KEY = process.env.LIPIA_API_KEY || '0d1c64ac8a158e17962081b9ed9a4bfb507a073b';

// ROUTES

// Home app.get('/', (req, res) => { res.send('DigiPay Backend is running...'); });

// Initiate Payment app.post('/pay', async (req, res) => { const { phone, amount } = req.body;

try { const response = await axios.post(${LIPIA_API}/request/stk, { phone, amount, }, { headers: { Authorization: Bearer ${API_KEY}, 'Content-Type': 'application/json' } });

res.status(200).json({ success: true, data: response.data });

} catch (error) { res.status(400).json({ success: false, message: error?.response?.data?.message || 'Payment failed.' }); } });

// Check Payment Status (simulated - depends on Lipia API feature) app.post('/check-status', async (req, res) => { const { CheckoutRequestID } = req.body;

// NOTE: This assumes there’s a status endpoint try { const response = await axios.get(${LIPIA_API}/request/status/${CheckoutRequestID}, { headers: { Authorization: Bearer ${API_KEY}, } });

res.status(200).json({ success: true, data: response.data });

} catch (error) { res.status(400).json({ success: false, message: error?.response?.data?.message || 'Status check failed.' }); } });

// Start Server app.listen(PORT, () => { console.log(DigiPay Backend running on port ${PORT}); });

