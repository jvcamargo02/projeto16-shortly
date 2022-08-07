import schemaTemplate from "../schemas/schemaTemplate.js"

export function template (req, res, next){
    
    const templateValidation = schemaTemplate.validate()

    next()
}