export var defaultCalendar = {
    sameDay: '[Hoy a las] LT',
    nextDay: '[Mañana a] LT',
    nextWeek: 'dddd [at] LT',
    lastDay: '[Ayer a las] LT',
    lastWeek: '[Last] dddd [at] LT',
    sameElse: 'L',
};

import isFunction from '../utils/is-function';

export function calendar(key, mom, now) {
    var output = this._calendar[key] || this._calendar['sameElse'];
    return isFunction(output) ? output.call(mom, now) : output;
}
