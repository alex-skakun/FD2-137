import { displayUserName, getUserName } from './utils.js';
import { Example } from './Example.js';

const userName = getUserName();
const example = new Example();

displayUserName(userName);
