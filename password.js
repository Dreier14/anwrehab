const bcryptjs = require('bcryptjs');

bcryptjs.hash('Rehab5612', 12).then(response => {
   console.log(response)
});