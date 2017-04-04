export default function (module, constants) {
    let constantsObject = {};

    constants.forEach(constant => {
        constantsObject[constant] = `${module}/${constant}`;
    });

    return constantsObject;
}
