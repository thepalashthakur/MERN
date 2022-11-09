let output = []

var component = (... par1) => {

output = [...par1];

return output.filter((a) => a.includes('Script'));

}

console.log(component('E56', 'JavaScript', 'CoffeeScript', 'React'));