export default function (module, constants) {
    let constantsObject = {};

    constants.forEach(constant => {
        Object.defineProperty(constantsObject, constant, {
            value: `${module}/${constant}`,
            enumerable: true,
        });
    });

    return constantsObject;
}
