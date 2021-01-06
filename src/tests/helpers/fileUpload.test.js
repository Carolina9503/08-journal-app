import cloudinary from 'cloudinary';
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({ 
    cloud_name: 'dpbsgpbcy', 
    api_key: '188865773858331', 
    api_secret: 'jzwcYmNeRYJLr1z5HH96oHDDi6Y' 
});



describe('pruebas en mi funcion cargar archivo en fileUpload', () => {


   test('debe de cargar un archivo y retornar un url', async(done) => {

        const resp = await fetch('https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png') 
        const blob = await resp.blob();

        const file = new File([ blob ], 'foto.png');
        const url = await fileUpload(file);

        // console.log(url);

        expect( typeof url ).toBe('string');

        //Borrar imagen por ID
        const segments = url.split('/');// console.log(segments)
        const imageId = segments[ segments.length-1 ].replace('.png','');// console.log(imageId);
        
        cloudinary.v2.api.delete_resources(imageId, {}, () => {
            done();
        });
   });

   test('debe de retornar un error', async() => {

        const file = new File([], 'foto.png');
        const url = await fileUpload(file);

        expect( url ).toBe(null);
    })
    
})
