

export const dateFomatter = (dateValue: any) => {
    if(!dateValue) return 'Please provide a data value'
    const date = new Date(dateValue);
  
    // Check if the parsed date is valid
    if (!isNaN(date.getTime())) {
      // Get year, month, and day
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero if needed
      const day = String(date.getDate()).padStart(2, '0'); // Add leading zero if needed
  
      // Construct the formatted date string in "YYYY-MM-DD" format
      return `${year}-${month}-${day}`;
    } else {
      return null; // Return null for invalid dates
    }
  };