export const FORM_DATA = "FORM_DATA";

function enviarForm (formulario) {
    return {type: FORM_DATA, payload: formulario }
}

export default enviarForm;