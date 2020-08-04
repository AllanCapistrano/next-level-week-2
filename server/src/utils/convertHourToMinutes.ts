export default function convertHourToMinutes(time: string) {
    const [hour, minutes] = time.split(':').map(Number) /*Separando pelo ":" e tranformando em número. E separando em horas e minutos, utilizando desestruturação.*/
    const timeInMinutes = (hour * 60) + minutes;

    return timeInMinutes;
}