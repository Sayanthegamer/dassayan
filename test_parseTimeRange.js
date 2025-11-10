// Quick smoke test for parseTimeRange and parseTimeString from renderer.js
// Run with: node test_parseTimeRange.js

function parseTimeString(timeStr, baseDate) {
  const match = timeStr.match(/(\d{1,2}):(\d{2})\s*([APM]{2})/i);
  if (!match) return null;
  let [, h, m, period] = match;
  h = Number(h);
  m = Number(m);
  if (period.toUpperCase() === 'PM' && h !== 12) h += 12;
  if (period.toUpperCase() === 'AM' && h === 12) h = 0;
  const date = new Date(baseDate);
  date.setHours(h, m, 0, 0);
  return date;
}

function parseTimeRange(timeStr, baseDate) {
  if (timeStr.includes('onwards')) return [null, null];
  const rangeMatch = timeStr.match(/(\d{1,2}:\d{2})(?:\s*([APM]{2}))?\s*[–-]\s*(\d{1,2}:\d{2})\s*([APM]{2})/i);
  if (rangeMatch) {
    let [, startTime, startPeriod, endTime, endPeriod] = rangeMatch;
    if (!startPeriod) {
      const [startHour] = startTime.split(':').map(Number);
      const [endHour] = endTime.split(':').map(Number);
      if (endPeriod.toUpperCase() === 'PM') {
        if (startHour === 12) startPeriod = 'PM';
        else if (startHour > endHour) startPeriod = 'AM';
        else startPeriod = 'PM';
      } else if (endPeriod.toUpperCase() === 'AM') {
        if (startHour === 12) startPeriod = 'AM';
        else if (startHour > endHour) startPeriod = 'PM';
        else startPeriod = 'AM';
      } else {
        startPeriod = endPeriod;
      }
    }
    const start = parseTimeString(startTime + ' ' + startPeriod, baseDate);
    const end = parseTimeString(endTime + ' ' + endPeriod, baseDate);
    return [start, end];
  }
  const singleMatch = timeStr.match(/(\d{1,2}:\d{2})\s*([APM]{2})/i);
  if (singleMatch) {
    const timePoint = parseTimeString(singleMatch[1] + ' ' + singleMatch[2], baseDate);
    return [timePoint, new Date(timePoint.getTime() + 30 * 60000)];
  }
  return [null, null];
}

const base = new Date('2025-11-10T00:00:00');
const tests = [
  '9:30 - 11:00 AM',
  '11:30 - 1:30 PM',
  '2:00 PM - 4:30 PM',
  '12:00 - 1:00 PM',
  '11:30 - 1:30 AM',
  '6:00 AM - 8:00 AM',
  'onwards',
  '3:00 PM'
];

for (const t of tests) {
  const [s,e] = parseTimeRange(t, base);
  console.log('\nTest:', t);
  console.log(' Start:', s ? s.toString() : null);
  console.log(' End  :', e ? e.toString() : null);
}
