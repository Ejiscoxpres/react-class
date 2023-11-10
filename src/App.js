const date= new Date();
function formatDate(date) {
    return new Intl.DateTimeFormat(
        'en-Us',
        {weekday: 'long'}
    ).format(date);
}