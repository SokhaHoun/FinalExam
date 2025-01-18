function fetchData(): Promise<string> { 
    return new Promise((resolve) => {
      // Replace 'Sok Dara' with your full name
      setTimeout(() => resolve('Data fetched! Student Name: [Your Full Name]'), 1000); 
    });
  }
  
  async function fetchAndProcessData(): Promise<void> { 
    try {
      // Replace 'Sok Dara' with your full name
      console.log('Student Name: [Your Full Name]');
      console.log('Using async/await:');
  
      const data = await fetchData(); 
      console.log(data); 
  
      const processed: string = 'Processing data....';
      console.log(processed);
  
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  fetchAndProcessData();