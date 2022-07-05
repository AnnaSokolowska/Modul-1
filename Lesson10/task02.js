'use srtict';


  const getUniqueIpNumber = () => {
    const listIp = new Set(listIPv4);
    const numberUniqueIp = listIp.size;
    return numberUniqueIp;
  }

 
  console.log(getUniqueIpNumber(listIPv4));