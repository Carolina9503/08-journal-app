


export const fileUpload = async ( file ) => {

    const cloudUrl = 'https://api.cloudinary.com/v1_1/dpbsgpbcy/upload';

    const formData = new FormData();
    formData.append('upload_preset', 'react-journal');
    formData.append('file', file);

    try {
        //en la resp vamos a tener todo lo que responda a Claudinary
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData 
        });
        
        if ( resp.ok) {
            const cloudResp = await resp.json();
            return cloudResp.secure_url;            
        }else {
            throw await resp.json();
        }
        
    } catch (err) {
        throw err;       
    }

    //return url de la imagen


}