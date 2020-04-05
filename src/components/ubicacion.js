import React from 'react'
import styled from "styled-components"

const Ubicacion = () => {

    const Location = styled.iframe`
    box-shadow: 
    inset 0 -3em 3em rgba(0,0,0,0.1), 
          0 0  0 2px rgb(255,255,255),
          0.6em 0.6em 1em rgba(0,0,0,0.9);
    `;


    return (
        <div className="text-center mt-3">
            <Location src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.5166510985114!2d-58.516526949578086!3d-34.5910948642406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb7b403de7e5d%3A0x3bd5efa145d42c2f!2sGriveo%203700%2C%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1584557733724!5m2!1ses!2sar" width="90%" height="90%" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"/>
        </div>
     );
}
 
export default Ubicacion;