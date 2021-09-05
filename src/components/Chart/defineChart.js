function defineChart({ type, dataSet, height, width }) {

    // Build data for a classic pie chart
    const data = {}
    
    // Labels are displayed in component, quantities are calculated to define size of each slice
    data.dataSet = dataSet;
    // data.dataSet = [
    // 	 { label : 'dogs', quantity: 140},
    // 	 { label : 'cats', quantity: 91},
    // 	 { label : 'hamsters', quantity: 88},
    // 	 { label : 'parrots', quantity: 74},
    // 	 { label : 'rabbits', quantity: 63},
    // 	 { label : 'iguanas', quantity: 50},
    // 	 { label : 'dragons', quantity: 65}
    // ]
    
    //Define the width of the svg element on the page
    data.width = width;
    
    //Define the actual height(diameter) of the pie chart, this should not be larger than the width
    data.height = height;
    
    
    if(type === 'pie') {
        // Colors for each slice
        data.colors = ["blue", "orange", "purple", 'green', 'red', "yellow", 'lemonChiffon'];
        //Define a class for the svg element for styling
        data.arcClass = 'arc';
    } else {
        //Set margins for bar graph within svg element
        data.margins = {top: 20, right: 20, bottom: 70, left: 40};
  
        //Define label of y-axis
        data.yAxisLabel = 'My Money!';

        // Define tick intervals for y-axis
        data.ticks = 10;
        
        //Define a class for the svg element for styling
        data.barClass = 'bar';
    }

    
    /* EXAMPLE CSS
    .arc text {
      font: 14px sans-serif;
      text-anchor: middle;
    }
    .arc path {
      stroke: #fff;
    }
    */
   return data;
}

export default defineChart;