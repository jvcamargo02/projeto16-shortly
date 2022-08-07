import { urlSchema } from "../../schemas/urlSchema.js";

export function validateUrl(req, res, next) {
    const { error } = urlSchema.validate(req.body);

    if (error) {
        return res.status(422).send(error.details[0]?.message);
    }

    res.locals.url = req.body.url

    next()
}
