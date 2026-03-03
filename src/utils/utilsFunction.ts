export function getDates() {
  const today = new Date();
  const tempDates = [];
  for (let i = -3; i <= 3; i++) {
    const d = new Date();
    d.setDate(today.getDate() + i);
    const day = d
      .toLocaleDateString("en-US", { weekday: "short" })
      .toUpperCase();
    const date = d
      .toLocaleDateString("en-US", { day: "2-digit", month: "short" })
      .toUpperCase();
    tempDates.push({ day, date, offset: i });
  }
  return tempDates;
}
