import moment from 'moment';

export function formatSimpleDate(date){
    return moment(date).format('MMM D');
}

export function formatFullDate(date){
    return moment(date).format('dddd, MMM D, h:mm a');
}