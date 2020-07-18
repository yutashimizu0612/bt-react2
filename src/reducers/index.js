import { combineReducers } from 'redux';
import contact from './contact';
import currentQuestion from './currentQuestion';

export default combineReducers({ contact, currentQuestion });
