

export const formatDate = (date:any) => {

    const dateObj = new Date(date);


  const months = [
    'enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'
  ];


  const day = dateObj.getUTCDate(); 
  const month = months[dateObj.getUTCMonth()]; 
  const year = dateObj.getUTCFullYear();


  return `${day} de ${month} ${year}`;

}

