const Spiderman = require('./../app/spiderman')

describe("Prueba de unidad para la clase Spiderman", () => {
    test('Crea un objeto spiderman', () => {

      //Aqui se escribe el codigo que se quiere usar tal cual
      //En este caso se instancia un objeto de Spiderman con la informacion
      
      const andrewGarfield = new Spiderman("Spiderman Sony",31,"Andrew Garfield",2, "Sony")
      

      //Validación para que el codigo funcione de la forma esperada
      expect(andrewGarfield.name).toBe("Spiderman Sony")
      expect(andrewGarfield.age).toBe(31)
      expect(andrewGarfield.actor).toBe("Andrew Garfield")
      expect(andrewGarfield.movies).toBe(2)
      expect(andrewGarfield.studio).toBe("Sony")
    });
  })