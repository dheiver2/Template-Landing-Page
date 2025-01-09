require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const path = require('path');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3000;
