/**
 * Convert Gregorian date to Hijri date (approximate calculation)
 */
export const convertToHijri = (gregorianDate: Date): { year: number; month: number; day: number } => {
  const HIJRI_EPOCH = new Date(622, 6, 16); // July 16, 622 CE (Hijri epoch)
  const HIJRI_YEAR_LENGTH = 354.367; // Average Hijri year length in days
  
  const timeDiff = gregorianDate.getTime() - HIJRI_EPOCH.getTime();
  const daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  
  const hijriYears = Math.floor(daysDiff / HIJRI_YEAR_LENGTH);
  const remainingDays = Math.floor(daysDiff % HIJRI_YEAR_LENGTH);
  
  // Approximate month and day calculation
  const hijriMonth = Math.floor(remainingDays / 29.5) + 1;
  const hijriDay = Math.floor(remainingDays % 29.5) + 1;
  
  return {
    year: hijriYears + 1,
    month: Math.min(hijriMonth, 12),
    day: Math.min(hijriDay, 30)
  };
};

/**
 * Format Hijri date in Arabic
 */
export const formatHijriDate = (gregorianDate: Date): string => {
  const hijri = convertToHijri(gregorianDate);
  
  const hijriMonths = [
    'محرم', 'صفر', 'ربيع الأول', 'ربيع الثاني', 'جمادى الأولى', 'جمادى الثانية',
    'رجب', 'شعبان', 'رمضان', 'شوال', 'ذو القعدة', 'ذو الحجة'
  ];
  
  const monthName = hijriMonths[hijri.month - 1] || hijriMonths[0];
  
  return `${hijri.day} ${monthName} ${hijri.year} هـ`;
};