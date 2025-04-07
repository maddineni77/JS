async function getdata() {
    try {
      let res = await fetch(
        `https://api.edamam.com/api/recipes/v2/abc123xyz456?type=public&app_id=5608a376&app_key=732835992db67a9222a1074f84d2a664`,
        {
          headers: {
            'Edamam-Account-User': 'maddinenivenkatarao7@gmail.com'
          }
        }
      );
  
      
  
      let data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  
  getdata();
  