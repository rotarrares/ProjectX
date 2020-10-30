
export const date_format = (ISOdate) => {
    const date = new Date(ISOdate);
    return date.getDate()+'/'+date.getMonth()+'/'+date.getFullYear() + ' '+date.getHours()+':'+date.getSeconds()
}