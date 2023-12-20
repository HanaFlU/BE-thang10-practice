const person = {
    name: "Le Van A",
    age: 40,
    height: 175,
    country: "Viet Nam",
    designation: "UI Developer",
  };
  // In ra:
  // name : Le Van A
  // country : Viet Nam
  // designation : UI Developer
  // ----------
  
  const technology = {
    name: "JavaScipt",
    version: 6,
    purpose: "Scripting language for Web",
    developer: "Netscape Corporation",
  };
  // In ra:
  // name : JavaScipt
  // purpose : Scripting language for Web
  // developer : Netscape Corporation
  // ----------


  function showStringProperties(a){
   for(let key in a){
    if(typeof a[key] == "string"){
        console.log(key + ":" + a[key]);
    }
   }
  }
  showStringProperties(person);