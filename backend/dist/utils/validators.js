import { body, validationResult } from "express-validator";
export const validate = (validations) => {
    return async (req, res, next) => {
        for (let validation of validations) {
            const result = await validation.run(req);
            if (!result.isEmpty()) {
                break;
            }
        }
        const errors = validationResult(req);
        // if barabar
        if (errors.isEmpty()) {
            return next();
        }
        // cant process the entity
        return res.status(422).json({ errors: errors.array() });
    };
};
export const sigupValidator = [
    body("name").notEmpty().withMessage("Name is Required"),
    body("email").trim().isEmail().withMessage("Email is Required"),
    body("password").trim().isLength({ min: 6 }).withMessage("Password should contain at least 6 characters"),
];
//# sourceMappingURL=validators.js.map