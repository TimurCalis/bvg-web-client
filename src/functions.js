async function fetchData(url) {
    try {
      const response = await fetch(`https://v6.bvg.transport.rest${url}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

function formatTime(timeString) {
    const date = new Date(timeString);
    let hour = date.getHours();
    let minute = date.getMinutes();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        minute = "0" + minute;
    }
    return `${hour}:${minute}`;
}

export { fetchData, formatTime };